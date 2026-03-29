"use client";

import { useOnScreen } from "@/hooks/useOnScreen";

interface SectionProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

export default function Section({ children, id, className = "" }: SectionProps) {
  const [ref, visible] = useOnScreen<HTMLElement>(0.15);

  return (
    <section
      ref={ref}
      id={id}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition:
          "opacity 0.7s cubic-bezier(.16,1,.3,1), transform 0.7s cubic-bezier(.16,1,.3,1)",
      }}
    >
      {children}
    </section>
  );
}
