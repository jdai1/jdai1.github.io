import Link from "next/link";

export default function RequirementsNote() {
  return (
    <div className="p-4">
      <Link
        href="/notes"
        className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
      >
        ← Back to Notes
      </Link>
      <h1 className="section-title">Requirements</h1>
      <h2 className="text-gray-500 text-lg mb-6">2/7/2026</h2>
      <div className="space-y-6 text-md">
        <p>
          This week, I'm going to write about why defining requirements is important.
        </p>

        <p>
          The argument is actually really simple. Defining requirements is how you do anything well because these requirements, i.e. your expectations, define what "well" is.
        </p>

        <p>
          "But just because <em>I</em> think I'm a good engineer, product manager, tennis player etc., that doesn't mean everyone else will think that too!"
        </p>

        <p>
          True. There is a big difference between your own requirements, other people's requirements, and the world's expectations. These things will inevitably influence and inform each other, but it is really important to not mix those things up. The earlier people realize this, the bigger of a head start they have on all the people who go through high school, college, and life thereafter unquestioningly allowing themselves to be pushed into canonically successful career paths.
        </p>

        <p>
          From Patrick Collison's advice for people 10-20:
        </p>

        <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
          If you're in the US and go to a good school, there are a lot of forces that will push you towards following train tracks laid by others rather than charting a course yourself. Make sure that the things you're pursuing are weird things that <em>you</em> want to pursue, not whatever the standard path is. Heuristic: do your friends at school think your path is a bit strange? If not, maybe it's too normal.
        </blockquote>

        <p>
          I haven't updated my mental model here in a while apparently. I previously thought that thinking deeply about this was only something that people who were <em>perfectionists</em> had to worry about. Since I have always identified as a very practical person, I amazingly didn't realize this was something I needed to work a lot.
        </p>

        <p>
          I'm gonna talk about a few examples of things that made me realize that this is actually a super important skill that I could use some development in. This applies not only applies to a career, but also to everything outside of it.
        </p>

        <h3 className="text-xl font-bold">Running</h3>

        <p>
          I ran cross country for three years in high school, and most of it was pretty miserable for me, and I took most chances I got to skip practice or sit out of races. Since then, I've had a really hard time running consistently, even after trying a bunch of times.
        </p>

        <p>
          Since moving to NYC and no longer having access to tennis courts or people to play with, finding a way to stay aerobically healthy has been a lot harder, and has become even important now that I spend most of my days with my ass in a (really comfortable) chair for 10 hours.
        </p>

        <p>
          Recently, I finally was able to start running consistently, thanks to the help of{" "}
          <a
            href="https://www.beeminder.com"
            className="text-blue-600 hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            Beeminder
          </a>
          , a business that lets you track your goals and take money away from you (yes real money) when you don't hit them.
        </p>

        <p>
          On the surface, it might seem like Beeminder is effective because it charges people actual money when they don't hit their goals. I think this is partly true, and the punishment of losing money actually goes a long way in getting over the initial activation energy by{" "}
          <a
            href="https://www.noahrousell.com/blog/getting-yourself-to-do-stuff/"
            className="text-blue-600 hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            engineering an environment
          </a>
          {" "}that makes it harder to accept not doing the thing that you've beeminded yourself to do.
        </p>

        <p>
          The more subtle but powerful thing about Beeminder is that it requires you to actually define what your requirements are. The beautiful thing is that the interface to define a requirement is super simple, which in turn, forces your requirements to be really simple — fundamentally, it requires you to define a single numerical metric that will be measured over time. For example, in my{" "}
          <a
            href="https://www.beeminder.com/"
            className="text-blue-600 hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            Beeminder for running
          </a>
          , I've defined my requirements for success to be, on average, 1 mile/day.
        </p>

        <p>
          Something that used to bother me when I ran was how much I had regressed from when I was still racing, but now that I've defined this goal, it has become a lot easier for me to feel good about myself when I run. Beeminder also makes it trivially easy to track progress via integrations, e.g. Strava, which also makes it easy to visualize the progress you're making when you've been hitting your goals for a sustained period of time.
        </p>

        <p>
          The beautiful thing about doing this in your personal life too, e.g. in your hobbies, is that the bar doesn't need to be high at all! Since you are likely much closer to being a noob then an expert in whatever thing you're doing and there aren't too many external factors (e.g. a performance review, or your PhD advisor), you shouldn't set your expectations too high, and instead let yourself exceed them (which feels pretty good).
        </p>

        <h3 className="text-xl font-bold">Work</h3>

        <p>
          This also applies to your career as well. At Ramp, it's an invaluable skill to learn in a place where velocity and execution are often the most rewarded strengths.
        </p>

        <p>
          This week, I spent a bunch of time working on refactoring a legacy feature to fix a bunch of the problems that we've been hearing from customers. I had originally charted out <em>some</em> of my requirements when I had set out to revamp the feature, but over the course of refactoring, I've found myself obsessing over things that don't need obsessing, and ultimately slowing down a bunch, in a way that I haven't felt in a while.
        </p>

        <p>
          Reflecting, I think I made the following mistakes:
        </p>

        <ul className="list-disc pl-5 space-y-2">
          <li>
            Unlike a few of the previous things I've worked on, this started as a side quest that actually deserved more attention in the planning phase than I gave it. The scope of the changes I wanted to make were larger than I thought, and thinking through the requirements some more, and trying to figure out the simplest plan with fewest moving parts to get from the current state to the desired state.
          </li>
          <li>
            Not phasing changes. This makes it not only easier the person who will ultimately be reviewing your PR to review it, but also makes it easier to have intermediate deliverables and check points to hold yourself accountable to sticking to your plan. The scope of change are often larger than they appear to be, and phasing things is one of the best ways to make sure the plan stays on track.
          </li>
          <li>
            Not sticking to my requirements. While my requirements weren't super well thought out to begin with, I should have stuck to the rough outline of changes I wanted to make. Instead, I allowed myself to get super side tracked. What's the point of making requirements if you're not gonna stick to them?
          </li>
        </ul>

        <p>
          When building a product, I think the key questions to be answering are:
        </p>

        <ul className="list-disc pl-5 space-y-2">
          <li>
            For PMs (but also engineers) — what is the grand vision? What is the simplest possible product we can build the fastest that will validate this vision, one step at a time?
          </li>
          <li>
            For engineers, how do you design the simplest system with the fewest moving parts that will accomplish the solution? What is essential vs whats a nice to have?
          </li>
          <li>
            What kinds of blockers do we see along the way? What are our contingency plans?
          </li>
        </ul>

        <p>
          Step 1 of Elon Musk's 5 step algorithm for{" "}
          <a
            href="https://www.youtube.com/watch?v=tdf3luOCNks"
            className="text-blue-600 hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            running companies
          </a>
          :
        </p>

        <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
          Make your requirements less dumb. Your requirements are definitely dumb. It does not matter who gave them to you. It's especially dangerous if a smart person gave you the requirements, because then you might not question them enough.
        </blockquote>

        <h3 className="text-xl font-bold">Conclusion</h3>

        <p>
          Defining requirements is super important. It can drastically improve dimensions of your personal life, help you accomplish that thing that you haven't been able to accomplish or don't think you can, and make you a lot faster when doing big projects or hard things.
        </p>

        <p>
          To end with a final example: I've really been enjoying this new style of blog, where I sit down for 5 minutes, think about an idea, then write an outline in 10 minutes, and then bang out the rest in an hour or two. Previously, the requirements for a blog post were a lot more fuzzy, which resulted in me ultimately writing less. Using time as a metric for completion has made it a lot easier for me to feel good about writing, and I'm excited about using this to be more consistent about writing. The total writing time (e.g. the time I spent actually writing the main post), clocked in at around an hour, which I'm pretty happy about. Very appreciative of{" "}
          <a
            href="https://www.noahrousell.com/"
            className="text-blue-600 hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            Noah
          </a>
          {" "}for putting me on this!
        </p>
      </div>
    </div>
  );
}
