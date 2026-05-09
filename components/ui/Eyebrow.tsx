export default function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono ts-tiny uppercase tracking-widest text-text-muted">
        {children}
      </span>
      <span className="gradient-line flex-1" />
    </div>
  );
}
