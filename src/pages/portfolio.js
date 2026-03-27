import { icons } from '../components/icons.js';
import residentialImg from '../assets/images/portfolio-residential.png';
import commercialImg from '../assets/images/portfolio-commercial.png';
import heroImg from '../assets/images/hero-engineering.png';

export function renderPortfolio() {
  return `
    <!-- PAGE HEADER -->
    <section class="page-header">
      <div class="container">
        <div class="page-header-content reveal">
          <div class="section-label">Portfolio</div>
          <h1>Projetos que fazem a <span class="gradient-text">diferenca</span></h1>
          <p>Conheca alguns dos nossos projetos de destaque, evidenciando inovacao, tecnica e resultados de qualidade.</p>
        </div>
      </div>
    </section>

    <!-- FILTERS + GRID -->
    <section class="section">
      <div class="container">
        <div class="portfolio-filters reveal">
          <button class="filter-btn active" data-filter="all">Todos</button>
          <button class="filter-btn" data-filter="residencial">Residencial</button>
          <button class="filter-btn" data-filter="comercial">Comercial</button>
          <button class="filter-btn" data-filter="corporativo">Corporativo</button>
        </div>

        <div class="portfolio-full-grid stagger" id="portfolio-grid">
          <div class="portfolio-card" data-category="residencial">
            <img src="${residentialImg}" alt="Residencial Vila Nova" />
            <div class="portfolio-card-overlay"></div>
            <div class="portfolio-card-content">
              <div class="portfolio-card-category">Residencial</div>
              <div class="portfolio-card-title">Residencial Vila Nova</div>
              <div class="portfolio-card-desc">Execucao eficiente garantindo seguranca e conformidade normativa.</div>
            </div>
          </div>

          <div class="portfolio-card" data-category="comercial">
            <img src="${commercialImg}" alt="Banco Sicredi" />
            <div class="portfolio-card-overlay"></div>
            <div class="portfolio-card-content">
              <div class="portfolio-card-category">Comercial</div>
              <div class="portfolio-card-title">Banco Sicredi</div>
              <div class="portfolio-card-desc">Execucao eficiente garantindo seguranca e conformidade normativa.</div>
            </div>
          </div>

          <div class="portfolio-card" data-category="residencial">
            <img src="${heroImg}" alt="Residencial Riviera" />
            <div class="portfolio-card-overlay"></div>
            <div class="portfolio-card-content">
              <div class="portfolio-card-category">Residencial</div>
              <div class="portfolio-card-title">Residencial Riviera</div>
              <div class="portfolio-card-desc">Solucoes integradas para ambientes modernos e funcionais.</div>
            </div>
          </div>

          <div class="portfolio-card" data-category="corporativo">
            <img src="${commercialImg}" alt="Complexo Empresarial Alpha" />
            <div class="portfolio-card-overlay"></div>
            <div class="portfolio-card-content">
              <div class="portfolio-card-category">Corporativo</div>
              <div class="portfolio-card-title">Complexo Empresarial Alpha</div>
              <div class="portfolio-card-desc">Gestao completa do projeto estrutural com maxima eficiencia.</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- STATS -->
    <section class="stats-bar">
      <div class="container">
        <div class="stats-grid stagger">
          <div class="stat-item">
            <div class="stat-number"><span data-counter="150" data-suffix="+">0</span><span class="stat-suffix">+</span></div>
            <div class="stat-label">Projetos Concluidos</div>
          </div>
          <div class="stat-item">
            <div class="stat-number"><span data-counter="5" data-suffix="+">0</span><span class="stat-suffix">+</span></div>
            <div class="stat-label">Anos de Experiencia</div>
          </div>
          <div class="stat-item">
            <div class="stat-number"><span data-counter="100" data-suffix="%">0</span><span class="stat-suffix">%</span></div>
            <div class="stat-label">Clientes Satisfeitos</div>
          </div>
          <div class="stat-item">
            <div class="stat-number"><span data-counter="50" data-suffix="+">0</span><span class="stat-suffix">+</span></div>
            <div class="stat-label">Parceiros</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content reveal-scale">
          <h2>Pronto para comecar seu projeto?</h2>
          <p>Entre em contato conosco e descubra como podemos ajudar a transformar suas ideias em realidade com seguranca e excelencia.</p>
          <div class="cta-actions">
            <a href="#/contato" class="btn btn-primary btn-lg" data-link>Fale Conosco ${icons.arrowRight}</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initPortfolioFilters() {
  const filters = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.portfolio-card');

  if (!filters.length) return;

  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button
      filters.forEach(f => f.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = '';
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          requestAnimationFrame(() => {
            card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          });
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}
