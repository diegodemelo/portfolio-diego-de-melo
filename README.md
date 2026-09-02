# Portfólio Profissional — Diego de Melo

Projeto de estudo desenvolvido a partir do desafio **Criando e Estilizando uma Página de Portfólio Profissional com CSS e JavaScript**, da DIO.

A implementação utiliza o design de referência fornecido no Figma e foi personalizada com dados profissionais verificáveis do GitHub e com o LinkedIn oficial informado pelo responsável.

## Status

**v0.3.0 — publicada, homologada e versionada no GitHub.**

Estado do QA: **APROVADO**.

A estrutura, dados, JavaScript e publicação HTTP/HTTPS foram validados. A página foi homologada visualmente em navegador real após os ajustes nos acordeões, ícones de Skills e idiomas. A release v0.3.0 está publicada no GitHub.

## Stack real

- HTML5
- CSS3
- JavaScript
- JSON
- Fetch API
- Git/GitHub como fluxo previsto de versionamento

Não há backend, banco de dados, autenticação, Docker ou framework JavaScript neste projeto.

## Design

A versão 0.3.0 consolida a implementação baseada nas capturas fornecidas do Figma:

- fundo preto com iluminação/gradientes rosa, roxo e azul;
- moldura principal transparente com borda clara e cantos arredondados;
- foto circular e apresentação em duas colunas no desktop;
- três pontos decorativos no cabeçalho;
- acordeões na ordem: Skills, Idiomas, Educação, Portfólio e Experiência Profissional;
- estado aberto em `#55569E`;
- apenas um acordeão aberto por vez;
- painéis fechados totalmente recolhidos, sem altura residual;
- ícones locais das principais tecnologias na seção Skills;
- logotipo da DIO alinhado à direita no rodapé;
- conteúdo compacto e responsivo.

O contorno azul/ciano visível em algumas capturas é o realce de seleção do Figma e **não faz parte da interface publicada**.

A fonte específica usada no material de referência não é empacotada no projeto. A interface utiliza Open Sans e Space Grotesk por carregamento web como aproximação tipográfica.

## Dados profissionais

Fontes utilizadas:

- GitHub: `https://github.com/diegodemelo`
- LinkedIn oficial: `https://www.linkedin.com/in/diegodemelodev/`

O conteúdo não inventa vínculos profissionais, idiomas ou competências sem base disponível. A seção “Experiência Profissional” apresenta experiência prática/formação verificável e direciona ao LinkedIn para o histórico profissional completo.

## Projetos destacados

- OpinaAi Core — Projeto Integrador SENAC
- ChatGPT Clone — IA local
- Pokédex — JavaScript + PokéAPI

Outros projetos permanecem disponíveis diretamente no GitHub.

## Executar localmente

Como o conteúdo é carregado com `fetch`, execute por um servidor HTTP local.

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

## Contexto educacional

Este repositório é uma personalização de um projeto de estudo da DIO. O objetivo é demonstrar HTML, CSS, JavaScript, manipulação do DOM, carregamento de JSON, responsividade, acessibilidade básica e organização de código.
