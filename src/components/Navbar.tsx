import Link from 'next/link';
import Container from './Container';

const links = [
  { href: '/', label: 'Home' },
  { href: '/search', label: 'Search' },
  { href: '/partner', label: 'Partner' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-[#0A0B0F]/90 shadow-[0_6px_24px_rgba(2,6,23,0.35)] backdrop-blur">
      <Container>
        <div className="flex flex-col gap-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:py-4">
          <Link
            href="/"
            className="text-center text-sm font-semibold tracking-[0.24em] text-white transition hover:text-sky-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70 sm:text-left sm:text-base"
          >
            OXYSPACES
          </Link>
          <nav className="grid w-full grid-cols-3 gap-2 text-xs text-slate-300 sm:flex sm:w-auto sm:items-center sm:gap-3 sm:text-sm">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg border border-white/10 px-3 py-2 text-center transition hover:border-white/25 hover:bg-white/10 hover:text-sky-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70 sm:border-transparent"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
