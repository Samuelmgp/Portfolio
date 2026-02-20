import { FiGithub, FiExternalLink } from "react-icons/fi";
import Card from "../ui/Card";
import Badge from "../ui/Badge";

export default function ProjectCard({ project }) {
  const { name, 
        year,
        status, 
        featured, description, technologies, 
        categories, git, link } = project;

  return (
    <Card
      className={`p-5 ${featured ? "ring-1 ring-primary/30" : ""}`}
    >
      <article>
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold text-text-heading">
            {name}
            <span className="text-text-muted text-sm font-normal ml-2">
              ({year})
            </span>
          </h3>
          <div className="flex items-center gap-2 shrink-0">
            {git && (
              <a
                href={git}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} GitHub repository`}
                className="text-text-muted hover:text-text-heading transition-colors"
              >
                <FiGithub size={18} />
              </a>
            )}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} live site`}
                className="text-text-muted hover:text-primary transition-colors"
              >
                <FiExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
            
        {((status) => {
          switch (status) {
            case "school": 
              return (<Badge variant="school" className="mt-3">University Project</Badge>);
            case "completed":
              return (<Badge variant="completed" className="mt-3">Completed</Badge>);
            case "in-progress" :
              return (<Badge variant="inprogress" className="mt-3">In Progress</Badge>);
            case "occassional":
              return (<Badge variant="default" className="mt-3">Occassionally Updated</Badge>);
            default :
              return null;
          }
        })(status)}

        <p className="text-text-body text-sm leading-relaxed mt-3">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-1.5 mt-4">
          {categories.map((cat) => (
            <Badge key={cat}>
              {cat}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5 mt-4">
          {technologies.map((tech) => (
            <Badge key={tech} variant="primary">
              {tech}
            </Badge>
          ))}
        </div>
      </article>
    </Card>
  );
}
