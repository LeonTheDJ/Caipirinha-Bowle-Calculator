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

    let linksHtml = `<a href="${homePath}" class="nav-link ${!activeId ? 'active' : ''}">← Zur Übersicht</a>`;

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

document.addEventListener('DOMContentLoaded', renderNavbar);
