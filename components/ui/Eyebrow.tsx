export default function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono ts-tiny uppercase tracking-widest text-text-muted">
      {children}
    </span>
  );
}
