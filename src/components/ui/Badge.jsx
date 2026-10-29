const variants = {
  default:
    "bg-bg-elevated text-text-body border-border",
  primary:
    "bg-primary/10 text-primary border-primary/30",
  inprogress:
    "bg-secondary/10 text-secondary border-secondary/30",
  completed:
    "bg-completed/10 text-completed border-completed/30",
  maintained:
    "bg-maintained/10 text-maintained border-maintained/30",
  occassional:
    "bg-occassional/10 text-occassional border-occassional/30",
  incomplete:
    "bg-incomplete/10 text-incomplete border-incomplete/30",
  school:
    `text-school-text/80
    bg-linear-to-r from-school-gold/70 to-school-black/30 via-white/30
    border-school-text/80`,
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
