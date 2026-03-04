type SectionHeaderProps = {
  title: string;
  subtitle?: string;
};

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <header className="space-y-1.5">
      <h2 className="text-2xl font-semibold text-white sm:text-3xl">{title}</h2>
      {subtitle ? <p className="text-sm text-slate-300 sm:text-base">{subtitle}</p> : null}
    </header>
  );
}
