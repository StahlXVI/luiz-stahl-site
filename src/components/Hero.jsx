import { motion } from 'framer-motion'
import { links } from '../data'
import { useLang } from '../i18n'
import { Button, Chip, ease } from './ui'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
}

export default function Hero() {
  const { t } = useLang()

  return (
    <section
      id="inicio"
      className="relative flex min-h-svh items-end bg-cover pt-30 pb-14"
      style={{
        backgroundImage:
          'linear-gradient(180deg, rgba(10,10,11,.3) 0%, rgba(10,10,11,.6) 55%, #0a0a0b 100%), url(/imagens/livery-1.jpg)',
        backgroundPosition: 'center 40%',
      }}
    >
      <span aria-hidden className="absolute top-1/2 right-6 hidden -translate-y-1/2 text-sm tracking-[.5em] text-muted [writing-mode:vertical-rl] md:block">
        グラフィックデザイン
      </span>

      <motion.div
        className="wrap"
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.12 } } }}
      >
        <motion.p
          variants={fadeUp}
          className="mb-3.5 inline-block rounded-md bg-bg/80 px-2.5 py-1.5 font-mono text-sm tracking-[.08em] uppercase"
        >
          {t.ui.heroTag}
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="font-display text-[clamp(72px,15vw,230px)] leading-[.86] font-normal uppercase [text-shadow:0_4px_40px_rgba(0,0,0,.5)]"
        >
          Luiz Stahl<span className="text-accent">.</span>
          <br />
          <span className="text-outline">Design</span>
        </motion.h1>

        <motion.div variants={fadeUp} className="mt-7 flex flex-wrap items-end justify-between gap-8">
          <div className="flex flex-wrap gap-2">
            {t.roles.map((r) => <Chip key={r}>{r}</Chip>)}
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="#livery">{t.ui.seeWork}</Button>
            <Button href={links.behance} variant="ghost">Behance ↗</Button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
