"use client";

import { useId, useState } from "react";
import type { ExperienceEntry } from "@/data/experience";

export default function ExperienceCard({ entry, index }: { entry: ExperienceEntry; index: number }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <article className="rounded-3xl border border-line bg-panel p-6 sm:p-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-faint">
            {String(index + 1).padStart(2, "0")} &middot; {entry.dateRange}
          </p>
          <h3 className="mt-3 font-display text-2xl font-medium text-ink">{entry.role}</h3>
          <p className="mt-1 text-base text-ink-soft">
            {entry.company} &middot; {entry.location}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft">{entry.companyBlurb}</p>
        </div>

        <dl className="grid flex-none grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4 lg:w-80 lg:grid-cols-2">
          {entry.metrics.map((metric) => (
            <div key={metric.label} className="flex flex-col-reverse">
              <dt className="mt-1 text-xs leading-snug text-ink-soft">{metric.label}</dt>
              <dd className="font-display text-xl font-medium text-ink">{metric.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mt-6 rounded-2xl bg-accent-soft/60 p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{entry.projectTitle}</p>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">{entry.summary}</p>
      </div>

      <ul className="mt-6 space-y-2.5">
        {entry.resumeBullets.map((bullet) => (
          <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
            <span aria-hidden="true" className="mt-2 h-1 w-1 flex-none rounded-full bg-accent" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4"
      >
        {open ? "Show less" : "Read the full story"}
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <path d="M2.5 4.5L6 8l3.5-3.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open ? (
        <div id={panelId} className="mt-6 space-y-8 border-t border-line pt-6">
          {entry.guide ? (
            <p className="text-xs text-ink-faint">Mentored by {entry.guide}</p>
          ) : null}

          <div className="space-y-4">
            {entry.narrative.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-relaxed text-ink-soft">
                {paragraph}
              </p>
            ))}
          </div>

          {entry.systemBuild ? (
            <div>
              <h4 className="font-display text-lg font-medium text-ink">{entry.systemBuild.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{entry.systemBuild.intro}</p>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {entry.systemBuild.agents.map((agent, i) => (
                  <div key={agent.name} className="rounded-xl border border-line bg-paper p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                      {String(i + 1).padStart(2, "0")} &middot; {agent.name}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{agent.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {entry.caseStudies?.length ? (
            <div className="space-y-5">
              <h4 className="font-display text-lg font-medium text-ink">Case studies</h4>
              {entry.caseStudies.map((cs) => (
                <div key={cs.title} className="rounded-xl border border-line bg-paper p-5">
                  <p className="font-medium text-ink">{cs.title}</p>
                  <p className="mt-1 text-sm text-ink-soft">{cs.summary}</p>
                  <ul className="mt-3 space-y-2">
                    {cs.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                        <span aria-hidden="true" className="mt-2 h-1 w-1 flex-none rounded-full bg-accent" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : null}

          {entry.recommendations?.length ? (
            <div>
              <h4 className="font-display text-lg font-medium text-ink">Recommendations delivered</h4>
              <ul className="mt-3 space-y-2">
                {entry.recommendations.map((rec) => (
                  <li key={rec} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                    <span aria-hidden="true" className="mt-2 h-1 w-1 flex-none rounded-full bg-accent" />
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {entry.certificateHref ? (
            <a
              href={entry.certificateHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
            >
              View completion letter (PDF)
            </a>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}
