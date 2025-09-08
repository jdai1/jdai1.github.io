import Link from "next/link";

export default function BlueLockMediaNote() {
  return (
    <div className="p-4">
      <Link
        href="/notes"
        className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
      >
        ← Back to Notes
      </Link>
      <h1 className="section-title">Blue Lock</h1>
      <div className="space-y-6 text-md">
        <p>
        When things don't go the way they're planned, your average joe will start to panic and find comfort in their source of failure, such is a mindset of a loser. But a winner sees a challenge.
        </p>
        <div className="border-t border-gray-300 my-6"></div>
        <p>
        It's a mentally absorbed state that can be obtained through personal optimal experiences. Regardless of their scale, human beings have moments when they're so focused they even forget the passage of time. That state of enjoying whatever it is and getting the brain all excited... That's flow.
        </p>
        <p>
        So how do you get into this flow? The most important condition is concentrating on a daring challenge. To put it plainly, you have to aim for an objective of optimal difficulty. There's a balance between challenge and the ability to get into a flow state. If your abilities exceed a given challenge, you won't feel joy and you'll get bored. Conversely, if a give challenge exceeds your abilities, you can't see yourself succeeding and you become anxious. IN short, you can't experience joy in a state of boredom or anxiety. That's why you need concentration for a daring challenge. Know your abilities precisely and control them. Then challenge yourself with a goal that's appropriate for you. In that moment, you will pull out an exceptional performance, which will push you up to the next level. From the outside, it might look like a miracle. But there's a formula to it. And that's flow.
        </p>
        <p>
        However, it's not easy to achieve. Your daily life is flooded with information and entertainment. Its an endless hell to cover up your boredom and anxiety. People can't get absorbed in something so easily. For example, you may passively get into a trancelike state on your phone. But that's not the flow state you actively achieve, available only to you. That cannot be classed as ego in my book. The thrill you fell when you score a goal. The exhilaration you feel when you gain a new weapon. That joy is something that belongs only to you. That's ego.
        </p>
        <div className="border-t border-gray-300 my-6"></div>
        <p>
        It's learning. Piling up mistakes through trial and error... or pushing to one's limits in the pursuit of victory... the scattered pieces of success mesh with each other... and the ego blossoms... In other words, an awakening is the moment you learn who you truly are.
        </p>
        <p>
        - Muneyuki Kaneshiro via Ego Jinpachi
        </p>
      </div>
    </div>
  );
}
