import UnderDevelopment from "../components/UnderDevelopment";

import ProjectCard from "../components/ProjectCard";
import { projects } from "../assets/Projects.js";

// Timeline Component work
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
function Projects() {
    const projectsData = projects;
    
    return (
        <Timeline position="alternate">
            {projectsData.map((project, index) => (
                <TimelineItem key={index}>
                    <TimelineSeparator>
                        <TimelineDot />
                        {index < projectsData.length - 1 && <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent>
                        <ProjectCard
                            name={project.name}
                            year={project.year}
                            description={project.description}
                            technologies={project.technologies}
                            categories={project.categories}
                            git={project.git}
                            link={project.link}
                        />
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline> 
    )
}

export default Projects;