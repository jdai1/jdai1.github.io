import Link from "next/link";

export default function DroppingOutNote() {
  return (
    <div className="p-4">
      <Link
        href="/notes"
        className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
      >
        ← Back to Notes
      </Link>
      <h1 className="section-title">Dropping out... kinda</h1>
      <h2 className="text-gray-500 text-lg mb-6">8/15/2025</h2>
      <div className="space-y-6 text-md">
        <h3 className="text-xl font-bold">How it happened</h3>
        <p>
          I was first pitched to drop out by my manager, midway through my
          internship. I instinctively shut the idea down, set on going back to
          school to finish my degree. However, after I really gave the idea some
          thought (and my manager badgered me about this some more), I became
          indecisive.
        </p>

        <p>I figured the tradeoffs were as follows:</p>

        <p>
          <strong>Pros:</strong>
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <a
              href="https://www.youngkim.co/writing/early-career-advice"
              className="text-blue-600 hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              Arbitrage
            </a>
            : I get to work a full year, heads down, at a pretty incredible and
            dominant startup before my peers even graduate. This means:
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>
                I get to make meaningful connections, potentially with people
                who could have a big impact on my career
              </li>
              <li>
                It's easier for me to wake up each day feeling excited about the
                work I'm doing
              </li>
              <li>
                I get to sharpen my skills and gain more{" "}
                <strong>experience</strong> building things{" "}
                <strong>quickly</strong>
              </li>
            </ul>
          </li>
          <li>
            I'll learn faster how to live outside of the bubble of college and
            take care of myself
          </li>
          <li>and of course, I get paid a year earlier</li>
        </ul>

        <p>
          <strong>Cons:</strong>
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            I would potentially have to take a leave of absence from or drop out
            of school, likely forfeiting my degree
          </li>
          <li>
            I miss what would be my last year of college, including spending
            time with people my age who I like, learning within the structure of
            classes, and playing tennis (not to mention the captaincy of Brown's
            club team)
          </li>
          <li>
            I would be severing a lot of my relationships, and placing an
            enormous strain on the few that I could afford to keep
          </li>
        </ul>

        <h3 className="text-xl font-bold">Doing some more thinking</h3>
        <p>
          Using this decision I was mulling over as a hook, I scheduled meetings
          with a bunch of cool people who I thought would have some insights.
          Very quickly, I learned that it's stupid to expect people, no matter
          how cracked or senior they are, to give personal advice without having
          a deep knowledge of your motivations. It's pretty hard to explain your
          thought process to someone you've basically never met in a 30 minute
          meeting. Even so, I think it was useful to hear the opinions of people
          you look up to and people who know what dropping out is really like,
          and it gave me a frame of reference to think about the tradeoffs of
          the decision in a more realistic way.
        </p>

        <p>
          Using this frame of reference, I reasoned that the idea was sound —
          and from a completely different perspective, I was also drawn to the
          risk and thrill of the idea. By the time I started talking through
          things with friends and family, I was basically trying to dispel the
          arguments against leaving school. For example:
        </p>

        <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
          You'll never get your college years back, but you have decades to
          work; the same job will be waiting for you in 9 months
        </blockquote>

        <p>
          Elon Musk and Peter Thiel have both famously said something along the
          lines of "If you have a 10-year plan of how to get somewhere, you
          should ask: Why can't you do this in 6 months?"
        </p>

        <p>
          Said another way, it is true I could have decades to work, but how
          long do I really have to be very dedicated to my goals? Will I still
          want or be able to do that in 5 or 10 years? Who knows? So yes, this
          job will still be waiting for me in 9 months, but 9 months is a
          significant time to wait (7.5% of 10 years), when the horizon is on
          the order of years, not decades.
        </p>

        <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
          You may never be in an environment again where it is so easy to meet
          and hang out with your peers
        </blockquote>

        <p>
          Definitely true when you first get to college. My thinking here is
          that since I already have more relationships with people that I'd be
          able to sustainably maintain post-college, I wouldn't be missing out
          too much — either way, come graduation, I'd have to let some
          relationships slowly wither. Leaving now would just be expediting
          that.
        </p>

        <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
          You can make progress along the same dimensions (i.e. making
          connections, being motivated, and sharpening skills) at school as you
          can at a company
        </blockquote>

        <p>
          Technically true, but I think personally it'll be a lot easier to do
          these things at a company, due to the fact that a) Brown doesn't have
          the same kinda start-upy culture as Stanford and b) that it's quite
          hard for me to focus in an environment with so many distractions.
        </p>

        <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
          It's stupid to not get your degree, you've already finished three out
          of the four years.
        </blockquote>

        <p>
          If the options were to finish school or to start work, I'd argue that
          this is a sunk cost fallacy — the opportunity cost of waiting another
          year seems really high.
        </p>

        <p>
          Luckily, at Brown they're not mutually exclusive — Brown even offers a
          course (UNIV 1221) that provides two credits to students who want to
          work while completing their degree. With that in mind, yea, I agree it
          would be pretty stupid to not finish out my degree.
        </p>

        <p>
          A lesson learned here is that at the end of the day, decisions this
          large are deeply personal, and <strong>need</strong> to be made
          independently. In retrospect, I should have{" "}
          <a
            href="https://paulgraham.com/writing44.html"
            className="text-blue-600 hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            written
          </a>{" "}
          more about it to get more clarity.
        </p>

        <h3 className="text-xl font-bold">Conclusion</h3>
        <p>
          As you can probably already tell, I ultimately decided to start work
          early, while finishing my degree at the same time. Before I move into
          NYC, I'm spending a week-and-a-half at school to savor the last bits
          of my college experience — playing lots of tennis, working on passion
          projects, spending time with people I care about, and catching up with
          buddies.
        </p>
        <p>
          One thing I've found myself repeatedly having to do is to explain
          myself. Amusingly, people have really had a lot of mixed reactions,
          from enthusiastic congratulations to raised eyebrows. It's a good
          reminder—and maybe even a chip on my shoulder—to prove that the
          decision I'm making really is the right one.
        </p>
        <p>
          If you find yourself in a similar position as I was this summer, I
          hope the story and the ideas I've shared about this process are
          helpful. Please reach out if you want to chat about it.
        </p>
      </div>
    </div>
  );
}
