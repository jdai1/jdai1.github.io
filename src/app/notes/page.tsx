import Link from "next/link";

export default function Note() {
  return (
    <div className="p-4">
      <Link
        href="/"
        className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
      >
        ← Back to Home
      </Link>
      <div className="p-4">
        <h2>Posts</h2>
        <ul className="list-disc ml-5 space-y-2">
          <li><Link href="/notes/research" className="text-blue-600 hover:text-blue-800">4/29/2025 - Research</Link></li>
          <li><Link href="/notes/whytravel" className="text-blue-600 hover:text-blue-800">3/22/2025 - Why Travel</Link></li>
          <li><Link href="/notes/selfstudy" className="text-blue-600 hover:text-blue-800">3/3/2025 - Self-studying Classes</Link></li>
          <li><Link href="/notes/cliches" className="text-blue-600 hover:text-blue-800">2/22/2025 - Clichés</Link></li>
          <li><Link href="/notes/browncsadvice" className="text-blue-600 hover:text-blue-800">2/11/2025 - Advice for Brown CS students</Link></li>
          <li><Link href="/notes/24" className="text-blue-600 hover:text-blue-800">2/09/2025 - Everybody has the same 24 hours</Link></li>
          <li><Link href="/notes/squareone" className="text-blue-600 hover:text-blue-800">2/05/2025 - Square One</Link></li>
          
        </ul>
      </div>
      <div className="p-4">
        <h2>Media</h2>
        <ul className="list-disc ml-5 space-y-2">
          <li><Link href="/notes/chesky" className="text-blue-600 hover:text-blue-800">Brian Chesky</Link></li>
          <li><Link href="/notes/gintama" className="text-blue-600 hover:text-blue-800">Gintama</Link></li>
          <li><Link href="/notes/maneatingcats" className="text-blue-600 hover:text-blue-800">Man-Eating Cats</Link></li>
          <li><Link href="/notes/bluelock" className="text-blue-600 hover:text-blue-800">Blue Lock</Link></li>
          <li><Link href="/notes/andrewyang" className="text-blue-600 hover:text-blue-800">Andrew Yang</Link></li>
          <li><Link href="/notes/jjk" className="text-blue-600 hover:text-blue-800">Jujutsu Kaisen</Link></li>
          <li><Link href="/notes/hxh" className="text-blue-600 hover:text-blue-800">Hunter X Hunter</Link></li>
        </ul>
      </div>
      <div className="p-4">
        <h2>Reading</h2>
        <ul className="list-disc ml-5 space-y-2">
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
