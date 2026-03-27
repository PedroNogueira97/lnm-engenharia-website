// Styles
import './styles/variables.css';
import './styles/base.css';
import './styles/components.css';
import './styles/animations.css';
import './styles/pages.css';

import { renderNavbar, initNavbar, updateActiveLink } from './components/navbar.js';
import { renderFooter } from './components/footer.js';
import { initAnimations } from './components/animations.js';
import { initScrollVideo } from './components/scroll-video.js';
import { renderHome } from './pages/home.js';
import { renderSobre } from './pages/sobre.js';
import { renderServicos } from './pages/servicos.js';
import { renderPortfolio, initPortfolioFilters } from './pages/portfolio.js';
import { renderContato, initContactForm } from './pages/contato.js';

// Routes definition
const routes = {
    '/': { render: renderHome, title: 'Inicio', init: initScrollVideo },
    '/sobre': { render: renderSobre, title: 'Sobre' },
    '/servicos': { render: renderServicos, title: 'Servicos' },
    '/portfolio': { render: renderPortfolio, title: 'Portfolio', init: initPortfolioFilters },
    '/contato': { render: renderContato, title: 'Contato', init: initContactForm },
};

function getRoute() {
    const hash = window.location.hash.slice(1) || '/';
    return hash;
}

function navigateTo(path) {
    const pageContent = document.getElementById('page-content');

    // Fade out
    pageContent.classList.add('fade-out');

    setTimeout(() => {
        const route = routes[path] || routes['/'];

        // Update page title
        document.title = `${route.title} - LNM Engenharia | Servicos e Solucoes`;

        // Render page content
        pageContent.innerHTML = route.render();

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'instant' });

        // Fade in
        requestAnimationFrame(() => {
            pageContent.classList.remove('fade-out');
        });

        // Initialize animations after DOM update
        setTimeout(() => {
            initAnimations();
            if (route.init) route.init();
        }, 50);

        // Update active link
        updateActiveLink();
    }, 200);
}

// Initialize app
function initApp() {
    const app = document.getElementById('app');

    // Render layout
    app.innerHTML = `
    ${renderNavbar()}
    <main id="page-content"></main>
    ${renderFooter()}
  `;

    // Add grain overlay
    document.body.classList.add('grain-overlay');

    // Initialize navbar
    initNavbar();

    // Handle route changes
    window.addEventListener('hashchange', () => {
        navigateTo(getRoute());
    });

    // Handle link clicks (for smooth navigation)
    document.addEventListener('click', (e) => {
        const link = e.target.closest('[data-link]');
        if (link) {
            e.preventDefault();
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                window.location.hash = href.slice(1);
            }
        }
    });

    // Initial route
    if (!window.location.hash) {
        window.location.hash = '#/';
    }
    navigateTo(getRoute());
}

// Start the app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}
