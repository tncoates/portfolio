// app/projects/page.tsx
import Link from "next/link";

const projects = [
  {
    id: "p1",
    title: "Probium",
    desc: "A Filetype Detection Python Library built during an Internship",
    href: "https://github.com/breezynotcheezy/probium",
  },
  {
    id: "p2",
    title: "Fastback UI",
    desc: "An Electron.js UI for managing a Data Diode built during an Internship",
  },
  {
    id: "p3",
    title: "Music Server",
    desc: "A Simple Music Server built using Node.js",
    href: "https://github.com/tncoates/music-server",
  },
  {
    id: "p4",
    title: "Youtube Remote",
    desc: "A Youtube player built using Python, Flask, and FFPlay",
    href: "https://github.com/tncoates/yt-remote",
  },
];

export default function Projects() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold">Projects</h1>

      <p className="mt-4 max-w-2xl text-lg text-zinc-700 dark:text-zinc-300">
          
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <article key={p.id} className="rounded-lg border border-blue-400 p-4">
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
