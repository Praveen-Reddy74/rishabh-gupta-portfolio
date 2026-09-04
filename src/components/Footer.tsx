import Link from "next/link";
import { navLinks } from "@/data/nav";
import { profile } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-14 sm:px-8 md:flex-row md:items-start md:justify-between lg:px-12">
        <div className="max-w-sm">
          <p className="font-display text-xl font-medium text-ink">Rishabh Gupta</p>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">{profile.headline}</p>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-ink-soft hover:text-ink">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="text-sm text-ink-soft">
          <a href={profile.socials.email} className="block hover:text-ink">
            {profile.email}
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="mt-1 block hover:text-ink">
            {profile.phone}
          </a>
          <p className="mt-1">{profile.location}</p>
        </div>
      </div>
      <div className="border-t border-line px-6 py-5 text-xs text-ink-faint sm:px-8 lg:px-12">
        <p>&copy; {year} Rishabh Gupta. All rights reserved.</p>
      </div>
    </footer>
  );
}
