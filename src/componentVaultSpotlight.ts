const COMPONENT_VAULT_DEMO = 'https://component-vault-dun.vercel.app'
const COMPONENT_VAULT_REPOSITORY = 'https://github.com/WessYu/component-vault'
const COMPONENT_VAULT_NPM = 'https://www.npmjs.com/package/@wess2001/component-vault'

function updateGeneratedReelDetails(scene: HTMLElement) {
  const topMeta = scene.querySelector<HTMLElement>('.projectReelTopMeta')
  if (topMeta) {
    topMeta.innerHTML = '<em>2026</em><span>DEV TOOL / COMPONENT GOVERNANCE</span><small>AST ANALYSIS + CLI + AUTOMATION</small>'
  }

  const sideInfo = scene.querySelector<HTMLElement>('.projectReelSideInfo')
  if (sideInfo) {
    sideInfo.innerHTML = `
      <p>DESTAQUES</p>
      <ol>
        <li><b>01</b><span>AST-BASED GOVERNANCE</span></li>
        <li><b>02</b><span>NPX CLI + AUTOFIX</span></li>
        <li><b>03</b><span>SEMANTIC RULES + CI</span></li>
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
        alt="Component Vault com workspace de componentes, governança, análise e developer tooling"
        width="1292"
        height="660"
        decoding="async"
        loading="lazy"
      />
    </button>

    <div class="projectLabel componentVaultLabel is-visible" data-reveal>
      <span class="componentVaultKicker">DEV TOOL / COMPONENT GOVERNANCE</span>
      <h2>Component Vault</h2>
      <p>Uma ferramenta de governança para ecossistemas Front-End. O Guard analisa código via TypeScript AST, transforma regras de design system em validações executáveis e ajuda a controlar componentes, imports e padrões sem depender de revisão manual.</p>
      <p>O projeto inclui uma CLI distribuída via NPX com <strong>scan, analyze, check, baseline, PR reporting e autofix</strong>, além de estratégias para adoção gradual em codebases existentes.</p>
      <div class="componentVaultActions">
        <a href="${COMPONENT_VAULT_DEMO}" target="_blank" rel="noreferrer">Ver produto ↗</a>
        <a href="${COMPONENT_VAULT_NPM}" target="_blank" rel="noreferrer">Ver CLI / npm ↗</a>
        <a href="${COMPONENT_VAULT_REPOSITORY}" target="_blank" rel="noreferrer">Ver código ↗</a>
      </div>
    </div>

    <div class="componentVaultStamp" aria-hidden="true">
      <span>DEVELOPER TOOLING</span>
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
