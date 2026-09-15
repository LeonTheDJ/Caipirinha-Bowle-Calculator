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

    let html = `<a href="${homePath}" class="nav-link ${!activeId ? 'active' : ''}">← Zur Übersicht</a>`;

    COCKTAILS_DATA.forEach(cocktail => {
        const file = cocktail.filename || `${cocktail.id}.html`;
        const href = `${basePath}${file}`;
        const isActive = cocktail.id === activeId;
        html += `<a href="${href}" class="nav-link ${isActive ? 'active' : ''}">${cocktail.name}</a>`;
    });

    navElem.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', renderNavbar);
