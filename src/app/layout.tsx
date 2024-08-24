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
      <body className={inter.className}>
        <div className="w-full h-full flex flex-col">
          <Link className="font-mono m-3 text-2xl font-semibold" href="/">
            Julian Dai
          </Link>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <div className="w-full h-full flex flex-col">
          <div className="m-20 items-center w-5/6">{children}</div>
        </div>
        <footer className="items-center fixed bottom-0 w-full bg-white">
          <div className="flex-grow border-t border-gray-400"></div>
          <div className="m-3 text-center">
            <a
              className="ml-8 mr-8 hover:underline font-mono"
              href="mailto: julian_dai@brown.edu"
              target="_blank"
            >
              Email
            </a>
            <a
              className="ml-8 mr-8 hover:underline font-mono"
              href="https://github.com/jdai1"
              target="_blank"
            >
              Github
            </a>
            <a
              className="ml-8 mr-8 hover:underline font-mono"
              href="https://www.linkedin.com/in/julian-dai-a3bab1211/"
              target="_blank"
            >
              Linkedin
            </a>
            <Link
              className="ml-8 mr-8 hover:underline font-mono"
              href="/resume.pdf"
              target="_blank"
            >
              Resume
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
