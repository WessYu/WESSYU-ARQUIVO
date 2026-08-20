import { useEffect, useState } from 'react'
import './reference-portfolio.css'

type Project = {
  number: string
  title: string
  image: string
  alt: string
  href: string
}

const projects: Project[] = [
  {
    number: '01',
    title: 'Component Vault',
    image: '/projects/component-vault/landing.svg',
    alt: 'Component Vault interface',
    href: 'https://github.com/WessYu/component-vault',
  },
  {
    number: '02',
    title: 'DevMatch',
    image: '/projects/devmatch/home.webp',
    alt: 'DevMatch interface',
    href: 'https://devmatch-neon.vercel.app',
  },
  {
    number: '03',
    title: 'Receitas',
    image: '/projects/receitas/home.webp',
    alt: 'Receitas interface',
    href: 'https://receitas-delta-eight.vercel.app',
  },
  {
    number: '04',
    title: 'Differenza',
    image: '/projects/differenza/after.webp',
    alt: 'Differenza redesign',
    href: 'https://wessyu.github.io/differenza-redesign/',
  },
]

const scenes = ['intro', 'experience', 'design', 'thinking', 'contact']

function useActiveScene() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const elements = scenes
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element))

    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (!current) return
        const index = elements.indexOf(current.target as HTMLElement)
        if (index >= 0) setActive(index)
      },
      { threshold: [0.5, 0.7] },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return active
}

function ProjectRail({ active }: { active: number }) {
  return (
    <div className="ref-project-rail" aria-label="Selected projects">
      {projects.map((project, index) => (
        <a
          className={`ref-project-card ${active === index ? 'is-featured' : ''}`}
          href={project.href}
          target="_blank"
          rel="noreferrer"
          key={project.number}
          aria-label={`Abrir projeto ${project.title}`}
        >
          <img src={project.image} alt="" aria-hidden="true" loading={index === 0 ? 'eager' : 'lazy'} />
          <span className="ref-project-card-shade" aria-hidden="true" />
          <span className="ref-project-card-meta">
            <b>{project.number}</b>
            <strong>{project.title}</strong>
          </span>
        </a>
      ))}
    </div>
  )
}

export default function ReferencePortfolio() {
  const active = useActiveScene()

  return (
    <main className="ref-site">
      <div className="ref-grain" aria-hidden="true" />
      <div className="ref-top-plane" aria-hidden="true" />

      <a className="ref-corner-mark" href="#intro" aria-label="Wess — início">WESS<span>®</span></a>
      <div className="ref-corner-status"><i aria-hidden="true" /> available for work</div>

      <div className="ref-scene-counter" aria-hidden="true">
        <span>{String(active + 1).padStart(2, '0')}</span>
        <span>05</span>
      </div>

      <section className="ref-scene ref-scene-intro" id="intro">
        <div className="ref-scene-inner">
          <span className="ref-eyebrow">Independent front-end developer</span>
          <div className="ref-hero-word" aria-label="Wess Studio">
            <span>STU</span><span className="ref-hero-image"><img src="/projects/component-vault/landing.svg" alt="Component Vault" /></span><span>DIO</span>
          </div>
          <div className="ref-hero-foot">
            <span>Digital craft / 2026</span>
            <a href="#experience">Scroll to explore <b>↓</b></a>
          </div>
        </div>
      </section>

      <section className="ref-scene ref-scene-experience" id="experience">
        <div className="ref-scene-inner">
          <span className="ref-eyebrow">01 — Experience</span>
          <h1 className="ref-scene-title">Criando <em>experiências</em> digitais de alto impacto para marcas e produtos extraordinários.</h1>
          <span className="ref-side-note">Design / Interface / Engineering</span>
        </div>
      </section>

      <section className="ref-scene ref-scene-design" id="design">
        <div className="ref-scene-inner">
          <span className="ref-eyebrow">02 — Design</span>
          <div className="ref-collage ref-collage-design" aria-hidden="true">
            <img className="ref-collage-image image-one" src="/projects/devmatch/home.webp" alt="" />
            <img className="ref-collage-image image-two" src="/projects/receitas/home.webp" alt="" />
            <img className="ref-collage-image image-three" src="/projects/differenza/after.webp" alt="" />
          </div>
          <h2 className="ref-scene-title">Designs criados sob medida para o seu negócio, <em>mas sem limites para o seu impacto.</em></h2>
        </div>
      </section>

      <section className="ref-scene ref-scene-thinking" id="thinking">
        <div className="ref-scene-inner">
          <span className="ref-eyebrow">03 — Thinking</span>
          <div className="ref-thinking-image" aria-hidden="true">
            <img src="/projects/component-vault/overview.svg" alt="" />
          </div>
          <h2 className="ref-scene-title">Transformamos ideias em <em>interfaces</em> e produtos digitais inesquecíveis.</h2>
          <p className="ref-thinking-note">Design + engineering<br />React / TypeScript / Next.js</p>
        </div>
      </section>

      <section className="ref-scene ref-scene-contact" id="contact">
        <div className="ref-scene-inner">
          <span className="ref-eyebrow">04 — Contact</span>
          <h2 className="ref-contact-title">Pronto para elevar o nível do seu <em>design?</em></h2>
          <a className="ref-contact-button" href="mailto:wess.c@proton.me">Iniciar um projeto agora <span>↗</span></a>
          <div className="ref-contact-links">
            <a href="https://github.com/WessYu" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/wesley-santos-cruz-b57589213/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="/Wesley_Cruz_CV_PT.pdf">Resume ↗</a>
          </div>
        </div>
      </section>

      <ProjectRail active={active} />
    </main>
  )
}
