import type { Metadata } from 'next'
import FadeIn from '@/components/FadeIn'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About — Jonathan Evans',
}

export default function AboutPage() {
  return (
    <div className="pt-32 pb-32 px-6 md:px-10 lg:px-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Photo */}
        <FadeIn delay={100}>
          <div className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/About.jpg"
              alt="Jonathan Evans"
              className="w-full rounded-lg object-cover"
              style={{ aspectRatio: '4/5', objectPosition: 'top' }}
            />
            {/* Accent border detail */}
            <div
              className="absolute -bottom-4 -right-4 w-32 h-32 rounded-lg border-2 border-accent/20 pointer-events-none"
              aria-hidden="true"
            />
          </div>
        </FadeIn>

        {/* Content */}
        <div>
          <FadeIn delay={150}>
            <p className="font-sans text-sm tracking-widest uppercase text-accent mb-6">
              About
            </p>
          </FadeIn>

          <FadeIn delay={220}>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-ink leading-tight mb-8">
              Hello there.<br />I&apos;m Jonathan.
            </h1>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="space-y-5 font-sans text-base text-ink/70 leading-relaxed">
              <p>
                I&apos;m a UX designer and researcher based in Seattle with a career built on bridging
                the gap between complex systems and the people who use them.
              </p>
              <p>
                I hold a Psychology degree from Swarthmore College and an MS in Systems &amp;
                Information Engineering with a Human Factors focus from the University of Virginia.
              </p>
              <p>
                My career began in design, research, and programming at media companies including
                CBS and Sony. Since then I&apos;ve held roles as Director of UX, Interactive Designer,
                and User Researcher — working with clients including Aperture.ai, Amazon, the Gates
                Foundation, Google, Microsoft, NASA, Nintendo, and Pokémon.
              </p>
              <p>
                I believe the best design work comes from genuinely understanding users — their
                mental models, their frustrations, and the environments in which they operate.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={380}>
            <div className="mt-10 pt-10 border-t border-ink/8">
              <p className="font-sans text-sm text-ink/40 mb-4 uppercase tracking-widest">Notable clients</p>
              <div className="flex flex-wrap gap-3">
                {[
                  'Aperture.ai', 'Amazon', 'Gates Foundation',
                  'Google', 'Microsoft', 'NASA',
                  'Nintendo', 'Pokémon',
                ].map((client) => (
                  <span
                    key={client}
                    className="font-sans text-sm px-4 py-1.5 rounded-full bg-ink/5 text-ink/60"
                  >
                    {client}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={460}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:jonathan@jonathan-evans.com"
                className="inline-flex items-center justify-center gap-2 font-sans font-medium text-sm px-7 py-3.5 rounded-full bg-accent text-white hover:bg-accent/90 transition-colors duration-200"
              >
                Get in touch
              </a>
              <a
                href="https://www.linkedin.com/in/jonathanhevans/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-sans font-medium text-sm px-7 py-3.5 rounded-full border border-ink/15 text-ink/60 hover:border-ink/30 hover:text-ink transition-all duration-200"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/img/LinkedIn Icon.png" alt="" className="h-4 w-auto opacity-60" />
                LinkedIn
              </a>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Back to work */}
      <FadeIn>
        <div className="mt-24 pt-12 border-t border-ink/8">
          <Link
            href="/"
            className="font-sans text-sm text-ink/40 hover:text-accent transition-colors duration-200"
          >
            ← Back to work
          </Link>
        </div>
      </FadeIn>
    </div>
  )
}
