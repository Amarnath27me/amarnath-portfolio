export default function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`py-(--spacing-section-y) px-(--spacing-section-x) mw-content mx-auto w-full section-py ${className}`}
    >
      {children}
    </section>
  );
}
