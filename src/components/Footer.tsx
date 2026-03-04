import Container from './Container';

export default function Footer() {
  return (
    <footer className="mt-14 border-y border-white/10 bg-[#10141D]">
      <Container>
        <div className="flex flex-col gap-2 py-5 text-center text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:text-sm">
          <p>© {new Date().getFullYear()} OXYSPACES. Todos os direitos reservados.</p>
          <p className="text-slate-500">Marketplace de espaços corporativos e eventos.</p>
        </div>
      </Container>
    </footer>
  );
}
