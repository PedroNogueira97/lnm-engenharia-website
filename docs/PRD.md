# PRD — LNM Engenharia

## 1. Overview

Este projeto consiste no **frontend de um site institucional** da empresa **LNM Engenharia**, especializada em engenharia civil.

O site já está **totalmente desenvolvido**. O objetivo atual **não é implementar novas funcionalidades**, mas sim:

- Preparar e padronizar o **processo de deploy**
- Garantir que o projeto possa ser **mantido e atualizado facilmente**
- Estruturar automações (CI/CD) para futuras alterações

---

## 2. Objective

O objetivo principal deste projeto é:

> **Realizar o deploy do frontend em uma VPS (Hostinger), com um processo automatizado, reproduzível e documentado.**

---

## 3. Scope

### Incluído no escopo

- Configuração de pipelines de **CI/CD**
- Criação e/ou ajuste de:
  - `.github/workflows/ci.yml`
  - `.github/workflows/deploy.yml`
- Criação de documentação de deploy
- Criação de script de deploy
- Uso opcional de Docker para produção
- Configuração de servidor (Nginx, portas, redirects, etc.)

### Fora do escopo

- Desenvolvimento de novas features
- Alterações no layout/UI
- Mudanças na lógica do frontend
- Refatorações não relacionadas ao processo de deploy

---

## 4. Infrastructure

- **Servidor:** VPS Hostinger
- **Ambiente alvo:** Produção
- **Acesso à VPS:** As informações necessárias para conexão estão disponíveis em `frontend/.env`

> As credenciais não devem ser expostas em código, logs, workflows ou documentação pública.

---

## 5. Project Structure Reference

Para entender a organização do projeto, consulte:

- `ARCHITECTURE.md`

Esse arquivo deve ser tratado como referência principal para estrutura, tecnologias utilizadas e responsabilidades entre pastas.

---

## 6. Responsibilities (AI Agent)

O agente deve executar as seguintes tarefas.

### 6.1 CI/CD

Criar ou atualizar os arquivos:

- `.github/workflows/ci.yml`
- `.github/workflows/deploy.yml`

Esses workflows devem:

- Garantir que o projeto possa ser validado antes do deploy
- Executar build do frontend
- Validar integridade mínima do processo
- Automatizar o deploy na VPS, conforme a estratégia escolhida
- Evitar exposição de segredos e credenciais

### 6.2 Deploy Script

Criar o script:

`commons/ops/deploy.sh`

O script deve, conforme necessário:

- Conectar ao ambiente de destino ou preparar a execução remota
- Atualizar o código da aplicação
- Instalar dependências
- Gerar o build de produção
- Subir ou atualizar o serviço
- Reiniciar serviços, se necessário
- Falhar de forma explícita em caso de erro

O script deve ser:

- Reutilizável
- Seguro
- Idempotente
- Fácil de manter

### 6.3 Deploy Documentation

Criar o documento:

`common/docs/DEPLOY.md`

O documento deve conter:

- Pré-requisitos
- Variáveis de ambiente necessárias
- Passo a passo completo do deploy
- Instruções para execução manual
- Explicação do fluxo de CI/CD
- Orientações de troubleshooting
- Estratégia de rollback, se aplicável

---

## 7. Production Setup

Se necessário, utilizar os seguintes arquivos existentes na pasta `frontend`:

- `docker-compose.prod.yml`
- `nginx.conf`

Esses arquivos podem ser usados para:

- Orquestração em produção
- Configuração de proxy reverso
- Configuração de portas
- Redirecionamentos
- Entrega de arquivos estáticos
- Ajustes de comportamento do servidor web

A decisão de usar Docker ou servir o build diretamente deve considerar simplicidade, confiabilidade e facilidade de manutenção.

---

## 8. Constraints & Guidelines

O projeto deve seguir os seguintes princípios:

- **Reprodutibilidade:** o processo de deploy deve funcionar de forma consistente
- **Idempotência:** rodar o deploy múltiplas vezes não deve quebrar o ambiente
- **Segurança:** credenciais não devem ser expostas em arquivos versionados
- **Clareza:** scripts e documentação devem ser fáceis de entender
- **Automação:** sempre preferir processos automatizados em vez de manuais
- **Simplicidade:** evitar complexidade desnecessária

Sempre priorizar soluções robustas e fáceis de operar.

---

## 9. Task Management

Após analisar ou executar as tarefas solicitadas via chat, o agente deve atualizar o arquivo:

`TASKS.md`

A atualização deve incluir, quando aplicável:

- Próximos passos
- Pendências
- Riscos identificados
- Melhorias futuras
- Decisões tomadas durante a implementação

---

## 10. Success Criteria

O projeto será considerado concluído quando:

- O site estiver rodando corretamente na VPS
- O processo de deploy estiver documentado de forma clara
- O deploy puder ser executado manualmente com segurança
- O deploy puder ser automatizado via GitHub Actions, quando aplicável
- Os arquivos de CI/CD, documentação e script estiverem consistentes entre si

---

## 11. Notes

- Este projeto faz parte de um ambiente de desenvolvimento assistido por IA
- O foco atual é **deploy e operação**, não desenvolvimento de funcionalidades
- Em caso de dúvida, priorizar a solução mais simples, segura e sustentável
- O agente deve consultar `ARCHITECTURE.md` antes de propor mudanças estruturais
- Após concluir a análise das tarefas solicitadas, o agente deve refletir os próximos passos em `TASKS.md`