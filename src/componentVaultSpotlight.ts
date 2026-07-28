const COMPONENT_VAULT_DEMO = 'https://component-vault-dun.vercel.app'
const COMPONENT_VAULT_REPOSITORY = 'https://github.com/WessYu/component-vault'

function updateGeneratedReelDetails(scene: HTMLElement) {
  const topMeta = scene.querySelector<HTMLElement>('.projectReelTopMeta')
  if (topMeta) {
    topMeta.innerHTML = '<em>2026</em><span>DEV TOOL / DESIGN SYSTEM</span><small>PRODUTO + FRONT-END + BACK-END</small>'
  }

  const sideInfo = scene.querySelector<HTMLElement>('.projectReelSideInfo')
  if (sideInfo) {
    sideInfo.innerHTML = `
      <p>DESTAQUES</p>
      <ol>
        <li><b>01</b><span>CONVEX BACKEND</span></li>
        <li><b>02</b><span>CONTAS + FAVORITOS</span></li>
        <li><b>03</b><span>MOTION EXPERIENCES</span></li>
      </ol>
      <div><span>NEXT.JS</span><span>TYPESCRIPT</span><span>CONVEX</span><span>FRAMER MOTION</span></div>
    `
  }
}

export function mountComponentVaultSpotlight() {
  const reel = document.querySelector<HTMLElement>('.work')
  if (!reel) return

  const existing = reel.querySelector<HTMLElement>('[data-component-vault-spotlight]')
  if (existing) {
    window.requestAnimationFrame(() => updateGeneratedReelDetails(existing))
    return
  }

  const scene = document.createElement('article')
  scene.className = 'projectScene projectSceneSpotlight'
  scene.dataset.componentVaultSpotlight = 'true'

  scene.innerHTML = `
    <button class="projectImageButton componentVaultImageButton" type="button" aria-label="Abrir Component Vault">
      <img
        src="/projects/component-vault/overview.svg"
        alt="Component Vault com biblioteca de componentes, experiências interativas e ferramentas de workspace"
        width="1292"
        height="660"
        decoding="async"
        fetchpriority="high"
      />
    </button>

    <div class="projectLabel componentVaultLabel is-visible" data-reveal>
      <span class="componentVaultKicker">FEATURED / 2026</span>
      <h2>Component Vault</h2>
      <p>Workspace full stack para criar, organizar, testar e salvar componentes de interface, com contas, favoritos, administração, Convex e experiências de motion.</p>
      <div class="componentVaultActions">
        <a href="${COMPONENT_VAULT_DEMO}" target="_blank" rel="noreferrer">Ver produto ↗</a>
        <a href="${COMPONENT_VAULT_REPOSITORY}" target="_blank" rel="noreferrer">Ver código ↗</a>
      </div>
    </div>

    <div class="componentVaultStamp" aria-hidden="true">
      <span>FEATURED PROJECT</span>
      <b>CV</b>
    </div>
  `

  scene.querySelector<HTMLButtonElement>('.componentVaultImageButton')?.addEventListener('click', () => {
    window.open(COMPONENT_VAULT_DEMO, '_blank', 'noopener,noreferrer')
  })

  reel.prepend(scene)

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => updateGeneratedReelDetails(scene))
  })
}
