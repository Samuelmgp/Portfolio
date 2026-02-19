import { useRef, useEffect, useState } from "react";

export default function TimelineItem({ children, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative flex w-full gap-6 md:gap-10">
      {/* Desktop: alternating layout */}
      <div
        className={`hidden md:flex md:w-1/2 ${isLeft ? "justify-end" : "order-2 justify-start"}`}
      >
        <div
          className={`w-full max-w-md transition-all duration-700 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: `${index * 80}ms` }}
        >
          {children}
        </div>
      </div>

      {/* Center line + dot */}
      <div className="absolute left-3 md:left-1/2 md:-translate-x-1/2 flex flex-col items-center">
        <div className="h-3 w-3 rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)] z-10" />
        <div className="w-px flex-1 bg-gradient-to-b from-primary/60 to-primary/10" />
      </div>

      {/* Desktop: spacer for opposite side */}
      <div className={`hidden md:block md:w-1/2 ${isLeft ? "order-2" : ""}`} />

      {/* Mobile: single column */}
      <div className="md:hidden pl-8 w-full">
        <div
          className={`transition-all duration-700 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: `${index * 80}ms` }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
