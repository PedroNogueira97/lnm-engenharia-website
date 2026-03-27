import { icons } from '../components/icons.js';

export function renderContato() {
  return `
    <!-- PAGE HEADER -->
    <section class="page-header">
      <div class="container">
        <div class="page-header-content reveal">
          <div class="section-label">Fale Conosco</div>
          <h1>Assessoria <span class="gradient-text">especializada</span> para seu projeto</h1>
          <p>Aqui voce encontra todos os dados para contato. Nossa equipe esta pronta para atender suas necessidades e esclarecer todas as duvidas.</p>
        </div>
      </div>
    </section>

    <!-- CONTACT GRID -->
    <section class="section">
      <div class="container">
        <div class="contact-grid">
          <!-- FORM -->
          <div class="contact-form-card reveal-left">
            <h2>Envie sua mensagem</h2>
            <p>Preencha o formulario abaixo e retornaremos em ate 24 horas.</p>

            <form id="contact-form">
              <div class="form-group">
                <label class="form-label" for="name">Nome Completo *</label>
                <input class="form-input" type="text" id="name" name="name" required placeholder="Seu nome completo" />
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label class="form-label" for="email">E-mail *</label>
                  <input class="form-input" type="email" id="email" name="email" required placeholder="seu@email.com" />
                </div>
                <div class="form-group">
                  <label class="form-label" for="phone">Telefone</label>
                  <input class="form-input" type="tel" id="phone" name="phone" placeholder="(00) 00000-0000" />
                </div>
              </div>

              <div class="form-group">
                <label class="form-label" for="subject">Assunto *</label>
                <select class="form-select" id="subject" name="subject" required>
                  <option value="" disabled selected>Selecione o assunto</option>
                  <option value="laudo">Laudo Tecnico</option>
                  <option value="projeto">Projeto Estrutural</option>
                  <option value="acompanhamento">Acompanhamento de Obra</option>
                  <option value="regularizacao">Regularizacao</option>
                  <option value="consultoria">Consultoria</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label" for="message">Mensagem</label>
                <textarea class="form-textarea" id="message" name="message" placeholder="Descreva seu projeto ou duvida..."></textarea>
              </div>

              <button type="submit" class="btn btn-primary btn-lg" style="width:100%">
                Enviar Mensagem ${icons.arrowRight}
              </button>
            </form>
          </div>

          <!-- INFO -->
          <div class="contact-info reveal-right">
            <h2>Como nos encontrar</h2>

            <div class="contact-info-cards">
              <div class="contact-info-card">
                <div class="contact-info-icon">${icons.mapPin}</div>
                <div>
                  <h4>Endereco</h4>
                  <p>Paranapanema - SP | Atendemos toda regiao</p>
                </div>
              </div>

              <div class="contact-info-card">
                <div class="contact-info-icon">${icons.phone}</div>
                <div>
                  <h4>Telefone</h4>
                  <p><a href="tel:+5514996061557">(14) 99606-1557</a></p>
                  <p>Seg - Sex: 8h as 18h</p>
                </div>
              </div>

              <div class="contact-info-card">
                <div class="contact-info-icon">${icons.mail}</div>
                <div>
                  <h4>E-mail</h4>
                  <p><a href="mailto:contato@lnmengenharia.com">contato@lnmengenharia.com</a></p>
                </div>
              </div>

              <div class="contact-info-card">
                <div class="contact-info-icon">${icons.clock}</div>
                <div>
                  <h4>Horario</h4>
                  <p>Segunda a Sexta</p>
                  <p>8:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content reveal-scale">
          <h2>Nao encontrou o que precisa?</h2>
          <p>Ligue diretamente para nos. Estamos prontos para atender voce.</p>
          <div class="cta-actions">
            <a href="tel:+5514996061557" class="btn btn-primary btn-lg">(14) 99606-1557 ${icons.phone}</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;

    btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="animation:spin 1s linear infinite"><path d="M21 12a9 9 0 11-6.219-8.56"/></svg> Enviando...`;
    btn.disabled = true;

    // Simulate form submission
    setTimeout(() => {
      btn.innerHTML = `${icons.check} Mensagem Enviada!`;
      btn.style.background = 'hsl(150, 60%, 40%)';

      setTimeout(() => {
        form.reset();
        btn.innerHTML = originalText;
        btn.disabled = false;
        btn.style.background = '';
      }, 3000);
    }, 1500);
  });

  // Add spin keyframes
  if (!document.getElementById('spin-keyframes')) {
    const style = document.createElement('style');
    style.id = 'spin-keyframes';
    style.textContent = '@keyframes spin { to { transform: rotate(360deg); } }';
    document.head.appendChild(style);
  }
}
