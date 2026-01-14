import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
          <header className="border-b border-black/5 dark:border-white/5">
            <div className="mx-auto max-w-4xl px-6 py-4 flex items-center justify-between">
              <Link href="/" className="text-xl font-semibold">
                
              </Link>

              <nav className="space-x-4 text-sm font-medium">
                <Link href="/" className="hover:underline">
                  Home
                </Link>
                <Link href="/projects" className="hover:underline">
                  Projects
                </Link>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </nav>
            </div>
          </header>

          <main className="mx-auto max-w-4xl px-6 py-12">{children}</main>

          <footer className="border-t border-black/5 dark:border-white/5">
            <div className="mx-auto max-w-4xl px-6 py-6 text-sm text-zinc-600 dark:text-zinc-400">
              © {new Date().getFullYear()} Tristan Coates — built with Next.js
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
