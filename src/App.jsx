import { useCallback, useMemo, useState } from 'react'
import { MotionConfig } from 'framer-motion'
import { getSections } from './data'
import { LanguageProvider, useLang } from './i18n'
import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import WorkSection from './components/WorkSection'
import Contact from './components/Contact'
import Lightbox from './components/Lightbox'

function Site() {
  const { t } = useLang()
  const sections = useMemo(() => getSections(t), [t])
  // todas as imagens em ordem, para o lightbox poder passar de uma seção para outra
  const allItems = useMemo(() => sections.flatMap((s) => s.items), [sections])

  const [openIndex, setOpenIndex] = useState(null)
  const openImage = (src) => setOpenIndex(allItems.findIndex((item) => item.src === src))
  const close = useCallback(() => setOpenIndex(null), [])

  return (
    <>
      {/* link escondido que aparece no primeiro Tab: pula o menu */}
      <a
        href="#conteudo"
        className="sr-only z-60 rounded-full bg-fg font-semibold text-bg focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:px-5 focus:py-3"
      >
        {t.ui.skip}
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
    </>
  )
}

export default function App() {
  return (
    // reducedMotion="user": quem pede menos movimento no sistema não vê as animações
    <MotionConfig reducedMotion="user">
      <LanguageProvider>
        <Site />
      </LanguageProvider>
    </MotionConfig>
  )
}
