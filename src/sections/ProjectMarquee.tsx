import { useEffect, useRef, useState } from 'react'
import MarqueeCard from '../components/MarqueeCard'
import type { MarqueeProject } from '../data/marqueeProjects'
import { row1Projects, row2Projects } from '../data/marqueeProjects'

function MarqueeRow({
  projects,
  direction,
  offset,
}: {
  projects: MarqueeProject[]
  direction: 'left' | 'right'
  offset: number
}) {
  const tripled = [...projects, ...projects, ...projects]

  const translateX = direction === 'right' ? offset - 200 : -(offset - 200)

  return (
    <div
      className="flex gap-3"
      style={{
        transform: `translateX(${translateX}px)`,
        willChange: 'transform',
      }}
    >
      {tripled.map((project, i) => (
        <MarqueeCard key={`${project.id}-${i}`} project={project} />
      ))}
    </div>
  )
}

export default function ProjectMarquee() {
  const sectionRef = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current
      if (!section) return

      const rect = section.getBoundingClientRect()
      const sectionTop = window.scrollY + rect.top
      const scrollOffset =
        (window.scrollY - sectionTop + window.innerHeight) * 0.3

      setOffset(scrollOffset)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="overflow-x-clip bg-[#0C0C0C] pt-24 pb-10 sm:pt-28 sm:pb-12 md:pt-32 md:pb-14"
      style={{ overflowX: 'clip' }}
    >
      <div className="flex flex-col gap-3">
        <MarqueeRow projects={row1Projects} direction="right" offset={offset} />
        <MarqueeRow projects={row2Projects} direction="left" offset={offset} />
      </div>
    </section>
  )
}
