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
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
