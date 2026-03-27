import { icons } from './icons.js';
import logoImg from '../assets/images/logo.png';

export function renderNavbar() {
  return `
    <nav class="navbar" id="navbar">
      <div class="navbar-inner">
        <a class="navbar-logo" href="#/" data-link>
          <img src="${logoImg}" alt="LNM Engenharia" class="navbar-logo-img" />
        </a>

        <div class="navbar-links">
          <a href="#/sobre" data-link>Sobre</a>
          <a href="#/portfolio" data-link>Portfolio</a>
          <a href="#/servicos" data-link>Servicos</a>
          <a href="#/contato" data-link>Contato</a>
        </div>

        <a href="#/contato" class="btn btn-primary navbar-cta" data-link>
          Solicitar Orcamento
        </a>

        <div class="mobile-toggle" id="mobile-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>

    <div class="mobile-menu" id="mobile-menu">
      <a href="#/" data-link data-mobile-link>Inicio</a>
      <a href="#/sobre" data-link data-mobile-link>Sobre</a>
      <a href="#/portfolio" data-link data-mobile-link>Portfolio</a>
      <a href="#/servicos" data-link data-mobile-link>Servicos</a>
      <a href="#/contato" data-link data-mobile-link>Contato</a>
      <a href="#/contato" class="btn btn-primary btn-lg" data-link data-mobile-link>Solicitar Orcamento</a>
    </div>
  `;
}

export function initNavbar() {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('mobile-toggle');
  const menu = document.getElementById('mobile-menu');

  // Scroll behavior
  let lastScrollY = 0;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    lastScrollY = window.scrollY;
  });

  // Mobile toggle
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    menu.classList.toggle('open');
    document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
  });

  // Close mobile menu on link click
  document.querySelectorAll('[data-mobile-link]').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('open');
      menu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Active link highlight
  updateActiveLink();
}

export function updateActiveLink() {
  const hash = window.location.hash || '#/';
  document.querySelectorAll('.navbar-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === hash || (hash === '#/' && href === '#/')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}
