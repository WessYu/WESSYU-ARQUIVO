import { useEffect } from 'react'
import './reference-portfolio.css'

const projects = [
  { n: '01', title: 'Component Vault', kind: 'Tooling / Front-end', year: '2026', image: '/projects/component-vault/landing.svg', href: 'https://github.com/WessYu/component-vault' },
  { n: '02', title: 'DevMatch', kind: 'Full-stack / Product', year: '2026', image: '/projects/devmatch/home.webp', href: 'https://devmatch-neon.vercel.app' },
  { n: '03', title: 'Receitas', kind: 'Full-stack / Product', year: '2026', image: '/projects/receitas/home.webp', href: 'https://receitas-delta-eight.vercel.app' },
  { n: '04', title: 'Differenza', kind: 'Redesign / UX', year: '2024', image: '/projects/differenza/after.webp', href: 'https://wessyu.github.io/differenza-redesign/' },
]

function Reveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('[data-ref-reveal]')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
  return null
}

export default function ReferencePortfolio() {
  return (
    <main className="ref-site">
      <Reveal />
      <div className="ref-grain" aria-hidden="true" />
      <header className="ref-nav">
        <a className="ref-logo" href="#top" aria-label="Wess — início">WESS<span>®</span></a>
        <nav><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
        <a className="ref-status" href="mailto:wess.c@proton.me"><i /> Available for work</a>
      </header>

      <section className="ref-hero" id="top">
        <div className="ref-hero-meta"><span>Independent Front-end Developer</span><span>Brazil — 2026</span></div>
        <div className="ref-hero-word" data-ref-reveal>
          <span className="ref-word-main">WESS</span><span className="ref-word-outline">STUDIO</span>
          <div className="ref-portrait-wrap"><img src="/profile.jpg" alt="Wess" /><span>01 — 04</span></div>
        </div>
        <div className="ref-hero-bottom"><p>Design-driven front-end<br />development for digital products.</p><a href="#statement">Scroll to explore <b>↓</b></a></div>
      </section>

      <section className="ref-statement" id="statement">
        <div className="ref-kicker">01 / INTRO</div>
        <h1 data-ref-reveal>Construo <em>experiências</em><br />digitais de alto impacto<br />para produtos extraordinários.</h1>
        <div className="ref-statement-foot"><span>Design + Code</span><span>React / Next.js / TypeScript</span></div>
      </section>

      <section className="ref-marquee" aria-label="Áreas de atuação"><div>INTERFACE DESIGN&nbsp;&nbsp; / &nbsp;&nbsp;FRONT-END&nbsp;&nbsp; / &nbsp;&nbsp;PRODUCT THINKING&nbsp;&nbsp; / &nbsp;&nbsp;INTERACTION&nbsp;&nbsp; / &nbsp;&nbsp;FRONT-END&nbsp;&nbsp; / &nbsp;&nbsp;</div></section>

      <section className="ref-image-break">
        <div className="ref-image-large" data-ref-reveal><img src="/projects/devmatch/home.webp" alt="DevMatch interface" /></div>
        <div className="ref-image-small" data-ref-reveal><img src="/projects/differenza/after.webp" alt="Differenza redesign" /></div>
        <p>Interfaces que precisam<br /><strong>funcionar</strong> antes de impressionar.</p>
      </section>

      <section className="ref-statement ref-statement-dark">
        <div className="ref-kicker">02 / APPROACH</div>
        <h2 data-ref-reveal>Não faço apenas telas.<br />Transformo ideias em<br /><em>interfaces fluidas.</em></h2>
        <div className="ref-approach-grid"><p>Comecei pelo design. A programação veio depois — e essa combinação mudou a forma como penso produto, interação, componente e detalhe.</p><ol><li>01 — Visual systems</li><li>02 — Front-end architecture</li><li>03 — Motion & interaction</li><li>04 — Responsive experiences</li></ol></div>
      </section>

      <section className="ref-work" id="work">
        <div className="ref-work-head"><div className="ref-kicker">03 / SELECTED WORK</div><span>04 projects / 2024—2026</span></div>
        {projects.map((project, index) => <a className="ref-project" href={project.href} target="_blank" rel="noreferrer" key={project.n} data-ref-reveal>
          <div className="ref-project-top"><span>{project.n}</span><span>{project.kind}</span><span>{project.year}</span></div>
          <div className="ref-project-media"><img src={project.image} alt={project.title} loading={index === 0 ? 'eager' : 'lazy'} /></div>
          <div className="ref-project-bottom"><h3>{project.title}</h3><span>View project ↗</span></div>
        </a>)}
      </section>

      <section className="ref-vault">
        <div className="ref-kicker">04 / FEATURED</div>
        <div className="ref-vault-copy"><span className="ref-vault-label">COMPONENT VAULT</span><h2>Governança de componentes<br /><em>como produto.</em></h2><p>Uma ferramenta que transforma consistência de UI em uma parte verificável do processo de desenvolvimento.</p><a href="https://github.com/WessYu/component-vault" target="_blank" rel="noreferrer">Explore the project ↗</a></div>
        <div className="ref-vault-art"><img src="/projects/component-vault/overview.svg" alt="Component Vault overview" /></div>
      </section>

      <section className="ref-about" id="about">
        <div className="ref-kicker">05 / ABOUT</div>
        <h2 data-ref-reveal>Designer desde 2020.<br /><em>Front-end developer</em><br />desde 2023.</h2>
        <div className="ref-about-bottom"><p>Meu trabalho fica entre direção visual, engenharia de interface e construção de produtos. Gosto de sistemas claros, detalhes precisos e experiências que não parecem montadas a partir de um template.</p><div><span>Based in Brazil</span><span>Open to remote opportunities</span></div></div>
      </section>

      <section className="ref-contact" id="contact">
        <div className="ref-kicker">06 / CONTACT</div><h2>Pronto para elevar<br />o nível do seu<br /><em>produto?</em></h2>
        <a className="ref-email" href="mailto:wess.c@proton.me">wess.c@proton.me <span>↗</span></a>
        <div className="ref-contact-links"><a href="https://github.com/WessYu" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/wesley-santos-cruz-b57589213/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="/Wesley_Cruz_CV_PT.pdf">Resume ↗</a></div>
      </section>
      <footer className="ref-footer"><span>© 2026 Wess</span><span>Built with React + TypeScript</span><a href="#top">Back to top ↑</a></footer>
    </main>
  )
}
