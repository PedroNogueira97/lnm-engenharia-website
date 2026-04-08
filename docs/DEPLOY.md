# Deploy

Este projeto é um **frontend Vite estático** servido por **nginx**. O deploy faz apenas:
1) gerar o build (`dist/`) no GitHub Actions
2) fazer upload do `dist/` para a pasta do site na VPS
3) validar e recarregar o nginx

---

## Segredos necessários no GitHub

- `VPS_HOST`
- `VPS_PORT`
- `VPS_USER`
- `VPS_SSH_KEY` (conteúdo da chave privada SSH)
- `VPS_PATH` (ex.: `/var/www/lnmwebsite`)

---

## Fluxo (CI/CD)

- Push em `main`:
  - roda `npm run build` (gera `dist/`)
  - rsync envia `dist/` para `${VPS_PATH}`
  - executa `sudo nginx -t` e depois `sudo systemctl reload nginx`
    - fallback: `sudo systemctl restart nginx`

---

## Validação pós-deploy

- Verifique se `index.html` e os assets estão presentes em `${VPS_PATH}`.
- Abra o site e confirme as rotas por hash (ex.: `/#/portfolio`).

---

## Troubleshooting

- **Nginx -t falhou**: revise a configuração do nginx e o usuário que roda a workflow (precisa de `sudo` sem prompt, ou ajuste o comando).
- **Conteúdo antigo**: rsync usa `--delete`, então deve limpar arquivos removidos.
- **Rotas não funcionam**: este projeto usa `hash routing`, então não depende de fallback de rotas server-side.
