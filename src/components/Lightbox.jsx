import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function RoundButton({ className, label, onClick, children, autoFocus }) {
  return (
    <button
      autoFocus={autoFocus}
      aria-label={label}
      onClick={onClick}
      className={`absolute grid size-[46px] place-items-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-white/20 ${className}`}
    >
      {children}
    </button>
  )
}

// mostra a imagem grande; setas do teclado trocam, Esc fecha
export default function Lightbox({ items, index, onClose, onChange }) {
  const isOpen = index !== null

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onChange((index - 1 + items.length) % items.length)
      if (e.key === 'ArrowRight') onChange((index + 1) % items.length)
    }
    addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, index, items.length, onClose, onChange])

  const go = (step) => (e) => {
    e.stopPropagation()
    onChange((index + step + items.length) % items.length)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={items[index].label}
          className="fixed inset-0 z-200 flex items-center justify-center bg-black/92 p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={items[index].src}
              src={items[index].src}
              alt={items[index].label}
              className="max-h-[88vh] max-w-full rounded-[10px]"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            />
          </AnimatePresence>

          <RoundButton autoFocus className="top-5 right-5" label="Fechar" onClick={onClose}>×</RoundButton>
          <RoundButton className="top-1/2 left-5 -translate-y-1/2" label="Anterior" onClick={go(-1)}>‹</RoundButton>
          <RoundButton className="top-1/2 right-5 -translate-y-1/2" label="Próxima" onClick={go(1)}>›</RoundButton>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
