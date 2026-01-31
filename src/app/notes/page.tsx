import Link from "next/link";

export default function Note() {
  return (
    <div className="p-4">
      <h2 className="section-title mb-2">Writing</h2>
      <div className="text-text-primary">
        <div className="space-y-6">
          <div className="flex items-center">
            <span className="text-gray-500 w-20 text-sm">1/31/2026</span>
            <span className="text-gray-400 mx-3">|</span>
            <Link href="/notes/relationships" className="text-gray-900 hover:underline">Relationships</Link>
          </div>
          <div className="flex items-center">
            <span className="text-gray-500 w-20 text-sm">12/31/2025</span>
            <span className="text-gray-400 mx-3">|</span>
            <Link href="/notes/2025" className="text-gray-900 hover:underline">2025</Link>
          </div>
          <div className="flex items-center">
            <span className="text-gray-500 w-20 text-sm">8/15/2025</span>
            <span className="text-gray-400 mx-3">|</span>
            <Link href="/notes/droppingout" className="text-gray-900 hover:underline">Dropping out... kinda</Link>
          </div>
          <div className="flex items-center">
            <span className="text-gray-500 w-20 text-sm">6/29/2025</span>
            <span className="text-gray-400 mx-3">|</span>
            <Link href="/notes/midpointatramp" className="text-gray-900 hover:underline">Midpoint @ Ramp</Link>
          </div>
          <div className="flex items-center">
            <span className="text-gray-500 w-20 text-sm">5/17/2025</span>
            <span className="text-gray-400 mx-3">|</span>
            <Link href="/notes/firstweekatramp" className="text-gray-900 hover:underline">First week @ ramp</Link>
          </div>
          <div className="flex items-center">
            <span className="text-gray-500 w-20 text-sm">4/29/2025</span>
            <span className="text-gray-400 mx-3">|</span>
            <Link href="/notes/research" className="text-gray-900 hover:underline">Research</Link>
          </div>
          <div className="flex items-center">
            <span className="text-gray-500 w-20 text-sm">3/22/2025</span>
            <span className="text-gray-400 mx-3">|</span>
            <Link href="/notes/whytravel" className="text-gray-900 hover:underline">Why Travel</Link>
          </div>
          <div className="flex items-center">
            <span className="text-gray-500 w-20 text-sm">3/3/2025</span>
            <span className="text-gray-400 mx-3">|</span>
            <Link href="/notes/selfstudy" className="text-gray-900 hover:underline">Self-studying Classes</Link>
          </div>
          <div className="flex items-center">
            <span className="text-gray-500 w-20 text-sm">2/22/2025</span>
            <span className="text-gray-400 mx-3">|</span>
            <Link href="/notes/cliches" className="text-gray-900 hover:underline">Clichés</Link>
          </div>
          <div className="flex items-center">
            <span className="text-gray-500 w-20 text-sm">2/11/2025</span>
            <span className="text-gray-400 mx-3">|</span>
            <Link href="/notes/browncsadvice" className="text-gray-900 hover:underline">Advice for Brown CS students</Link>
          </div>
          <div className="flex items-center">
            <span className="text-gray-500 w-20 text-sm">2/09/2025</span>
            <span className="text-gray-400 mx-3">|</span>
            <Link href="/notes/24" className="text-gray-900 hover:underline">Everybody has the same 24 hours</Link>
          </div>
          <div className="flex items-center">
            <span className="text-gray-500 w-20 text-sm">2/05/2025</span>
            <span className="text-gray-400 mx-3">|</span>
            <Link href="/notes/squareone" className="text-gray-900 hover:underline">Square One</Link>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          Fill out {" "}
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSdyeOhf_1rM0clHz22q-4Z82cQJP1dB09ltgJFaUPJdJKyi_A/viewform?usp=dialog" 
            className="text-blue-600 hover:text-blue-800 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            this
          </a>
          {" "} form if you want to get an email when something new gets posted.
        </p>
      </div>
    </div>
  );
}
