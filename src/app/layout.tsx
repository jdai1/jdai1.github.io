import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Julian Dai",
  description: "Julian Dai's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>        
        <main className="flex-grow container mx-auto px-6 py-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>

        <footer className="w-full bg-background-primary shadow-sm mt-auto">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="border-t border-navy-primary/10 pt-4">
              <nav className="flex justify-center space-x-8">
                <a
                  className="nav-link"
                  href="mailto: julian_dai@brown.edu"
                  target="_blank"
                >
                  Email
                </a>
                <a
                  className="nav-link"
                  href="https://github.com/jdai1"
                  target="_blank"
                >
                  Github
                </a>
                <a
                  className="nav-link"
                  href="https://www.linkedin.com/in/julian-dai-a3bab1211/"
                  target="_blank"
                >
                  Linkedin
                </a>
                <Link
                  className="nav-link"
                  href="/resume.pdf"
                  target="_blank"
                >
                  Resume
                </Link>
              </nav>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
