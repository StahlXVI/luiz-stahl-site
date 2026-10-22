import { Fragment } from 'react'
import { roles } from '../data'

// repete as palavras 4x para a faixa nunca ficar com buraco vazio
const row = Array.from({ length: 4 }).flatMap(() => roles)

export default function Marquee() {
  return (
    <div aria-hidden className="overflow-hidden border-y border-line bg-bg-2">
      <div className="flex w-max animate-marquee motion-reduce:animate-none">
        {row.map((word, i) => (
          <Fragment key={i}>
            <span className="px-7 py-3.5 font-display text-[clamp(28px,4vw,48px)] whitespace-nowrap uppercase">{word}</span>
            <span className="px-7 py-3.5 font-display text-[clamp(28px,4vw,48px)] text-accent">✦</span>
          </Fragment>
        ))}
      </div>
    </div>
  )
}
