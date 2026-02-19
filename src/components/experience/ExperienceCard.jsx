import Card from "../ui/Card";
import Badge from "../ui/Badge";

export default function ExperienceCard({ position, company, duration, description, skills }) {
  return (
    <Card className="p-5">
      <article>
        <h3 className="text-lg font-semibold text-text-heading">{position}</h3>
        <p className="text-text-muted text-sm mt-1">
          <span>{company}</span>
          <span className="mx-2">&middot;</span>
          <time>{duration}</time>
        </p>
        <p className="text-text-body text-sm leading-relaxed mt-3">
          {description}
        </p>
        {skills && skills.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-4">
            {skills.map((skill) => (
              <Badge key={skill} variant="primary">{skill}</Badge>
            ))}
          </div>
        )}
      </article>
    </Card>
  );
}
