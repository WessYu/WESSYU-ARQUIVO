(() => {
  const WORK_ID = 'component-vault-feature'

  function insertFeature() {
    const work = document.querySelector('.work')
    if (!work || document.getElementById(WORK_ID)) return Boolean(work)

    const scene = document.createElement('article')
    scene.className = 'projectScene'
    scene.id = WORK_ID
    scene.innerHTML = `
      <a class="projectImageButton" href="https://github.com/WessYu/component-vault" target="_blank" rel="noreferrer" aria-label="Abrir Component Vault no GitHub">
        <img
          src="/projects/component-vault/landing.svg"
          alt="Component Vault — Component Governance & Developer Tooling"
          width="1600"
          height="900"
          loading="lazy"
          decoding="async"
          data-parallax
          data-speed="0.018"
        />
      </a>
      <div class="projectLabel is-visible">
        <span>000 / 2026 · DESTAQUE</span>
        <h2>Component Vault</h2>
        <p>Ferramenta de governança para ecossistemas Front-End, combinando análise de código, regras de uso, validação e uma CLI distribuída via NPX.</p>
      </div>
    `

    work.prepend(scene)
    return true
  }

  if (!insertFeature()) {
    const observer = new MutationObserver(() => {
      if (insertFeature()) observer.disconnect()
    })
    observer.observe(document.getElementById('root') || document.body, { childList: true, subtree: true })
  }
})()
