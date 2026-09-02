const COMPONENT_VAULT_DEMO = 'https://component-vault-dun.vercel.app'
const COMPONENT_VAULT_REPOSITORY = 'https://github.com/WessYu/component-vault'
const COMPONENT_VAULT_NPM = 'https://www.npmjs.com/package/@wess2001/component-vault'
const VELOCITY_REPOSITORY = 'https://github.com/WessYu/velocity'
const VELOCITY_NPM = 'https://www.npmjs.com/package/@wess2001/velocity'

const SELECTED_PRODUCT_CASES = new Set(['devmatch', 'differenza'])

function updateComponentVaultReelDetails(scene: HTMLElement) {
  const topMeta = scene.querySelector<HTMLElement>('.projectReelTopMeta')
  if (topMeta) topMeta.innerHTML = '<em>2026</em><span>DEV TOOL / COMPONENT GOVERNANCE</span><small>AST ANALYSIS + CLI + AUTOMATION</small>'

  const sideInfo = scene.querySelector<HTMLElement>('.projectReelSideInfo')
  if (sideInfo) {
    sideInfo.innerHTML = `
      <p>DESTAQUES</p>
      <ol>
        <li><b>01</b><span>AST-BASED GOVERNANCE</span></li>
        <li><b>02</b><span>NPM CLI + AUTOFIX</span></li>
        <li><b>03</b><span>SEMANTIC RULES + CI</span></li>
      </ol>
      <div><span>NEXT.JS</span><span>TYPESCRIPT</span><span>CONVEX</span><span>CI</span></div>
    `
  }
}

function updateVelocityReelDetails(scene: HTMLElement) {
  const topMeta = scene.querySelector<HTMLElement>('.projectReelTopMeta')
  if (topMeta) topMeta.innerHTML = '<em>2026</em><span>PERFORMANCE ENGINEERING / DEV TOOL</span><small>MEASUREMENT + REGRESSION CONTROL</small>'

  const sideInfo = scene.querySelector<HTMLElement>('.projectReelSideInfo')
  if (sideInfo) {
    sideInfo.innerHTML = `
      <p>DESTAQUES</p>
      <ol>
        <li><b>01</b><span>PERFORMANCE DIAGNOSTICS</span></li>
        <li><b>02</b><span>BENCHMARK + COMPARE</span></li>
        <li><b>03</b><span>SAFE OPTIMIZE + VERIFY</span></li>
      </ol>
      <div><span>NODE.JS</span><span>TYPESCRIPT</span><span>CHROMIUM</span><span>CLI</span></div>
    `
  }
}

function createComponentVaultScene() {
  const scene = document.createElement('article')
  scene.className = 'projectScene projectSceneSpotlight'
  scene.dataset.componentVaultSpotlight = 'true'

  scene.innerHTML = `
    <button class="projectImageButton componentVaultImageButton" type="button" aria-label="Abrir Component Vault">
      <img src="/projects/component-vault/overview.svg" alt="Component Vault com workspace de componentes, governança, análise e developer tooling" width="1292" height="660" decoding="async" loading="lazy" />
    </button>
    <div class="projectLabel componentVaultLabel is-visible" data-reveal>
      <span class="componentVaultKicker">DEV TOOL / COMPONENT GOVERNANCE</span>
      <h2>Component Vault</h2>
      <p>Plataforma de componentes com um motor de governança baseado em TypeScript AST. O Guard transforma regras de design system e arquitetura de UI em validações executáveis para TypeScript, TSX, JavaScript e JSX.</p>
      <p>A CLI publicada no npm inclui <strong>scan, analyze, check, baseline, PR reporting e autofix</strong>, com suporte a adoção gradual, automação em CI e um workspace Next.js/React para organização e revisão dos componentes.</p>
      <div class="componentVaultActions">
        <a href="${COMPONENT_VAULT_DEMO}" target="_blank" rel="noreferrer">Ver produto ↗</a>
        <a href="${COMPONENT_VAULT_NPM}" target="_blank" rel="noreferrer">Ver npm ↗</a>
        <a href="${COMPONENT_VAULT_REPOSITORY}" target="_blank" rel="noreferrer">Ver código ↗</a>
      </div>
    </div>
    <div class="componentVaultStamp" aria-hidden="true"><span>DEVELOPER TOOLING</span><b>CV</b></div>
  `

  scene.querySelector<HTMLButtonElement>('.componentVaultImageButton')?.addEventListener('click', () => window.open(COMPONENT_VAULT_DEMO, '_blank', 'noopener,noreferrer'))
  return scene
}

function createVelocityScene() {
  const scene = document.createElement('article')
  scene.className = 'projectScene projectSceneSpotlight velocitySpotlight'
  scene.dataset.velocitySpotlight = 'true'

  scene.innerHTML = `
    <button class="projectImageButton velocityImageButton" type="button" aria-label="Abrir repositório do Velocity">
      <img src="/projects/velocity/overview.svg" alt="Velocity apresentado como uma CLI de diagnóstico, benchmark e otimização de performance para projetos JavaScript e TypeScript" width="1292" height="660" decoding="async" loading="lazy" />
    </button>
    <div class="projectLabel componentVaultLabel is-visible" data-reveal>
      <span class="componentVaultKicker">DEV TOOL / PERFORMANCE ENGINEERING</span>
      <h2>Velocity</h2>
      <p>CLI e API ESM para coletar evidências de performance em projetos JavaScript e TypeScript, combinando análise estática, artifacts de build, medições em Chromium, benchmarks e profiling de Node.js.</p>
      <p>Inclui <strong>analyze, check, compare, build, load, optimize, verify, bench e profile</strong>, gates de regressão em CI, saídas JSON/SARIF e proteções para evitar comparações ou otimizações tecnicamente enganosas.</p>
      <div class="componentVaultActions">
        <a href="${VELOCITY_REPOSITORY}" target="_blank" rel="noreferrer">Ver projeto ↗</a>
        <a href="${VELOCITY_NPM}" target="_blank" rel="noreferrer">Ver npm ↗</a>
      </div>
    </div>
    <div class="componentVaultStamp" aria-hidden="true"><span>PERFORMANCE TOOLING</span><b>V</b></div>
  `

  scene.querySelector<HTMLButtonElement>('.velocityImageButton')?.addEventListener('click', () => window.open(VELOCITY_REPOSITORY, '_blank', 'noopener,noreferrer'))
  return scene
}

function keepOnlySelectedCases(reel: HTMLElement) {
  reel.querySelectorAll<HTMLElement>('.projectScene').forEach((scene) => {
    if (scene.dataset.componentVaultSpotlight === 'true' || scene.dataset.velocitySpotlight === 'true') return

    const title = scene.querySelector('h2')?.textContent?.trim().toLowerCase()
    if (!title || !SELECTED_PRODUCT_CASES.has(title)) scene.remove()
  })
}

export function mountComponentVaultSpotlight() {
  const reel = document.querySelector<HTMLElement>('.work')
  if (!reel) return

  let componentVault = reel.querySelector<HTMLElement>('[data-component-vault-spotlight]')
  if (!componentVault) {
    componentVault = createComponentVaultScene()
    const firstProject = reel.querySelector<HTMLElement>('.projectScene')
    if (firstProject) reel.insertBefore(componentVault, firstProject)
    else reel.append(componentVault)
  }

  let velocity = reel.querySelector<HTMLElement>('[data-velocity-spotlight]')
  if (!velocity) {
    velocity = createVelocityScene()
    componentVault.insertAdjacentElement('afterend', velocity)
  }

  keepOnlySelectedCases(reel)

  window.requestAnimationFrame(() =>
    window.requestAnimationFrame(() => {
      updateComponentVaultReelDetails(componentVault!)
      updateVelocityReelDetails(velocity!)
    })
  )
}
