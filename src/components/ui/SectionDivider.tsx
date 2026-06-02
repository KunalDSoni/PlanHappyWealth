/** Quiet transition between sections — a hairline with a gold node. */
export function SectionDivider() {
  return (
    <div className="mx-auto flex max-w-7xl items-center gap-4 px-6 md:px-8" aria-hidden="true">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-cloud/10" />
      <span className="h-1.5 w-1.5 rotate-45 bg-gold/60" />
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-cloud/10" />
    </div>
  );
}
