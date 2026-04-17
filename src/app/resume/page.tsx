import type { Metadata } from 'next'
import FadeIn from '@/components/FadeIn'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Resume — Jonathan Evans',
}

const experience = [
  {
    role: 'UX Strategy Consultant / Principal UX Consultant',
    company: 'The Gates Foundation (Allovus)',
    period: 'Jan 2023 – Dec 2025',
    bullets: [
      'Transformed SharePoint search into AI-powered insight engine, reducing research time from 3 days to 3 hours',
      'Conducted 68 interviews across 5 global regions for enterprise investment portal',
      'Championed WCAG compliance through monthly inclusive design workshops',
    ],
  },
  {
    role: 'Director of UX & Product Design',
    company: 'Aperture.ai',
    period: 'Jan 2020 – Aug 2022',
    bullets: [
      'Led UX for AI/ML analytics platform',
      'Introduced agile UCD process, accelerating feature delivery by 31%',
      'Built and mentored cross-functional UX team of 5 people',
    ],
  },
  {
    role: 'Principal UX Designer – B2B Platforms',
    company: 'Blink UX',
    period: 'Jan 2012 – Oct 2019',
    bullets: [
      'Designed Moen Smart Shower VUI (named top 30 innovative product by Better Homes & Gardens)',
      'Led UX for NASA DAACs, reducing data retrieval time by 67%',
      'Built agency-wide design system cutting asset retrieval time by 18.3%',
    ],
  },
]

const education = [
  {
    degree: 'M.S. Systems & Information Engineering',
    focus: 'Human Factors',
    school: 'University of Virginia',
  },
  {
    degree: 'B.A. Psychology',
    focus: '',
    school: 'Swarthmore College',
  },
]

const skills = [
  'UX Strategy', 'Product Design Leadership', 'AI/ML & Generative AI Design',
  'Data Visualization', 'Enterprise SaaS', 'Inclusive Design & Accessibility (WCAG)',
  'Agile Product Development', 'Journey Mapping', 'Design Systems',
  'Voice UI', 'UX Research & Usability Testing',
  'Figma', 'Adobe CC', 'Pendo', 'Dovetail', 'Jira', 'Notion', 'Miro', 'Mural',
]

const speaking = [
  { title: '"The UX of Showering with Alexa"', venue: 'Seattle Interactive Conference' },
  { title: '"Infants: The terrifying danger of a UX edge case"', venue: 'Ignite Seattle' },
  { title: 'Featured writer', venue: 'UX Matters' },
]

export default function ResumePage() {
  return (
    <div className="pt-32 pb-32 px-6 md:px-10 lg:px-16 max-w-4xl mx-auto">
      <FadeIn delay={100}>
        <div className="mb-6">
          <p className="font-sans text-sm tracking-widest uppercase text-accent mb-3">Resume</p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-ink leading-tight">
            Jonathan Hilton Evans
          </h1>
          <p className="font-sans text-base text-ink/50 mt-2">
            UX Design & Research ·{' '}
            <a href="mailto:jonathan@jonathan-evans.com" className="hover:text-accent transition-colors duration-200">jonathan@jonathan-evans.com</a>
            {' '}· Seattle, WA
          </p>
        </div>
      </FadeIn>

      {/* Summary */}
      <FadeIn delay={160}>
        <p className="font-sans text-base text-ink/60 leading-relaxed max-w-2xl mb-16">
          UX Design & Research Leader with 10+ years building intuitive experiences across AI/ML,
          data-driven platforms, and enterprise software. Expertise in scaling inclusive design
          practices, leading global research, and transforming complex systems into user-first interfaces.
        </p>
      </FadeIn>

      {/* Experience */}
      <FadeIn delay={200}>
        <section className="mb-16">
          <h2 className="font-sans text-xs uppercase tracking-widest text-ink/30 mb-8">Experience</h2>
          <div className="space-y-10">
            {experience.map((job, i) => (
              <div key={i} className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-1 sm:gap-8">
                <div>
                  <p className="font-display font-semibold text-lg text-ink">{job.role}</p>
                  <p className="font-sans text-sm text-accent mb-3">{job.company}</p>
                  <ul className="space-y-1.5">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="font-sans text-sm text-ink/60 leading-relaxed flex gap-2">
                        <span className="text-accent mt-1 shrink-0">–</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="font-sans text-sm text-ink/35 sm:text-right whitespace-nowrap">{job.period}</p>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      <div className="border-t border-ink/8 mb-16" />

      {/* Education */}
      <FadeIn delay={240}>
        <section className="mb-16">
          <h2 className="font-sans text-xs uppercase tracking-widest text-ink/30 mb-8">Education</h2>
          <div className="space-y-6">
            {education.map((ed, i) => (
              <div key={i}>
                <p className="font-display font-semibold text-base text-ink">{ed.degree}</p>
                {ed.focus && <p className="font-sans text-sm text-ink/50">{ed.focus}</p>}
                <p className="font-sans text-sm text-accent">{ed.school}</p>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      <div className="border-t border-ink/8 mb-16" />

      {/* Patents */}
      <FadeIn delay={270}>
        <section className="mb-16">
          <h2 className="font-sans text-xs uppercase tracking-widest text-ink/30 mb-8">Patents</h2>
          <p className="font-sans text-sm text-ink/60 leading-relaxed">
            US Patent 11,762,916 B1 —{' '}
            <span className="text-ink/80 italic">
              &ldquo;User Interface for Identifying Unmet Technical Needs and/or Technical Problems&rdquo;
            </span>
            <span className="text-ink/35 ml-2">Granted September 19, 2023</span>
          </p>
        </section>
      </FadeIn>

      <div className="border-t border-ink/8 mb-16" />

      {/* Skills + Speaking */}
      <FadeIn delay={300}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          <section>
            <h2 className="font-sans text-xs uppercase tracking-widest text-ink/30 mb-6">Core Competencies</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span key={s} className="font-sans text-sm px-4 py-1.5 rounded-full bg-ink/5 text-ink/60">
                  {s}
                </span>
              ))}
            </div>
          </section>
          <section>
            <h2 className="font-sans text-xs uppercase tracking-widest text-ink/30 mb-6">Speaking & Publications</h2>
            <div className="space-y-4">
              {speaking.map((s, i) => (
                <div key={i}>
                  <p className="font-sans text-sm text-ink/80 italic">{s.title}</p>
                  <p className="font-sans text-sm text-accent">{s.venue}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </FadeIn>

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
