import { ExternalLink } from 'lucide-react'

export default function LiveProjectButton() {
  return (
    <button
      type="button"
      className="rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10 sm:px-10 sm:py-3.5"
    >
      <span className="flex items-center gap-2">
        Live Project
        <ExternalLink size={14} />
      </span>
    </button>
  )
}
