import Badge from "../ui/Badge";
import { skills } from "../../data/skills";

const categoryVariant = {
  language: "primary",
  framework: "status",
  tool: "default",
};

export default function SkillsSection() {
  return (
    <section className="mt-12">
      <h2 className="text-xl font-semibold text-text-heading mb-4 text-center">
        Skills & Technologies
      </h2>
      <div className="flex flex-wrap justify-center gap-2">
        {skills.map((skill) => (
          <Badge
            key={skill.name}
            variant={categoryVariant[skill.category] || "default"}
          >
            {skill.name}
          </Badge>
        ))}
      </div>
    </section>
  );
}
