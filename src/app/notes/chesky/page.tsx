import Link from "next/link";

export default function CheskyMediaNote() {
  return (
    <div className="p-4">
      <Link
        href="/notes"
        className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
      >
        ← Back to Notes
      </Link>
      <h1 className="section-title">Product Releases and the Job of a CEO</h1>
      <div className="space-y-6 text-md">
        <p>
        CEOs should review all the work
        </p>
        <p>
        Similar to Apple, we do product releases. Said differently, we develop software like people develop hardware. And the reason why is, because, I thought well, data is ubiqitous, everyone can go different directions, they can ship continuously, and the problem is, there's no cohesive product vision. There's no central editing of quality and standards. That twenty teams don't work together. That actually a lot of projects require 20 teams to collaborate, and if you don't have a forcing function, there's no mechanism to drive change. 
        </p>
        <p>
        Steve Jobs had a concept that he called stacking the bricks. He said if you have a pile of bricks and you lay them on the ground, no one will notice the ground, but if you stack them vertically, you create a tower, and everyone notices the tower, and that's the theory behind launches. It was a coordination mechanism, and it was a marketing moment for the company to ship products. So what I do is we have a big launch, the launch is a deadline, and then we review work frequently. If you want people to work harder, I don't think you need to tell them to be in the office, I don't you need to check their badges, I don't think you need them to come in on nights and weekends — you can do that. If you want people to work hard, have a launch deadline, make the thing crazy ambitious, and check every week. That is the way to make people hard harder, and they'll work as hard as the goal as ambitious and the check-ins are frequent. 
        </p>
        <p>
        The only other thing I do is I kind of do deep dives into every function of the company every year or two. So beyond checking work, I might do a really deep dive into x, and it might be a two to four week audit, where I say, "hey no one's going to get fired, just show me all the good and bad of the department."
        </p>
        <p>
        - Brian Chesky
        </p>
      </div>
    </div>
  );
}
