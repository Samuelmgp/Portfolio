const variants = {
  default:
    "bg-bg-elevated text-text-body border-border",
  primary:
    "bg-primary/10 text-primary border-primary/30",
  inprogress:
    "bg-secondary/10 text-secondary border-secondary/30",
  school:
    "bg-secondary/20 text-secondary/80 border-secondary/50",
  completed:
    "bg-completed-bg/10 text-completed-text border-completed-border/30",
};

export default function Badge({ children, variant = "default", className = "" }) {
  return (
    <span
      className={`
        inline-flex items-center rounded-badge border px-2.5 py-0.5
        text-xs font-medium
        ${variants[variant] || variants.default}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
