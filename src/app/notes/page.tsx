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
        <ul className="list-disc ml-5">
          <li><Link href="/notes/squareone" className="text-blue-600 hover:text-blue-800">Square One</Link></li>
        </ul>
      </div>
      <div className="p-4">
        <h2>Media</h2>
        <ul className="list-disc ml-5">
          <li>Solo Leveling</li>
          <li>Blue Lock</li>
          <li>Kaiju No. 8</li>
          <li>The Hard Things About Hard Things</li>
          <li>Secrets of Sandhill Road</li>
          <li>Gintama</li>
          <li>Man-Eating Cats</li>
          <li>Beautiful World, Where Are You</li>
          <li>This is Water</li>
          <li>Infinite Jest</li>
          <li>An Abundance of Katherines</li>
        </ul>
      </div>
      <div className="p-4">
        <h2>Reading List</h2>
        <ul className="list-disc ml-5">
          <li>https://www.lesswrong.com/posts/B7P97C27rvHPz3s9B/gears-in-understanding</li>
          <li>https://www.benkuhn.net/outliers/</li>
          <li>https://www.benkuhn.net/writing/#:~:text=In%20my%20opinion%2C%20the%20strongest,which%20will%20make%20your%20existing</li>
          <li>https://tbenthompson.com/post/maintaining_momentum/</li>
        </ul>
      </div>
    </div>
  );
}
