/**
 * Component class to render and manage a Cocktail Calculator widget.
 */
class CocktailCalculator {
    /**
     * @param {Cocktail} cocktail - Cocktail model instance
     * @param {HTMLElement|string} container - Container element or selector
     */
    constructor(cocktail, container) {
        this.cocktail = cocktail;
        this.container = typeof container === 'string' ? document.querySelector(container) : container;
        this.currentServings = cocktail.baseServings;
        this.withAlcohol = true;
        
        if (this.container) {
            this.init();
        }
    }

    /**
     * Resolves the correct relative image path based on current window location.
     * @returns {string}
     */
    getImagePath() {
        if (!this.cocktail.image) return '';
        if (window.location.pathname.includes('/cocktails/')) {
            return '../' + this.cocktail.image;
        }
        return this.cocktail.image;
    }

    /**
     * Renders the calculator form markup and attaches event listeners.
     */
    init() {
        const imagePath = this.getImagePath();
        this.container.innerHTML = `
            <div class="calculator-card main">
                <div class="calculator-header">
                    <h2>${this.cocktail.name}</h2>
                    <p class="subtitle">${this.cocktail.subtitle}</p>
                </div>
                
                ${imagePath ? `<div class="image-wrapper"><img src="${imagePath}" alt="${this.cocktail.name}" class="cocktail-img" /></div>` : ''}
                
                <p class="description">${this.cocktail.description}</p>
                
                <form class="calculator-form" onsubmit="return false;">
                    <div class="form-group">
                        <label for="anzahl">Anzahl der gewünschten Gläser / Portionen:</label>
                        <div class="input-stepper">
                            <button type="button" class="step-btn step-down" id="btn-minus">-</button>
                            <input type="number" id="anzahl" value="${this.currentServings}" min="${this.cocktail.minServings}" max="${this.cocktail.maxServings}" />
                            <button type="button" class="step-btn step-up" id="btn-plus">+</button>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="auswahl">Variante wählen:</label>
                        <select id="auswahl">
                            <option value="Mit Alkohol" ${this.withAlcohol ? 'selected' : ''}>Mit Alkohol 🍹</option>
                            <option value="Ohne Alkohol" ${!this.withAlcohol ? 'selected' : ''}>Ohne Alkohol 🍃</option>
                        </select>
                    </div>
                </form>

                <div class="button-wrapper">
                    <button type="button" id="rechnen" class="btn btn-primary">Zutaten berechnen</button>
                </div>

                <div id="results-area" class="results-area"></div>
            </div>
        `;

        this.bindEvents();
        // Calculate initially
        this.calculateAndRender();
    }

    /**
     * Binds DOM event handlers.
     */
    bindEvents() {
        const inputField = this.container.querySelector('#anzahl');
        const selectField = this.container.querySelector('#auswahl');
        const calcBtn = this.container.querySelector('#rechnen');
        const btnMinus = this.container.querySelector('#btn-minus');
        const btnPlus = this.container.querySelector('#btn-plus');

        // Number input change & input listeners
        inputField.addEventListener('input', () => {
            this.clearErrorMessage();
        });

        // Stepper buttons
        if (btnMinus) {
            btnMinus.addEventListener('click', () => {
                let val = parseInt(inputField.value, 10) || this.cocktail.baseServings;
                if (val > this.cocktail.minServings) {
                    inputField.value = val - 1;
                    this.clearErrorMessage();
                    this.calculateAndRender();
                }
            });
        }

        if (btnPlus) {
            btnPlus.addEventListener('click', () => {
                let val = parseInt(inputField.value, 10) || this.cocktail.baseServings;
                if (val < this.cocktail.maxServings) {
                    inputField.value = val + 1;
                    this.clearErrorMessage();
                    this.calculateAndRender();
                }
            });
        }

        // Dropdown selection change
        selectField.addEventListener('change', (e) => {
            this.withAlcohol = e.target.value === 'Mit Alkohol';
            this.calculateAndRender();
        });

        // Calculate button click
        calcBtn.addEventListener('click', () => {
            this.calculateAndRender();
        });

        // Input & Select hover styling (preserving legacy index.html behavior)
        [inputField, selectField].forEach(elem => {
            if (!elem) return;
            elem.addEventListener('mouseenter', () => {
                elem.style.borderColor = '#ff4757';
            });
            elem.addEventListener('mouseleave', () => {
                elem.style.borderColor = '#2ed573';
            });
        });
    }

    /**
     * Validates input values.
     * @returns {boolean}
     */
    validate() {
        const inputField = this.container.querySelector('#anzahl');
        const glassCount = parseInt(inputField.value, 10);

        if (isNaN(glassCount) || glassCount < this.cocktail.minServings || glassCount > this.cocktail.maxServings) {
            this.showErrorMessage(`Bitte geben Sie eine Zahl zwischen ${this.cocktail.minServings} und ${this.cocktail.maxServings} ein!`);
            return false;
        }

        this.clearErrorMessage();
        this.currentServings = glassCount;
        return true;
    }

    /**
     * Displays error feedback badge under the input.
     * @param {string} msg 
     */
    showErrorMessage(msg) {
        this.clearErrorMessage();
        const inputWrapper = this.container.querySelector('#anzahl').parentElement;
        const span = document.createElement('span');
        span.id = 'info';
        span.className = 'error-msg';
        span.textContent = msg;
        inputWrapper.after(span);
    }

    /**
     * Clears error feedback badge.
     */
    clearErrorMessage() {
        const info = this.container.querySelector('#info');
        if (info) info.remove();
    }

    /**
     * Performs validation and updates results area.
     */
    calculateAndRender() {
        if (!this.validate()) return;

        const resultsArea = this.container.querySelector('#results-area');
        const ingredients = this.cocktail.getIngredientsFor(this.currentServings, this.withAlcohol);

        const listItemsHtml = ingredients.map(item => `
            <li class="zutaten zutat-item" data-name="${item.ingredient.name}">
                <span class="zutat-badge">${item.displayString}</span>
            </li>
        `).join('');

        resultsArea.innerHTML = `
            <div class="ingredients-box">
                <h3>Zutaten für ${this.currentServings} ${this.currentServings === 1 ? 'Glas' : 'Gläser'} (${this.withAlcohol ? 'Mit Alkohol' : 'Ohne Alkohol'}):</h3>
                <ul id="zutatenContainer" class="zutaten-list">
                    ${listItemsHtml}
                </ul>
            </div>
        `;

        // Interactive hover effects on dynamically added <li> items (matching original logic)
        const listItems = resultsArea.querySelectorAll('.zutaten');
        listItems.forEach(li => {
            li.addEventListener('mouseenter', () => {
                li.style.color = '#00CC00';
                li.style.listStyleType = 'disc';
            });
            li.addEventListener('mouseleave', () => {
                li.style.color = 'inherit';
                li.style.listStyleType = 'circle';
            });
        });
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = CocktailCalculator;
}
