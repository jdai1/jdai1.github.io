import Link from "next/link";

export default function MomentumNote() {
  return (
    <div className="p-4">
      <Link
        href="/notes"
        className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
      >
        ← Back to Notes
      </Link>
      <h1 className="section-title">Momentum</h1>
      <h2 className="text-gray-500 text-lg mb-6">6/2/2026</h2>
      <div className="space-y-6 text-md">
        <h2 className="text-xl font-bold">Preface</h2>
        <p>
          It's been a while! It feels good to be back. I haven't been writing in a while, and I'm happy to sit down with a keyboard at my fingertips and an idea in mind. I don't think I've been doing enough self-reflection recently, and upon doing a bit, I've found that there's a few things that I want to write about, so expect a few (2) posts in the upcoming week.
        </p>

        <h2 className="text-xl font-bold">Intro</h2>
        <p>
          Recently, I feel like I've been falling into a trap of just going through the motions at work. Ramp is my first real full-time engineering job, and the first time I've had to think about momentum not as a short burst of energy, but as something I need to build and maintain every week as a software engineer.
        </p>

        <p>
          In retrospect, the first clue was when I started feeling less happy and less engaged with the day-to-day work of being an engineer: understanding systems, making product decisions, writing code, asking questions, and trying to ship things that actually matter. There's probably a bunch of factors at play, but I can think of two main ones:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>a lack of momentum</li>
          <li>a lack of social connections</li>
        </ul>

        <p>
          I'll talk about the social connection in a follow up post - this one is dedicated to the idea of momentum.
        </p>

        <h2 className="text-xl font-bold">Momentum</h2>
        <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
          "I need forward momentum, above all things." - Taylor Mason
        </blockquote>

        <p>
          Making progress in something you really care about is like a drug - and it's easy to get addicted to it.
        </p>

        <p>
          When you first start something that you've taken a liking (or obsession) to or pick something up again after a break, it's easy to make a lot of progress. During this time is when everything is still new, stimulating, and easily grabs your full attention. Since you're giving your full attention, you're progressing quickly, and that feeling is great. You're in a positive feedback loop somewhere along the pareto frontier of challenging and fun - you're in the zone - you've found the{" "}
          <Link href="/media/bluelock" className="text-blue-600 hover:text-blue-800">
            flow
          </Link>
          .
        </p>

        <p>Some examples of this in my life I can think of:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Blogging:</strong> When I first started writing and posting it on the internet, I spent hours ideating, word smithing, nitting details in the frontend. I wrote multiple times a month, talked about it a lot with my friends, and also read a lot of blogs.
          </li>
          <li>
            <strong>Ramp:</strong> When I first started at Ramp, everything was so new. It was a lot of firsts for me - my first real job, my first time working on a team, my first time shipping software at scale to customers. I found myself easily wrapped into the challenges and enjoyment of soaking it all in like a a sponge, and would happily spend a lot of hours in the office.
          </li>
          <li>
            <strong>Tennis:</strong> In college, I would play tennis 2-3 times a week during club tennis practice. However, during holidays and summer vacation, I played at a much lower frequency, often times going weeks without playing. When the semester started again, the first few weeks I was playing consistently again feels great. I'm playing loose, without expectations or judgements, and enjoying every moment.
          </li>
          <li>
            <strong>Gaming:</strong> Pick your poison - for the longest time, mine has been league of legends.<sup className="text-sm">1</sup> If you know, you know. tl;dr playing league can be extremely frustrating and anxiety inducing for so many reasons, so I often rage quit, and uninstall the game, vowing not to play again for weeks or months. When I reinstall, the first few matches I play always feel super enjoyable. I'm paying my full undivided attention, and my movements and my reactions are just a bit quicker than they usually are.
          </li>
        </ul>

        <p>
          Unsurprisingly, without any meaningful change in my attitude or approach, things are quick to revert to the mean of ups, downs, and plateaus. For tennis, it was easy to still show up anyways, since it was a way for me to blow off steam and exercise at the end of a long day with good friends.<sup className="text-sm">2</sup> However, playing league, something I generally did alone that can also be very unhealthy at times, was something I inevitably would end of rage quitting again.<sup className="text-sm">3</sup>
        </p>

        <p>
          I think it's easy to fall back on the idea that the meaningful change required to gain momentum and reach the zone was consistency and discipline, e.g. the reason I'm bad at X is because I don't do that for 10 hours a day. Practice makes perfect. The 10,000 hour rule. Getting your reps in. And that is definitely part of it. But there actually are some things that I do for 10 hours a day, namely my job, as a software engineer, and I still find it hard to maintain momentum (or velocity, as Ramp likes to say). Obviously, I'm relatively much better at my job than I am at my hobbies, as I should be, but that's not necessarily correlated with the amount of enjoyment it brings me.
        </p>

        <h2 className="text-xl font-bold">Getting better at things</h2>
        <p>
          I think enjoyment comes from momentum, and building momentum requires control. And control can be learned and improved. I guess the heart of what I'm really trying to get at then, is that in order to enjoy something you can't actually just put in the hours, you actually have to focus on getting better. Which sounds silly, but is also easier said than done.
        </p>

        <p>
          And focusing on getting better means you have to be paying a lot of attention to yourself, asking for feedback, and a lot of patience for yourself. A lot of the times, it means walking before you can run, and asking really dumb questions. It means you can't just mindlessly go through the reps, you have to actually work on things.
        </p>

        <p>
          It's really easier said than done, and actually requires a ton of discipline. I'll a few examples of where I feel like I recently fell into the trap of not focusing on trying to learn or get better:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <p>
              <strong>Playing league.</strong> Like in most video games, low-elo players often complain the most about being stuck in a certain elo, but also consistently fail to recognize and improve on the mistakes they make. They are the first to blame their team and fault others for losses. I feel like for the longest time, I fell into this camp too. The thing is, when you feel this way, the game just sucks to play. One day, I got really fed up and decided to research a bit online of why I league was so frustrating. I found this{" "}
              <a
                href="https://www.reddit.com/r/summonerschool/comments/1gpjlb4/the_law_of_ranked_league_of_legends_and_how_to/"
                className="text-blue-600 hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                reddit post
              </a>
              , which I think helped me a lot.
            </p>
            <p>
              I guess something that is somewhat unintuitive is that in order to really get better at league, the answer is not necessarily to play a lot games. It means studying what different champions, working on combos and mechanics in practice tool, warming up before games, watching and critiquing your own gameplay, and asking for feedback.
            </p>
            <p>
              It's easier said than done, and really requires a ton of patience. I, for one, have never rewatched my own games, even though it will probably give me way more momentum that queueing up for another game.
            </p>
          </li>
          <li>
            <p>
              <strong>A side project.</strong> Recently, I started a project of trying to market making on prediction markets. Especially with how much AI I used, it's really important to understand how the things I'm building work - in the words of a friend, you can outsource your thinking but you can't outsource your understanding.
            </p>
            <p>
              Eventually, after restarting once, and sweating the details of design and code quality way more the second time around, I got to functioning program, that hooked up to N markets, listened for events, and quoted prices based on the orderbook using{" "}
              <a
                href="https://hummingbot.org/blog/guide-to-the-avellaneda--stoikov-strategy/#parameter-calculations"
                className="text-blue-600 hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                AS
              </a>
              .
            </p>
            <p>
              This is the point where it stops getting so easy. The honeymoon phase is over. Now, I had to deal with the problem of preventing toxic flow, ex. when I buy and then the market moves against me so when I sell, it's at a loss. The correct thing to do in this moment is definitely to slow down - it's to run on just a single market, analyze the trades, and figure out what heuristics are good at identifying toxic flow, not to throw gpt 5.5 xhigh and the problem and hope for the best (spoiler alert). This mistake has probably cost me multiples of time higher than if I were to go with the first plan, and it would also likely give me a far better fundamental understanding of the correct direction.
            </p>
          </li>
          <li>
            This is not so recent, since I haven't been playing for a while, but the same patterns of people who are not very good at X complaining about being not good at X as can be observed in league of legends also applies in tennis.{" "}
            <a
              href="https://www.amazon.com/Inner-Game-Tennis-Classic-Performance/dp/0679778314"
              className="text-blue-600 hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Inner Game of Tennis
            </a>
            {" "}is a book dedicated to kind of explaining the mental traps that prevent people from making improvements to their game.
          </li>
        </ul>

        <p>
          Dan Luu has a{" "}
          <a
            href="https://danluu.com/p95-skill/"
            className="text-blue-600 hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            post
          </a>
          {" "}on why getting to 95%th percentile at something actually isn't that difficult. I think he's half right - the hardest part is probably just not mentally spiraling and being very calculated and steady in focusing on the process of getting better rather than giving in to anxiety, overthinking, or the naive idea that all you need is more time.
        </p>

        <h3 className="text-xl font-bold">Ideas for how to get better at getting better</h3>
        <p>Stealing / summarizing a few ideas I've seen from other blogs:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Do a{" "}
            <a
              href="https://www.benkuhn.net/weekly/"
              className="text-blue-600 hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              weekly review
            </a>
            . Easier said than done, but really high value in setting up time for self-reflection every week.<sup className="text-sm">4</sup>
          </li>
          <li>
            Start a{" "}
            <a
              href="https://guzey.com/personal/why-have-a-blog/"
              className="text-blue-600 hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              blog
            </a>
            . For the same ideas as the weekly review, facilitates self-reflection, and can help you solidify ideas, generate new ones, and facilitate juicy reflective conversations.
          </li>
          <li>
            Just{" "}
            <a
              href="https://danluu.com/p95-skill/"
              className="text-blue-600 hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              ask
            </a>
            . This is something Dan Luu talks about in the aforementioned post. Ask on reddit, ask a friend, ask an expert, pay someone. There are a lot of options.
          </li>
          <li>
            This one is also something that is in Dan Luu's post that I think is a bit diabolical, but maybe worth trying for myself - recording yourself as you work and watching it over later (kinda like watching video game replays...)
          </li>
        </ul>

        <h3 className="text-xl font-bold">A bit of self reflection</h3>
        <p>
          In the spirit of the post, a bit of self-reflection - I think the pitfall I most commonly fall into is being super impatient to get from point A to point B.
        </p>

        <p>
          Because I want my market maker to be profitable, I try to take the shortcut of throwing more slop at it.
          <br />
          Because I want to win as many games as possible in league, I queue up for the next one rather than reviewing the one I just played.
          <br />
          Because I want to get as much done at work and get promoted as fast as possible at work, I throw slop and cut corners as opposed to developing a solid understanding of what problems to solve and how the system should work.
        </p>

        <p>
          So note to self - slow down. Next time you sit down to work on something, know that it's important for you to feel relaxed, to compartmentalize, prioritize ruthlessly, and before you do anything, to pause and think about how to get better and build momentum.
        </p>

        <p className="text-sm mt-4 border-t pt-4">
          <sup>1</sup> i know, i know...
        </p>
        <p className="text-sm">
          <sup>2</sup> practice was 9-11p.
        </p>
        <p className="text-sm">
          <sup>3</sup> for hobbies that are social, i think the social aspect is often enough reason to keep doing it, and will likely keep you more engaged etc.
        </p>
        <p className="text-sm">
          <sup>4</sup> I think my life desperately lacks some self-reflection.
        </p>
      </div>
    </div>
  );
}
