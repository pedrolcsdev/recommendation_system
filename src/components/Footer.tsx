import Container from './Container';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-[#12141A]">
      <Container>
        <div className="py-6 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} OXYSPACES. Todos os direitos reservados.</p>
        </div>
      </Container>
    </footer>
  );
}
