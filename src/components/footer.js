import { icons } from './icons.js';

export function renderFooter() {
    return `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a class="navbar-logo" href="#/" data-link>
              <img src="https://lnmengenharia.com/wp-content/uploads/2025/12/Artboard-1-copy-2.png" alt="LNM Engenharia" style="height:40px">
            </a>
            <p>Solucoes confiaveis e inovadoras em engenharia civil, com compromisso em transparencia, etica e excelencia.</p>
            <div class="footer-social">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener" aria-label="LinkedIn">${icons.linkedin}</a>
              <a href="https://www.instagram.com/lnm.engenharia" target="_blank" rel="noopener" aria-label="Instagram">${icons.instagram}</a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener" aria-label="Facebook">${icons.facebook}</a>
            </div>
          </div>

          <div>
            <h4>Links Rapidos</h4>
            <ul class="footer-links">
              <li><a href="#/sobre" data-link>Sobre Nos</a></li>
              <li><a href="#/portfolio" data-link>Portfolio</a></li>
              <li><a href="#/servicos" data-link>Servicos</a></li>
              <li><a href="#/contato" data-link>Contato</a></li>
            </ul>
          </div>

          <div>
            <h4>Servicos</h4>
            <ul class="footer-links">
              <li><a href="#/servicos" data-link>Laudos Tecnicos</a></li>
              <li><a href="#/servicos" data-link>Acompanhamento de Obras</a></li>
              <li><a href="#/servicos" data-link>Projetos Estruturais</a></li>
              <li><a href="#/servicos" data-link>Regularizacao de Imoveis</a></li>
            </ul>
          </div>

          <div>
            <h4>Contato</h4>
            <div class="footer-contact-item">
              ${icons.mapPin}
              <span>Paranapanema - SP</span>
            </div>
            <div class="footer-contact-item">
              ${icons.phone}
              <a href="tel:+5514996061557">(14) 99606-1557</a>
            </div>
            <div class="footer-contact-item">
              ${icons.mail}
              <a href="mailto:contato@lnmengenharia.com">contato@lnmengenharia.com</a>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; 2026 LNM Engenharia. Todos os direitos reservados.</p>
          <p>CREA-SP: 000000000</p>
        </div>
      </div>
    </footer>
  `;
}
