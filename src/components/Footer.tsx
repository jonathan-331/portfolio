import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-ink/8">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-display font-semibold text-base text-ink">Jonathan Evans</p>
          <p className="font-sans text-sm text-ink/50 mt-1">UX Design & Research · Seattle</p>
        </div>

        <div className="flex items-center gap-8">
          <a
            href="mailto:jonathan@jonathan-evans.com"
            className="font-sans text-sm text-ink/50 hover:text-accent transition-colors duration-200"
          >
            jonathan@jonathan-evans.com
          </a>
          <a
            href="https://www.linkedin.com/in/jonathanhevans/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center text-ink/50 hover:text-accent transition-colors duration-200"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/LinkedIn Icon.png" alt="" className="h-5 w-auto opacity-50" />
          </a>
        </div>

        <p className="font-sans text-xs text-ink/30">
          © {new Date().getFullYear()} Jonathan Evans
        </p>
      </div>
    </footer>
  )
}
