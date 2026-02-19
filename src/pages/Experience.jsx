import PageWrapper from "../components/layout/PageWrapper";
import SectionHeading from "../components/ui/SectionHeading";
import Timeline from "../components/timeline/Timeline";
import ExperienceCard from "../components/experience/ExperienceCard";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <PageWrapper>
      <SectionHeading
        title="Experience"
        subtitle="My professional journey so far"
      />
      <Timeline
        items={experience}
        renderItem={(job) => <ExperienceCard {...job} />}
      />
    </PageWrapper>
  );
}
