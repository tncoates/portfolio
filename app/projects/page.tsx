"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Project = {
  id: string;
  title: string;
  desc: string;
  href?: string;
  screenshot?: string; // optional path under /public, e.g. "/probium.png"
  long_desc: string;
};

const projects: Project[] = [
  {
    id: "p1",
    title: "Probium",
    desc: "A Filetype Detection Python Library built during an Internship",
    href: "https://github.com/breezynotcheezy/probium",
    screenshot: "/probium.png",
    long_desc: `
    Probium is a multithreaded file type detection tool built using Python. It uses
    deep inspection techniques to identify files by content rather than the file extension
    or file signature. It can be used a command line tool or as a Python Library, and it
    outputs results in a structured JSON format. Probium supports over 30 file types and is
    capable of scanning 1,500 files in 2.5-3s with 98% accuracy.
    `.trim()
  },
  {
    id: "p2",
    title: "Fastback UI",
    desc: "An Electron.js UI for managing a Data Diode built during an Internship",
    screenshot: "/fastback.png",
    long_desc: `
    The Fastback UI is a user interface for managing the Fastback commercial Data Diode
    built using Electron.js. During its development, I helped fix various bugs, improve styling,
    and add many quality of life updates. I then helped make a new Web Socket version that translated
    all the Data Diode specific terminal commands to API calls for more flexibility and remote control
    of the Data Diode.
    `.trim()

  },
  {
    id: "p3",
    title: "Music Server",
    desc: "A Simple Music Server built using Node.js",
    href: "https://github.com/tncoates/music-server",
    screenshot: "/music-server.png",
    long_desc: `
    bomboclaaaaaaaat
    `.trim()

  },
  {
    id: "p4",
    title: "Youtube Remote",
    desc: "A Youtube player built using Python, Flask, and FFplay",
    href: "https://github.com/tncoates/yt-remote",
    long_desc: "hello"

  },
];

function Modal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    // disable background scroll while modal is open
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      aria-modal="true"
      role="dialog"
      onClick={onClose} // clicking backdrop closes
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* Modal panel */}
      <div
        className="relative z-10 mx-4 max-w-3xl rounded-lg bg-white p-6 shadow-lg dark:bg-zinc-900 dark:text-zinc-100"
        onClick={(e) => e.stopPropagation()} // prevent backdrop close when clicking modal contents
      >
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-md px-2 py-1 text-sm hover:bg-black/5 dark:hover:bg-white/5"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold">{project.title}</h2>

        <div className="mt-4">
          {project.screenshot ? (
            <div className="mx-auto max-h-64 overflow-hidden rounded-md">
              <Image
                src={project.screenshot}
                alt={`${project.title} screenshot`}
                width={1200}
                height={700}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            </div>
          ) : (
            <div className="mx-auto flex h-40 w-full items-center justify-center rounded-md border border-dashed bg-zinc-50 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
              No screenshot available
            </div>
          )}
        </div>

        <p className="mt-4 text-zinc-700 dark:text-zinc-300">{project.long_desc}</p>

        <div className="mt-6 flex gap-3">
          {project.href ? (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border px-4 py-2 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/5"
            >
              View code
            </a>
          ) : (
            <span className="inline-block rounded-md border px-4 py-2 text-sm text-zinc-500">
              unavailable
            </span>
          )}

          <button
            onClick={onClose}
            className="rounded-md px-4 py-2 text-sm underline"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [open, setOpen] = useState<Project | null>(null);

  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold">Projects</h1>

      <p className="mt-4 max-w-2xl text-lg text-zinc-700 dark:text-zinc-300">
        Click any project card to see more details.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.id}
            onClick={() => setOpen(p)}
            className="group relative cursor-pointer rounded-lg border border-blue-400 p-4 transition-shadow hover:shadow-lg"
            aria-labelledby={`project-${p.id}-title`}
          >
            <h3 id={`project-${p.id}-title`} className="text-lg font-semibold">
              {p.title}
            </h3>

            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              {p.desc}
            </p>

            <div className="mt-4 flex gap-2">
              {/* Only render View code if href exists. Stop propagation so the link works without opening the modal. */}
              {p.href ? (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  View code
                </a>
              ) : (
                <span className="text-sm text-zinc-500">No public repo</span>
              )}

              {/* We removed the Read more link — the card itself opens the modal */}
            </div>

            {/* optional small indicator that card is clickable */}
            <div className="absolute right-3 top-3 text-xs text-zinc-400 group-hover:text-zinc-600">
              Click for details
            </div>
          </article>
        ))}
      </div>

      {/* Modal */}
      {open && <Modal project={open} onClose={() => setOpen(null)} />}
    </section>
  );
}
