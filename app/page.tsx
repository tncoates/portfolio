import Image from "next/image";

// app/page.tsx
export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="min-h-screen flex justify-center pt-8">
        <div className="mx-auto max-w-4xl text-center">
          <Image
            src="/IMG_3687.jpg"
            alt="Tristan Coates"
            width={160}
            height={160}
            className="mx-auto rounded-full mb-6"
            draggable="false"
            priority
          />

          <h1 className="text-5xl font-bold">
            Hi! I&apos;m Tristan Coates
          </h1>

          <p className="mt-6 max-w-2xl text-xl text-zinc-700 dark:text-zinc-300">
            I&apos;m a recent Virginia Tech graduate looking to start my
            Software Development career in the Northern Virginia Area
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a
              href="/projects"
              className="rounded-md border px-5 py-3 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/5"
            >
              View my work
            </a>
            <a
              href="/contact"
              className="rounded-md px-5 py-3 text-sm font-medium underline"
            >
              Contact me
            </a>
          </div>
          

        </div>
      </section>

      {/* CONTENT BELOW */}
      <section className="pb-24">
        <div className="mx-auto max-w-4xl space-y-16">

          {/* ABOUT */}
          <div>
            <h2 className="text-2xl font-semibold">A bit more</h2>
            <p className="mt-3 max-w-2xl text-zinc-700 dark:text-zinc-300">
              Short paragraph about what you enjoy building, what you&apos;re
              looking for, and what kinds of problems excite you.
            </p>
          </div>
          
          {/* SKILLS */}
          <div>
            <h2 className="text-2xl font-semibold">Skills</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
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


        </div>
      </section>
    </>
  );
}
