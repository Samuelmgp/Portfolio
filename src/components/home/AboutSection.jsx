import { useState } from "react";
import Card from "../ui/Card";
import { profile } from "../../data/profile";

export default function AboutSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="mt-12">
      <Card hover={false} className="p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-text-heading mb-4">
          About Me
        </h2>
        <div className="relative">
          <p className="text-text-body leading-relaxed">{profile.bio}</p>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              expanded ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-text-body leading-relaxed">
              {profile.bioExtended}
            </p>
          </div>
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          className="mt-4 text-sm font-medium text-primary hover:text-primary-deep transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      </Card>
    </section>
  );
}
