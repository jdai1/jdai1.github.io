import Link from "next/link";

export default function Note() {
  return (
    <div className="p-4">
      <h2 className="section-title mb-2">Writing</h2>
      <div className="text-text-primary">
        <ol className="relative border-s border-gray-200">
          <li className="mb-8 ms-6 relative">
            <Link href="/notes/midpointatramp" className="text-gray-900 hover:underline">6/29/2025 | Midpoint @ Ramp</Link>
          </li>
          <li className="mb-8 ms-6 relative">
            <Link href="/notes/firstweekatramp" className="text-gray-900 hover:underline">5/17/2025 | First week @ ramp</Link>
          </li>
          <li className="mb-8 ms-6 relative">
            <Link href="/notes/research" className="text-gray-900 hover:underline">4/29/2025 | Research</Link>
          </li>
          <li className="mb-8 ms-6 relative">
            <Link href="/notes/whytravel" className="text-gray-900 hover:underline">3/22/2025 | Why Travel</Link>
          </li>
          <li className="mb-8 ms-6 relative">
            <Link href="/notes/selfstudy" className="text-gray-900 hover:underline">3/3/2025 | Self-studying Classes</Link>
          </li>
          <li className="mb-8 ms-6 relative">
            <Link href="/notes/cliches" className="text-gray-900 hover:underline">2/22/2025 | Clichés</Link>
          </li>
          <li className="mb-8 ms-6 relative">
            <Link href="/notes/browncsadvice" className="text-gray-900 hover:underline">2/11/2025 | Advice for Brown CS students</Link>
          </li>
          <li className="mb-8 ms-6 relative">
            <Link href="/notes/24" className="text-gray-900 hover:underline">2/09/2025 | Everybody has the same 24 hours</Link>
          </li>
          <li className="mb-8 ms-6 relative">
            <Link href="/notes/squareone" className="text-gray-900 hover:underline">2/05/2025 | Square One</Link>
          </li>
        </ol>
      </div>
    </div>
  );
}
