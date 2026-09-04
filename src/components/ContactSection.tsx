import Container from "./Container";
import Reveal from "./Reveal";
import { profile } from "@/data/profile";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 sm:py-28">
      <Container>
        <Reveal>
          <div className="rounded-[2rem] border border-line bg-ink px-8 py-16 text-paper sm:px-14 sm:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-soft">Contact</p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-medium leading-tight text-balance sm:text-4xl">
              Open to research, strategy, and analytics roles — let&rsquo;s talk.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-paper/70">
              The fastest way to reach me is email. I&rsquo;m based in Gurgaon and happy to work across time
              zones.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={`${profile.socials.email}?subject=Let's%20talk`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-paper px-6 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
              >
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-paper/30 px-6 py-3 text-sm font-medium text-paper transition-colors hover:border-paper"
              >
                {profile.phone}
              </a>
              <a
                href={profile.resumeHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-paper/30 px-6 py-3 text-sm font-medium text-paper transition-colors hover:border-paper"
              >
                Download résumé
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Rishabh Gupta's LinkedIn profile"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-paper/30 px-6 py-3 text-sm font-medium text-paper transition-colors hover:border-paper"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
