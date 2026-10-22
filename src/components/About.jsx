import { about } from '../data'
import { Chip, Heading, Reveal, Tag } from './ui'

export default function About() {
  return (
    <section className="py-20 md:py-30">
      <div className="wrap grid gap-6 md:grid-cols-[1fr_1.4fr] md:gap-16">
        <Reveal>
          <Tag>Sobre mim</Tag>
          <Heading className="text-[clamp(48px,7vw,96px)]">
            Arte digital<br />com<br />identidade
          </Heading>
        </Reveal>

        <Reveal delay={0.1}>
          {about.paragraphs.map((p, i) => (
            <p key={i} className="mb-4.5 text-[17px] leading-relaxed text-soft">{p}</p>
          ))}

          <div className="mt-7 flex flex-wrap gap-2">
            {about.skills.map((s) => <Chip key={s}>{s}</Chip>)}
          </div>

          <div className="mt-10 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-line bg-line">
            {about.stats.map((s) => (
              <div key={s.label} className="bg-bg p-4 md:p-6">
                <b className="block font-display text-3xl font-normal md:text-[40px]">{s.value}</b>
                <Tag>{s.label}</Tag>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
