import type { Metadata } from 'next'
import FadeIn from '@/components/FadeIn'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Resume — Jonathan Evans',
}

const experience = [
  {
    role: 'Director of UX',
    company: '[Company]',
    period: '[Start] – Present',
    bullets: [
      '[Key responsibility or achievement]',
      '[Key responsibility or achievement]',
      '[Key responsibility or achievement]',
    ],
  },
  {
    role: 'User Researcher',
    company: '[Company]',
    period: '[Start] – [End]',
    bullets: [
      '[Key responsibility or achievement]',
      '[Key responsibility or achievement]',
    ],
  },
  {
    role: 'Interactive Designer',
    company: '[Company]',
    period: '[Start] – [End]',
    bullets: [
      '[Key responsibility or achievement]',
      '[Key responsibility or achievement]',
    ],
  },
]

const education = [
  {
    degree: 'MS, Systems & Information Engineering',
    focus: 'Human Factors',
    school: 'University of Virginia',
    year: '[Year]',
  },
  {
    degree: 'BA, Psychology',
    focus: '',
    school: 'Swarthmore College',
    year: '[Year]',
  },
]

const clients = [
  'Aperture.ai', 'Amazon', 'Gates Foundation',
  'Google', 'Microsoft', 'NASA',
  'Nintendo', 'Pokémon',
]

const skills = [
  'UX Research', 'Interaction Design', 'Usability Testing',
  'Journey Mapping', 'Information Architecture', 'Wireframing & Prototyping',
  'Design Systems', 'Card Sorting', 'Figma', 'Sketch',
]

export default function ResumePage() {
  return (
    <div className="pt-32 pb-32 px-6 md:px-10 lg:px-16 max-w-4xl mx-auto">
      <FadeIn delay={100}>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <div>
            <p className="font-sans text-sm tracking-widest uppercase text-accent mb-3">Resume</p>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-ink leading-tight">
              Jonathan Evans
            </h1>
            <p className="font-sans text-base text-ink/50 mt-2">UX Design & Research · Seattle</p>
          </div>
          <a
            href="mailto:jonathan@jonathan-evans.com"
            className="inline-flex items-center gap-2 font-sans font-medium text-sm px-7 py-3.5 rounded-full border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300 self-start sm:self-auto"
          >
            Get in touch
          </a>
        </div>
      </FadeIn>

      {/* Experience */}
      <FadeIn delay={180}>
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
              <div key={i} className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-1 sm:gap-8">
                <div>
                  <p className="font-display font-semibold text-base text-ink">{ed.degree}</p>
                  {ed.focus && <p className="font-sans text-sm text-ink/50">{ed.focus}</p>}
                  <p className="font-sans text-sm text-accent">{ed.school}</p>
                </div>
                <p className="font-sans text-sm text-ink/35 sm:text-right">{ed.year}</p>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      <div className="border-t border-ink/8 mb-16" />

      {/* Skills + Clients */}
      <FadeIn delay={300}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          <section>
            <h2 className="font-sans text-xs uppercase tracking-widest text-ink/30 mb-6">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span key={s} className="font-sans text-sm px-4 py-1.5 rounded-full bg-ink/5 text-ink/60">
                  {s}
                </span>
              ))}
            </div>
          </section>
          <section>
            <h2 className="font-sans text-xs uppercase tracking-widest text-ink/30 mb-6">Notable Clients</h2>
            <div className="flex flex-wrap gap-2">
              {clients.map((c) => (
                <span key={c} className="font-sans text-sm px-4 py-1.5 rounded-full bg-ink/5 text-ink/60">
                  {c}
                </span>
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
