export default function Card({ children, className = "", hover = true, glow = false }) {
  return (
    <div
      className={`
        rounded-card bg-bg-card border border-border shadow-card
        ${hover ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-glow" : ""}
        ${glow ? "shadow-glow" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
