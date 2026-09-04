import Link from "next/link";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Case files"
            title="Five projects, one habit: turn messy data into a decision."
            description="Each case file is the full write-up — methodology, numbers, and the recommendation that came out the other end. Nothing trimmed for the homepage."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={(index % 2) * 60}>
              <Link
                href={`/projects/${project.slug}`}
                className="group flex h-full flex-col rounded-3xl border border-line bg-panel p-7 transition-colors hover:border-ink/30"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    {project.category}
                  </p>
                  <span className="text-xs font-medium text-ink-faint">{project.type}</span>
                </div>

                <h3 className="mt-4 font-display text-2xl font-medium leading-snug text-ink">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{project.tagline}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tools.slice(0, 4).map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-line bg-paper px-3 py-1 text-xs text-ink-soft"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-ink">
                  Read the case file
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    <path d="M2 7h10M8 3l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
