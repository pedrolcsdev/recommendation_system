import { ReactNode } from 'react';
import Container from './Container';
import Footer from './Footer';
import Navbar from './Navbar';

interface AppShellProps {
  children: ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-[#07090D] text-white">
      <Navbar />
      <main className="flex-1 py-8 sm:py-10 md:py-12">
        <Container>{children}</Container>
      </main>
      <Footer />
    </div>
  );
}
