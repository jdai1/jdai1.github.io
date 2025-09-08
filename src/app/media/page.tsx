import Link from "next/link";

export default function Media() {
  return (
    <div className="p-4">
      <h2 className="section-title mb-2">Snippets</h2>
      <div className="text-lg text-text-primary space-y-4">
        <ul className="list-disc pl-6 space-y-2">
          <li><Link href="/notes/chesky" className="text-blue-600 hover:text-blue-800">Brian Chesky</Link></li>
          <li><Link href="/notes/gintama" className="text-blue-600 hover:text-blue-800">Gintama</Link></li>
          <li><Link href="/notes/maneatingcats" className="text-blue-600 hover:text-blue-800">Man-Eating Cats</Link></li>
          <li><Link href="/notes/bluelock" className="text-blue-600 hover:text-blue-800">Blue Lock</Link></li>
          <li><Link href="/notes/andrewyang" className="text-blue-600 hover:text-blue-800">Andrew Yang</Link></li>
          <li><Link href="/notes/jjk" className="text-blue-600 hover:text-blue-800">Jujutsu Kaisen</Link></li>
          <li><Link href="/notes/hxh" className="text-blue-600 hover:text-blue-800">Hunter X Hunter</Link></li>
        </ul>
      </div>
      <h2 className="section-title mt-8 mb-2">Books</h2>
      <div className="text-lg text-text-primary space-y-4 mt-2">
        <ul className="list-disc pl-6 space-y-2">
          <li>Reinforcement Learning: An Introduction</li>
          <li>A Philosophy of Software Design</li>
          <li>The Hard Things About Hard Things</li>
          <li>Secrets of Sandhill Road</li>
          <li>Beautiful World, Where Are You</li>
          <li>Normal People</li>
          <li>Infinite Jest/This is Water</li>
          <li>An Abundance of Katherines</li>
        </ul>
      </div>
    </div>
  );
}

