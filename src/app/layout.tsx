import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import TopNavigation from "./components/TopNavigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Julian Dai",
  description: "Julian Dai's personal website",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id="944530b8-d1de-45e3-80d0-5eebbd907bf2"
        strategy="afterInteractive"
      />
      <body className={`${inter.className} min-h-screen flex flex-col`}>        
        <TopNavigation />
        <main className="flex-grow container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
