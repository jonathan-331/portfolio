import Link from 'next/link'
import { Project } from '@/lib/projects'

interface ProjectCardProps {
  project: Project
  size: 'large' | 'small'
}

export default function ProjectCard({ project, size }: ProjectCardProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="project-card group block overflow-hidden rounded-lg bg-ink/5 relative"
      style={{ minHeight: size === 'large' ? '420px' : '360px' }}
    >
      {/* Image */}
      <div className="absolute inset-0 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.thumbnail}
          alt={`${project.title} thumbnail`}
          className="project-card-img w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Permanent gradient overlay at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />

      {/* Hover overlay */}
      <div className="project-card-overlay absolute inset-0 bg-accent/85 flex flex-col justify-center items-start p-8 md:p-10">
        <p className="font-sans text-sm text-white/70 mb-2">{project.role}</p>
        <h3 className="font-display font-semibold text-2xl text-white leading-snug mb-3">
          {project.title}
        </h3>
        <p className="font-sans text-sm text-white/85 leading-relaxed line-clamp-3">
          {project.overview}
        </p>
        <span className="mt-6 inline-flex items-center gap-2 font-sans text-sm text-white font-medium">
          View project <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </span>
      </div>

      {/* Default bottom label */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transition-opacity duration-400 group-hover:opacity-0">
        <p className="font-sans text-xs text-white/60 mb-1">{project.role}</p>
        <h3 className="font-display font-semibold text-xl text-white">{project.title}</h3>
        {project.subtitle !== project.role && (
          <p className="font-sans text-sm text-white/60 mt-0.5">{project.subtitle}</p>
        )}
      </div>
    </Link>
  )
}
