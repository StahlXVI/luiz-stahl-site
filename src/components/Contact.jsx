import { links } from '../data'
import { Button, Heading, Reveal, Tag } from './ui'

export default function Contact() {
  return (
    <>
      <section className="border-t border-line bg-[radial-gradient(60%_60%_at_50%_100%,rgba(255,45,85,.18),transparent_70%)] py-20 text-center md:py-30">
        <Reveal className="wrap">
          <Tag>Contato</Tag>
          <Heading className="mt-4 mb-9 text-[clamp(56px,10vw,150px)] leading-[.9]">
            Bora criar<br />algo junto?
          </Heading>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href={links.instagram}>Instagram ↗</Button>
            <Button href={links.behance} variant="ghost">Behance ↗</Button>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-line py-7">
        <div className="wrap flex flex-wrap items-center justify-between gap-4">
          <img src="/imagens/logo.png" alt="Stahl" className="h-[26px] w-auto opacity-80" />
          <Tag>© {new Date().getFullYear()} Luiz Stahl · Design</Tag>
        </div>
      </footer>
    </>
  )
}
