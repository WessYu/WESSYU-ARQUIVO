const COMPONENT_VAULT_DEMO = 'https://component-vault-dun.vercel.app'
const COMPONENT_VAULT_REPOSITORY = 'https://github.com/WessYu/component-vault'

function updateGeneratedReelDetails(scene: HTMLElement) {
  const topMeta = scene.querySelector<HTMLElement>('.projectReelTopMeta')
  if (topMeta) {
    topMeta.innerHTML = '<em>2026</em><span>DEV TOOL / COMPONENT GOVERNANCE</span><small>FRONT-END + BACK-END + TOOLING</small>'
  }

  const sideInfo = scene.querySelector<HTMLElement>('.projectReelSideInfo')
  if (sideInfo) {
    sideInfo.innerHTML = `
      <p>DESTAQUES</p>
      <ol>
        <li><b>01</b><span>COMPONENT GOVERNANCE</span></li>
        <li><b>02</b><span>NPX CLI / DEVELOPER TOOLING</span></li>
        <li><b>03</b><span>CONVEX BACKEND + AUTH</span></li>
      </ol>
      <div><span>NEXT.JS</span><span>TYPESCRIPT</span><span>CONVEX</span><span>NPX</span></div>
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
        alt="Component Vault com biblioteca de componentes, governança, experiências interativas e ferramentas de desenvolvimento"
        width="1292"
        height="660"
        decoding="async"
        loading="lazy"
      />
    </button>

    <div class="projectLabel componentVaultLabel is-visible" data-reveal>
      <span class="componentVaultKicker">DEV TOOL / 2026</span>
      <h2>Component Vault</h2>
      <p>Ferramenta full stack para criar, organizar, reutilizar e governar componentes de interface, com autenticação, administração, Convex e uma CLI executável via NPX.</p>
      <div class="componentVaultActions">
        <a href="${COMPONENT_VAULT_DEMO}" target="_blank" rel="noreferrer">Ver produto ↗</a>
        <a href="${COMPONENT_VAULT_REPOSITORY}" target="_blank" rel="noreferrer">Ver código ↗</a>
      </div>
    </div>

    <div class="componentVaultStamp" aria-hidden="true">
      <span>DEV TOOL</span>
      <b>CV</b>
    </div>
  `

  scene.querySelector<HTMLButtonElement>('.componentVaultImageButton')?.addEventListener('click', () => {
    window.open(COMPONENT_VAULT_DEMO, '_blank', 'noopener,noreferrer')
  })

  reel.append(scene)

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => updateGeneratedReelDetails(scene))
  })
}
