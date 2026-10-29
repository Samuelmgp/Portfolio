import { FiExternalLink } from "react-icons/fi";

export default function ExternalLink({ href, children, className = "" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1 text-primary hover:text-primary-deep transition-colors duration-200 ${className}`}
    >
      {children}
      <FiExternalLink size={14} />
    </a>
  );
}
