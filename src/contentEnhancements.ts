const projectSummaries: Record<string, string> = {
  DevMatch:
    'Produto full stack de recrutamento técnico com perfis por papel, integração com API externa, busca, compatibilidade por stack, matches, persistência e chat.',
  Differenza:
    'Redesign de produto digital com auditoria visual, nova arquitetura de conteúdo, hierarquia mais clara e implementação responsiva orientada à experiência.',
}

function setText(selector: string, text: string) {
  const element = document.querySelector<HTMLElement>(selector)
  if (element) element.textContent = text
}

function updateProjectSummaries() {
  document.querySelectorAll<HTMLElement>('.projectLabel').forEach((label) => {
    const title = label.querySelector('h2')?.textContent?.trim()
    const summary = title ? projectSummaries[title] : undefined
    const paragraph = label.querySelector('p')
    if (summary && paragraph) paragraph.textContent = summary
  })
}

function updateEvolution() {
  const yearBlocks = Array.from(document.querySelectorAll<HTMLElement>('.yearBlock'))
  const block2026 = yearBlocks.find((block) => block.querySelector('h3')?.textContent?.trim() === '2026')
  if (!block2026) return

  const items = ['Next.js + TypeScript', 'PostgreSQL + Convex', 'Playwright + CI/CD', 'CLI + AST Tooling']
  block2026.querySelectorAll('p').forEach((item, index) => {
    if (items[index]) item.textContent = items[index]
  })
}

export function applyContentEnhancements() {
  setText(
    '.introCenter > p',
    'Desenvolvedor Front-End especializado em React, Next.js e TypeScript. Construo produtos web com atenção a UI/UX, acessibilidade, componentização e engenharia de software.'
  )

  const introRole = document.querySelector<HTMLElement>('.introRole')
  if (introRole) {
    introRole.innerHTML = 'React · Next.js · TypeScript.<br />UI Engineering · Developer Tooling.<br />Do design ao deploy.'
  }

  setText('.why h2', 'Interface é parte do produto, não uma camada isolada.')
  setText(
    '.why > p',
    'Minha base em design orienta hierarquia, clareza e experiência. No desenvolvimento, levo isso até arquitetura de componentes, dados, APIs, testes, performance e entrega em produção.'
  )

  setText('.person h2', 'Front-End como especialidade. Engenharia de produto como contexto.')
  setText(
    '.person > p',
    'Caxias do Sul, RS — Brasil. Trabalho principalmente com React, Next.js e TypeScript e também tenho experiência prática com APIs REST, PostgreSQL, Prisma, Convex, autenticação, testes E2E, CI/CD e ferramentas para desenvolvedores.'
  )

  setText(
    '.contact > p',
    'Busco uma oportunidade como Desenvolvedor Front-End para contribuir em produtos reais, trabalhar com um time de engenharia e continuar evoluindo através de revisão de código, colaboração e problemas de produção.'
  )

  updateProjectSummaries()
  updateEvolution()
}
