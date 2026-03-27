import { icons } from '../components/icons.js';
import aboutImg from '../assets/images/about-engineers.png';

export function renderSobre() {
  return `
    <!-- PAGE HEADER -->
    <section class="page-header">
      <div class="container">
        <div class="page-header-content reveal">
          <div class="section-label">Nossa Historia</div>
          <h1>Sobre a <span class="gradient-text">LNM Engenharia</span></h1>
          <p>Conheca nossa trajetoria de compromisso com a excelencia em engenharia civil.</p>
        </div>
      </div>
    </section>

    <!-- ABOUT STORY -->
    <section class="about-story">
      <div class="container">
        <div class="about-story-grid">
          <div class="about-story-image reveal-left">
            <img src="${aboutImg}" alt="Equipe LNM Engenharia analisando projetos" />
          </div>
          <div class="about-story-text reveal-right">
            <div class="section-label">Quem Somos</div>
            <h2 class="section-title">Especialistas em engenharia civil de confianca</h2>
            <p>A LNM Engenharia nasceu do compromisso de entregar solucoes seguras e inovadoras em engenharia civil. Somos pautados em transparencia, etica e comprometimento, sempre valorizando a qualidade e a satisfacao dos nossos clientes.</p>
            <p>Nossa equipe multidisciplinar combina experiencia tecnica com visao estrategica para transformar desafios em resultados concretos.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- MISSION / VISION -->
    <section class="mvv-section">
      <div class="container">
        <div class="section-header" style="text-align:center;margin-bottom:var(--space-12)">
          <div class="section-label centered reveal">Nosso Proposito</div>
          <h2 class="section-title reveal" style="text-align:center">Missao, Visao e Valores</h2>
        </div>
        <div class="mvv-grid stagger">
          <div class="mvv-card">
            <div class="mvv-icon">${icons.target}</div>
            <h3>Nossa Missao</h3>
            <p>Entregar solucoes de engenharia que garantam seguranca, qualidade e satisfacao total aos nossos clientes.</p>
          </div>
          <div class="mvv-card">
            <div class="mvv-icon">${icons.eye}</div>
            <h3>Nossa Visao</h3>
            <p>Ser referencia em engenharia civil na regiao, reconhecida pela excelencia e inovacao em cada projeto.</p>
          </div>
          <div class="mvv-card">
            <div class="mvv-icon">${icons.heart}</div>
            <h3>Nossos Valores</h3>
            <p>Transparencia, etica, compromisso com prazos e busca constante pela excelencia tecnica.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- VALUES GRID -->
    <section class="section">
      <div class="container">
        <div class="section-header" style="text-align:center;margin-bottom:var(--space-12)">
          <div class="section-label centered reveal">Nossos Pilares</div>
          <h2 class="section-title reveal" style="text-align:center">O que nos guia</h2>
          <p class="section-description reveal" style="text-align:center">Principios fundamentais que orientam nosso trabalho e relacionamento com clientes.</p>
        </div>

        <div class="grid-4 stagger">
          <div class="card hover-lift">
            <div class="card-icon">${icons.shield}</div>
            <h3>Seguranca</h3>
            <p>Priorizamos a seguranca em todas as etapas dos projetos, garantindo conformidade com normas tecnicas.</p>
          </div>
          <div class="card hover-lift">
            <div class="card-icon">${icons.award}</div>
            <h3>Excelencia</h3>
            <p>Buscamos a excelencia em cada entrega, superando expectativas com qualidade e precisao.</p>
          </div>
          <div class="card hover-lift">
            <div class="card-icon">${icons.target}</div>
            <h3>Compromisso</h3>
            <p>Mantemos compromisso total com nossos clientes, prazos e padroes de qualidade.</p>
          </div>
          <div class="card hover-lift">
            <div class="card-icon">${icons.eye}</div>
            <h3>Transparencia</h3>
            <p>Atuamos com total transparencia em todas as etapas, mantendo comunicacao clara e aberta.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- TIMELINE -->
    <section class="timeline-section" style="background:var(--color-bg-secondary)">
      <div class="container">
        <div class="section-header" style="text-align:center;margin-bottom:var(--space-12)">
          <div class="section-label centered reveal">Nossa Trajetoria</div>
          <h2 class="section-title reveal" style="text-align:center">Uma historia de conquistas</h2>
        </div>

        <div class="timeline stagger">
          <div class="timeline-item reveal">
            <div class="timeline-dot"></div>
            <div class="timeline-year">2020</div>
            <h3>Fundacao</h3>
            <p>Inicio das atividades da LNM Engenharia em Paranapanema-SP.</p>
          </div>
          <div class="timeline-item reveal">
            <div class="timeline-dot"></div>
            <div class="timeline-year">2021</div>
            <h3>Expansao Regional</h3>
            <p>Ampliacao da area de atuacao para toda regiao de Paranapanema.</p>
          </div>
          <div class="timeline-item reveal">
            <div class="timeline-dot"></div>
            <div class="timeline-year">2023</div>
            <h3>Novos Servicos</h3>
            <p>Incorporacao de novos servicos de laudos tecnicos especializados.</p>
          </div>
          <div class="timeline-item reveal">
            <div class="timeline-dot"></div>
            <div class="timeline-year">2024</div>
            <h3>Marco de Projetos</h3>
            <p>Celebracao de mais de 100 projetos concluidos com sucesso.</p>
          </div>
          <div class="timeline-item reveal">
            <div class="timeline-dot"></div>
            <div class="timeline-year">2025</div>
            <h3>Inovacao</h3>
            <p>Adocao de novas tecnologias para gestao de projetos e obras.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- TEAM -->
    <section class="team-section">
      <div class="container">
        <div class="section-header" style="text-align:center;margin-bottom:var(--space-12)">
          <div class="section-label centered reveal">Nosso Time</div>
          <h2 class="section-title reveal" style="text-align:center">Pessoas que fazem acontecer</h2>
          <p class="section-description reveal" style="text-align:center">Toda historia de sucesso tem um time incrivel por tras.</p>
        </div>

        <div class="team-grid stagger">
          <div class="team-card hover-lift">
            <img class="team-avatar" src="https://api.dicebear.com/7.x/initials/svg?seed=LN&backgroundColor=172645&textColor=D07A25" alt="Laercio Nogueira" />
            <h3>Laercio Nogueira</h3>
            <div class="team-role">Engenheiro e CEO</div>
          </div>
          
          <div class="team-card hover-lift">
            <img class="team-avatar" src="https://api.dicebear.com/7.x/initials/svg?seed=RM&backgroundColor=172645&textColor=D07A25" alt="Rafael Moraes" />
            <h3>Rafael Moraes</h3>
            <div class="team-role">Financeiro</div>
          </div>
          <div class="team-card hover-lift">
            <img class="team-avatar" src="https://api.dicebear.com/7.x/initials/svg?seed=PN&backgroundColor=172645&textColor=D07A25" alt="Pedro Neto" />
            <h3>Pedro Neto</h3>
            <div class="team-role">Gerente de Operacoes</div>
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
