import SocialIcon from "../ui/SocialIcon";
import { social } from "../../data/social";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border py-8 text-center">
      <div className="flex justify-center gap-5 mb-4">
        {social.map((s) => (
          <SocialIcon key={s.id} {...s} />
        ))}
      </div>
      <p className="text-text-muted text-sm">
        &copy; {new Date().getFullYear()} Samuel Garcia. All rights reserved.
      </p>
    </footer>
  );
}
