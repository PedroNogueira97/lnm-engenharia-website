import { icons } from '../components/icons.js';
import servicesImg from '../assets/images/services-background.png';

export function renderServicos() {
  return `
    <!-- PAGE HEADER -->
    <section class="page-header">
      <div class="container">
        <div class="page-header-content reveal">
          <div class="section-label">O Que Oferecemos</div>
          <h1>Servicos <span class="gradient-text">especializados</span> em engenharia</h1>
          <p>Oferecemos uma gama completa de servicos para atender as suas necessidades em engenharia civil.</p>
        </div>
      </div>
    </section>

    <!-- SERVICES GRID -->
    <section class="section">
      <div class="container">
        <div class="services-grid-full stagger">
          <div class="service-card hover-lift">
            <div class="service-icon-wrapper">${icons.fileText}</div>
            <h3>Laudos Tecnicos</h3>
            <p>Emissao de laudos detalhados que garantem a seguranca e conformidade das construcoes.</p>
            <ul class="service-list">
              <li>Laudo de Vistoria</li>
              <li>Laudo de Estabilidade Estrutural</li>
              <li>Laudo de Inspecao Predial</li>
              <li>Laudo de Habitabilidade</li>
            </ul>
          </div>

          <div class="service-card hover-lift">
            <div class="service-icon-wrapper">${icons.search}</div>
            <h3>Analise e Planejamento</h3>
            <p>Revisao detalhada dos projetos existentes, identificacao de possiveis otimizacoes e elaboracao de um plano de trabalho.</p>
            <ul class="service-list">
              <li>Analise de Viabilidade Tecnica</li>
              <li>Estudo de Riscos da Obra</li>
              <li>Planejamento de Etapas Construtivas</li>
              <li>Otimizacao de Custos e Recursos</li>
            </ul>
          </div>

          <div class="service-card hover-lift">
            <div class="service-icon-wrapper">${icons.hardHat}</div>
            <h3>Acompanhamento Tecnico</h3>
            <p>Visitas periodicas a obra para fiscalizacao da execucao, verificacao da qualidade dos materiais e servicos.</p>
            <ul class="service-list">
              <li>Visitas Tecnicas Periodicas</li>
              <li>Fiscalizacao da Execucao da Obra</li>
              <li>Controle de Qualidade dos Servicos</li>
              <li>Acompanhamento do Cronograma</li>
            </ul>
          </div>

          <div class="service-card hover-lift">
            <div class="service-icon-wrapper">${icons.clipboard}</div>
            <h3>Responsabilidade Tecnica (ART)</h3>
            <p>Emissao da Anotacao de Responsabilidade Tecnica para todos os servicos, conforme exigido pelo CREA.</p>
            <ul class="service-list">
              <li>Emissao de ART junto ao CREA</li>
              <li>Regularizacao Tecnica da Obra</li>
              <li>Responsabilidade por Execucao</li>
              <li>Responsabilidade por Acompanhamento</li>
            </ul>
          </div>

          <div class="service-card hover-lift">
            <div class="service-icon-wrapper">${icons.barChart}</div>
            <h3>Emissao de Relatorios</h3>
            <p>Elaboracao de relatorios de progresso detalhados, com fotos e descricoes das atividades realizadas.</p>
            <ul class="service-list">
              <li>Relatorios de Progresso da Obra</li>
              <li>Relatorios Fotograficos</li>
              <li>Registro de Nao Conformidades</li>
              <li>Relatorios Tecnicos para Clientes</li>
            </ul>
          </div>

          <div class="service-card hover-lift">
            <div class="service-icon-wrapper">${icons.users}</div>
            <h3>Gestao de Equipes</h3>
            <p>Coordenacao e orientacao das equipes de trabalho, garantindo a produtividade e a aderencia aos padroes.</p>
            <ul class="service-list">
              <li>Coordenacao de Equipes em Campo</li>
              <li>Orientacao Tecnica dos Profissionais</li>
              <li>Supervisao de Seguranca no Trabalho</li>
              <li>Garantia de Qualidade na Execucao</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- PROCESS -->
    <section class="process-section">
      <div class="container">
        <div class="section-header" style="text-align:center;margin-bottom:var(--space-12)">
          <div class="section-label centered reveal">Como Trabalhamos</div>
          <h2 class="section-title reveal" style="text-align:center">Nosso processo de trabalho</h2>
          <p class="section-description reveal" style="text-align:center">Etapas claras e organizadas para garantir a melhor entrega em cada projeto.</p>
        </div>

        <div class="process-grid stagger">
          <div class="process-step hover-lift">
            <div class="process-number">01</div>
            <h3>Consulta Inicial</h3>
            <p>Entendemos suas necessidades e objetivos do projeto.</p>
          </div>
          <div class="process-step hover-lift">
            <div class="process-number">02</div>
            <h3>Planejamento</h3>
            <p>Avaliamos a viabilidade e elaboramos proposta detalhada.</p>
          </div>
          <div class="process-step hover-lift">
            <div class="process-number">03</div>
            <h3>Execucao</h3>
            <p>Desenvolvemos o trabalho com acompanhamento continuo.</p>
          </div>
          <div class="process-step hover-lift">
            <div class="process-number">04</div>
            <h3>Entrega</h3>
            <p>Finalizamos com documentacao completa e suporte.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="cta-bg-image"><img src="${servicesImg}" alt="" /></div>
      <div class="container">
        <div class="cta-content reveal-scale">
          <div class="section-label centered" style="color:var(--color-accent)">Comece Agora</div>
          <h2>Pronto para transformar seu projeto em realidade?</h2>
          <p>Entre em contato conosco para uma consulta gratuita. Nossa equipe esta pronta para entender suas necessidades e apresentar a melhor solucao em engenharia civil.</p>
          <div class="cta-actions">
            <a href="#/contato" class="btn btn-primary btn-lg" data-link>Solicitar Orcamento ${icons.arrowRight}</a>
          </div>
        </div>
      </div>
    </section>
  `;
}
