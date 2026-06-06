import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import LiveProjectButton from './LiveProjectButton'
import ProjectPreview from './ProjectPreview'
import type { Project } from '../data/projects'

type ProjectCardProps = {
  project: Project
  index: number
  totalCards: number
}

export default function ProjectCard({
  project,
  index,
  totalCards,
}: ProjectCardProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const targetScale = 1 - (totalCards - 1 - index) * 0.03

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  return (
    <div ref={containerRef} className="h-[115vh] md:h-[120vh]">
      <motion.div
        className="sticky top-24 z-10 md:top-32"
        style={{ scale }}
      >
        <div className="rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8">
          <div className="mb-4 flex flex-wrap items-start justify-between gap-4 sm:mb-6">
            <div className="flex flex-wrap items-baseline gap-4 sm:gap-6">
              <span
                className="font-black text-[#D7E2EA]"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {project.number}
              </span>
              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium uppercase tracking-widest text-[#D7E2EA]/60">
                  {project.category}
                </span>
                <h3
                  className="font-medium uppercase text-[#D7E2EA]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {project.name}
                </h3>
              </div>
            </div>
            <LiveProjectButton />
          </div>

          <p
            className="mb-3 max-w-3xl font-light leading-relaxed text-[#D7E2EA]/80"
            style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.15rem)' }}
          >
            {project.description}
          </p>

          <p
            className="mb-3 font-medium uppercase tracking-wide text-[#D7E2EA]/50"
            style={{ fontSize: 'clamp(0.75rem, 1.2vw, 0.95rem)' }}
          >
            {project.tech}
          </p>

          <ul className="mb-6 flex flex-wrap gap-2">
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="rounded-full border border-[#D7E2EA]/20 px-3 py-1 text-[10px] uppercase tracking-wider text-[#D7E2EA]/60 sm:text-xs"
              >
                {highlight}
              </li>
            ))}
          </ul>

          <div className="flex gap-3 sm:gap-4">
            <div className="flex w-[40%] flex-col gap-3 sm:gap-4">
              <div style={{ height: 'clamp(130px, 16vw, 230px)' }}>
                <ProjectPreview
                  type={project.previewType}
                  className="h-full"
                />
              </div>
              <div style={{ height: 'clamp(160px, 22vw, 340px)' }}>
                <ProjectPreview
                  type={project.previewType}
                  className="h-full"
                  tall
                />
              </div>
            </div>
            <div className="w-[60%]">
              <ProjectPreview
                type={project.previewType}
                className="h-full min-h-[280px]"
                tall
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
