import Link from "next/link";

export default function AndrewYangMediaNote() {
  return (
    <div className="p-4">
      <Link
        href="/notes"
        className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
      >
        ← Back to Notes
      </Link>
      <h1 className="section-title">Andrew Yang</h1>
      <div className="space-y-6 text-md opacity-75">
        <p>
        In the spring of 2025, Andrew Yang came back to Brown to deliver a talk at his alma mater. This particular thing he said stuck out to me:
        </p>
        <div className="border-t border-gray-300 my-6"></div>
        <p>
        I referred to this mindset of scarcity earlier. it's genuinely overtaken millions, tens of millions of Americans, where, if someone else gets something, it makes them mad, maybe because they've experienced hardships themselves, or they've seen people around them struggling, and then when they see someone else, particularly for people of other communities, they get mad. So the 25% who are for poor kids are laboring under this mindset of scarcity, and just have this sense that hardship is a part of life and it builds character, and they should suffer because I've suffered. I try not to hold that belief against anyone. In my view, the first step is to try to get the boot off their throat, and then if you make them feel secure in their future and their kids' futures, and then they see other kids getting something, they'll be like "thats cool." the attitude has to be "someone else get's something, thats fine, that'll probably good for me in the long run". But that's not where a lot of Americans are right now. a lot of Americans right are just like "Yeah, you're suffering good! because I'm suffering."
        </p>
      </div>
    </div>
  );
}
