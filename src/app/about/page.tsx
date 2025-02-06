import Link from "next/link";

export default function About() {
  return (
    <div className="p-4">
      <Link href="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
        ← Back to Home
      </Link>
      <h1 className="text-3xl font-bold text-navy-primary">About</h1>
      <div className="text-lg text-text-primary space-y-4">
        <p>Here's some things about me:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Student at Brown University, Providence RI. Studying computer science, and figuring out how to spend my time effectively.</li>
          <li>Building <a href="https://talktoata.com" target="_blank" rel="noopener noreferrer" className="underline">ATA</a> (artificial teaching assistant) aiming to make learning for college students easier by integrating AI into classroom environments.</li>
          <li>Incoming swe intern at Ramp for Summer of 2025</li>
        </ul>
        
        <p>Here is me doing some of my favorite things:</p>
        <div className="space-y-6 mt-4">
          <div className="w-3/4 mx-auto">
            <img
              src="/favorite_things/DFF93F3B-7E34-4009-A78C-9E3B157B1D00_1_105_c.jpeg"
              alt="fly fishing"
              width={1200}
              height={800}
              className="rounded-lg w-full"
            />
          </div>
          <div className="w-3/4 mx-auto">
            <img
              src="/favorite_things/B9C0FDE8-7023-4FE3-B495-74AD42B2DBC4_1_105_c.jpeg"
              alt="tennis"
              width={1200}
              height={800}
              className="rounded-lg w-full"
            />
          </div>
          <div className="w-3/4 mx-auto">
            <img
              src="/favorite_things/85049FA0-1775-45F3-9175-D50149C80B27_1_105_c.jpeg"
              alt="hiking"
              width={1200}
              height={800}
              className="rounded-lg w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
