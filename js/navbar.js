/**
 * Navbar component for dynamic cocktail navigation across all pages.
 */
function renderNavbar() {
    const navElem = document.querySelector('.nav-bar');
    if (!navElem || typeof COCKTAILS_DATA === 'undefined') return;

    const isSubpage = window.location.pathname.includes('/cocktails/');
    const basePath = isSubpage ? '' : 'cocktails/';
    const homePath = isSubpage ? '../index.html' : '#';

    // Current page filename check
    const currentPath = window.location.pathname;
    let activeId = '';

    const found = COCKTAILS_DATA.find(c => {
        const file = c.filename || `${c.id}.html`;
        return currentPath.endsWith(file);
    });

    if (found) {
        activeId = found.id;
    }

    let linksHtml = '';

    COCKTAILS_DATA.forEach(cocktail => {
        const file = cocktail.filename || `${cocktail.id}.html`;
        const href = `${basePath}${file}`;
        const isActive = cocktail.id === activeId;
        linksHtml += `<a href="${href}" class="nav-link ${isActive ? 'active' : ''}">${cocktail.name}</a>`;
    });

    navElem.innerHTML = `
        <button class="burger-menu-btn" aria-label="Menü öffnen" type="button">
            <span class="burger-icon">☰</span>
            <span class="burger-text">Cocktail Menü</span>
        </button>
        <div class="nav-links-container">
            ${linksHtml}
        </div>
    `;

    const burgerBtn = navElem.querySelector('.burger-menu-btn');
    if (burgerBtn) {
        burgerBtn.addEventListener('click', () => {
            const isOpen = navElem.classList.toggle('is-open');
            const icon = burgerBtn.querySelector('.burger-icon');
            if (icon) icon.textContent = isOpen ? '✕' : '☰';
        });
    }
}

/**
 * Initializes click functionality on <h1> to navigate back to the main starting page.
 */
function initTitleLink() {
    const titleElem = document.querySelector('header h1');
    if (!titleElem) return;

    titleElem.style.cursor = 'pointer';
    const isSubpage = window.location.pathname.includes('/cocktails/');

    titleElem.addEventListener('click', () => {
        if (isSubpage) {
            window.location.href = '../index.html';
        } else {
            window.location.hash = '';
            const overviewContainer = document.getElementById('overview-section');
            const calculatorContainer = document.getElementById('calculator-section');
            if (overviewContainer && calculatorContainer) {
                calculatorContainer.style.display = 'none';
                overviewContainer.style.display = 'block';
            }
        }
    });
}

/**
 * Dynamically ensures the cocktail icon favicon is present in <head>.
 */
function ensureFavicon() {
    let favicon = document.querySelector('link[rel="icon"]');
    if (!favicon) {
        favicon = document.createElement('link');
        favicon.rel = 'icon';
        document.head.appendChild(favicon);
    }
    const isSubpage = window.location.pathname.includes('/cocktails/');
    favicon.type = 'image/png';
    favicon.href = isSubpage ? '../favicon.png' : 'favicon.png';
}

document.addEventListener('DOMContentLoaded', () => {
    ensureFavicon();
    initTitleLink();
    renderNavbar();
});
