import FadeIn from '../components/FadeIn'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 scroll-mt-[120px] rounded-t-[40px] bg-[#0C0C0C] px-5 pt-20 pb-72 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:pt-24 sm:pb-80 md:-mt-14 md:rounded-t-[60px] md:px-12 md:pt-28 md:pb-96"
    >
      <FadeIn delay={0} y={40} className="mb-16 sm:mb-20 md:mb-24">
        <h2
          className="hero-heading text-center font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-6xl">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={index}
            totalCards={projects.length}
          />
        ))}
      </div>
    </section>
  )
}
