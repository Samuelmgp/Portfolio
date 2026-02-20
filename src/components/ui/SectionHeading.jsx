export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-text-heading mb-2">{title}</h2>
      {subtitle && (
        <p className="text-text-muted text-sm">{subtitle}</p>
      )}
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-primary-deep" />
    </div>
  );
}
