export type Experience = {
  company: string
  role: string
  location: string
  period: string
  highlights: string[]
}

export const experiences: Experience[] = [
  {
    company: 'Verizon',
    role: 'Software Engineer',
    location: 'Hyderabad, India',
    period: 'Feb 2023 \u2013 Jul 2024',
    highlights: [
      'Started as Software Engineer Intern in Feb 2023 and promoted to full-time Software Engineer in Aug 2023',
      'Built production React and TypeScript features for customer-facing e-commerce flows across promotional pages, plan selection, cart, and checkout',
      'Developed reusable promotional banner and offer page components for iPhone 15 and Black Friday launches',
      'Improved plan selection and comparison pages using Next.js SSR, code splitting, and component optimization, reducing page load times by 25%',
      'Integrated REST APIs using OpenAPI contracts, Zod validation, and structured error handling',
      'Wrote Jest and React Testing Library tests to reduce production defects by 30%',
      'Supported CI/CD release workflows using Jenkins, GitHub Actions, and Docker-based staging, reducing release overhead by 40%',
    ],
  },
  {
    company: 'Persistent Systems',
    role: 'Software Engineer Intern',
    location: 'Hyderabad, India',
    period: 'Aug 2022 \u2013 Jan 2023',
    highlights: [
      'Delivered reusable React components integrated with REST APIs for enterprise client tools',
      'Improved UI responsiveness by 20%',
      'Diagnosed rendering defects caused by async race conditions and malformed API responses',
      'Wrote unit tests using Jest and React Testing Library to improve code coverage and reduce regression issues',
    ],
  },
]
