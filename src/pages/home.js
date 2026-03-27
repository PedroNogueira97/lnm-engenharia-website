import { icons } from '../components/icons.js';
import aboutImg from '../assets/images/about-engineers.png';
import residentialImg from '../assets/images/portfolio-residential.png';
import commercialImg from '../assets/images/portfolio-commercial.png';
import heroVideo from '../assets/hero-video.mp4';

export function renderHome() {
  return `
    <!-- HERO SCROLL WRAPPER — creates scroll-space for the pinned video -->
    <div class="hero-scroll-wrapper" id="hero-scroll-wrapper">
      <section class="hero" id="hero-pinned">
        <div class="hero-bg">
          <video
            id="hero-video"
            src="${heroVideo}"
            muted
            playsinline
            preload="auto"
          ></video>
        </div>
        <div class="hero-overlay"></div>
        <div class="hero-content container">
          <div class="hero-label">
            ${icons.star}
            Engenharia Civil de Excelencia
          </div>
          <h1 class="hero-title">Confianca e <span class="text-accent">precisao</span> em laudos tecnicos</h1>
          <p class="hero-description">Nosso compromisso e oferecer solucoes confiaveis e inovadoras em engenharia civil, com transparencia e excelencia em cada projeto.</p>
          <div class="hero-actions">
            <a href="#/contato" class="btn btn-primary btn-lg" data-link>
              Solicitar Orcamento ${icons.arrowRight}
            </a>
            <a href="#/servicos" class="btn btn-outline btn-lg" data-link>
              Nossos Servicos
            </a>
          </div>
        </div>
      </section>
    </div>

    <!-- STATS -->
    <section class="stats-bar">
      <div class="container">
        <div class="stats-grid stagger">
          <div class="stat-item">
            <div class="stat-number"><span data-counter="150" data-suffix="+">0</span></div>
            <div class="stat-label">Projetos Concluidos</div>
          </div>
          <div class="stat-item">
            <div class="stat-number"><span data-counter="10" data-suffix="+">0</span></div>
            <div class="stat-label">Anos de Experiencia</div>
          </div>
          <div class="stat-item">
            <div class="stat-number"><span data-counter="100" data-suffix="%">0</span></div>
            <div class="stat-label">Clientes Satisfeitos</div>
          </div>
          <div class="stat-item">
            <div class="stat-number"><span data-counter="50" data-suffix="+">0</span></div>
            <div class="stat-label">Parceiros</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT PREVIEW -->
    <section class="about-preview">
      <div class="container">
        <div class="about-preview-grid">
          <div class="about-preview-image reveal-left">
            <img src="${aboutImg}" alt="Engenheiros analisando projetos no canteiro de obras" />
          </div>
          <div class="about-preview-content reveal-right">
            <div class="section-label">Sobre nos</div>
            <h2 class="section-title">Gestao precisa de obras e projetos</h2>
            <p>A LNM Engenharia e referencia em engenharia civil, entregando solucoes seguras e inovadoras, pautadas em transparencia, etica e comprometimento.</p>
            <p>Nossa visao e ser referencia para clientes residenciais, comerciais e corporativos.</p>
            <div class="about-features">
              <div class="about-feature-item">${icons.check} <span>Equipe altamente qualificada</span></div>
              <div class="about-feature-item">${icons.check} <span>Projetos personalizados</span></div>
              <div class="about-feature-item">${icons.check} <span>Atendimento diferenciado</span></div>
              <div class="about-feature-item">${icons.check} <span>Compromisso com prazos</span></div>
            </div>
            <a href="#/sobre" class="btn btn-outline" data-link>Conheca Mais ${icons.arrowRight}</a>
          </div>
        </div>
      </div>
    </section>

    <!-- SERVICES -->
    <section class="services-preview">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-label centered">Nossos Servicos</div>
          <h2 class="section-title" style="text-align:center">Solucoes completas em engenharia</h2>
          <p class="section-description" style="text-align:center">Oferecemos uma gama completa de servicos especializados para atender as suas necessidades em engenharia civil.</p>
        </div>

        <div class="grid-4 stagger">
          <div class="card hover-lift">
            <div class="card-icon">${icons.fileText}</div>
            <h3>Laudos Tecnicos</h3>
            <p>Emissao de laudos detalhados que garantem a seguranca e conformidade das construcoes.</p>
          </div>
          <div class="card hover-lift">
            <div class="card-icon">${icons.hardHat}</div>
            <h3>Acompanhamento</h3>
            <p>Supervisao continua para assegurar padroes tecnicos e prazos estabelecidos em sua obra.</p>
          </div>
          <div class="card hover-lift">
            <div class="card-icon">${icons.building}</div>
            <h3>Projetos Estruturais</h3>
            <p>Desenvolvimento de projetos estruturais seguros e economicamente viaveis.</p>
          </div>
          <div class="card hover-lift">
            <div class="card-icon">${icons.clipboard}</div>
            <h3>Regularizacao</h3>
            <p>Apoio completo em processos de licenciamento e regularizacao de imoveis.</p>
          </div>
        </div>

        <div style="text-align:center;margin-top:var(--space-12)" class="reveal">
          <a href="#/servicos" class="btn btn-primary" data-link>Ver todos os servicos ${icons.arrowRight}</a>
        </div>
      </div>
    </section>

    <!-- PORTFOLIO PREVIEW -->
    <section class="portfolio-preview">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-label centered">Portfolio</div>
          <h2 class="section-title" style="text-align:center">Projetos que fazem a diferenca</h2>
          <p class="section-description" style="text-align:center">Conheca alguns dos nossos projetos de destaque, evidenciando inovacao, tecnica e resultados de qualidade.</p>
        </div>

        <div class="portfolio-grid stagger">
          <div class="portfolio-card">
            <img src="${residentialImg}" alt="Residencial Vila Nova" />
            <div class="portfolio-card-overlay"></div>
            <div class="portfolio-card-content">
              <div class="portfolio-card-category">Residencial</div>
              <div class="portfolio-card-title">Residencial Vila Nova</div>
              <div class="portfolio-card-desc">Execucao eficiente garantindo seguranca e conformidade normativa.</div>
            </div>
          </div>
          <div class="portfolio-card">
            <img src="${commercialImg}" alt="Banco Sicredi" />
            <div class="portfolio-card-overlay"></div>
            <div class="portfolio-card-content">
              <div class="portfolio-card-category">Comercial</div>
              <div class="portfolio-card-title">Banco Sicredi</div>
              <div class="portfolio-card-desc">Execucao eficiente garantindo seguranca e conformidade normativa.</div>
            </div>
          </div>
        </div>

        <div style="text-align:center;margin-top:var(--space-12)" class="reveal">
          <a href="#/portfolio" class="btn btn-outline" data-link>Ver Portfolio Completo ${icons.arrowRight}</a>
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
            <a href="tel:+5514996061557" class="btn btn-outline btn-lg">Ligue Agora ${icons.phone}</a>
          </div>
        </div>
      </div>
    </section>
  `;
}
