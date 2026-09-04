import Container from "./Container";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { skillGroups } from "@/data/certifications";
import { profile } from "@/data/profile";

export default function CapabilitiesSection() {
  return (
    <section id="capabilities" className="border-t border-line bg-panel/40 py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Capabilities" title="What I bring to a room." />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 80}>
              <h3 className="font-display text-lg font-medium text-ink">{group.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                    <span aria-hidden="true" className="mt-2 h-1 w-1 flex-none rounded-full bg-accent" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal delay={160}>
          <p className="mt-14 max-w-2xl text-sm text-ink-soft">
            Languages: {profile.languages.join(" & ")}.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
