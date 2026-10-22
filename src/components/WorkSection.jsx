import { useLang } from '../i18n'
import { Heading, Reveal, Tag } from './ui'

export default function WorkSection({ section, onOpen }) {
  const { id, num, kicker, title, text, callout, items } = section
  const { t } = useLang()

  return (
    <section id={id} className="scroll-mt-17 border-t border-line py-20 md:py-30">
      <div className="wrap">
        <Reveal className="mb-12 grid gap-x-10 gap-y-3 md:grid-cols-[auto_1fr] md:items-end">
          <span aria-hidden className="font-display text-[clamp(80px,12vw,160px)] leading-[.8] text-outline-soft">{num}</span>
          <div>
            <Tag>{kicker}</Tag>
            <Heading className="text-[clamp(48px,7vw,96px)]">{title}</Heading>
          </div>
          <p className="max-w-[62ch] text-soft md:col-start-2">{text}</p>
        </Reveal>

        {callout && (
          <Reveal className="mb-10 max-w-[70ch] border-l-3 border-accent py-1 pl-5 text-soft">
            <strong className="mb-1.5 block text-xl text-fg">{callout.title}</strong>
            {callout.text}
          </Reveal>
        )}

        <div className="grid grid-cols-12 gap-4">
          {items.map((item, i) => (
            <Reveal key={item.src} delay={i * 0.08} className={`col-span-12 ${item.span}`}>
              <button
                onClick={() => onOpen(item.src)}
                aria-label={`${t.ui.enlarge}: ${item.label}`}
                className={`group relative block w-full cursor-zoom-in overflow-hidden rounded-[14px] border border-line bg-bg-2 ${item.aspect}`}
              >
                <img
                  src={item.src}
                  alt={item.label}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.04]"
                />
                <span className="absolute bottom-3 left-3.5 translate-y-1.5 rounded-md bg-black/80 px-2.5 py-1 font-mono text-[13px] tracking-[.08em] uppercase opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                  {item.label}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
