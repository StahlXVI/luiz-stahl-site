import { motion } from 'framer-motion'

export const ease = [0.2, 0.7, 0.2, 1]

export function Tag({ children, className = '' }) {
  return <p className={`font-mono text-sm uppercase tracking-[.08em] text-muted ${className}`}>{children}</p>
}

export function Chip({ children }) {
  return <span className="rounded-full border border-line bg-white/4 px-3.5 py-1.5 text-sm">{children}</span>
}

export function Button({ href, children, variant = 'primary' }) {
  const external = href.startsWith('http')
  const style = variant === 'primary' ? 'bg-fg text-bg' : 'border border-line hover:bg-white/8'
  return (
    <a
      href={href}
      {...(external && { target: '_blank', rel: 'noreferrer' })}
      className={`inline-flex items-center gap-2.5 rounded-full px-5.5 py-3.5 text-sm font-semibold transition hover:-translate-y-0.5 ${style}`}
    >
      {children}
    </a>
  )
}

export function Heading({ children, className = '' }) {
  return <h2 className={`font-display font-normal uppercase leading-[.95] ${className}`}>{children}</h2>
}

// aparece subindo quando entra na tela
export function Reveal({ children, className, delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  )
}
