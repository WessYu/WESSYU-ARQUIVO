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

  const items = ['Next.js + TypeScript', 'Developer Tooling + CI', 'Performance + AppSec']
  block2026.querySelectorAll('p').forEach((item, index) => {
    if (items[index]) item.textContent = items[index]
  })
}

export function applyContentEnhancements() {
  setText('#intro-title', 'Interfaces e ferramentas de engenharia')
  setText(
    '.introCenter > p',
    'Minha base é front-end. Hoje também construo as ferramentas ao redor do produto: governança de código, análise de performance, segurança de aplicações e gates de CI para projetos JavaScript e TypeScript.'
  )

  const introRole = document.querySelector<HTMLElement>('.introRole')
  if (introRole) {
    introRole.innerHTML = 'React · Next.js · TypeScript.<br />Developer Tooling · Performance · AppSec.<br />Do produto ao engineering gate.'
  }

  setText('.why h2', 'Comecei pela interface. Hoje sigo o problema até a engenharia.')
  setText(
    '.why > p',
    'Design continua sendo a origem do meu olhar para hierarquia, clareza e experiência. No código, esse cuidado evoluiu para component APIs, análise estática, medições reais no navegador, backend, segurança e automação em CI.'
  )

  setText('.person h2', 'Front-end é minha base. Developer tooling é onde aprofundei.')
  setText(
    '.person > p',
    'Caxias do Sul, RS — Brasil. Trabalho principalmente com React, Next.js e TypeScript. Nos projetos mais recentes, aprofundei Node.js, PostgreSQL, Prisma, Fastify, Playwright, AST tooling, performance engineering e application security.'
  )

  setText(
    '.contact > p',
    'Busco uma oportunidade como Desenvolvedor Front-End ou Software Developer para contribuir em produtos reais e continuar crescendo com revisão de código, arquitetura, performance, segurança e engenharia de entrega.'
  )

  updateProjectSummaries()
  updateEvolution()
}
