import Link from "next/link";

export default function TwentyFourNote() {
  return (
    <div className="p-4">
      <Link
        href="/notes"
        className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
      >
        ← Back to Notes
      </Link>
      <h1 className="section-title">Everybody has the same 24 hours</h1>
      <h2 className="text-gray-500 text-lg mb-6">2/9/2025</h2>
      <div className="space-y-6 text-md">
        <h2 className="text-xl font-bold">Time Turner</h2>
        <p>
          In Harry Potter and the Prisoner of Azkaban, Hermione, being the mega-nerd she is, maxes out the courses she can take during her 3rd year at Hogwarts. However, since some classes take place at the exact same time as other classes, Professor McGonagall gives Hermione a{" "}
          <a className="text-blue-600 hover:text-blue-800" href="https://harrypotter.fandom.com/wiki/Time-Turner#1993-1994" target="_blank" rel="noopener noreferrer">
            time-turner
          </a>
          , a device that let's her time travel so she can attend her classes.
        </p>

        <p>
          I sometimes have random thoughts (something like shower thoughts?) about how much more convenient life could be if I could have a time-turner, even if I could only use it for an hour a day.<sup className="text-sm">1</sup> An extra hour a day could be lovely for doing things that I tell myself I'll prioritize (especially at school), but go out the window when things get busy:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Reading: I could probably get through a book every two weeks</li>
          <li>Sleeping or sleep hygiene, i.e. getting ready for bed earlier so I have better quality sleep</li>
          <li>Writing and introspection: reflecting on how the day went, writing down any ideas I'm having</li>
        </ul>
        <p>
          Realistically, an extra hour a day could be committed to anything throughout my day. Time is the at the lowest level of resource abstraction and is a requirement for doing pretty much anything.<sup className="text-sm">6</sup> And while it may not seem like much, an increase of just one hour per day yields an extra 15 days worth of time per year!
        </p>

        <p>
          This is just a long-winded way of saying I've recently started thinking more about how important time is of a resource. Time is one of the most valuable assets you can never{" "}
          <a className="text-blue-600 hover:text-blue-800" href="https://ca.finance.yahoo.com/news/mark-cuban-used-first-1b-123000816.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAABxYLOhdALs-kc-k3Od-jkeXbRyiZxbwRhwkLtTHzdaSCJezcgk5Jw-N8fM6P0yTOE6gPuHTVFJVCdr8jrJ3lGUnpTdkSnc5-KZio2r5pBRrqXm4kwpSkx-C9m9eNJ_9Ti1mu5P4ryEVyQQ9Qxti0m42mR0zIG-m9v0fCLZFbNnC" target="_blank" rel="noopener noreferrer">
            own
          </a>
          , which is why the Mark Cubans and Warren Buffets of the world all have private jets to buy back control of their travel times. Obviously, very few people have the money or freedom to buy a private jet, but even so, I suspect that eking out an average of one per day is very much so within the realm of possibility (it might not even be that hard!), and could have amazing benefits.
        </p>

        <h2 className="text-xl font-bold"> Time on computer</h2>
        <p>
          Sitting in front of my laptop is where I spend most of an average day. My mental model of how this time is spent is that ~90% of the time I spend on my laptop is time spent with the aim of completing some productive goal like reading, doing homework, projects, etc. (with the other 10% being spent on entertainment). In the 90% of the time when I'm trying to get things done, especially things that require some concentrated thinking, I try to dedicate longer blocks of unbroken time to "get in the zone." The two main things I've noticed that effect my productivity in this period of time is 1) how mentally fresh I'm feeling (i.e. how much brain juice I have in the tank) and 2) how distracted I get.
        </p>

        <p>
          In general, my brain juice capacity is usually positively correlated to my general health (i.e. sleep, diet, exercise) and inversely correlated with any stress I'm feeling (which on a daily basis is usually pretty low). To some extent, levels of distraction are also related to my capacity for self control (which is an application of brain juice I'd argue), but are much easier to shift in the positive direction by creating a distraction-free environment. The main culprits of distraction:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Instagram: I spend an unreasonable amount of time on instagram. I can't really think of any reasons why instagram is actually useful for me, seeing as how I <em>really</em> don't care about 99% of the things that I see on the platform.<sup className="text-sm">2</sup> I also realized that the reason I spend so much time on instagram was because I had developed a subconscious habit of opening instagram on my laptop whenever I wanted to take a break from working on something and also whenever I ran into something that required actual thinking than I felt like I was ready to give. This developed into a reflex.<sup className="text-sm">3</sup>
          </li>
          <li>
            LinkedIn: On the other hand, with LinkedIn content, I feel like I care a lot more about what's going on, and can justify using it due to it's positive use cases i.e. professional opportunities, educational newsletters (like{" "}
            <a className="text-blue-600 hover:text-blue-800" href="https://dair.ai/" target="_blank" rel="noopener noreferrer">
              this
            </a>
            {" "}one), and relevant news updates. However, spending too much time on LinkedIn is a surefire way to start comparing myself to other people, i.e. to start feeling bad about myself.
          </li>
          <li>
            YouTube: YouTube is a much more slippery slope because I actually enjoy and am entertained by a lot of the content I consume there, which leads to me spending a lot more time on it. Like instagram, I often find myself pulling up youtube as a response to taking a break or refusing to work on something hard, but also when I'm eating, as I'm going to sleep, and in general when I'm recreating (verb of recreational) — although that's mostly on my phone. Thus, since Youtube is actually a net positive, any attempts I've tried to ditch it in the past have failed.<sup className="text-sm">9</sup> For example, a{" "}
            <a className="text-blue-600 hover:text-blue-800" href="https://www.noahrousell.com/" target="_blank" rel="noopener noreferrer">
              friend
            </a>
            {" "}of mine once showed me how to remove the recommendations from Youtube's homepage with{" "}
            <Link href="/yt.css">CSS</Link>
            {" "}and a{" "}
            <a className="text-blue-600 hover:text-blue-800" href="https://chromewebstore.google.com/detail/stylebot/oiaejidbmkiecgbjeifoejpgmdaleoha?hl=en-US" target="_blank" rel="noopener noreferrer">
              chrome extension
            </a>
            {" "}so if you wanted to watch something, you actually had to consciously search something you wanted watch; the problem with this was that I ended up just turning it off because I got too annoyed with it.
          </li>
          <li>
            Phone calls, texts, emails: these things are usually less distracting, in the sense that I won't spiral and end up spending a lot of time without realizing it, but they can still definitely fragment my concentration time. If you're spending hours just doom-scrolling, removing smaller distraction won't matter, but can sometimes mean a big difference.
          </li>
        </ul>

        <p>
          The bottom line (squeezing out extra time {"<=>"}  being more productive) requires not only the absence of distractions, but also being focused on a very specific goal. In determining this goal, it's usually helpful to have a simple metric of completion (i.e. what are you happy with getting done?)  and an accurate estimation of how long this goal will take to complete, both things I suck at and am working on.<sup className="text-sm">5</sup>
        </p>

        <h2 className="text-xl font-bold">Time on phone</h2>
        <p>
          From what I can glean from iPhone's screen time app, most of my time is spent on youtube, instagram, video games (i.e. brawl stars; shut up it's a great game), and spotify, averaging between 2-3 hours a day for the last few weeks. The breakdown is roughly 33% youtube, 33% instagram (on safari because I deleted the app but still use it regularly apparently), and the rest split up between spotify, messages, phone calls, and other random things.
        </p>

        <p>
          Interestingly, when I use instagram and youtube on my laptop, it's usually in response to procrastinating work in some way, but when I use them on my phone it's usually as a vice to wind down and pass the time, like when I go to sleep and sometimes when I wake up to.
        </p>

        <h2 className="text-xl font-bold">Other stuff</h2>
        <p>
          Sleep, exercise, eating, hygiene. tldr; don't see too much room for improvement here, maybe except in improving sleep hygiene (having a more regular sleep schedule)
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Sleep: I try to commit at least a third of each day (8 hours) towards sleeping, and I'm pretty adamant about it. From personal experience, if I don't get at least 7 hours of sleep or if I accumulate too much sleep debt, I start to notice a decrease in my ability to produce concentrated thinking time. In fact, getting poor often comes back to bite me in the form of long periods of napping in the middle of the day or just laying in bed watching youtube. So, my sleep is an investment that I'm unwilling to sacrifice. (8 * 7 = 56 hours a week)
          </li>
          <li>
            Eating & Exercise: Also an important investment for me. Weirdly, I find it very difficult to focus when I'm hungry (much to the amusement of my family). In order to stay functioning, eating healthy and regularly is also pretty non-negotiable. The same goes for exercise. (2 * 7 = 14 hours a week for eating; (over)estimate of 8 hours a week total exercise)
          </li>
          <li>
            Socializing: Most socializing is done indirectly while eating, playing tennis, or parallel working (i.e. parallel play) which is low-effort and integrated into my schedule at this point. Outside of time spent with my partner and roommate (by virtue of living together), I feel like I don't really spend too much time socializing (especially at school) — this is something I'm still not quite sure about.
          </li>
          <li>
            Random: i.e hygiene, commutes (mostly walking), etc. (probably around a few hours a week?)
          </li>
        </ul>

        <h2 className="text-xl font-bold">A data driven approach</h2>
        <p>
          Being aware/conscious is big improvement over the baseline, but in order to to get actual insights on how I'm spending my time that go beyond just a vibe-check, a more data-driven approach is necessary (this isn't prompt engineering, a vibes-based approach isn't enough!). I feel like this is especially true when I'm at school and have to juggle a bunch of random things at the same time. To help with this, I've started using{" "}
          <a className="text-blue-600 hover:text-blue-800" href="https://www.rescuetime.com/" target="_blank" rel="noopener noreferrer">
            RescueTime
          </a>
          , a{" "}
          <a className="text-blue-600 hover:text-blue-800" href="https://www.benkuhn.net/zero/" target="_blank" rel="noopener noreferrer">
            zero-effort
          </a>
          {" "}software that tracks the time I'm spending on tabs and apps on my laptop.<sup className="text-sm">4</sup> Previously, I've tried using other time-tracking{" "}
          <a className="text-blue-600 hover:text-blue-800" href="https://plan-my-day.vercel.app/" target="_blank" rel="noopener noreferrer">
            software
          </a>
          {" "}utilize software, but found that the effort it takes to actively track and log time I'm spending is a turn-off. The nice thing about RescueTime is that it's pretty much automatic, so me being lazy shouldn't be a factor.<sup className="text-sm">8</sup>
        </p>

        <h2 className="text-xl font-bold">Conclusion</h2>
        <p>This blog post has a few purposes:</p>
        <ol className="list-decimal pl-5 space-y-1">
          <li>
            So I can better think about how I'm spending my time. Most of this blog has been about all the things I've noticed and how I plan on collecting more accurate data (i.e. observational analytics). At some point, I'll need to sit down and make some decisions based on the data and my heuristics to actually change some things and evaluate their effects (i.e. predictive and{" "}
            <a className="text-blue-600 hover:text-blue-800" href="https://en.wikipedia.org/wiki/Prescriptive_analytics" target="_blank" rel="noopener noreferrer">
              prescriptive analytics
            </a>
            ), which will merit its own blog post down the road.
          </li>
          <li>To convince you that you should do the same — and if you do end up doing this, talk to me about it!</li>
          <li>It's what I felt least uncomfortable writing about as a first blog post. Hope you enjoyed! Please give me feedback if you got to the end through text if you have my number or email!</li>
        </ol>
        <p className="text-sm mt-4 border-t pt-4">
            <sup>1</sup> Setting aside all the complications of time travel.
        </p>
        <p className="text-sm mt-4 border-t pt-4">
            <sup>2</sup> (I'd also argue that it's a less expressive and more polluted environment to maintain an online presence than a personal website).
        </p>
        <p className="text-sm mt-4 border-t pt-4">
            <sup>3</sup> On Arc: double swipe personal space, cmd-t to open a new tab and type in `inst` followed by the enter key to go to the instagram website on my laptop.
        </p>
        <p className="text-sm mt-4 border-t pt-4">
            <sup>4</sup> I actually tried to use an open source alternative at first, i.e. ActivityWatch, but apparently it's integration with Mac sucks. The free tier of RescueTime for now is perfectly fine.
        </p>
        <p className="text-sm mt-4 border-t pt-4">
            <sup>5</sup> things almost always take longer than I think they will :/
        </p>
        <p className="text-sm mt-4 border-t pt-4">
            <sup>6</sup> Maybe just above `time` in this ladder of abstraction is `attention`.
        </p>
        <p className="text-sm mt-4 border-t pt-4">
            <sup>8</sup> Ultimately though, a time-tracker is only a proxy for the bottom line (being more productive), and isn't a one-to-one measure of actual output or levels of concentration (maybe neuralink will solve this problem).
        </p>
        <p className="text-sm mt-4 border-t pt-4">
            <sup>9</sup> i'm not the only person who struggles this problem. some people have gone as far to use{" "}
            <a className="text-blue-600 hover:text-blue-800" href="https://shop.pavlok.com/" target="_blank" rel="noopener noreferrer">
              shock bracelets
            </a>
        </p>
      </div>

      </div>
  );
}
