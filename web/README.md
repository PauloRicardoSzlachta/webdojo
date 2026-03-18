# 🚀 Documentação do Projeto de Testes Automatizados - Webdojo com Cypress

## 📌 Visão geral

Este projeto contém os testes automatizados da aplicação **Webdojo**, desenvolvidos com **Cypress**.

A aplicação **Webdojo** está no mesmo repositório deste projeto. Por isso, antes de executar os testes, é necessário iniciar a aplicação localmente.

---

## 🛠️ Pré-requisitos

Antes de executar o projeto, você precisa ter instalado na máquina:

- **Node.js**
- **npm**

---

## ▶️ Executando a aplicação

Como a aplicação está no mesmo repositório, o primeiro passo é subir o ambiente local:

```bash
npm run dev
```

Esse comando inicia a aplicação na porta **3000**.

### Script utilizado

```json
"dev": "serve -s dist -p 3000"
```

---

## 🧪 Executando os testes

### Executar todos os testes em modo headless

```bash
npm test
```

### Script utilizado

```json
"test": "npx cypress run --config viewportWidth=1440 viewportHeight=900"
```

Esse comando executa todos os testes com viewport configurado para:

- **Largura:** 1440
- **Altura:** 900

---

### Executar os testes com interface gráfica

```bash
npm run test:ui
```

### Script utilizado

```json
"test:ui": "npx cypress open"
```

Esse comando abre a interface gráfica do Cypress para execução interativa dos testes.

---

### Executar apenas os testes de login

```bash
npm run test:login
```

### Script utilizado

```json
"test:login": "npx cypress run --spec cypress/e2e/login.cy.js --config viewportWidth=1440 viewportHeight=900"
```

Esse comando executa somente os testes da spec de login em resolução desktop.

---

### Executar os testes de login em resolução mobile

```bash
npm run test:login:mobile
```

### Script utilizado

```json
"test:login:mobile": "npx cypress run --spec cypress/e2e/login.cy.js --config viewportWidth=414 viewportHeight=896"
```

Esse comando executa apenas a spec de login simulando um dispositivo mobile.

Viewport utilizado:

- **Largura:** 414
- **Altura:** 896

---

## 🔄 Fluxo recomendado de execução

### 1. Instalar as dependências

```bash
npm install
```

### 2. Subir a aplicação

```bash
npm run dev
```

### 3. Em outro terminal, executar os testes

Para rodar todos os testes:

```bash
npm test
```

Ou, se preferir abrir a interface gráfica:

```bash
npm run test:ui
```

---

## 📁 Estrutura do projeto Cypress

Com base na estrutura atual do projeto, temos:

```bash
cypress/
├── e2e/
├── fixtures/
│   ├── cep.json
│   ├── consultancy.json
│   └── document.pdf
└── support/
    ├── actions/
    │   └── consultancy.actions.js
    ├── commands.js
    ├── e2e.js
    └── utils.js
```

---

## 📂 Descrição das pastas e arquivos

### `cypress/e2e/`

Pasta responsável por armazenar os arquivos de testes automatizados da aplicação.

É nela que ficam as specs responsáveis por validar os fluxos E2E do sistema, como por exemplo:

- login
- formulários
- integrações
- tabelas
- componentes interativos

---

### `cypress/fixtures/`

Pasta utilizada para armazenar massas de dados e arquivos auxiliares usados nos testes.

#### Arquivos atuais

- `cep.json`: massa de dados para cenários de consulta de CEP
- `consultancy.json`: massa de dados para cenários de consultoria
- `document.pdf`: arquivo utilizado em cenários de upload

---

### `cypress/support/`

Pasta com arquivos de apoio, reutilização e configuração global da automação.

#### `cypress/support/actions/consultancy.actions.js`

Arquivo responsável por centralizar ações relacionadas aos fluxos de consultoria.

Essa abordagem ajuda a:

- reduzir duplicação de código
- melhorar a legibilidade
- facilitar a manutenção dos testes

#### `cypress/support/commands.js`

Arquivo onde ficam os comandos customizados do Cypress.

Exemplos comuns de uso:

- login customizado
- navegação entre menus
- ações reutilizáveis para múltiplos testes

#### `cypress/support/e2e.js`

Arquivo carregado automaticamente antes da execução dos testes E2E.

Normalmente utilizado para:

- importar comandos customizados
- configurar comportamento global dos testes
- preparar o ambiente de automação

#### `cypress/support/utils.js`

Arquivo com funções utilitárias auxiliares para os testes.

Exemplos:

- formatação de datas
- geração de valores
- helpers reutilizáveis

---

## ✅ Boas práticas adotadas no projeto

Este projeto segue uma organização que favorece escalabilidade e manutenção, utilizando:

- separação entre testes, fixtures e arquivos de suporte
- reutilização de comandos customizados
- centralização de ações repetidas
- uso de massas de dados externas
- execução em diferentes viewports para cenários desktop e mobile

---

## 💻 Exemplo de execução completa

### Terminal 1 - subir a aplicação

```bash
npm run dev
```

### Terminal 2 - executar todos os testes

```bash
npm test
```

### Ou abrir a interface gráfica do Cypress

```bash
npm run test:ui
```

---

## 📜 Scripts disponíveis

```json
"scripts": {
  "dev": "serve -s dist -p 3000",
  "test": "npx cypress run --config viewportWidth=1440 viewportHeight=900",
  "test:ui": "npx cypress open",
  "test:login": "npx cypress run --spec cypress/e2e/login.cy.js --config viewportWidth=1440 viewportHeight=900",
  "test:login:mobile": "npx cypress run --spec cypress/e2e/login.cy.js --config viewportWidth=414 viewportHeight=896"
}
```

---

## 📝 Observações importantes

- A aplicação **precisa estar em execução** antes de iniciar os testes.
- O comando `npm run dev` deve ser executado antes da automação.
- Os testes podem ser executados tanto em modo headless quanto pela interface gráfica do Cypress.
- O projeto já possui estrutura organizada para suportar manutenção e evolução da automação.

---

## 📚 Tecnologias utilizadas

- **Cypress**
- **JavaScript**
- **Node.js**
- **npm**

---

## 👨‍💻 Objetivo do projeto

Automatizar os principais fluxos da aplicação **Webdojo**, garantindo mais qualidade, confiabilidade e agilidade no processo de validação do sistema.
