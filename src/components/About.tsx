import Container from "./Container";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { profile } from "@/data/profile";
import { education } from "@/data/education";

export default function About() {
  const current = education[0];

  return (
    <section id="about" className="py-24 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <SectionHeading eyebrow="About" title="A researcher who ships recommendations, not just reports." />
          </Reveal>

          <Reveal delay={80}>
            <div className="space-y-5 text-base leading-relaxed text-ink-soft">
              {profile.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4 rounded-2xl border border-line bg-panel p-5">
              <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-accent-soft font-display text-lg text-accent">
                GL
              </div>
              <div>
                <p className="font-medium text-ink">{current.degree}</p>
                <p className="text-sm text-ink-soft">
                  {current.institute}, {current.city} &middot; {current.year}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
