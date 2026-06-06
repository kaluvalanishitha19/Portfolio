import FadeIn from './FadeIn'
import type { Skill } from '../data/skills'

type SkillItemProps = {
  skill: Skill
  index: number
  total: number
}

export default function SkillItem({ skill, index, total }: SkillItemProps) {
  return (
    <FadeIn delay={index * 0.1}>
      <div
        className="flex flex-col gap-4 py-8 sm:flex-row sm:items-start sm:gap-8 sm:py-10 md:py-12"
        style={{
          borderBottom:
            index < total - 1 ? '1px solid rgba(12, 12, 12, 0.15)' : 'none',
        }}
      >
        <span
          className="shrink-0 font-black text-[#0C0C0C]"
          style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
        >
          {skill.number}
        </span>

        <div className="flex flex-col gap-2">
          <h3
            className="font-medium uppercase text-[#0C0C0C]"
            style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
          >
            {skill.name}
          </h3>
          <p
            className="max-w-2xl font-light leading-relaxed opacity-60"
            style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
          >
            {skill.description}
          </p>
        </div>
      </div>
    </FadeIn>
  )
}
