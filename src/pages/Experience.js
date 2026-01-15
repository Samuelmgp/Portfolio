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
    return (
        <Timeline id="timeline" position="alternate-reverse">
        {workExperience.map((job, index) => (
            <TimelineItem key={index}>
                <TimelineSeparator>
                    <TimelineDot sx={{background: 'var(--color-primary)', boxShadow: '0 0 10px 0 var(--color-secondary)'}} />
                    {index < workExperience.length - 1 && <TimelineConnector sx={{background: 'var(--color-primary-deep)'}}/>}
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