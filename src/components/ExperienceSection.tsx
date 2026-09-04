import Container from "./Container";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import ExperienceCard from "./ExperienceCard";
import { experience } from "@/data/experience";

export default function ExperienceSection() {
  return (
    <section id="experience" className="border-t border-line bg-panel/40 py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Two internships, two very different problems."
            description="From an AI tender-intelligence system built for a steel exporter to a lead-scoring model for a certification consultancy — both graded on whether the recommendation was actually used."
          />
        </Reveal>

        <div className="mt-14 space-y-8">
          {experience.map((entry, index) => (
            <Reveal key={entry.slug} delay={index * 60}>
              <ExperienceCard entry={entry} index={index} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
