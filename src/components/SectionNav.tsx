'use client'

import { useEffect, useRef, useState } from 'react'

interface Section {
  id: string
  title: string
}

export default function SectionNav({ sections }: { sections: Section[] }) {
  const [active, setActive] = useState<string>(sections[0]?.id ?? '')
  const mobileRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sections.length) return

    const sectionEls = sections
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the topmost intersecting section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visible.length > 0) {
          setActive(visible[0].target.id)
        }
      },
      {
        rootMargin: '-15% 0px -70% 0px',
        threshold: 0,
      }
    )

    sectionEls.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [sections])

  // Scroll active mobile pill into view
  useEffect(() => {
    const container = mobileRef.current
    if (!container) return
    const activeEl = container.querySelector(`[data-id="${active}"]`) as HTMLElement
    if (activeEl) {
      activeEl.scrollIntoView({ inline: 'center', behavior: 'smooth', block: 'nearest' })
    }
  }, [active])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    const offset = 100
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <>
      {/* Desktop: sticky left sidebar */}
      <nav
        className="hidden lg:block sticky top-28 self-start w-44 shrink-0 pr-4"
        aria-label="Page sections"
      >
        <p className="font-sans text-xs uppercase tracking-widest text-ink/30 mb-5">Sections</p>
        <ul className="space-y-3">
          {sections.map(({ id, title }) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                data-id={id}
                className={`section-nav-link pl-4 font-sans text-sm text-left transition-colors duration-200 ${
                  active === id ? 'active text-accent font-medium' : 'text-ink/40 hover:text-ink/70'
                }`}
              >
                {title}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile / tablet: sticky horizontal pill bar */}
      <nav
        className="lg:hidden sticky top-16 z-40 bg-bg/95 backdrop-blur-sm border-b border-ink/8 -mx-6 px-6 md:-mx-10 md:px-10"
        aria-label="Page sections"
      >
        <div
          ref={mobileRef}
          className="flex gap-2 overflow-x-auto py-3 no-scrollbar"
        >
          {sections.map(({ id, title }) => (
            <button
              key={id}
              data-id={id}
              onClick={() => scrollTo(id)}
              className={`shrink-0 px-4 py-1.5 rounded-full font-sans text-sm transition-all duration-200 whitespace-nowrap ${
                active === id
                  ? 'bg-accent text-white font-medium'
                  : 'bg-ink/6 text-ink/50 hover:bg-ink/10 hover:text-ink/70'
              }`}
            >
              {title}
            </button>
          ))}
        </div>
      </nav>
    </>
  )
}
