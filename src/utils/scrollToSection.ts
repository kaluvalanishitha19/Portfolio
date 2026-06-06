const SCROLL_OFFSET = 100

export function scrollToSection(id: string) {
  const section = document.getElementById(id)
  if (!section) return

  const target = (section.querySelector('h2') as HTMLElement | null) ?? section
  const top =
    target.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET

  window.scrollTo({
    top: Math.max(0, top),
    behavior: 'smooth',
  })

  window.history.pushState(null, '', `#${id}`)
}
