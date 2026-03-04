import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'OXYSPACES',
  description: 'Base dark do OXYSPACES com Next.js + Tailwind',
};

const links = [
  { href: '/', label: 'Início' },
  { href: '/partner', label: 'Anuncie conosco' },
  { href: '/search', label: 'Buscar um espaço' },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <header className="border-b border-white/10 bg-black/30 backdrop-blur">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
            <h1 className="text-xl font-semibold tracking-wide">OXYSPACES</h1>
            <nav className="flex items-center gap-6 text-sm text-gray-200">
              {links.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main className="mx-auto w-full max-w-6xl px-6 py-10">{children}</main>
      </body>
    </html>
  );
}
