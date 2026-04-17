import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import FadeIn from '@/components/FadeIn'
import SectionNav from '@/components/SectionNav'
import projects from '@/lib/projects'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) return {}
  return {
    title: `${project.title} — Jonathan Evans`,
    description: project.overview,
  }
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) notFound()

  const navSections = project.sections.map(({ id, title }) => ({ id, title }))

  // Indices for prev/next project
  const idx = projects.findIndex((p) => p.slug === params.slug)
  const prev = idx > 0 ? projects[idx - 1] : null
  const next = idx < projects.length - 1 ? projects[idx + 1] : null

  return (
    <>
      {/* Hero */}
      <div className="relative h-[55vh] md:h-[65vh] overflow-hidden bg-ink/10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.hero}
          alt={`${project.title} hero`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-transparent to-ink/40" />
      </div>

      {/* Project header */}
      <div className="px-6 md:px-10 lg:px-16 max-w-7xl mx-auto">
        <FadeIn>
          <div className="pt-12 pb-10 border-b border-ink/8">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 font-sans text-sm text-ink/35 hover:text-accent transition-colors duration-200 mb-8"
            >
              ← All projects
            </Link>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <p className="font-sans text-sm text-accent mb-2">{project.role}</p>
                <h1 className="font-display font-bold text-4xl md:text-5xl text-ink leading-tight">
                  {project.title}
                </h1>
                {project.subtitle !== project.role && (
                  <p className="font-sans text-lg text-ink/40 mt-2">{project.subtitle}</p>
                )}
              </div>
              <p className="font-sans text-base text-ink/55 max-w-md leading-relaxed">
                {project.overview}
              </p>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Section nav + content */}
      <div className="px-6 md:px-10 lg:px-16 max-w-7xl mx-auto pb-32">
        {/* SectionNav renders a sticky mobile pill bar (lg:hidden) and a sticky desktop sidebar (hidden lg:block) */}
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-20">
          <SectionNav sections={navSections} />

          {/* Content */}
          <div className="flex-1 min-w-0 space-y-20 md:space-y-28 mt-16 lg:mt-16">
            {project.sections.map((section, i) => (
              <FadeIn key={section.id} delay={i === 0 ? 0 : 0}>
                <section id={section.id} className="scroll-mt-28">
                  <h2 className="font-display font-semibold text-2xl md:text-3xl text-ink mb-6">
                    {section.title}
                  </h2>

                  {section.images && section.images.length > 0 && (
                    <div
                      className={`mb-10 ${
                        section.imageLayout === 'wide'
                          ? 'w-full'
                          : section.imageLayout === 'single'
                          ? 'max-w-sm'
                          : 'grid grid-cols-1 sm:grid-cols-2 gap-4'
                      }`}
                    >
                      {section.images.map((image, j) => (
                        <figure key={j} className="overflow-hidden rounded-lg bg-ink/4">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-auto object-cover"
                            loading="lazy"
                          />
                          {image.caption && (
                            <figcaption className="px-4 py-3 font-sans text-xs text-ink/40">
                              {image.caption}
                            </figcaption>
                          )}
                        </figure>
                      ))}
                    </div>
                  )}

                  <div className="space-y-4">
                    {section.body.map((para, j) => (
                      <p key={j} className="font-sans text-base text-ink/65 leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                </section>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* Project navigation */}
      <div className="border-t border-ink/8 px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto py-12 md:py-16 grid grid-cols-2 gap-6">
          <div>
            {prev && (
              <Link
                href={`/work/${prev.slug}`}
                className="group flex flex-col gap-1.5"
              >
                <span className="font-sans text-xs text-ink/30 uppercase tracking-widest">
                  ← Previous
                </span>
                <span className="font-display font-semibold text-lg text-ink/60 group-hover:text-ink transition-colors duration-200">
                  {prev.title}
                </span>
              </Link>
            )}
          </div>
          <div className="text-right">
            {next && (
              <Link
                href={`/work/${next.slug}`}
                className="group flex flex-col gap-1.5 items-end"
              >
                <span className="font-sans text-xs text-ink/30 uppercase tracking-widest">
                  Next →
                </span>
                <span className="font-display font-semibold text-lg text-ink/60 group-hover:text-ink transition-colors duration-200">
                  {next.title}
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
