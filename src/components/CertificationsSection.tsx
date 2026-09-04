import Container from "./Container";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { certifications } from "@/data/certifications";

export default function CertificationsSection() {
  const featured = certifications.filter((cert) => cert.tier === "featured");
  const supplementary = certifications.filter((cert) => cert.tier === "supplementary");

  return (
    <section id="certifications" className="py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Certifications" title="Continuous, self-directed upskilling." />
        </Reveal>

        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((cert, index) => (
            <Reveal as="li" key={cert.title} delay={(index % 3) * 60}>
              <div className="flex h-full flex-col rounded-2xl border border-ink/15 bg-panel p-6 shadow-[0_18px_40px_-28px_rgba(26,23,18,0.4)]">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  Professional certification
                </p>
                <p className="mt-3 font-display text-lg font-medium leading-snug text-ink">{cert.title}</p>
                <p className="mt-2 text-sm text-ink-soft">
                  {cert.issuer} &middot; {cert.year}
                  {cert.duration ? ` · ${cert.duration}` : ""}
                </p>
                {cert.href ? (
                  <a
                    href={cert.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                  >
                    View certificate
                  </a>
                ) : null}
              </div>
            </Reveal>
          ))}
        </ul>

        {supplementary.length ? (
          <Reveal delay={80}>
            <div className="mt-12 border-t border-line pt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-faint">
                Supplementary certificates
              </p>
              <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {supplementary.map((cert) => (
                  <li key={cert.title} className="rounded-xl border border-line bg-paper p-4">
                    <p className="text-sm font-medium text-ink">{cert.title}</p>
                    <p className="mt-1 text-xs text-ink-soft">
                      {cert.issuer} &middot; {cert.year}
                      {cert.duration ? ` · ${cert.duration}` : ""}
                    </p>
                    {cert.href ? (
                      <a
                        href={cert.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:underline"
                      >
                        View certificate
                      </a>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}
