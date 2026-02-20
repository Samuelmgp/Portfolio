export default function PageWrapper({ children, className = "" }) {
  return (
    <main
      className={`mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 lg:px-8 animate-fade-in ${className}`}
    >
      {children}
    </main>
  );
}
