import Link from "next/link";

export default function MidpointAtRampNote() {
  return (
    <div className="p-4">
      <Link
        href="/notes"
        className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
      >
        ← Back to Notes
      </Link>
      <h1 className="section-title">Midpoint reflections at Ramp</h1>
      <div className="space-y-6 text-md opacity-75">
        <p>
          It's now the official midpoint way (week 7) of my 12-week internship. Time for some reflections!
        </p>

        <p>
          I now feel like I know my way much better around the Procurement codebase. There's definitely a lot more to learn, but I don't feel as helpless as I did when I first started — it feels like the context picked up from doing things in and around the codebase has compounded into a working mental model of how Procurement works.
        </p>

        <h3 className="text-xl font-bold">Feature ownership</h3>
        <p>
          Since my 2nd week, I've become responsible for two features: creating a summary for spend requests and pre-filling custom forms during spend request intake. Here are some reflections from this work.
        </p>

        <p>
          During my first two weeks, when I was mostly doing random onboarding tasks around the codebase, all I was asking for was to get put on something where I could get more ownership. What I was really asking for was to ship cooler features by writing code. In my case however, what having more ownership really meant though, is developing a lot of skills beyond the technical ability to write functioning code.
        </p>

        <h3 className="text-xl font-bold">Operating Slack</h3>
        <p>
          This is proving to be a big point for me to work on, and the perhaps the biggest point I received of formal feedback. I feel like often times, I feel like it's a waste of time to be writing long slack updates, sharing rollout plans, or respond in threads where I'm CCed in.
        </p>

        <p>
          In reality these things are important for a few reasons:
        </p>

        <h4 className="text-lg font-semibold">To hold myself accountable</h4>
        <p>
          I think oftentimes I'm a little hesitant to share bad news (e.g. delays, roadblocks, etc). I immediately think "lemme just lock in and fix this and get this right back on track." In reality, this rarely is the case, and eventually someone pings me for an update, which is rarely a good thing. Two things I've learned in communicating effectively that go hand-in-hand is 1) over-communicate rather than under-communicate, and 2) under-promise and over-deliver. Combining these two ideas, share roadblocks and delays early (but not pre-emptively), and don't take on all the burden by yourself to fix issues alone.
        </p>

        <h4 className="text-lg font-semibold">To make sure I'm not veering down the wrong path and reduce thrash</h4>
        <p>
          For any impactful engineering or design decisions, it's very important to loop in relevant stakeholders in the PED (product, engineering, design) stack. Communicating and getting alignment early makes the work easier, and prevents thrash, where engineering effort is wasted due to disagreements on direction and design. To give a somewhat concrete example (without diving into the specifics), I've been working on a project as the sole owner, while in parallel, my team has a separate, much larger, initiative to rework a fundamental aspect of our system. If I proceeded without communicating planned changes, it would have created large amounts of tech debt from moving to the system.
        </p>

        <h4 className="text-lg font-semibold">To make sure my work has visibility</h4>
        <p>
          In my first week, my manager told me that reputation is a currency at Ramp. I'm not sure how much I can speak to that point, but I'm sure that it's very important to get visibility on your work. To that end, it's obviously important to communicate. There's still a lot of things for me to learn about how to do this effectively with respect to visibility, but step 1 is sharing out progress, updates, and blurbs when shipping features.
        </p>

        <h3 className="text-xl font-bold">Project management and tech specs</h3>
        <p>
          Writing tech specs is a skill that I didn't come to appreciate before Ramp, but likely one of the most critical skills for an engineer to master. Why is writing a tech spec so important?
        </p>

        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>To give context & justify why what you're working on is important:</strong> Justifying business importance is crucial — if you can't convincingly sell someone (including yourself) on why what you're working on aligns with the company's mission, than you should reconsider what to work on.
          </li>
          <li>
            <strong>To peel back the layers of complexity:</strong> Often times, projects seem simple, but actually have a lot more complexity than meets the eye. It's easy to overestimate how easy implementing a feature can be, and then be paralyzed by the unexpected complexity once you actually start implementing something (speaking from experience). Writing a tech spec is a good way to develop a solid plan, discover any complexities, and ask yourself important questions before you rush into writing code.
          </li>
          <li>
            <strong>Prevent scope creep / define what the done criteria is:</strong> Real artists ship. Done is worth a hell of a lot more than almost-done, and in order to get to a done state, a done state first has to be defined. Speaking from experience, without such a done state, a project is reman in limbo, never to be shipped. The tech spec is a great place to define what that looks like, if you can. Sometimes, when the project is very experimental, a done state can only be defined when conditioned on intermediate results — in this case, it's important to define what experiments should be conducted and iteratively refine intermediate goals.
          </li>
          <li>
            <strong>To efficiently get feedback on ideas:</strong> Because writing a tech spec forces clarity and specificity, it becomes a lot easier for other's to provide actionable feedback.
          </li>
        </ul>

        <h3 className="text-xl font-bold">Setting timelines</h3>
        <p>
          Related to scope creep, setting appropriate timelines is a useful skill to have. Something that setting timelines forces understanding of is that production is a lot different from demos:
        </p>

        <ul className="list-disc pl-5 space-y-1">
          <li>Tracking metrics, reducing tech debt (e.g. extensibility, maintainability, handling edge cases elegantly), and QA can take way more time than a prototype</li>
          <li>Keeping a good timeline can also improve momentum. This is somewhat of a balancing act — you don't want to set an overly aggressive timeline such that you're setting yourself up for failure, but you also to have a good pace and build momentum.</li>
        </ul>

        <h3 className="text-xl font-bold">Looking ahead</h3>
        <p>
          In general, time has literally flew — I really can't believe its already week 7. The pace has been fast, non-stop, and very fun. However, that being said, there are a few things I want to make sure I keep in mind as I'm coming down the home stretch of my internship:
        </p>

        <h4 className="text-lg font-semibold">To become a better engineer</h4>
        <p>
          The honeymoon phase at this point is wearing off — I'm not longer showing up to work with that same fire in my belly. But even so, I'm pretty determined to stay consistent, work hard, and get my reps in.
        </p>

        <h4 className="text-lg font-semibold">To learn as an aspiring founder</h4>
        <p>
          Learn more about how the org works!
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Set up more 1-1s with people outside your team to get more exposure</li>
          <li>Listen to sales calls</li>
        </ul>
      </div>
    </div>
  );
}
