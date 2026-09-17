const NEXUS_REPOSITORY = 'https://github.com/WessYu/NEXUS'
const NEXUS_NPM = 'https://www.npmjs.com/package/@wess2001/nexus'
const COMPONENT_VAULT_DEMO = 'https://component-vault-dun.vercel.app'
const COMPONENT_VAULT_REPOSITORY = 'https://github.com/WessYu/component-vault'
const COMPONENT_VAULT_NPM = 'https://www.npmjs.com/package/@wess2001/component-vault'
const VELOCITY_REPOSITORY = 'https://github.com/WessYu/velocity'
const VELOCITY_NPM = 'https://www.npmjs.com/package/@wess2001/velocity'
const SPECTER_REPOSITORY = 'https://github.com/WessYu/SPECTER'
const SPECTER_NPM = 'https://www.npmjs.com/package/@wess2001/specter'

const SELECTED_PRODUCT_CASES = new Set(['devmatch', 'differenza'])

function updateNexusReelDetails(scene: HTMLElement) {
  const topMeta = scene.querySelector<HTMLElement>('.projectReelTopMeta')
  if (topMeta) topMeta.innerHTML = '<em>2026</em><span>ENGINEERING ORCHESTRATION</span><small>QUALITY + PERFORMANCE + SECURITY</small>'

  const sideInfo = scene.querySelector<HTMLElement>('.projectReelSideInfo')
  if (sideInfo) {
    sideInfo.innerHTML = `
      <p>DESTAQUES</p>
      <ol>
        <li><b>01</b><span>THREE-ENGINE ORCHESTRATION</span></li>
        <li><b>02</b><span>NORMALIZED REPORT CONTRACT</span></li>
        <li><b>03</b><span>REPOSITORY-LEVEL CI GATE</span></li>
      </ol>
      <div><span>NODE.JS</span><span>JSON SCHEMA</span><span>CLI</span><span>CI</span></div>
    `
  }
}

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

function updateSpecterReelDetails(scene: HTMLElement) {
  const topMeta = scene.querySelector<HTMLElement>('.projectReelTopMeta')
  if (topMeta) topMeta.innerHTML = '<em>2026</em><span>DEFENSIVE APPSEC / DEV TOOL</span><small>SOURCE TO PRODUCTION SECURITY</small>'

  const sideInfo = scene.querySelector<HTMLElement>('.projectReelSideInfo')
  if (sideInfo) {
    sideInfo.innerHTML = `
      <p>DESTAQUES</p>
      <ol>
        <li><b>01</b><span>STATIC + DEPENDENCY SCANNING</span></li>
        <li><b>02</b><span>AUTHORIZED ACTIVE TESTING</span></li>
        <li><b>03</b><span>REGRESSION + CI SECURITY GATE</span></li>
      </ol>
      <div><span>TYPESCRIPT</span><span>FASTIFY</span><span>PRISMA</span><span>APPSEC</span></div>
    `
  }
}

function createToolkitSection() {
  const section = document.createElement('section')
  section.className = 'engineeringToolkit'
  section.id = 'toolkit'
  section.setAttribute('aria-labelledby', 'toolkit-title')
  section.innerHTML = `
    <div class="engineeringToolkitLead" data-reveal>
      <div>
        <p class="metaLine">ENGINEERING TOOLKIT</p>
        <h2 id="toolkit-title">Quatro ferramentas. Uma linha de engenharia.</h2>
      </div>
      <p>Componentes, performance e segurança continuam separados onde precisam ser. O NEXUS conecta esses sinais em um único gate sem apagar a evidência de cada engine.</p>
    </div>
    <div class="engineeringToolkitGrid">
      <article class="engineeringTool" data-reveal>
        <a class="engineeringToolIcon" href="${NEXUS_REPOSITORY}" target="_blank" rel="noreferrer" aria-label="Abrir NEXUS no GitHub">
          <img src="/projects/toolkit/nexus.svg" alt="" width="84" height="84" loading="lazy" decoding="async" />
        </a>
        <p>ORCHESTRATION</p>
        <h3>NEXUS</h3>
        <span>Quality · Performance · Security</span>
        <small>Um engineering gate para os três motores.</small>
        <div><a href="${NEXUS_REPOSITORY}" target="_blank" rel="noreferrer">GitHub ↗</a><a href="${NEXUS_NPM}" target="_blank" rel="noreferrer">npm ↗</a></div>
      </article>
      <article class="engineeringTool" data-reveal>
        <a class="engineeringToolIcon" href="${COMPONENT_VAULT_REPOSITORY}" target="_blank" rel="noreferrer" aria-label="Abrir Component Vault no GitHub">
          <img src="/projects/toolkit/component-vault.svg" alt="" width="84" height="84" loading="lazy" decoding="async" />
        </a>
        <p>QUALITY / GOVERNANCE</p>
        <h3>Component Vault</h3>
        <span>AST · Components · CI</span>
        <small>Governança de componentes e design-system como código.</small>
        <div><a href="${COMPONENT_VAULT_REPOSITORY}" target="_blank" rel="noreferrer">GitHub ↗</a><a href="${COMPONENT_VAULT_NPM}" target="_blank" rel="noreferrer">npm ↗</a></div>
      </article>
      <article class="engineeringTool" data-reveal>
        <a class="engineeringToolIcon" href="${VELOCITY_REPOSITORY}" target="_blank" rel="noreferrer" aria-label="Abrir Velocity no GitHub">
          <img src="/projects/toolkit/velocity.svg" alt="" width="84" height="84" loading="lazy" decoding="async" />
        </a>
        <p>PERFORMANCE</p>
        <h3>Velocity</h3>
        <span>Build · Browser · Benchmark</span>
        <small>Evidência de performance e controle de regressão.</small>
        <div><a href="${VELOCITY_REPOSITORY}" target="_blank" rel="noreferrer">GitHub ↗</a><a href="${VELOCITY_NPM}" target="_blank" rel="noreferrer">npm ↗</a></div>
      </article>
      <article class="engineeringTool" data-reveal>
        <a class="engineeringToolIcon" href="${SPECTER_REPOSITORY}" target="_blank" rel="noreferrer" aria-label="Abrir SPECTER no GitHub">
          <img src="/projects/toolkit/specter.svg" alt="" width="84" height="84" loading="lazy" decoding="async" />
        </a>
        <p>APPLICATION SECURITY</p>
        <h3>SPECTER</h3>
        <span>Source · Runtime · CI</span>
        <small>AppSec defensivo do código à aplicação publicada.</small>
        <div><a href="${SPECTER_REPOSITORY}" target="_blank" rel="noreferrer">GitHub ↗</a><a href="${SPECTER_NPM}" target="_blank" rel="noreferrer">npm ↗</a></div>
      </article>
    </div>
  `
  return section
}

function mountEngineeringToolkit() {
  if (document.querySelector('.engineeringToolkit')) return
  const why = document.querySelector<HTMLElement>('.why')
  if (!why) return
  why.insertAdjacentElement('afterend', createToolkitSection())
}

function createNexusScene() {
  const scene = document.createElement('article')
  scene.className = 'projectScene projectSceneSpotlight nexusSpotlight'
  scene.dataset.nexusSpotlight = 'true'

  scene.innerHTML = `
    <button class="projectImageButton nexusImageButton" type="button" aria-label="Abrir repositório do NEXUS">
      <img src="/projects/nexus/overview.svg" alt="NEXUS conectando qualidade, performance e segurança em um único engineering gate" width="1292" height="660" decoding="async" loading="lazy" />
    </button>
    <div class="projectLabel componentVaultLabel is-visible" data-reveal>
      <span class="componentVaultKicker">ENGINEERING ORCHESTRATION</span>
      <h2>NEXUS</h2>
      <p>CLI que orquestra Component Vault, Velocity e SPECTER, normaliza os resultados em um contrato comum e aplica uma política única de repositório sem transformar sinais diferentes em um score artificial.</p>
      <p>O fluxo mantém <strong>qualidade, performance e segurança como engines independentes</strong>, mas permite rodar um único check e usar o resultado como engineering gate em CI.</p>
      <div class="componentVaultActions">
        <a href="${NEXUS_REPOSITORY}" target="_blank" rel="noreferrer">Ver projeto ↗</a>
        <a href="${NEXUS_NPM}" target="_blank" rel="noreferrer">Ver npm ↗</a>
      </div>
    </div>
    <div class="componentVaultStamp" aria-hidden="true"><span>ENGINEERING GATE</span><b>N</b></div>
  `

  scene.querySelector<HTMLButtonElement>('.nexusImageButton')?.addEventListener('click', () => window.open(NEXUS_REPOSITORY, '_blank', 'noopener,noreferrer'))
  return scene
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

function createSpecterScene() {
  const scene = document.createElement('article')
  scene.className = 'projectScene projectSceneSpotlight specterSpotlight'
  scene.dataset.specterSpotlight = 'true'

  scene.innerHTML = `
    <button class="projectImageButton specterImageButton" type="button" aria-label="Abrir repositório do SPECTER">
      <img src="/projects/specter/overview.svg" alt="SPECTER mostrando source, dependency, build e active security checks em um fluxo defensivo" width="1292" height="660" decoding="async" loading="lazy" />
    </button>
    <div class="projectLabel componentVaultLabel is-visible" data-reveal>
      <span class="componentVaultKicker">DEFENSIVE APPSEC / SECURITY TOOLING</span>
      <h2>SPECTER</h2>
      <p>Ferramenta de application security para encontrar regressões antes e depois do deploy, cobrindo código-fonte, secrets, dependências, build output, aplicação publicada e validação ativa autorizada.</p>
      <p>O active testing é <strong>explícito, limitado e não destrutivo</strong>, com autorização para alvos remotos, budgets, rate limiting, cancelamento, relatórios JSON/SARIF, scoring e gates de CI.</p>
      <div class="componentVaultActions">
        <a href="${SPECTER_REPOSITORY}" target="_blank" rel="noreferrer">Ver projeto ↗</a>
        <a href="${SPECTER_NPM}" target="_blank" rel="noreferrer">Ver npm ↗</a>
      </div>
    </div>
    <div class="componentVaultStamp" aria-hidden="true"><span>APPLICATION SECURITY</span><b>S</b></div>
  `

  scene.querySelector<HTMLButtonElement>('.specterImageButton')?.addEventListener('click', () => window.open(SPECTER_REPOSITORY, '_blank', 'noopener,noreferrer'))
  return scene
}

function keepOnlySelectedCases(reel: HTMLElement) {
  reel.querySelectorAll<HTMLElement>('.projectScene').forEach((scene) => {
    if (
      scene.dataset.nexusSpotlight === 'true' ||
      scene.dataset.componentVaultSpotlight === 'true' ||
      scene.dataset.velocitySpotlight === 'true' ||
      scene.dataset.specterSpotlight === 'true'
    ) {
      return
    }

    const title = scene.querySelector('h2')?.textContent?.trim().toLowerCase()
    if (!title || !SELECTED_PRODUCT_CASES.has(title)) scene.remove()
  })
}

export function mountComponentVaultSpotlight() {
  mountEngineeringToolkit()

  const reel = document.querySelector<HTMLElement>('.work')
  if (!reel) return

  let nexus = reel.querySelector<HTMLElement>('[data-nexus-spotlight]')
  if (!nexus) {
    nexus = createNexusScene()
    const firstProject = reel.querySelector<HTMLElement>('.projectScene')
    if (firstProject) reel.insertBefore(nexus, firstProject)
    else reel.append(nexus)
  }

  let componentVault = reel.querySelector<HTMLElement>('[data-component-vault-spotlight]')
  if (!componentVault) {
    componentVault = createComponentVaultScene()
    nexus.insertAdjacentElement('afterend', componentVault)
  }

  let velocity = reel.querySelector<HTMLElement>('[data-velocity-spotlight]')
  if (!velocity) {
    velocity = createVelocityScene()
    componentVault.insertAdjacentElement('afterend', velocity)
  }

  let specter = reel.querySelector<HTMLElement>('[data-specter-spotlight]')
  if (!specter) {
    specter = createSpecterScene()
    velocity.insertAdjacentElement('afterend', specter)
  }

  keepOnlySelectedCases(reel)

  window.requestAnimationFrame(() =>
    window.requestAnimationFrame(() => {
      updateNexusReelDetails(nexus!)
      updateComponentVaultReelDetails(componentVault!)
      updateVelocityReelDetails(velocity!)
      updateSpecterReelDetails(specter!)
    })
  )
}
