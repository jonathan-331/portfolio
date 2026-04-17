import FadeIn from '@/components/FadeIn'
import ProjectCard from '@/components/ProjectCard'
import projects from '@/lib/projects'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center pt-20 pb-16 px-6 md:px-10 lg:px-16 max-w-7xl mx-auto">
        <FadeIn delay={100}>
          <p className="font-sans text-sm tracking-widest uppercase text-accent mb-8">
            UX Design &amp; Research
          </p>
        </FadeIn>

        <FadeIn delay={200}>
          <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-ink leading-[1.02] max-w-3xl">
            Jonathan<br />Evans
          </h1>
        </FadeIn>

        <FadeIn delay={350}>
          <p className="font-sans text-lg md:text-xl text-ink/55 mt-8 max-w-xl leading-relaxed">
            An experienced leader who drives creative,<br className="hidden md:block" />
            collaborative environments.
          </p>
        </FadeIn>

        <FadeIn delay={500}>
          <div className="mt-12 flex items-center gap-6">
            <a
              href="#work"
              className="inline-flex items-center gap-2 font-sans font-medium text-sm px-7 py-3.5 rounded-full border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300"
            >
              Explore my work
            </a>
            <Link
              href="/about"
              className="font-sans text-sm text-ink/40 hover:text-ink transition-colors duration-200"
            >
              About me →
            </Link>
          </div>
        </FadeIn>

        {/* Decorative accent */}
        <div
          className="absolute right-0 top-0 w-[55vw] h-[55vw] max-w-2xl max-h-2xl rounded-full opacity-[0.04] pointer-events-none"
          style={{ background: '#377E22', filter: 'blur(80px)', zIndex: -1 }}
          aria-hidden="true"
        />
      </section>

      {/* Work grid */}
      <section id="work" className="pb-32 px-6 md:px-10 lg:px-16 max-w-7xl mx-auto">
        <FadeIn>
          <div className="flex items-baseline justify-between mb-14">
            <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink">
              Selected Work
            </h2>
            <span className="font-sans text-sm text-ink/30 hidden md:block">
              {projects.length} projects
            </span>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {projects.map((project, i) => {
            // Asymmetric: pairs alternate large/small
            // Pair 0 (even): [large 2cols, small 1col]
            // Pair 1 (odd):  [small 1col, large 2cols]
            const pairIndex = Math.floor(i / 2)
            const posInPair = i % 2
            const isEvenPair = pairIndex % 2 === 0
            const isLarge = isEvenPair ? posInPair === 0 : posInPair === 1
            const colSpan = isLarge ? 'md:col-span-2' : 'md:col-span-1'

            return (
              <FadeIn key={project.slug} delay={80 * (i % 2)} className={colSpan}>
                <ProjectCard project={project} size={isLarge ? 'large' : 'small'} />
              </FadeIn>
            )
          })}
        </div>
      </section>
    </>
  )
}
