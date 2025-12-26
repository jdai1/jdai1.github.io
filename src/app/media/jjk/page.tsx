import Link from "next/link";

export default function JJKMediaNote() {
  return (
    <div className="p-4">
      <Link
        href="/media"
        className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
      >
        ← Back to Media
      </Link>
      <h1 className="section-title">Jujutsu Kaisen</h1>
      <div className="space-y-6 text-md">
        <p>
            [fill in later]
        </p>
        <p>
        - Gege Akutami via Aoi Todo
        </p>
      </div>
    </div>
  );
}

