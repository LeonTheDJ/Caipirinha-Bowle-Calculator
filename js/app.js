/**
 * Application Manager for Cocktail Calculator Platform
 */
document.addEventListener('DOMContentLoaded', () => {
    const overviewContainer = document.getElementById('overview-section');
    const calculatorContainer = document.getElementById('calculator-section');
    const cocktailsGrid = document.getElementById('cocktails-grid');
    const searchInput = document.getElementById('search-input');
    const backBtn = document.getElementById('back-to-overview');

    let activeCalculator = null;

    /**
     * Renders cocktail cards into grid.
     * @param {Cocktail[]} list 
     */
    function renderOverview(list) {
        if (!cocktailsGrid) return;

        cocktailsGrid.innerHTML = list.map(cocktail => `
            <a href="#${cocktail.id}" class="cocktail-card" data-id="${cocktail.id}">
                <div class="card-image-wrapper">
                    <img src="${cocktail.image}" alt="${cocktail.name}" class="card-image" />
                    <span class="card-badge">${cocktail.category}</span>
                </div>
                <div class="card-content">
                    <h3 class="card-title">${cocktail.name}</h3>
                    <p class="card-subtitle">${cocktail.subtitle}</p>
                    <p class="card-desc">${cocktail.description}</p>
                    <span class="card-btn">
                        Rezept berechnen 
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </span>
                </div>
            </a>
        `).join('');

        // Attach click events
        cocktailsGrid.querySelectorAll('.cocktail-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const id = card.getAttribute('data-id');
                showCalculator(id);
            });
        });
    }

    /**
     * Shows calculator view for selected cocktail ID.
     * @param {string} id 
     */
    function showCalculator(id) {
        const cocktail = COCKTAILS_DATA.find(c => c.id === id);
        if (!cocktail) return;

        // Hide overview, show calculator container
        if (overviewContainer) overviewContainer.style.display = 'none';
        if (calculatorContainer) {
            calculatorContainer.style.display = 'block';
            calculatorContainer.innerHTML = '';
            
            // Create back button
            const backDiv = document.createElement('div');
            backDiv.className = 'back-nav';
            backDiv.style.marginBottom = '1rem';
            backDiv.innerHTML = `
                <a href="#" id="back-link" class="nav-link" style="display:inline-flex; align-items:center; gap:0.5rem;">
                    ← Zurück zur Übersicht
                </a>
            `;
            calculatorContainer.appendChild(backDiv);

            // Container for calculator
            const calcWrapper = document.createElement('div');
            calcWrapper.id = 'active-calculator-root';
            calculatorContainer.appendChild(calcWrapper);

            // Instantiate CocktailCalculator class
            activeCalculator = new CocktailCalculator(cocktail, calcWrapper);

            // Attach back button event
            document.getElementById('back-link').addEventListener('click', (e) => {
                e.preventDefault();
                window.location.hash = '';
                showOverview();
            });
        }
    }

    /**
     * Restores overview grid view.
     */
    function showOverview() {
        if (calculatorContainer) calculatorContainer.style.display = 'none';
        if (overviewContainer) overviewContainer.style.display = 'block';
    }

    /**
     * Router function based on URL hash.
     */
    function handleRoute() {
        const hash = window.location.hash.replace('#', '');
        if (hash) {
            showCalculator(hash);
        } else {
            showOverview();
        }
    }

    // Search filter
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            const filtered = COCKTAILS_DATA.filter(c => 
                c.name.toLowerCase().includes(query) || 
                c.subtitle.toLowerCase().includes(query) || 
                c.category.toLowerCase().includes(query)
            );
            renderOverview(filtered);
        });
    }

    // Initial render
    renderOverview(COCKTAILS_DATA);
    handleRoute();

    // Window hashchange listener
    window.addEventListener('hashchange', handleRoute);
});
