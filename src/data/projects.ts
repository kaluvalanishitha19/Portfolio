export type ProjectPreviewType = 'analytics' | 'campus' | 'property'

export type Project = {
  number: string
  name: string
  category: string
  tech: string
  description: string
  highlights: string[]
  previewType: ProjectPreviewType
}

export const projects: Project[] = [
  {
    number: '01',
    name: 'Real-Time Analytics Dashboard',
    category: 'Full-Stack',
    tech: 'React, TypeScript, FastAPI, PostgreSQL, WebSockets, Recharts',
    description:
      'Real-time analytics dashboard tracking live KPIs and trends through auto-updating Recharts visualizations powered by WebSocket connections to a FastAPI backend.',
    highlights: [
      'Configurable date ranges',
      'CSV export',
      'PostgreSQL aggregations',
      'WebSocket event streaming',
    ],
    previewType: 'analytics',
  },
  {
    number: '02',
    name: 'Campus Lost & Found Portal',
    category: 'Web App',
    tech: 'Angular, TypeScript, Node.js, Express.js, PostgreSQL, REST APIs',
    description:
      'Lost-and-found web platform for USF campus where students report, search, and claim items with category filters, location tagging, and status tracking.',
    highlights: [
      'UX research driven design',
      'Accessible responsive Angular interface',
      'Node.js/PostgreSQL backend',
      'Search and claim workflows',
    ],
    previewType: 'campus',
  },
  {
    number: '03',
    name: 'Property Management Platform',
    category: 'Full-Stack',
    tech: 'React, JavaScript, Node.js, Express.js, MongoDB',
    description:
      'Full-stack property management platform where landlords manage units, tenants, lease dates, and maintenance requests through a role-based dashboard.',
    highlights: [
      'JWT authentication',
      'Role-based access',
      'Maintenance request tracking',
      'Occupancy and status views',
    ],
    previewType: 'property',
  },
]
