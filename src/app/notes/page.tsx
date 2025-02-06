import Link from "next/link";

export default function Note() {
  return (
    <div className="p-4">
      <Link href="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
        ← Back to Home
      </Link>
      <div>
          <ul className="list-disc ml-5">
            <li>Gintama - Hideaki Sorachi</li>
            <li>Man-Eating Cats - Haruki Murakami</li>
            <li>Beautiful World, Where Are You - Sally Rooney</li>
            <li>This is Water - David Foster Wallace</li>
            <li>Infinite Jest - David Foster Wallace</li>
            <li>An Abundance of Katherines - John Green</li>
            <li>Monkey King Cartoon</li>
          </ul>
        </div>
    </div>
  );
}
