import "../css/ProjectCard.css";
export default function ProjectCard({ name, year, description, technologies, categories, git, link }) {
    return (
        <div className="project-card">
            <h2 className="project-name">{name} <span className="project-year">({year})</span></h2>
            <p className="project-description">{description}</p>
            <div className="project-technologies">
                <strong>Technologies:</strong> {technologies.join(", ")}
            </div>
            <div className="project-categories">
                <strong>Categories:</strong> {categories.join(", ")}
            </div>
            <div className="project-git">
                <strong>GitHub:</strong> {git === "Pending" || git === "Cannot be shared." ? git : <a href={git} target="_blank" rel="noopener noreferrer">{git}</a>}
            </div>
            {link && <div className="project-link">
                <strong>Link:</strong> {link ? <a href={link} target="_blank" rel="noopener noreferrer">{link}</a> : "No link available"}
            </div>}
        </div>
    );
}