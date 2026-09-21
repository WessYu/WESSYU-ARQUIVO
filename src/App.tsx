import { useEffect, useMemo, useRef, useState } from 'react'
import type { ProjectCase } from './types'
import { TechStack } from './components/TechStack'

const LINKS = {
  github: 'https://github.com/WessYu',
  linkedin: 'https://www.linkedin.com/in/wesley-cruz2001/',
  email: 'mailto:wess.c@proton.me',
  resume: '/Wesley_Cruz_CV_PT.pdf',
}

type EngineeringTool = {
  id: string
  title: string
  kicker: string
  icon: string
  image: string
  imageAlt: string
  repository: string
  npm?: string
  demo?: string
  category: string
  stack: string
  toolkitSummary: string
  paragraphs: string[]
  stamp: string
}

const ENGINEERING_TOOLS: EngineeringTool[] = [
  {
    id: 'nexus',
    title: 'NEXUS',
    kicker: 'ENGINEERING ORCHESTRATION',
    icon: '/projects/toolkit/nexus.svg',
    image: '/projects/nexus/overview.svg',
    imageAlt: 'NEXUS conectando qualidade, performance e segurança em um único engineering gate',
    repository: 'https://github.com/WessYu/NEXUS',
    npm: 'https://www.npmjs.com/package/@wess2001/nexus',
    category: 'ORCHESTRATION',
    stack: 'Quality · Performance · Security',
    toolkitSummary: 'Um engineering gate para os três motores.',
    paragraphs: [
      'CLI que orquestra Component Vault, Velocity e SPECTER, normaliza os resultados em um contrato comum e aplica uma política única de repositório.',
      'Qualidade, performance e segurança continuam como engines independentes, mas podem rodar em um único check antes do merge ou deploy.',
    ],
    stamp: 'N',
  },
  {
    id: 'component-vault',
    title: 'Component Vault',
    kicker: 'DEV TOOL / COMPONENT GOVERNANCE',
    icon: '/projects/toolkit/component-vault.svg',
    image: '/projects/component-vault/overview.svg',
    imageAlt: 'Component Vault com workspace de componentes, governança, análise e developer tooling',
    repository: 'https://github.com/WessYu/component-vault',
    npm: 'https://www.npmjs.com/package/@wess2001/component-vault',
    demo: 'https://component-vault-dun.vercel.app',
    category: 'QUALITY / GOVERNANCE',
    stack: 'AST · Components · CI',
    toolkitSummary: 'Governança de componentes e design system como código.',
    paragraphs: [
      'Plataforma de componentes com um motor de governança baseado em TypeScript AST para TypeScript, TSX, JavaScript e JSX.',
      'A CLI reúne análise, baseline, PR reporting, autofix e automação em CI, com um workspace Next.js/React para organizar e revisar componentes.',
    ],
    stamp: 'CV',
  },
  {
    id: 'velocity',
    title: 'Velocity',
    kicker: 'DEV TOOL / PERFORMANCE ENGINEERING',
    icon: '/projects/toolkit/velocity.svg',
    image: '/projects/velocity/overview.svg',
    imageAlt: 'Velocity apresentado como CLI de diagnóstico, benchmark e otimização de performance',
    repository: 'https://github.com/WessYu/velocity',
    npm: 'https://www.npmjs.com/package/@wess2001/velocity',
    category: 'PERFORMANCE',
    stack: 'Build · Browser · Benchmark',
    toolkitSummary: 'Evidência de performance e controle de regressão.',
    paragraphs: [
      'CLI e API ESM para coletar evidências de performance combinando análise estática, artifacts de build, medições em Chromium, benchmarks e profiling de Node.js.',
      'O fluxo inclui comparação de baselines, gates de regressão em CI e saídas JSON/SARIF para manter decisões de otimização revisáveis.',
    ],
    stamp: 'V',
  },
  {
    id: 'specter',
    title: 'SPECTER',
    kicker: 'DEFENSIVE APPSEC / SECURITY TOOLING',
    icon: '/projects/toolkit/specter.svg',
    image: '/projects/specter/overview.svg',
    imageAlt: 'SPECTER mostrando source, dependency, build e active security checks em um fluxo defensivo',
    repository: 'https://github.com/WessYu/SPECTER',
    npm: 'https://www.npmjs.com/package/@wess2001/specter',
    category: 'APPLICATION SECURITY',
    stack: 'Source · Runtime · CI',
    toolkitSummary: 'AppSec defensivo do código à aplicação publicada.',
    paragraphs: [
      'Ferramenta de application security para encontrar regressões antes e depois do deploy em código-fonte, secrets, dependências, build output e aplicações publicadas.',
      'O active testing é autorizado, limitado e não destrutivo, com budgets, rate limiting, cancelamento, relatórios JSON/SARIF e gates de CI.',
    ],
    stamp: 'S',
  },
]

const PROJECTS: ProjectCase[] = [
  {
    id: 'devmatch',
    number: '001',
    title: 'DevMatch',
    year: '2026',
    image: '/projects/devmatch/home.webp',
    imageAlt: 'Workspace do DevMatch com shortlist técnica e visão de contratação',
    imageWidth: 1120,
    imageHeight: 900,
    repository: 'https://github.com/WessYu/DEVMATCH',
    demo: 'https://devmatch-neon.vercel.app',
    summary: 'Produto full stack de recrutamento técnico com perfis por papel, vagas reais, compatibilidade, matches, feed e chat.',
    problem:
      'Unificar descoberta de oportunidades, perfil técnico, compatibilidade e conversa sem perder as necessidades diferentes de empresas e desenvolvedores.',
    decisions: [
      'Separação dos fluxos de empresa e desenvolvedor',
      'Integração e normalização de vagas reais da Remotive',
      'Busca e filtros por tecnologia e relevância',
      'Matches e mensagens conectados ao contexto da oportunidade',
    ],
    implementation:
      'Construí a aplicação com Next.js, TypeScript, PostgreSQL e Neon. Uma rota própria consome vagas da Remotive, remove cargos não técnicos, identifica tecnologias, classifica resultados e entrega estados controlados para falhas externas.',
    learnings: ['Integração com API externa', 'Perfis com papéis diferentes', 'Compatibilidade por stack', 'Persistência e chat contextual'],
    technicalNotes: [
      'Next.js',
      'TypeScript',
      'PostgreSQL',
      'Neon',
      'Remotive API',
      'Autenticação',
      'Busca e filtros',
      'Compatibilidade',
      'Matches',
      'Feed',
      'Chat',
      'Cache e revalidação',
    ],
    process: [
      'Mapeamento dos perfis',
      'Estruturação dos workspaces',
      'Integração das vagas externas',
      'Sistema de compatibilidade e matches',
      'Conversas e revisão responsiva',
    ],
    screens: [
      { label: 'Feed', src: '/projects/devmatch/feed.webp', alt: 'Feed do DevMatch com vagas e publicações', width: 1120, height: 900 },
      { label: 'Workspace da empresa', src: '/projects/devmatch/home.webp', alt: 'Workspace da empresa no DevMatch com pipeline e candidatos', width: 1120, height: 900 },
      { label: 'Perfil do desenvolvedor', src: '/projects/devmatch/dev.webp', alt: 'Console do desenvolvedor no DevMatch com perfil técnico', width: 1120, height: 900 },
      { label: 'Matches', src: '/projects/devmatch/contractor.webp', alt: 'Área de matches do DevMatch com shortlist técnica', width: 1120, height: 900 },
      { label: 'Mensagens', src: '/projects/devmatch/chat.webp', alt: 'Chat do DevMatch conectado ao match', width: 1120, height: 900 },
    ],
  },
  {
    id: 'differenza',
    number: '002',
    title: 'Differenza',
    year: '2024',
    image: '/projects/differenza/after.webp',
    imageAlt: 'Redesign Differenza com hero dividido entre texto editorial e foto real do salão',
    imageWidth: 1440,
    imageHeight: 900,
    repository: 'https://github.com/WessYu/differenza-redesign',
    demo: 'https://wessyu.github.io/differenza-redesign/',
    summary: 'Redesign real com comparação antes e depois, nova hierarquia, serviços, unidades e experiência responsiva.',
    problem:
      'Revisar uma interface anterior com excesso de ruído visual, baixa hierarquia e navegação pouco clara, mantendo a marca reconhecível.',
    decisions: [
      'Auditoria do site original',
      'Nova arquitetura de conteúdo',
      'Reestruturação da navegação mobile',
      'Comparação visual entre antes e depois',
    ],
    implementation:
      'A nova versão reorganiza hero, serviços, espaço, unidades e chamadas de agendamento, usando fotos reais e uma direção visual mais consistente.',
    learnings: ['Auditoria visual', 'Hierarquia de conteúdo', 'Serviços e unidades', 'Comparação antes e depois'],
    technicalNotes: ['Redesign', 'Site anterior', 'Serviços', 'Unidades', 'Agendamento', 'Painel', 'Antes e depois'],
    process: ['Auditoria do site original', 'Direção visual', 'Reorganização do conteúdo', 'Implementação', 'Comparação antes e depois'],
    screens: [
      { label: 'Antes', src: '/projects/differenza/overview.webp', alt: 'Tela anterior do site Differenza usada como referência de comparação', width: 1900, height: 1080 },
      { label: 'Depois', src: '/projects/differenza/after.webp', alt: 'Nova página inicial do Differenza', width: 1440, height: 900 },
      { label: 'Serviços', src: '/projects/differenza/services.webp', alt: 'Seção de serviços do redesign Differenza', width: 1440, height: 900 },
      { label: 'O espaço', src: '/projects/differenza/experience.webp', alt: 'Seção sobre a experiência e o espaço do Differenza', width: 1440, height: 900 },
      { label: 'Unidades', src: '/projects/differenza/units.webp', alt: 'Seção de unidades do redesign Differenza', width: 1440, height: 900 },
    ],
  },
]

const EVOLUTION = [
  { year: '2023', items: ['HTML + CSS', 'JavaScript', 'Primeiros produtos web'] },
  { year: '2024', items: ['React', 'Interfaces responsivas', 'UI/UX aplicado ao código'] },
  { year: '2025', items: ['TypeScript', 'Next.js', 'Produtos com fluxos completos'] },
  { year: '2026', items: ['Node.js + PostgreSQL', 'Developer Tooling + CI', 'Performance + AppSec'] },
]

export default function App() {
  const [activeId, setActiveId] = useState(PROJECTS[0].id)
  const caseRef = useRef<HTMLElement | null>(null)

  const activeProject = useMemo(() => PROJECTS.find((project) => project.id === activeId) || PROJECTS[0], [activeId])

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isSmallScreen = window.matchMedia('(max-width: 720px)').matches
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    const parallaxItems = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'))

    if (prefersReducedMotion) {
      revealItems.forEach((item) => item.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible')
        })
      },
      { threshold: 0.16, rootMargin: '0px 0px -80px 0px' },
    )

    revealItems.forEach((item) => observer.observe(item))

    let scrollFrame = 0
    const updateParallax = () => {
      scrollFrame = 0
      const y = window.scrollY
      parallaxItems.forEach((item) => {
        const speed = Number(item.dataset.speed || 0.02)
        item.style.setProperty('--parallax-y', `${Math.round(y * speed)}px`)
      })
    }
    const onScroll = () => {
      if (scrollFrame || isSmallScreen) return
      scrollFrame = window.requestAnimationFrame(updateParallax)
    }

    if (!isSmallScreen) {
      updateParallax()
      window.addEventListener('scroll', onScroll, { passive: true })
    }

    return () => {
      observer.disconnect()
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame)
      if (!isSmallScreen) window.removeEventListener('scroll', onScroll)
    }
  }, [])

  function openCase(projectId: string) {
    setActiveId(projectId)
    window.setTimeout(() => caseRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 40)
  }

  return (
    <main className="archiveShell" id="top">
      <nav className="archiveNav" aria-label="Navegação principal">
        <a href="#top">WESSYU</a>
        <div>
          <a href="#toolkit">Tooling</a>
          <a href="#projects">Projetos</a>
          <a href="#sobre">Sobre</a>
          <a href="#contact">Contato</a>
        </div>
      </nav>

      <section className="intro" aria-labelledby="intro-title">
        <p className="cornerMark">WESSYU / SOFTWARE</p>
        <div className="introCenter" data-reveal>
          <h1 id="intro-title">Software Developer</h1>
          <p>
            Minha base é front-end. Hoje construo produtos web e as ferramentas ao redor deles: governança de código,
            performance, segurança de aplicações e gates de CI.
          </p>
          <span>React · TypeScript · Node.js · PostgreSQL</span>
        </div>
        <p className="introRole">
          Front-end como base.
          <br />
          Developer tooling como aprofundamento.
          <br />
          Produto, performance e AppSec.
        </p>
      </section>

      <section className="why" aria-labelledby="why-title">
        <div className="sectionTitle" data-reveal>
          <p className="metaLine">TRAJETÓRIA</p>
          <h2 id="why-title">Comecei pela interface. Hoje sigo o problema até a engenharia.</h2>
        </div>
        <p data-reveal>
          Design continua sendo a origem do meu olhar para hierarquia, clareza e experiência. No código, esse cuidado
          evoluiu para component APIs, análise estática, medições reais no navegador, backend, segurança e automação em CI.
        </p>
      </section>

      <EngineeringToolkit />

      <section className="work" id="projects" aria-label="Projetos selecionados">
        {ENGINEERING_TOOLS.map((tool) => (
          <ToolScene key={tool.id} tool={tool} />
        ))}

        {PROJECTS.map((project) => (
          <article className="projectScene" key={project.id}>
            <button
              className="projectImageButton"
              type="button"
              onClick={() => openCase(project.id)}
              aria-label={`Abrir estudo de caso ${project.title}`}
            >
              <img
                src={project.image}
                alt={project.imageAlt}
                width={project.imageWidth}
                height={project.imageHeight}
                loading="lazy"
                decoding="async"
                data-parallax
                data-speed="0.018"
              />
            </button>
            <div className="projectLabel" data-reveal>
              <span>{project.number} / {project.year}</span>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="caseStudy" id="case" ref={caseRef} aria-labelledby="case-title">
        <div className="caseHeader" data-reveal>
          <div>
            <p className="metaLine">{activeProject.number} / ESTUDO DE CASO</p>
            <h2 id="case-title">{activeProject.title}</h2>
          </div>
          <p>{activeProject.summary}</p>
        </div>

        <div className="caseHero" data-reveal>
          <img
            src={activeProject.image}
            alt={activeProject.imageAlt}
            width={activeProject.imageWidth}
            height={activeProject.imageHeight}
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="caseGrid">
          <CaseBlock title="Problema" text={activeProject.problem} />
          <ListBlock title="Decisões" items={activeProject.decisions} />
          <CaseBlock title="Implementação" text={activeProject.implementation} />
          <ListBlock title="Aprendizados" items={activeProject.learnings} />
        </div>

        <div className="technicalNotes" data-reveal>
          <p className="metaLine">Notas técnicas</p>
          <div className="noteGrid">
            {activeProject.technicalNotes.map((note) => <span key={note}>{note}</span>)}
          </div>
        </div>

        <div className="caseProcess" data-reveal>
          <p className="metaLine">Processo</p>
          <ol>
            {activeProject.process.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </div>

        <section className="screens" aria-label={`Telas do projeto ${activeProject.title}`}>
          {activeProject.screens.map((screen) => (
            <figure key={`${activeProject.id}-${screen.label}`} data-reveal>
              <figcaption>{screen.label}</figcaption>
              <img src={screen.src} alt={screen.alt} width={screen.width} height={screen.height} loading="lazy" decoding="async" />
            </figure>
          ))}
        </section>

        <div className="caseActions" data-reveal>
          <a href={activeProject.demo} target="_blank" rel="noreferrer">Ver projeto</a>
          <a href={activeProject.repository} target="_blank" rel="noreferrer">Ver código</a>
        </div>
      </section>

      <section className="evolution" id="evolution" aria-labelledby="evolution-title">
        <div className="sectionTitle" data-reveal>
          <p className="metaLine">Evolução</p>
          <h2 id="evolution-title">Uma trajetória acumulativa: interface, produto e engenharia.</h2>
        </div>
        <div className="evolutionGrid">
          {EVOLUTION.map((period) => (
            <article className="yearBlock" key={period.year} data-reveal>
              <h3>{period.year}</h3>
              {period.items.map((item) => <p key={item}>{item}</p>)}
            </article>
          ))}
        </div>
      </section>

      <TechStack />

      <section className="person" id="sobre" aria-labelledby="person-title">
        <div className="sectionTitle" data-reveal>
          <p className="metaLine">Sobre</p>
          <h2 id="person-title">Front-end é minha base. Engenharia de produto é a direção.</h2>
        </div>
        <p data-reveal>
          Caxias do Sul, RS — Brasil.
          <br />
          Trabalho principalmente com React, Next.js e TypeScript. Nos projetos mais recentes, aprofundei Node.js,
          PostgreSQL, Prisma, Fastify, Playwright, AST tooling, performance engineering e application security.
        </p>
      </section>

      <footer className="contact" id="contact">
        <p>
          Busco oportunidades como Software Developer, Front-End ou Full-Stack Júnior para contribuir em produtos reais
          e continuar crescendo com revisão de código, arquitetura, performance e segurança.
        </p>
        <div>
          <a href={LINKS.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={LINKS.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={LINKS.email}>E-mail</a>
          <a href={LINKS.resume} download>Baixar currículo</a>
        </div>
      </footer>
    </main>
  )
}

function EngineeringToolkit() {
  return (
    <section className="engineeringToolkit" id="toolkit" aria-labelledby="toolkit-title">
      <div className="engineeringToolkitLead" data-reveal>
        <div>
          <p className="metaLine">ENGINEERING TOOLKIT</p>
          <h2 id="toolkit-title">Quatro ferramentas. Um fluxo de engenharia.</h2>
        </div>
        <p>
          Component Vault, Velocity e SPECTER analisam áreas diferentes do produto. O NEXUS reúne esses sinais antes
          do merge e do deploy, sem apagar a evidência produzida por cada engine.
        </p>
      </div>
      <div className="engineeringToolkitGrid">
        {ENGINEERING_TOOLS.map((tool) => (
          <article className="engineeringTool" key={tool.id} data-reveal>
            <a className="engineeringToolIcon" href={tool.repository} target="_blank" rel="noreferrer" aria-label={`Abrir ${tool.title} no GitHub`}>
              <img src={tool.icon} alt="" width="84" height="84" loading="lazy" decoding="async" />
            </a>
            <p>{tool.category}</p>
            <h3>{tool.title}</h3>
            <span>{tool.stack}</span>
            <small>{tool.toolkitSummary}</small>
            <div>
              <a href={tool.repository} target="_blank" rel="noreferrer">GitHub ↗</a>
              {tool.npm && <a href={tool.npm} target="_blank" rel="noreferrer">npm ↗</a>}
              {tool.demo && <a href={tool.demo} target="_blank" rel="noreferrer">Demo ↗</a>}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function ToolScene({ tool }: { tool: EngineeringTool }) {
  return (
    <article className={`projectScene projectSceneSpotlight ${tool.id === 'nexus' ? 'nexusSpotlight' : ''} ${tool.id === 'velocity' ? 'velocitySpotlight' : ''} ${tool.id === 'specter' ? 'specterSpotlight' : ''}`}>
      <button
        className="projectImageButton"
        type="button"
        aria-label={`Abrir repositório do ${tool.title}`}
        onClick={() => window.open(tool.demo || tool.repository, '_blank', 'noopener,noreferrer')}
      >
        <img src={tool.image} alt={tool.imageAlt} width="1292" height="660" decoding="async" loading="lazy" />
      </button>
      <div className="projectLabel componentVaultLabel is-visible" data-reveal>
        <span className="componentVaultKicker">{tool.kicker}</span>
        <h2>{tool.title}</h2>
        {tool.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        <div className="componentVaultActions">
          {tool.demo && <a href={tool.demo} target="_blank" rel="noreferrer">Ver produto ↗</a>}
          <a href={tool.repository} target="_blank" rel="noreferrer">Ver código ↗</a>
          {tool.npm && <a href={tool.npm} target="_blank" rel="noreferrer">Ver npm ↗</a>}
        </div>
      </div>
      <div className="componentVaultStamp" aria-hidden="true">
        <span>{tool.category}</span>
        <b>{tool.stamp}</b>
      </div>
    </article>
  )
}

function CaseBlock({ title, text }: { title: string; text: string }) {
  return (
    <article className="caseBlock" data-reveal>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  )
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="listBlock" data-reveal>
      <h3>{title}</h3>
      <div>{items.map((item) => <p key={item}>{item}</p>)}</div>
    </article>
  )
}
