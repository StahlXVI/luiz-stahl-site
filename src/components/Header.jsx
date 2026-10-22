import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { links, navIds } from '../data'
import { useLang } from '../i18n'
import useActiveSection from '../hooks/useActiveSection'
import { BehanceIcon, IconLink, InstagramIcon, MenuIcon } from './Icons'
import LanguageSwitch from './LanguageSwitch'

function Socials() {
  return (
    <>
      <IconLink href={links.behance} label="Behance"><BehanceIcon /></IconLink>
      <IconLink href={links.instagram} label="Instagram"><InstagramIcon /></IconLink>
    </>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(navIds)
  const { t } = useLang()

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/55 backdrop-blur-md">
      <div className="wrap flex h-17 items-center justify-between gap-4">
        <a href="#inicio">
          <img src="/imagens/logo.png" alt="Stahl" className="h-[34px] w-auto" />
        </a>

        <nav className="hidden md:block">
          <ul className="flex gap-7">
            {navIds.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`relative text-sm font-medium transition-colors hover:text-fg ${active === id ? 'text-fg' : 'text-muted'}`}
                >
                  {t.nav[id]}
                  {active === id && (
                    <motion.span layoutId="nav-underline" className="absolute inset-x-0 -bottom-1.5 h-0.5 bg-accent" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2.5 md:flex">
          <LanguageSwitch id="desktop" />
          <Socials />
        </div>

        {/* no celular o botão de idioma fica sempre à vista, ao lado do menu */}
        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitch id="mobile" />
          <button aria-label={t.ui.menu} aria-expanded={open} onClick={() => setOpen(!open)}>
            <MenuIcon open={open} />
          </button>
        </div>
      </div>

      {/* menu do celular */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-line bg-bg md:hidden"
          >
            <ul className="wrap py-2">
              {navIds.map((id) => (
                <li key={id}>
                  <a href={`#${id}`} onClick={() => setOpen(false)} className="block py-3 text-lg">
                    {t.nav[id]}
                  </a>
                </li>
              ))}
              <li className="flex gap-2.5 py-3">
                <Socials />
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
