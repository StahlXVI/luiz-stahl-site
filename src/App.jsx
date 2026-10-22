import { useCallback, useState } from 'react'
import { MotionConfig } from 'framer-motion'
import { sections } from './data'
import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import WorkSection from './components/WorkSection'
import Contact from './components/Contact'
import Lightbox from './components/Lightbox'

// todas as imagens em ordem, para o lightbox poder passar de uma seção para outra
const allItems = sections.flatMap((s) => s.items)

export default function App() {
  const [openIndex, setOpenIndex] = useState(null)
  const openImage = (src) => setOpenIndex(allItems.findIndex((item) => item.src === src))
  const close = useCallback(() => setOpenIndex(null), [])

  return (
    // reducedMotion="user": quem pede menos movimento no sistema não vê as animações
    <MotionConfig reducedMotion="user">
      {/* link escondido que aparece no primeiro Tab: pula o menu */}
      <a
        href="#conteudo"
        className="sr-only z-60 rounded-full bg-fg font-semibold text-bg focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:px-5 focus:py-3"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Marquee />
        <About />
        {sections.map((s) => (
          <WorkSection key={s.id} section={s} onOpen={openImage} />
        ))}
        <Contact />
      </main>
      <Lightbox items={allItems} index={openIndex} onClose={close} onChange={setOpenIndex} />
    </MotionConfig>
  )
}
