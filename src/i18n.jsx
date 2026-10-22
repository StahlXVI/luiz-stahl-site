import { createContext, useContext, useEffect, useState } from 'react'
import { content } from './data'

const STORAGE_KEY = 'idioma'
const LanguageContext = createContext(null)

// lê o idioma salvo; o padrão é Português
function savedLang() {
  try {
    const v = localStorage.getItem(STORAGE_KEY)
    return v in content ? v : 'pt'
  } catch {
    return 'pt'
  }
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(savedLang)
  const t = content[lang]

  useEffect(() => {
    document.documentElement.lang = t.htmlLang
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.description)
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // sem localStorage (aba anônima, etc.): só não lembra a escolha
    }
  }, [lang, t])

  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>
}

export function useLang() {
  return useContext(LanguageContext)
}
