import Link from 'next/link';
import Container from './Container';

const links = [
  { href: '/', label: 'Home' },
  { href: '/search', label: 'Search' },
  { href: '/partner', label: 'Partner' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-[#0A0B0F]/90 backdrop-blur">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-3 py-4">
          <Link href="/" className="text-sm font-semibold tracking-[0.24em] text-white sm:text-base">
            OXYSPACES
          </Link>
          <nav className="flex items-center gap-2 text-sm text-slate-300 sm:gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 transition hover:bg-white/5 hover:text-sky-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70"
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
