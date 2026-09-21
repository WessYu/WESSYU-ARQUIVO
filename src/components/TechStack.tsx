type Technology = {
  name: string
  category: string
  iconId: string
}

const TECHNOLOGIES: Technology[] = [
  { name: 'React', category: 'Front-end', iconId: 'react' },
  { name: 'TypeScript', category: 'Front-end', iconId: 'typescript' },
  { name: 'Next.js', category: 'Front-end', iconId: 'nextjs' },
  { name: 'Tailwind CSS', category: 'Interface', iconId: 'tailwindcss' },
  { name: 'Node.js', category: 'Back-end', iconId: 'nodejs' },
  { name: 'Fastify', category: 'Back-end', iconId: 'fastify' },
  { name: 'PostgreSQL', category: 'Dados', iconId: 'postgresql' },
  { name: 'Prisma', category: 'Dados', iconId: 'prisma' },
  { name: 'Playwright', category: 'Qualidade', iconId: 'playwright' },
  { name: 'GitHub Actions', category: 'CI / CD', iconId: 'githubactions' },
  { name: 'Git', category: 'Ferramentas', iconId: 'git' },
  { name: 'Figma', category: 'Design', iconId: 'figma' },
]

export function TechStack() {
  return (
    <section className="techStack" id="tecnologias" aria-labelledby="tech-stack-title">
      <div className="techStackLead" data-reveal>
        <div>
          <p className="metaLine">CORE STACK</p>
          <h2 id="tech-stack-title">Stack que uso no produto e na engenharia.</h2>
        </div>
        <p>
          HTML, CSS e JavaScript são a base. Aqui estão as tecnologias que mais aparecem nos projetos que estou
          construindo hoje — do front-end ao backend, testes e entrega.
        </p>
      </div>

      <div className="techGrid" data-reveal>
        {TECHNOLOGIES.map((technology) => (
          <article className="techCard" key={technology.name}>
            <div className="techIconFrame" aria-hidden="true">
              <svg viewBox="0 0 128 128" focusable="false">
                <use href={`/tech-icons.svg#${technology.iconId}`} />
              </svg>
            </div>
            <div>
              <span>{technology.category}</span>
              <h3>{technology.name}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
