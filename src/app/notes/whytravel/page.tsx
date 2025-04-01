import Link from "next/link";

export default function SelfStudyNote() {
  return (
    <div className="p-4">
      <Link
        href="/notes"
        className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
      >
        ← Back to Notes
      </Link>
      <h1 className="section-title">Why Travel</h1>
      <h2 className="text-gray-500 text-lg mb-6">4/1/2025</h2>
      <div className="space-y-6 text-md opacity-75">
        <p>
          To see family<br />
          To see old friends<br />
          To see new faces<br />
          To see places<br />
          To see the sea<br />
          To feel the breeze<br />
          To see mountains<br />
          And hike them<br />
          To see animals, camp, and fish.<br />
          To eat lots of yummy food and eat new food.<br />
          To get away or to go home<br />
          To think, and find new ideas, or to stop thinking, and find peace.
        </p>
      </div>
    </div>
  );
}
