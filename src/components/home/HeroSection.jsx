import myPhoto from "../../assets/myPhoto.jpeg";
import SocialIcon from "../ui/SocialIcon";
import { profile } from "../../data/profile";
import { social } from "../../data/social";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
      {/* Photo */}
      <div className="relative shrink-0">
        <div className="h-40 w-40 rounded-full ring-4 ring-primary/40 shadow-[0_0_30px_var(--color-ring)] overflow-hidden">
          <img
            src={myPhoto}
            alt={profile.name}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Info */}
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold text-text-heading mb-2">
          {profile.name}
        </h1>
        <p className="text-text-muted text-lg mb-4">{profile.tagline}</p>
        <div className="flex justify-center md:justify-start gap-4">
          {social.map((s) => (
            <SocialIcon key={s.id} {...s} size={32} />
          ))}
        </div>
      </div>
    </section>
  );
}
