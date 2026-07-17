export type ProjectScreen = {
  label: string
  src: string
}

export type ProjectCase = {
  id: string
  number: string
  title: string
  year: string
  image: string
  repository: string
  demo?: string
  summary: string
  problem: string
  decisions: string[]
  implementation: string
  learnings: string[]
  technicalNotes: string[]
  process: string[]
  screens: ProjectScreen[]
}
