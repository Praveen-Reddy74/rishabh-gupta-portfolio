import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { profile, stats } from "@/data/profile";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-14 sm:pt-20">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              {profile.role} &middot; {profile.location}
            </p>
            <h1 className="mt-5 font-display text-4xl font-medium leading-[1.08] text-balance text-ink sm:text-5xl lg:text-[3.4rem]">
              Rishabh Gupta
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">{profile.headline}</p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
              >
                View case files
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
              >
                Get in touch
              </Link>
            </div>

            <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse">
                  <dt className="mt-1 text-xs leading-snug text-ink-soft">{stat.label}</dt>
                  <dd className="font-display text-2xl font-medium text-ink sm:text-3xl">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-[2rem] bg-panel shadow-[0_30px_60px_-30px_rgba(26,23,18,0.35)]">
              <Image
                src="/images/rishabh-portrait-1400.jpg"
                alt="Portrait of Rishabh Gupta"
                fill
                priority
                sizes="(min-width: 1024px) 32rem, 80vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden max-w-[13rem] rounded-2xl border border-line bg-panel p-4 shadow-lg sm:block">
              <p className="font-display text-sm font-medium text-ink">PGDM, Great Lakes Institute of Management</p>
              <p className="mt-1 text-xs text-ink-soft">Batch of 2025–2027 &middot; Gurgaon</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
