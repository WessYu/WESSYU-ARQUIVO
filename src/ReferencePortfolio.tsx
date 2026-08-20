import { useEffect, useRef, useState } from 'react'
import './reference-portfolio.css'

type Tile = {
  src: string
  alt: string
  className: string
}

const tiles: Tile[] = [
  { src: '/projects/component-vault/landing.svg', alt: 'Component Vault interface', className: 'tile-a' },
  { src: '/projects/devmatch/home.webp', alt: 'DevMatch interface', className: 'tile-b' },
  { src: '/projects/receitas/home.webp', alt: 'Receitas interface', className: 'tile-c' },
  { src: '/projects/differenza/after.webp', alt: 'Differenza redesign', className: 'tile-d' },
  { src: '/projects/devmatch/feed.webp', alt: 'DevMatch feed interface', className: 'tile-e' },
]

const scenes = [
  { id: 'intro', label: '01' },
  { id: 'work', label: '02' },
  { id: 'design', label: '03' },
  { id: 'thinking', label: '04' },
  { id: 'contact', label: '05' },
]

function useSceneProgress() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const elements = scenes
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (!visible) return
        const index = elements.indexOf(visible.target as HTMLElement)
        if (index >= 0) setActive(index)
      },
      { threshold: [0.45, 0.7] },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return active
}

function FloatingTile({ tile, speed = 1 }: { tile: Tile; speed?: number }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    let frame = 0
    const onPointerMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const x = (event.clientX / window.innerWidth - 0.5) * 2
        const y = (event.clientY / window.innerHeight - 0.5) * 2
        element.style.setProperty('--mx', `${x * 8 * speed}px`)
        element.style.setProperty('--my', `${y * 8 * speed}px`)
      })
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', onPointerMove)
    }
  }, [speed])

  return (
    <div ref={ref} className={`ref-tile ${tile.className}`}>
      <img src={tile.src} alt={tile.alt} loading="lazy" />
    </div>
  )
}

function ProjectRail() {
  return (
    <div className="ref-rail" aria-label="Projetos selecionados">
      {tiles.slice(0, 4).map((tile, index) => (
        <a className="ref-rail-card" href={['https://github.com/WessYu/component-vault', 'https://devmatch-neon.vercel.app', 'https://receitas-delta-eight.vercel.app', 'https://wessyu.github.io/differenza-redesign/'][index]} target="_blank" rel="noreferrer" key={tile.src}>
          <img src={tile.src} alt="" aria-hidden="true" />
          <span>{String(index + 1).padStart(2, '0')}</span>
        </a>
      ))}
    </div>
  )
}

export default function ReferencePortfolio() {
  const active = useSceneProgress()

  return (
    <main className="ref-site">
      <div className="ref-grain" aria-hidden="true" />

      <header className="ref-header">
        <a href="#intro" className="ref-mark" aria-label="Wess — início">WESS<span>®</span></a>
        <div className="ref-header-center">Independent front-end developer</div>
        <div className="ref-header-right"><span>Brazil</span><span>Available for work</span><i aria-hidden="true" /></div>
      </header>

      <aside className="ref-progress" aria-label="Navegação das seções">
        <span>{String(active + 1).padStart(2, '0')}</span>
        <div>{scenes.map((scene, index) => <a key={scene.id} className={active === index ? 'is-active' : ''} href={`#${scene.id}`} aria-label={`Ir para seção ${scene.label}`}><i /></a>)}</div>
        <span>{String(scenes.length).padStart(2, '0')}</span>
      </aside>

      <section className="ref-scene ref-hero-scene" id="intro">
        <div className="ref-scene-meta"><span>Portfolio / 2026</span><span>001 — 005</span></div>
        <div className="ref-hero-copy">
          <span className="ref-hero-kicker">Wess — digital craft</span>
          <h1><span>STU<span className="ref-cut">D</span>IO</span></h1>
          <div className="ref-hero-art"><img src="/projects/component-vault/landing.svg" alt="Component Vault" /></div>
          <span className="ref-hero-number">001</span>
        </div>
        <div className="ref-hero-bottom">
          <p>Construindo experiências digitais<br />para marcas, produtos e pessoas.</p>
          <a href="#work">Explore <span>↓</span></a>
        </div>
      </section>

      <section className="ref-scene ref-work-scene" id="work">
        <div className="ref-scene-meta"><span>02 / Selected work</span><span>Scroll — drag — explore</span></div>
        <div className="ref-statement ref-statement-wide">Criando <em>experiências</em> digitais de alto impacto para marcas e produtos extraordinários.</div>
        <ProjectRail />
        <div className="ref-scene-caption"><span>Selected work</span><span>Component Vault / DevMatch / Receitas / Differenza</span></div>
      </section>

      <section className="ref-scene ref-design-scene" id="design">
        <div className="ref-scene-meta"><span>03 / Design</span><span>Direction / Interface / Motion</span></div>
        <div className="ref-statement ref-statement-design">Designs criados sob medida para o seu negócio, <em>mas sem limites para o seu impacto.</em></div>
        <FloatingTile tile={tiles[1]} speed={0.7} />
        <FloatingTile tile={tiles[2]} speed={1} />
        <FloatingTile tile={tiles[3]} speed={1.3} />
        <div className="ref-design-index">02<br />03<br />04</div>
      </section>

      <section className="ref-scene ref-thinking-scene" id="thinking">
        <div className="ref-scene-meta"><span>04 / Thinking</span><span>Design + engineering</span></div>
        <div className="ref-statement ref-statement-thinking">Transformamos ideias em <em>interfaces</em> e produtos digitais inesquecíveis.</div>
        <div className="ref-thinking-art ref-thinking-one"><img src="/projects/devmatch/dev.webp" alt="DevMatch developer profile" /></div>
        <div className="ref-thinking-art ref-thinking-two"><img src="/projects/receitas/recipe.webp" alt="Receitas recipe interface" /></div>
        <div className="ref-thinking-art ref-thinking-three"><img src="/projects/component-vault/overview.svg" alt="Component Vault architecture" /></div>
        <div className="ref-thinking-copy"><span>What I bring</span><p>Direção visual, engenharia de interface, sistemas de componentes e atenção obsessiva aos detalhes.</p></div>
      </section>

      <section className="ref-scene ref-contact-scene" id="contact">
        <div className="ref-scene-meta"><span>05 / Contact</span><span>Wess — Brazil</span></div>
        <div className="ref-contact-statement">Pronto para elevar o nível do seu <em>produto?</em></div>
        <a className="ref-contact-button" href="mailto:wess.c@proton.me">Iniciar um projeto <span>↗</span></a>
        <div className="ref-contact-footer"><div><a href="https://github.com/WessYu" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/wesley-santos-cruz-b57589213/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="/Wesley_Cruz_CV_PT.pdf">Resume ↗</a></div><span>© 2026 Wess</span></div>
      </section>
    </main>
  )
}
