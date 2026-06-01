import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";

interface SectionHeadingProps {
  kicker?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

/** Consistent editorial section header: kicker → headline → lede. */
export function SectionHeading({
  kicker,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "mx-auto max-w-3xl items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {kicker && (
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-gold/60" />
            <span className="kicker">{kicker}</span>
          </div>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="text-balance font-display text-display-lg font-semibold text-cloud">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="max-w-2xl text-pretty text-lg leading-relaxed text-cloud-muted">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
