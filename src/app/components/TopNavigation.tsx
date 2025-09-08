"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TopNavigation() {
  const pathname = usePathname() ?? '';
  
  const isWritingActive = pathname.startsWith('/notes');
  const isMediaActive = pathname.startsWith('/media');
  
  return (
    <header className="w-full bg-background-primary border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-6 py-6">
      <nav className="flex justify-end space-x-8">
        <Link 
          href="/"
          className={`text-base hover:text-navy-accent transition-all duration-300 ease-out ${!isWritingActive && !isMediaActive ? 'text-navy-accent' : 'text-gray-800'}`}
        >
          About
        </Link>
        <Link 
          href="/notes"
          className={`text-base hover:text-navy-accent transition-all duration-300 ease-out ${isWritingActive ? 'text-navy-accent' : 'text-gray-800'}`}
        >
          Writing
        </Link>
        <Link 
          href="/media"
          className={`text-base hover:text-navy-accent transition-all duration-300 ease-out ${isMediaActive ? 'text-navy-accent' : 'text-gray-800'}`}
        >
          Media
        </Link>
      </nav>
    </div>
  </header>
  );
}
