export function BehanceIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-[17px]">
      <path d="M8.2 11.3c.9-.4 1.4-1.2 1.4-2.2C9.6 7 8.1 6 6 6H1v12h5.2c2.2 0 4-1.1 4-3.4 0-1.5-.8-2.9-2-3.3zM3.6 8.1h2.2c.8 0 1.5.3 1.5 1.2 0 .9-.6 1.2-1.4 1.2H3.6V8.1zm2.5 7.8H3.6v-3.2h2.6c1 0 1.7.4 1.7 1.6 0 1.2-.8 1.6-1.8 1.6zM20.6 7h-5.8V5.6h5.8V7zM23 13.6c0-2.7-1.6-4.9-4.4-4.9-2.8 0-4.6 2.1-4.6 4.8 0 2.8 1.7 4.7 4.6 4.7 2.2 0 3.6-1 4.3-3.1h-2.2c-.2.8-1.2 1.2-2 1.2-1.5 0-2.3-.9-2.3-2.4H23v-.3zm-6.6-1c.1-1.2.9-2 2.1-2 1.3 0 1.9.8 2 2h-4.1z" />
    </svg>
  )
}

export function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-[17px]">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  )
}

export function MenuIcon({ open }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
    </svg>
  )
}

export function IconLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="grid size-[38px] place-items-center rounded-full border border-line transition-colors hover:border-fg hover:bg-fg hover:text-bg"
    >
      {children}
    </a>
  )
}
