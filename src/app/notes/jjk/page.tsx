import Link from "next/link";

export default function BlueLockMediaNote() {
  return (
    <div className="p-4">
      <Link
        href="/notes"
        className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
      >
        ← Back to Notes
      </Link>
      <h1 className="section-title">Blue Lock</h1>
      <div className="space-y-6 text-md opacity-75">
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
