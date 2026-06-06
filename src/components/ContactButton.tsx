import { Mail } from 'lucide-react'

type ContactButtonProps = {
  href?: string
  label?: string
}

const buttonStyle = {
  background:
    'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
  boxShadow:
    '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
  outline: '2px solid white',
  outlineOffset: '-3px',
} as const

const className =
  'inline-flex rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest text-white transition-opacity hover:opacity-90 sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base'

export default function ContactButton({
  href,
  label = 'Contact Me',
}: ContactButtonProps) {
  const content = (
    <span className="flex items-center gap-2">
      <Mail size={16} />
      {label}
    </span>
  )

  if (href) {
    return (
      <a href={href} className={className} style={buttonStyle}>
        {content}
      </a>
    )
  }

  return (
    <button type="button" className={className} style={buttonStyle}>
      {content}
    </button>
  )
}
