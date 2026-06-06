import type { LucideIcon } from 'lucide-react'

type SocialButtonProps = {
  href: string
  label: string
  icon: LucideIcon
  external?: boolean
}

export default function SocialButton({
  href,
  label,
  icon: Icon,
  external = true,
}: SocialButtonProps) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10 sm:px-10 sm:py-3.5"
    >
      <Icon size={16} />
      {label}
    </a>
  )
}
