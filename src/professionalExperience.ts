type SectionKey = 'top' | 'projects' | 'sobre' | 'contact'

const DESKTOP_QUERY = '(pointer: fine) and (min-width: 900px)'

function smoothScrollTo(target: HTMLElement) {
  const offset = Math.min(92, window.innerWidth * 0.08)
  const top = target.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top, behavior: 'smooth' })
}

function createProgress() {
  const root = document.createElement('div')
  root.className = 'experienceProgress'
  root.setAttribute('aria-hidden', 'true')
  root.innerHTML = '<span></span>'
  document.body.append(root)

  const bar = root.firstElementChild as HTMLElement
  let frame = 0

  const update = () => {
    frame = 0
    const scrollable = document.documentElement.scrollHeight - window.innerHeight
    const progress = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0
    bar.style.transform = `scaleX(${progress})`
  }

  const onScroll = () => {
    if (!frame) frame = window.requestAnimationFrame(update)
  }

  update()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', update)
}

function createCursor() {
  if (!window.matchMedia(DESKTOP_QUERY).matches) return

  const cursor = document.createElement('div')
  cursor.className = 'experienceCursor'
  cursor.setAttribute('aria-hidden', 'true')
  cursor.innerHTML = '<span>VIEW</span>'
  document.body.append(cursor)

  let x = window.innerWidth / 2
  let y = window.innerHeight / 2
  let targetX = x
  let targetY = y
  let raf = 0

  const render = () => {
    raf = 0
    x += (targetX - x) * 0.16
    y += (targetY - y) * 0.16
    cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`
    if (Math.abs(targetX - x) > 0.2 || Math.abs(targetY - y) > 0.2) raf = window.requestAnimationFrame(render)
  }

  const move = (event: MouseEvent) => {
    targetX = event.clientX
    targetY = event.clientY
    if (!raf) raf = window.requestAnimationFrame(render)
  }

  const setLabel = (label: string, active: boolean) => {
    const text = cursor.firstElementChild as HTMLElement
    text.textContent = label
    cursor.classList.toggle('is-active', active)
  }

  document.addEventListener('mousemove', move, { passive: true })
  document.querySelectorAll<HTMLElement>('a, button').forEach((element) => {
    element.addEventListener('mouseenter', () => {
      const label = element.dataset.cursor || (element.tagName === 'BUTTON' ? 'VIEW' : 'OPEN')
      setLabel(label, true)
    })
    element.addEventListener('mouseleave', () => setLabel('VIEW', false))
  })

  document.addEventListener('mouseleave', () => cursor.classList.remove('is-visible'))
  document.addEventListener('mouseenter', () => cursor.classList.add('is-visible'))
}

function createProjectRail() {
  const work = document.querySelector<HTMLElement>('#projects')
  if (!work) return

  const scenes = Array.from(work.querySelectorAll<HTMLElement>('.projectScene'))
  if (!scenes.length) return

  const rail = document.createElement('aside')
  rail.className = 'projectRail'
  rail.setAttribute('aria-label', 'Navegação dos projetos')
  rail.innerHTML = `
    <span class="projectRailLabel">INDEX</span>
    <div class="projectRailItems">
      ${scenes.map((scene, index) => `<button type="button" data-project-index="${index}" aria-label="Ir para projeto ${String(index + 1).padStart(2, '0')}">${String(index + 1).padStart(2, '0')}</button>`).join('')}
    </div>
  `
  document.body.append(rail)

  const buttons = Array.from(rail.querySelectorAll<HTMLButtonElement>('[data-project-index]'))
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => smoothScrollTo(scenes[index]))
  })

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const index = scenes.indexOf(entry.target as HTMLElement)
        buttons.forEach((button, buttonIndex) => button.classList.toggle('is-active', buttonIndex === index))
      })
    },
    { threshold: 0.5 }
  )

  scenes.forEach((scene) => observer.observe(scene))
  rail.classList.add('is-ready')
}

function wireNavigation() {
  const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('.archiveNav a[href^="#"]'))
  const sections: Array<{ id: SectionKey; element: HTMLElement }> = []

  for (const id of ['top', 'projects', 'sobre', 'contact'] as SectionKey[]) {
    const element = document.getElementById(id)
    if (element) sections.push({ id, element })
  }

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      const id = link.getAttribute('href')?.slice(1)
      const target = id ? document.getElementById(id) : null
      if (!target) return
      event.preventDefault()
      smoothScrollTo(target)
    })
  })

  const updateActive = () => {
    const marker = window.scrollY + window.innerHeight * 0.35
    let active: SectionKey = 'top'
    sections.forEach(({ id, element }) => {
      if (element.offsetTop <= marker) active = id
    })

    links.forEach((link) => {
      const id = link.getAttribute('href')?.slice(1)
      link.classList.toggle('is-current', id === active || (active === 'top' && id === 'top'))
    })
  }

  let frame = 0
  const onScroll = () => {
    if (!frame) frame = window.requestAnimationFrame(() => {
      frame = 0
      updateActive()
    })
  }

  updateActive()
  window.addEventListener('scroll', onScroll, { passive: true })
}

function enhanceProjectInteractions() {
  document.querySelectorAll<HTMLElement>('.projectScene').forEach((scene, index) => {
    scene.style.setProperty('--project-index', String(index))
    const button = scene.querySelector<HTMLElement>('.projectImageButton')
    if (button) button.dataset.cursor = 'CASE'

    const image = scene.querySelector<HTMLImageElement>('img')
    if (image) {
      image.addEventListener('load', () => image.classList.add('is-loaded'), { once: true })
      if (image.complete) image.classList.add('is-loaded')
    }
  })
}

export function initProfessionalExperience() {
  if (document.documentElement.dataset.professionalExperience === 'ready') return
  document.documentElement.dataset.professionalExperience = 'ready'
  document.body.classList.add('professionalExperience')

  createProgress()
  createCursor()
  createProjectRail()
  wireNavigation()
  enhanceProjectInteractions()
}
