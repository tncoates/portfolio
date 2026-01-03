// app/contact/page.tsx
export default function Contact() {
  return (
    <section className="max-w-xl space-y-6">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="text-zinc-700 dark:text-zinc-300">
        Want to work together or ask a question? Send me a message below.
      </p>

      <form
        action="https://formspree.io/f/YOUR_FORMSPREE_ID"
        method="POST"
        className="space-y-4"
      >
        <label className="block">
          <span className="text-sm">Name</span>
          <input
            name="name"
            required
            className="mt-1 w-full rounded-md border px-3 py-2"
          />
        </label>

        <label className="block">
          <span className="text-sm">Email</span>
          <input
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-md border px-3 py-2"
          />
        </label>

        <label className="block">
          <span className="text-sm">Message</span>
          <textarea
            name="message"
            rows={6}
            required
            className="mt-1 w-full rounded-md border px-3 py-2"
          />
        </label>

        <button
          type="submit"
          className="rounded-md border px-4 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/5"
        >
          Send
        </button>
      </form>

      <p className="text-xs text-zinc-500">
        Or email me directly at <strong>you@example.com</strong>
      </p>
    </section>
  );
}
