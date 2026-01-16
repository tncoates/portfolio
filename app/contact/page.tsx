// app/contact/page.tsx
const email = "tristan.coates@gmail.com";

const mailtoLink = `mailto:${email}`;



export default function Contact() {
  return (
    <section className="max-w-xl space-y-6">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="text-zinc-700 dark:text-zinc-300">
        Want to work together or ask a question? Send me a message below.
      </p>


      <iframe 
        src="https://docs.google.com/forms/d/e/1FAIpQLSdUF2s7mrf5pBvzzfq0eY9gC7Q029RWzeSjGaSGiZBv7SsDTg/viewform?embedded=true" 
        width="840" 
        height="689"
      >
        Loading…
      </iframe>


      <p className="text-m text-zinc-500">
        Or email me directly at <a href={mailtoLink} className="text-blue-600 underline hover:text-blue-700">tristan.coates@gmail.com</a>
      </p>
    </section>
  );
}
