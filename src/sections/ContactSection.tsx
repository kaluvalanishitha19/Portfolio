import { FileText, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import ContactButton from '../components/ContactButton'
import FadeIn from '../components/FadeIn'
import SocialButton from '../components/SocialButton'
import { contactInfo } from '../data/contact'

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative z-30 bg-[#0C0C0C] px-5 pt-44 pb-20 sm:px-8 sm:pt-52 sm:pb-24 md:px-12 md:pt-64 md:pb-28"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-10 text-center sm:gap-12">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Contact
          </h2>
        </FadeIn>

        <FadeIn delay={0.15} y={20}>
          <div className="flex flex-col gap-3">
            <h3
              className="font-medium uppercase text-[#D7E2EA]"
              style={{ fontSize: 'clamp(1.25rem, 3vw, 2.5rem)' }}
            >
              {contactInfo.name}
            </h3>
            <p
              className="font-light uppercase tracking-widest text-[#D7E2EA]/60"
              style={{ fontSize: 'clamp(0.9rem, 1.8vw, 1.25rem)' }}
            >
              {contactInfo.role}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.25} y={20}>
          <div className="flex flex-col items-center gap-3 text-[#D7E2EA]/80">
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-2 transition-opacity hover:opacity-70"
              style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.15rem)' }}
            >
              <Mail size={18} />
              {contactInfo.email}
            </a>
            <span
              className="flex items-center gap-2"
              style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.15rem)' }}
            >
              <MapPin size={18} />
              {contactInfo.location}
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.35} y={20}>
          <p
            className="max-w-xl font-medium leading-relaxed text-[#D7E2EA]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          >
            {contactInfo.message}
          </p>
        </FadeIn>

        <FadeIn delay={0.45} y={20}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <ContactButton href={`mailto:${contactInfo.email}`} />
            <SocialButton
              href={contactInfo.linkedin}
              label="LinkedIn"
              icon={Linkedin}
            />
            <SocialButton
              href={contactInfo.github}
              label="GitHub"
              icon={Github}
            />
            <SocialButton
              href={contactInfo.resume}
              label="Resume"
              icon={FileText}
              external={false}
            />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
