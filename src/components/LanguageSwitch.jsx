import { motion } from 'framer-motion'
import { languages } from '../data'
import { useLang } from '../i18n'

// botão PT | EN; o fundo branco desliza para o idioma escolhido
export default function LanguageSwitch({ id }) {
  const { lang, setLang, t } = useLang()

  return (
    <div role="group" aria-label={t.ui.language} className="flex rounded-full border border-line p-1">
      {languages.map((l) => {
        const active = l.code === lang
        return (
          <button
            key={l.code}
            onClick={() => setLang(l.code)}
            aria-pressed={active}
            aria-label={l.name}
            title={l.name}
            lang={l.code === 'pt' ? 'pt-BR' : 'en'}
            className={`relative rounded-full px-3 py-1 font-mono text-sm transition-colors ${active ? 'text-bg' : 'text-muted hover:text-fg'}`}
          >
            {active && <motion.span layoutId={`lang-pill-${id}`} className="absolute inset-0 rounded-full bg-fg" />}
            <span className="relative">{l.short}</span>
          </button>
        )
      })}
    </div>
  )
}
