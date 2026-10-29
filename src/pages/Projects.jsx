import PageWrapper from "../components/layout/PageWrapper";
import SectionHeading from "../components/ui/SectionHeading";
import Timeline from "../components/timeline/Timeline";
import ProjectCard from "../components/projects/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <PageWrapper>
      <SectionHeading
        title="Projects"
        subtitle="Showcasing some of my recent projects and University work"
      />
      <Timeline
        items={projects}
        renderItem={(project) => <ProjectCard project={project} />}
      />
    </PageWrapper>
  );
}
