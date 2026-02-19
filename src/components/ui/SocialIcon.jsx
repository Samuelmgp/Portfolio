import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
import { MdOutlineAlternateEmail } from "react-icons/md";

const iconMap = {
  email: MdOutlineAlternateEmail,
  linkedin: IoLogoLinkedin,
  github: IoLogoGithub,
};

export default function SocialIcon({ platform, url, label, size = 28 }) {
  const Icon = iconMap[platform];
  if (!Icon) return null;

  return (
    <a
      href={url}
      target={platform === "email" ? undefined : "_blank"}
      rel={platform === "email" ? undefined : "noopener noreferrer"}
      aria-label={label}
      className="text-text-muted hover:text-primary transition-colors duration-200"
    >
      <Icon size={size} />
    </a>
  );
}
