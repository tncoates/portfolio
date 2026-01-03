import Image from "next/image";

// app/page.tsx
export default function Home() {
  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">Hi — I'm Tristan Coates</h1>
        <p className="mt-4 max-w-2xl text-lg text-zinc-700 dark:text-zinc-300">
          I'm a software developer who builds web apps, UIs, and tooling. I like
          React, Next.js, low-level systems work, and learning new languages.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold">Skills</h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {[
            "TypeScript",
            "React / Next.js",
            "Tailwind CSS",
            "Node.js",
            "C / Systems",
            "Git",
          ].map((s) => (
            <li
              key={s}
              className="rounded-md border px-3 py-1 text-sm text-zinc-700 dark:text-zinc-200"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold">A bit more</h2>
        <p className="mt-2 text-zinc-700 dark:text-zinc-300">
          Short paragraph about what you enjoy building, what you're looking for
          (freelance / jobs / open-source), and a link to your resume/GitHub.
        </p>
        <div className="mt-4">
          <a
            href="/projects"
            className="inline-block rounded-md border px-4 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/5"
          >
            See my projects
          </a>
        </div>
      </div>
    </section>
  );
}
