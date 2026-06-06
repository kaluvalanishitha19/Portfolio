export type Skill = {
  number: string
  name: string
  description: string
}

export const skills: Skill[] = [
  {
    number: '01',
    name: 'Frontend Engineering',
    description:
      'React 18, Angular, Next.js, TypeScript, JavaScript, Tailwind CSS, TanStack Query, Redux, React Hook Form, Zod, HTML5, CSS3, responsive design, and accessibility.',
  },
  {
    number: '02',
    name: 'AI & Integration',
    description:
      'LangChain, OpenAI API, Gemini API, RAG pipelines, prompt engineering, embeddings, Hugging Face vector search, ChromaDB, and LlamaIndex.',
  },
  {
    number: '03',
    name: 'Backend & API Design',
    description:
      'Node.js, Express.js, Python, FastAPI, REST API design, OpenAPI/Swagger, SQL, PostgreSQL, MongoDB, Redis, and data modeling.',
  },
  {
    number: '04',
    name: 'Cloud, DevOps & Testing',
    description:
      'AWS EC2, S3, RDS, IAM, CloudWatch, Docker, GitHub Actions, CI/CD, Jenkins, Git, Jest, React Testing Library, Playwright, Jira, and Agile/Scrum.',
  },
  {
    number: '05',
    name: 'Product Delivery',
    description:
      'Agile collaboration, sprint execution, debugging, frontend optimization, API integration, component reusability, and deployment consistency.',
  },
]
