import Link from "next/link";

export default function HXHMediaNote() {
  return (
    <div className="p-4">
      <Link
        href="/media"
        className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
      >
        ← Back to Media
      </Link>
      <h1 className="section-title">Hunter X Hunter</h1>
      <div className="space-y-6 text-md">
        <p>
        You should enjoy the little detours. To the fullest. Because that's where you'll find the things more important than what you want.
        </p>
        <p>
        - Yoshihiro Togashi via Ging Freecss
        </p>
      </div>
    </div>
  );
}

