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
              className="rounded-lg border border-blue-400 px-6 py-3
                        text-sm font-medium
                        hover:bg-blue-50 dark:hover:bg-zinc-800
                        transition"
            >
              View my work
            </a>
            <a
              href="/contact"
              className="rounded-lg border border-blue-400 px-6 py-3
                        text-sm font-medium
                        hover:bg-blue-50 dark:hover:bg-zinc-800
                        transition"
            >
              Contact me
            </a>
          </div>
          

        </div>
      </section>

      {/* CONTENT BELOW */}
      
    <section className="flex justify-center pt-8 ">
      <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* LEFT COLUMN — ABOUT */}
        <div className="rounded-xl border border-blue-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 shadow-sm">
          
          <h2 className="text-3xl font-semibold">About Me</h2>
          <p className="mt-4 text-[1.15rem] leading-8 text-zinc-700 dark:text-zinc-300">

            Hey there! I'm Tristan Coates and I'm a passionate Software Developer from the 
            Northern Virginia Area. I attended Virginia Tech where I graduated in three years
            with a Bachelor's degree in Computer Science.
          </p>

          <p className="mt-4 text-[1.15rem] leading-8 text-zinc-700 dark:text-zinc-300">
            I love learning new things and solving interesting problems, and I'm constantly
            working on various projects and Leetcode problems to keep up. If you have a 
            potential opportunity, please feel free to reach out!
          </p>
        </div>

        {/* RIGHT COLUMN — SKILLS + CERTS */}
        <div className="space-y-12 rounded-xl border border-blue-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 shadow-sm">
          
          {/* SKILLS */}
          <div>
            <h2 className="text-2xl font-semibold">Skills</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {[
                "Java", "Python", "C", "Swift", "Bash", "JavaScript", "HTML", "CSS",
                "TypeScript", "Tailwind CSS", "SQL", "React", "Node.js", "Electron.js",
                "Next.js", "Flask", "SpringBoot", "Docker", "Git"
              ].map((s) => (
                <li
                  key={s}
                  className="rounded-md border border-zinc-200 dark:border-zinc-800
                              bg-zinc-100 dark:bg-zinc-800/50
                              px-3 py-1 text-sm font-medium
                              hover:bg-zinc-200 dark:hover:bg-zinc-700
                              transition"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* CERTIFICATIONS */}
          <div>
            <h2 className="text-2xl font-semibold">Certifications</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {[
                "CompTIA Security+",
                "ISC2 Certified in Cybersecurity"
              ].map((s) => (
                <li
                  key={s}
                  className="rounded-md border border-zinc-200 dark:border-zinc-800
                              bg-zinc-100 dark:bg-zinc-800/50
                              px-3 py-1 text-sm font-medium
                              hover:bg-zinc-200 dark:hover:bg-zinc-700
                              transition"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* LINKS */}
        <div className="md:col-span-2 flex justify-center gap-6 pt-6">

          <a 
            href="/projects"
            className="rounded-lg border border-blue-400 px-6 py-3
               text-sm font-medium
               hover:bg-blue-50 dark:hover:bg-zinc-800
               transition"
          >
            View Projects
          </a>

            <a
              href="https://github.com/tncoates"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-blue-400 px-6 py-3
                        text-sm font-medium
                        hover:bg-blue-50 dark:hover:bg-zinc-800
                        transition"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/tristan-coates-b026632b9"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-blue-400 px-6 py-3
                        text-sm font-medium
                        hover:bg-blue-50 dark:hover:bg-zinc-800
                        transition"
            >
              LinkedIn
            </a>
        </div>
      </div>
    </section>

    </>
  );
}
