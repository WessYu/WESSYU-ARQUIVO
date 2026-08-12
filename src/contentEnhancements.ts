const projectSummaries: Record<string, string> = {
  DevMatch:
    'Produto full stack de recrutamento técnico com perfis por papel, integração com API externa, compatibilidade por stack, matches, feed e chat.',
  Receitas:
    'Aplicação full stack com autenticação, sessões, favoritos, comentários, moderação, upload de imagens, painel administrativo e testes E2E.',
  'Logic Quest':
    'Plataforma de estudo com módulos, prática guiada, checkpoints, progresso persistente e experiência PWA responsiva.',
  HELENA:
    'Produto institucional com formulários, protocolos, persistência de dados, contatos, newsletter e painel administrativo.',
  Differenza:
    'Redesign de produto digital com auditoria visual, nova arquitetura de conteúdo, serviços, unidades e experiência responsiva.',
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

  const items = ['Next.js', 'Prisma + PostgreSQL', 'APIs + autenticação', 'NPX + Developer Tooling']
  block2026.querySelectorAll('p').forEach((item, index) => {
    if (items[index]) item.textContent = items[index]
  })
}

export function applyContentEnhancements() {
  setText(
    '.introCenter > p',
    'Desenvolvedor Front-End focado em React, Next.js e TypeScript, com experiência prática em aplicações full stack, APIs, dados e Developer Tooling.'
  )

  const introRole = document.querySelector<HTMLElement>('.introRole')
  if (introRole) {
    introRole.innerHTML = 'Front-end desde 2023.<br />React · Next.js · TypeScript.<br />Interfaces, aplicações e produtos web.'
  }

  setText('.why h2', 'Construo produtos, não apenas interfaces.')
  setText(
    '.why > p',
    'Minha base em design me ensinou a pensar em experiência e detalhe. O desenvolvimento me permite transformar essa visão em aplicações reais, conectando interface, dados, APIs e regras de negócio.'
  )

  setText('.person h2', 'Front-end como especialidade. Back-end como visão de produto.')
  setText(
    '.person > p',
    'Caxias do Sul, RS — Brasil. Focado em React, Next.js e TypeScript, com experiência prática em PostgreSQL, Prisma, Convex, APIs, autenticação, testes E2E e Developer Tooling.'
  )

  setText(
    '.contact > p',
    'Busco uma oportunidade para construir produtos web reais, colaborar com um time de engenharia e continuar evoluindo como desenvolvedor Front-End.'
  )

  updateProjectSummaries()
  updateEvolution()
}
