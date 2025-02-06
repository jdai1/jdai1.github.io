"use client";

import Link from "next/link";

export default function Album() {
  return (
    <div className="p-4">
      <Link href="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
        ← Back to Home
      </Link>
      <h1 className="text-lg font-semibold">Ablums</h1>
      <div>
        <ul className="list-disc ml-5">
          <li>
            <Link href="/photos/japan" className="hover:text-blue-600">
              Japan - Jan 2025
            </Link>
          </li>
          <li>
            <Link href="/photos/NH" className="hover:text-blue-600">
              NH - July 2024
            </Link>
          </li>
          <li>
            <Link href="/photos/california" className="hover:text-blue-600">
              California - Jan 2024
            </Link>
          </li>
          <li>
            <Link href="/photos/bolt" className="hover:text-blue-600">
              Bolt - Aug 2023
            </Link>
          </li>
          <li>
            <Link href="/photos/mammoth" className="hover:text-blue-600">
              Mammoth - Aug 2023
            </Link>
          </li>
          <li>
            <Link href="/photos/2022" className="hover:text-blue-600">
              2022
            </Link>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {/* Photo wall grid will be implemented in a separate component */}
      </div>
    </div>
  );
}
