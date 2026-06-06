import AnimatedText from '../components/AnimatedText'
import FadeIn from '../components/FadeIn'
import { experiences } from '../data/experience'

const DECORATIONS = {
  moon: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
  object3d:
    'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png',
  lego: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png',
  group:
    'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png',
}

const ABOUT_TEXT =
  'I\u2019m a Software Engineer with 2 years of experience building production React, TypeScript, and full-stack applications for enterprise-scale platforms at Verizon. I enjoy turning complex requirements into clean, reliable, and user-friendly digital experiences. My work spans frontend development, REST API integration, CI/CD pipelines, cloud deployments, testing, and Agile delivery.'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center px-5 py-20 sm:px-8 md:px-12"
    >
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="pointer-events-none absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%]"
      >
        <img
          src={DECORATIONS.moon}
          alt=""
          className="w-[120px] sm:w-[160px] md:w-[210px]"
        />
      </FadeIn>

      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="pointer-events-none absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]"
      >
        <img
          src={DECORATIONS.object3d}
          alt=""
          className="w-[100px] sm:w-[140px] md:w-[180px]"
        />
      </FadeIn>

      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="pointer-events-none absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%]"
      >
        <img
          src={DECORATIONS.lego}
          alt=""
          className="w-[120px] sm:w-[160px] md:w-[210px]"
        />
      </FadeIn>

      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="pointer-events-none absolute right-[3%] bottom-[8%] sm:right-[6%] md:right-[10%]"
      >
        <img
          src={DECORATIONS.group}
          alt=""
          className="w-[130px] sm:w-[170px] md:w-[220px]"
        />
      </FadeIn>

      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center gap-10 sm:gap-12 md:gap-14">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading text-center font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About Me
          </h2>
        </FadeIn>

        <AnimatedText
          text={ABOUT_TEXT}
          className="max-w-[680px] text-center font-medium leading-relaxed text-[#D7E2EA]"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
        />

        <div className="flex w-full flex-col gap-8">
          {experiences.map((job, i) => (
            <FadeIn key={job.company} delay={0.2 + i * 0.1} y={20}>
              <div className="rounded-[32px] border border-[#D7E2EA]/15 bg-[#111111]/60 p-6 sm:p-8">
                <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between">
                  <h3
                    className="font-medium uppercase text-[#D7E2EA]"
                    style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)' }}
                  >
                    {job.company}
                  </h3>
                  <span className="text-sm font-light uppercase tracking-widest text-[#D7E2EA]/50">
                    {job.period}
                  </span>
                </div>
                <p className="mb-1 text-sm font-medium uppercase tracking-wide text-[#D7E2EA]/70">
                  {job.role} &mdash; {job.location}
                </p>
                <ul className="mt-4 flex flex-col gap-2">
                  {job.highlights.map((point) => (
                    <li
                      key={point}
                      className="font-light leading-relaxed text-[#D7E2EA]/75"
                      style={{ fontSize: 'clamp(0.85rem, 1.4vw, 1.05rem)' }}
                    >
                      &bull; {point}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
