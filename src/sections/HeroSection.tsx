import { motion } from 'framer-motion'
import ContactButton from '../components/ContactButton'
import FadeIn from '../components/FadeIn'
import Magnet from '../components/Magnet'
import { contactInfo } from '../data/contact'
import { scrollToSection } from '../utils/scrollToSection'

const NAV_LINKS = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Contact', href: '#contact', id: 'contact' },
] as const

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex h-screen flex-col overflow-x-clip"
      style={{ overflowX: 'clip' }}
    >
      <FadeIn delay={0} y={-20} className="flex justify-between px-6 pt-6 md:px-10 md:pt-8">
        <nav className="flex w-full justify-between">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(link.id)
              }}
              className="text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 md:text-[1.4rem]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </FadeIn>

      <div className="overflow-visible px-6 md:px-10">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading mt-6 w-full text-center text-[12vw] font-black uppercase leading-none tracking-tight sm:-mt-3 sm:text-[13vw] md:-mt-5 md:text-[14vw] lg:text-[15vw]">
            Hi, I{'\u2019'}m Nishitha
          </h1>
        </FadeIn>
      </div>

      <Magnet
        padding={150}
        strength={3}
        activeTransition="transform 0.3s ease-out"
        inactiveTransition="transform 0.6s ease-in-out"
        className="absolute top-[60%] left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 sm:top-auto sm:bottom-0 sm:translate-y-0"
      >
        <FadeIn delay={0.6} y={30}>
          <motion.div
            className="relative w-[150px] sm:w-[190px] md:w-[240px] lg:w-[280px]"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 blur-[40px] sm:h-[260px] sm:w-[260px] sm:blur-[50px] md:h-[320px] md:w-[320px]"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(187, 204, 215, 0.35) 0%, rgba(118, 33, 176, 0.1) 50%, transparent 70%)',
              }}
            />

            <img
              src="/assets/nishitha-avatar-clean.png"
              alt="Nishitha 3D avatar"
              className="block h-auto w-full object-contain"
              style={{
                filter: 'drop-shadow(0 24px 48px rgba(0, 0, 0, 0.55))',
              }}
            />
          </motion.div>
        </FadeIn>
      </Magnet>

      <div className="mt-auto flex items-end justify-between px-6 pb-7 sm:px-8 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="max-w-[200px] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[280px] md:max-w-[340px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            a software engineer building fast, reliable, and user-focused digital
            products
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton href={`mailto:${contactInfo.email}`} />
        </FadeIn>
      </div>
    </section>
  )
}
