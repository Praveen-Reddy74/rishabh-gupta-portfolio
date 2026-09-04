import Link from "next/link";
import Container from "@/components/Container";

export default function NotFound() {
  return (
    <section className="py-28">
      <Container className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">404</p>
        <h1 className="mt-4 font-display text-3xl font-medium text-ink sm:text-4xl">
          This page wandered off.
        </h1>
        <p className="mt-4 text-base text-ink-soft">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper"
        >
          Back to home
        </Link>
      </Container>
    </section>
  );
}
