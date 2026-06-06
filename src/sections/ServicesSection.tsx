import SkillItem from '../components/SkillItem'
import { skills } from '../data/skills'

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="scroll-mt-[120px] rounded-t-[40px] bg-white px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-12 md:py-28"
    >
      <h2
        className="mb-16 text-center font-black uppercase text-[#0C0C0C] sm:mb-20 md:mb-24"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Skills
      </h2>

      <div className="mx-auto max-w-5xl">
        {skills.map((skill, i) => (
          <SkillItem
            key={skill.number}
            skill={skill}
            index={i}
            total={skills.length}
          />
        ))}
      </div>
    </section>
  )
}
