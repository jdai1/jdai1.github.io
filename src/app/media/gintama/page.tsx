import Link from "next/link";

export default function GintamaMediaNote() {
  return (
    <div className="p-4">
      <Link
        href="/media"
        className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
      >
        ← Back to Media
      </Link>
      <h1 className="section-title">Gintama</h1>
      <div className="space-y-6 text-md">
        <p>
        It's proof that you are functioning normally. That's why there's no need to run away or be afraid. A pregnant women gives birth to her kid by suffering through what feels like squeezing a watermelon through her nostrils. Artists endure suffering that feels like pulling the entire universe out of their ass to create their works. Everyone has times when they've come up against a wall and feel like giving up on everything and running away, but you can't forget that during these times when the going is rough, the soul inside of you will try to create something to break through that wall. And don't forget that in your suffering there is something very precious. We're all suffering in agony with our own troublesome lives. Sometimes it comes to tears. When that happens, let it flow as much as it wants. If it still doesn't stop flowing, then we'll come and mop it up.
        </p>
        <p>
        - Hideaki Sorachi via Gintoki Sakata
        </p>
      </div>
    </div>
  );
}

