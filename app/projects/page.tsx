// app/projects/page.tsx
import Link from "next/link";

const projects = [
  {
    id: "p1",
    title: "Cocktails App",
    desc: "A SwiftUI app that stores cocktail recipes and maps breweries.",
    href: "https://github.com/yourname/cocktails",
  },
  {
    id: "p2",
    title: "SpaceDatabase",
    desc: "A small app that visualizes planets using SwiftData and charts.",
    href: "https://github.com/yourname/spacedatabase",
  },
];

export default function Projects() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold">Projects</h1>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <article key={p.id} className="rounded-lg border p-4">
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              {p.desc}
            </p>
            <div className="mt-4 flex gap-2">
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm underline"
              >
                View code
              </a>
              <Link href="/" className="text-sm underline">
                Read more
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
