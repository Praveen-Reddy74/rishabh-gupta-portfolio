import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Container from "@/components/Container";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export async function generateMetadata(props: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.tagline,
    openGraph: {
      title: project.title,
      description: project.tagline,
    },
  };
}

export default async function ProjectPage(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) notFound();

  const otherProjects = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <article className="py-16 sm:py-20">
      <Container>
        <Link href="/#projects" className="text-sm font-medium text-ink-soft hover:text-ink">
          &larr; Back to case files
        </Link>

        <header className="mt-8 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {project.category} &middot; {project.type}
          </p>
          <h1 className="mt-4 font-display text-4xl font-medium leading-tight text-balance text-ink sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">{project.tagline}</p>
          <p className="mt-3 text-sm text-ink-faint">Course: {project.course}</p>
        </header>

        {project.metrics.length ? (
          <dl className="mt-10 grid grid-cols-2 gap-6 border-y border-line py-8 sm:grid-cols-3">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="flex flex-col-reverse">
                <dt className="mt-1 text-xs leading-snug text-ink-soft">{metric.label}</dt>
                <dd className="font-display text-2xl font-medium text-ink sm:text-3xl">{metric.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}

        <div className="mt-10 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span key={tool} className="rounded-full border border-line bg-panel px-3 py-1 text-xs text-ink-soft">
              {tool}
            </span>
          ))}
        </div>

        <div className="mt-14 max-w-3xl space-y-12">
          {project.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-2xl font-medium text-ink">{section.heading}</h2>
              {section.body ? (
                <p className="mt-4 text-base leading-relaxed text-ink-soft">{section.body}</p>
              ) : null}
              {section.bullets ? (
                <ul className="mt-4 space-y-2.5">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-base leading-relaxed text-ink-soft">
                      <span aria-hidden="true" className="mt-2.5 h-1 w-1 flex-none rounded-full bg-accent" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>

        {project.links?.length ? (
          <div className="mt-14 flex flex-wrap gap-4 border-t border-line pt-8">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-ink px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                {link.label}
              </a>
            ))}
          </div>
        ) : null}

        {otherProjects.length ? (
          <div className="mt-20 border-t border-line pt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-faint">More case files</p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {otherProjects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="rounded-2xl border border-line bg-panel p-5 transition-colors hover:border-ink/30"
                >
                  <p className="font-display text-lg font-medium text-ink">{p.title}</p>
                  <p className="mt-1 text-sm text-ink-soft">{p.category}</p>
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </Container>
    </article>
  );
}
