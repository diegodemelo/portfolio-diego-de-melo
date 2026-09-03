# Portfólio Profissional — Diego de Melo

Portfólio profissional desenvolvido com **HTML, CSS e JavaScript puro**
a partir do desafio **Criando e Estilizando uma Página de Portfólio
Profissional com CSS e JavaScript**, da DIO.

A interface utiliza como referência o material visual fornecido no
desafio e foi personalizada com dados profissionais e projetos reais.

## Demo

**Portfólio publicado:**

https://diegodemelo.github.io/portfolio-diego-de-melo/

A URL atual utiliza o ambiente operacional de laboratório do projeto.

## Status

**Release funcional atual: `v0.3.0`**

Estado do QA: **APROVADO**.

A release `v0.3.0` foi homologada em navegador real e permanece
preservada pela tag Git correspondente.

A branch `main` pode conter commits documentais posteriores sem alterar
retroativamente a release homologada.

## Stack

- HTML5
- CSS3
- JavaScript
- JSON
- Fetch API
- Git
- GitHub

O projeto não utiliza framework JavaScript, backend, banco de dados,
autenticação ou processo Node.js persistente.

## Destaques técnicos

- layout responsivo;
- interface baseada no design de referência da DIO/Figma;
- acordeões acessíveis por botão e `aria-expanded`;
- apenas um painel aberto por vez;
- carregamento de dados profissionais por JSON;
- separação entre dados e renderização;
- Skills com SVGs locais;
- suporte a `prefers-reduced-motion`;
- links externos protegidos com `noopener noreferrer`;
- QA técnico e visual documentado;
- manifests SHA-256 das versões homologadas;
- versionamento por branch, commit e tag.

## Conteúdo do portfólio

A página apresenta:

- Skills técnicas;
- conhecimentos;
- idiomas;
- formação;
- projetos em destaque;
- experiência prática;
- GitHub;
- LinkedIn.

## Projetos destacados

### OpinaAi Core — Projeto Integrador SENAC

Aplicação de avaliação de eventos com APIs, regras de negócio e
PostgreSQL.

Repositório:

https://github.com/diegodemelo/opinaai-core

### ChatGPT Clone — IA local

Aplicação full stack com React, Vite, Node.js, Express, streaming SSE
e Ollama.

Repositório:

https://github.com/diegodemelo/chatgpt-clone-openai

### Pokédex — JavaScript + PokéAPI

Projeto responsivo desenvolvido em JavaScript puro consumindo a
PokéAPI.

Repositório:

https://github.com/diegodemelo/dio-js-pokedex

## Executar localmente

Como os dados são carregados por `fetch`, execute o projeto através
de um servidor HTTP.

```bash
python3 -m http.server 8000
```

Depois acesse:

```text
http://127.0.0.1:8000/
```

## Estrutura

```text
portfolio-diego-de-melo/
├── .github/
│   └── workflows/
├── assets/
│   ├── css/
│   ├── img/
│   └── js/
├── data/
│   └── profile.json
├── docs/
├── index.html
├── .gitignore
└── README.md
```

## Qualidade e QA

O projeto possui validações para:

- sintaxe JavaScript;
- validade do JSON;
- referências locais do HTML;
- atributos básicos de acessibilidade;
- existência dos assets das Skills;
- URLs dos projetos;
- detecção básica de chave privada;
- integridade histórica por manifests SHA-256.

A documentação completa de QA está em:

`docs/`

Consulte primeiro:

`docs/ESTADO_ATUAL.txt`

## Dados profissionais

Fontes públicas utilizadas pelo portfólio:

- GitHub: https://github.com/diegodemelo
- LinkedIn: https://www.linkedin.com/in/diegodemelodev/

O projeto evita publicar telefone, e-mail ou credenciais privadas.

## Design

A implementação mantém os principais elementos visuais do desafio:

- fundo preto com gradientes coloridos;
- moldura transparente;
- foto circular;
- apresentação em duas colunas no desktop;
- acordeões com estado ativo;
- ícones de tecnologias;
- logotipo da DIO no rodapé.

Open Sans e Space Grotesk são carregadas pela web como aproximação
tipográfica ao material de referência.

## Contexto educacional

Este repositório é uma personalização de um projeto de estudo da DIO.

Seu objetivo é demonstrar, de forma prática:

- HTML semântico;
- CSS responsivo;
- JavaScript;
- manipulação do DOM;
- Fetch API;
- organização de código;
- acessibilidade básica;
- Git/GitHub;
- QA e documentação de software.

## Licenciamento e créditos

O repositório contém elementos relacionados ao desafio educacional da
DIO e assets de tecnologias.

Uma licença global para todo o conteúdo ainda não foi definida.
Antes de reutilizar elementos visuais ou assets de terceiros, verifique
as respectivas condições de uso.
