'use client'

import { useEffect, useRef, ReactNode, CSSProperties, ElementType } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  className?: string
  style?: CSSProperties
  as?: ElementType
}

export default function FadeIn({
  children,
  delay = 0,
  className = '',
  style,
  as: Tag = 'div',
}: FadeInProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay) el.style.transitionDelay = `${delay}ms`
          el.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.08 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <Tag ref={ref} className={`fade-in ${className}`} style={style}>
      {children}
    </Tag>
  )
}
