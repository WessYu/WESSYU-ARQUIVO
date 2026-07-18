let cleanupProjectReel: (() => void) | null = null

export function initProjectReel() {
  cleanupProjectReel?.()

  const reel = document.querySelector<HTMLElement>('.work')
  const scenes = Array.from(reel?.querySelectorAll<HTMLElement>('.projectScene') ?? [])

  if (!reel || scenes.length === 0) return

  reel.classList.add('projectReel')

  const nav = document.createElement('aside')
  nav.className = 'projectReelNav'
  nav.setAttribute('aria-label', 'Navegação dos projetos')

  const counter = document.createElement('div')
  counter.className = 'projectReelCounter'

  const current = document.createElement('strong')
  current.textContent = '01'

  const total = document.createElement('span')
  total.textContent = `/ ${String(scenes.length).padStart(2, '0')}`

  counter.append(current, total)

  const controls = document.createElement('div')
  controls.className = 'projectReelControls'

  const buttons = scenes.map((scene, index) => {
    const projectTitle = scene.querySelector('h2')?.textContent?.trim() || `Projeto ${index + 1}`
    const projectNumber = String(index + 1).padStart(2, '0')

    scene.dataset.reelIndex = projectNumber
    scene.id = `project-${projectNumber}`

    const button = document.createElement('button')
    button.type = 'button'
    button.setAttribute('aria-label', `Ir para ${projectTitle}`)
    button.innerHTML = `<span>${projectNumber}</span><i aria-hidden="true"></i>`
    button.addEventListener('click', () => goTo(index))
    controls.appendChild(button)

    return button
  })

  const hint = document.createElement('p')
  hint.className = 'projectReelHint'
  hint.textContent = 'SCROLL / SETAS'

  nav.append(counter, controls, hint)
  document.body.appendChild(nav)

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  let activeIndex = 0
  let frame = 0

  function setActive(index: number) {
    if (index === activeIndex && scenes[index]?.classList.contains('is-reel-active')) return

    activeIndex = index
    current.textContent = String(index + 1).padStart(2, '0')

    scenes.forEach((scene, sceneIndex) => {
      scene.classList.toggle('is-reel-active', sceneIndex === index)
    })

    buttons.forEach((button, buttonIndex) => {
      const isActive = buttonIndex === index
      button.classList.toggle('is-active', isActive)
      button.setAttribute('aria-current', isActive ? 'true' : 'false')
    })
  }

  function goTo(index: number) {
    const nextIndex = Math.max(0, Math.min(scenes.length - 1, index))
    scenes[nextIndex]?.scrollIntoView({
      behavior: reducedMotion ? 'auto' : 'smooth',
      block: 'start',
    })
  }

  function updateFromViewport() {
    frame = 0
    const reelRect = reel.getBoundingClientRect()
    const reelIsVisible = reelRect.top < window.innerHeight * 0.72 && reelRect.bottom > window.innerHeight * 0.28

    document.body.classList.toggle('project-reel-in-view', reelIsVisible)

    if (!reelIsVisible) return

    const viewportCenter = window.innerHeight / 2
    let closestIndex = 0
    let closestDistance = Number.POSITIVE_INFINITY

    scenes.forEach((scene, index) => {
      const rect = scene.getBoundingClientRect()
      const sceneCenter = rect.top + rect.height / 2
      const distance = Math.abs(sceneCenter - viewportCenter)

      if (distance < closestDistance) {
        closestDistance = distance
        closestIndex = index
      }
    })

    setActive(closestIndex)
  }

  function requestUpdate() {
    if (frame) return
    frame = window.requestAnimationFrame(updateFromViewport)
  }

  function onKeyDown(event: KeyboardEvent) {
    if (!document.body.classList.contains('project-reel-in-view')) return

    const target = event.target as HTMLElement | null
    if (target?.matches('input, textarea, select, [contenteditable="true"]')) return

    if (event.key === 'ArrowDown' || event.key === 'PageDown') {
      event.preventDefault()
      goTo(activeIndex + 1)
    }

    if (event.key === 'ArrowUp' || event.key === 'PageUp') {
      event.preventDefault()
      goTo(activeIndex - 1)
    }
  }

  setActive(0)
  updateFromViewport()

  window.addEventListener('scroll', requestUpdate, { passive: true })
  window.addEventListener('resize', requestUpdate)
  window.addEventListener('keydown', onKeyDown)

  cleanupProjectReel = () => {
    if (frame) window.cancelAnimationFrame(frame)
    window.removeEventListener('scroll', requestUpdate)
    window.removeEventListener('resize', requestUpdate)
    window.removeEventListener('keydown', onKeyDown)
    document.body.classList.remove('project-reel-in-view')
    nav.remove()
    reel.classList.remove('projectReel')
    scenes.forEach((scene) => scene.classList.remove('is-reel-active'))
  }
}
