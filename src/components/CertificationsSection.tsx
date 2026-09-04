import Container from "./Container";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { certifications } from "@/data/certifications";

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Certifications" title="Continuous, self-directed upskilling." />
        </Reveal>

        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <Reveal as="li" key={cert.title} delay={(index % 3) * 60}>
              <div className="flex h-full flex-col rounded-2xl border border-line bg-panel p-6">
                <p className="font-display text-lg font-medium leading-snug text-ink">{cert.title}</p>
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
      </Container>
    </section>
  );
}
