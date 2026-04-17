import type { Metadata } from 'next'
import FadeIn from '@/components/FadeIn'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact — Jonathan Evans',
}

export default function ContactPage() {
  return (
    <div className="pt-32 pb-32 px-6 md:px-10 lg:px-16 max-w-7xl mx-auto">
      <div className="max-w-xl">
        <FadeIn delay={100}>
          <p className="font-sans text-sm tracking-widest uppercase text-accent mb-6">
            Contact
          </p>
        </FadeIn>

        <FadeIn delay={180}>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-ink leading-tight mb-6">
            Want to get in touch?
          </h1>
        </FadeIn>

        <FadeIn delay={260}>
          <p className="font-sans text-lg text-ink/55 leading-relaxed mb-12">
            Drop me a line. I&apos;ll do my best to respond as soon as I can.
          </p>
        </FadeIn>

        <FadeIn delay={340}>
          <form
            action="mailto:jonathan@jonathan-evans.com"
            method="GET"
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block font-sans text-sm text-ink/50 mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                className="w-full px-5 py-3.5 rounded-lg border border-ink/12 bg-white font-sans text-base text-ink placeholder:text-ink/25 focus:outline-none focus:border-accent transition-colors duration-200"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-sans text-sm text-ink/50 mb-2">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="w-full px-5 py-3.5 rounded-lg border border-ink/12 bg-white font-sans text-base text-ink placeholder:text-ink/25 focus:outline-none focus:border-accent transition-colors duration-200"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-sans text-sm text-ink/50 mb-2">
                Tell it like it is
              </label>
              <textarea
                id="message"
                name="body"
                rows={6}
                placeholder="What's on your mind?"
                className="w-full px-5 py-3.5 rounded-lg border border-ink/12 bg-white font-sans text-base text-ink placeholder:text-ink/25 focus:outline-none focus:border-accent transition-colors duration-200 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-sans font-medium text-sm px-10 py-3.5 rounded-full bg-accent text-white hover:bg-accent/90 transition-colors duration-200"
            >
              Send message
            </button>
          </form>
        </FadeIn>

        <FadeIn delay={420}>
          <div className="mt-16 pt-12 border-t border-ink/8 flex flex-col sm:flex-row gap-6">
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
              className="font-sans text-sm text-ink/50 hover:text-accent transition-colors duration-200"
            >
              linkedin.com/in/jonathanhevans ↗
            </a>
          </div>
        </FadeIn>
      </div>

      <FadeIn>
        <div className="mt-20">
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
