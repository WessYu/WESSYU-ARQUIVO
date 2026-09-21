# WESSYU — ARQUIVO

<p align="center">
  <img src="./assets/readme-preview.svg" alt="Preview do WESSYU Arquivo" width="100%" />
</p>

<p align="center"><strong>Portfólio editorial de software, produto e engenharia.</strong></p>

<p align="center"><a href="https://wessyu-arquivo.vercel.app/">Abrir portfólio</a> · <a href="https://github.com/WessYu">GitHub</a> · <a href="https://www.linkedin.com/in/wesley-cruz2001/">LinkedIn</a></p>

## Sobre

O **WESSYU Arquivo** apresenta meu trabalho como Software Developer com base forte em front-end. A seleção atual combina produtos web e developer tooling para mostrar interface, arquitetura de produto, performance, segurança e automação de entrega.

O site não funciona como um currículo transformado em página. Os projetos são apresentados com contexto técnico, decisões, implementação, evidências visuais e links para código ou produto.

## Engineering toolkit

- **NEXUS** — orquestra qualidade, performance e segurança em um único engineering gate;
- **Component Vault** — governança de componentes e análise AST com CLI e CI;
- **Velocity** — diagnóstico de performance, benchmark e controle de regressão;
- **SPECTER** — application security defensivo antes e depois do deploy.

## Produtos selecionados

- **DevMatch** — produto full stack de recrutamento técnico com perfis por papel, vagas reais, compatibilidade, matches e chat;
- **Differenza** — redesign com auditoria visual, reorganização de conteúdo e implementação responsiva.

## Stack

React · TypeScript · JavaScript · Next.js · Node.js · PostgreSQL · Prisma · Fastify · Playwright · Vite · GitHub Actions

## Arquitetura do portfólio

A interface principal é React/Vite. O conteúdo final do hero, toolkit e projetos vive de forma declarativa nos componentes React; o JavaScript de enhancement fica restrito à experiência do project reel, como navegação, cursor contextual e controles de scroll.

```text
src/
├── App.tsx                    # conteúdo, toolkit e estudos de caso
├── components/                # componentes reutilizáveis
├── projectReel.ts             # interação do reel
├── types.ts                   # contratos dos estudos de caso
└── *.css                      # layout, reel e responsividade
public/
└── projects/                  # screenshots e assets dos projetos
```

## Executando localmente

```bash
git clone https://github.com/WessYu/WESSYU-ARQUIVO.git
cd WESSYU-ARQUIVO
npm install
npm run build
npm run dev
```

## Autor

**Wesley Cruz** — Software Developer  
[Portfólio](https://wessyu-arquivo.vercel.app/) · [GitHub](https://github.com/WessYu) · [LinkedIn](https://www.linkedin.com/in/wesley-cruz2001/) · [E-mail](mailto:wess.c@proton.me)
