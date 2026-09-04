import Container from "./Container";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { education, awards, positions, extracurriculars } from "@/data/education";

export default function EducationSection() {
  return (
    <section id="education" className="border-t border-line bg-panel/40 py-24 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <SectionHeading eyebrow="Education" title="Academics, awards & leadership." />

            <div className="mt-10 overflow-hidden rounded-2xl border border-line">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-panel text-xs uppercase tracking-wide text-ink-faint">
                    <th scope="col" className="px-4 py-3 font-medium">
                      Degree
                    </th>
                    <th scope="col" className="px-4 py-3 font-medium">
                      Institute
                    </th>
                    <th scope="col" className="px-4 py-3 font-medium">
                      Score
                    </th>
                    <th scope="col" className="px-4 py-3 font-medium">
                      Year
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {education.map((entry) => (
                    <tr key={entry.degree} className="border-t border-line bg-paper">
                      <td className="px-4 py-3 font-medium text-ink">{entry.degree}</td>
                      <td className="px-4 py-3 text-ink-soft">
                        {entry.institute}
                        <span className="block text-xs text-ink-faint">{entry.city}</span>
                      </td>
                      <td className="px-4 py-3 text-ink-soft numeral">{entry.score}</td>
                      <td className="px-4 py-3 text-ink-soft numeral">{entry.year}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <h3 className="font-display text-lg font-medium text-ink">Awards</h3>
                <ul className="mt-4 space-y-4">
                  {awards.map((award) => (
                    <li key={award.title} className="text-sm leading-relaxed">
                      <p className="font-medium text-ink">{award.title}</p>
                      <p className="text-ink-soft">
                        {award.org} &middot; {award.year}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-display text-lg font-medium text-ink">Positions of responsibility</h3>
                <ul className="mt-4 space-y-4">
                  {positions.map((pos) => (
                    <li key={pos.title} className="text-sm leading-relaxed">
                      <p className="font-medium text-ink">
                        {pos.title} &middot; <span className="text-ink-soft">{pos.year}</span>
                      </p>
                      <p className="mt-0.5 text-ink-soft">{pos.description}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sm:col-span-2">
                <h3 className="font-display text-lg font-medium text-ink">Extracurriculars</h3>
                <ul className="mt-4 space-y-4">
                  {extracurriculars.map((item) => (
                    <li key={item.title} className="text-sm leading-relaxed">
                      <p className="font-medium text-ink">
                        {item.title} &middot; <span className="text-ink-soft">{item.year}</span>
                      </p>
                      <p className="mt-0.5 text-ink-soft">{item.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
