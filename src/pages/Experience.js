import EmploymentCard from "../components/EmploymentCard";
import { workExperience } from "../assets/WorkExperience";

// Timeline Component work
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
function Experience() {
    const { position, company, duration, description } = workExperience[0];
  
    return (
        <Timeline id="timeline" position="alternate-reverse">
        {workExperience.map((job, index) => (
            <TimelineItem key={index}>
                <TimelineSeparator>
                    <TimelineDot color={index % 2 == 0 ? "primary" : "secondary"} />
                    {index < workExperience.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                    <EmploymentCard 
                        position={job.position} 
                        company={job.company} 
                        duration={job.duration} 
                        description={job.description} 
                    />
                </TimelineContent>
            </TimelineItem>
        ))}
        </Timeline>
    )
}

export default Experience;