export type MarqueeProjectType =
  | 'analytics'
  | 'campus'
  | 'property'
  | 'verizon'
  | 'api'
  | 'cicd'

export type MarqueeProject = {
  id: string
  name: string
  tech: string[]
  type: MarqueeProjectType
}

export const marqueeProjects: MarqueeProject[] = [
  {
    id: 'analytics',
    name: 'Real-Time Analytics Dashboard',
    tech: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'WebSockets', 'Recharts'],
    type: 'analytics',
  },
  {
    id: 'campus',
    name: 'Campus Lost & Found Portal',
    tech: ['Angular', 'Node.js', 'Express', 'PostgreSQL'],
    type: 'campus',
  },
  {
    id: 'property',
    name: 'Property Management Platform',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    type: 'property',
  },
  {
    id: 'verizon',
    name: 'Verizon E-Commerce Flow',
    tech: ['React', 'TypeScript', 'Next.js', 'REST APIs'],
    type: 'verizon',
  },
  {
    id: 'api',
    name: 'API Integration Preview',
    tech: ['OpenAPI', 'Zod', 'REST APIs'],
    type: 'api',
  },
  {
    id: 'cicd',
    name: 'CI/CD Workflow',
    tech: ['GitHub Actions', 'Docker', 'Jenkins'],
    type: 'cicd',
  },
]

export const row1Projects = marqueeProjects.slice(0, 3)
export const row2Projects = marqueeProjects.slice(3)
