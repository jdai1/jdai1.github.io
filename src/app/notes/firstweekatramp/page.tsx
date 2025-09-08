import Link from "next/link";

export default function FirstWeekAtRampNote() {
  return (
    <div className="p-4">
      <Link
        href="/notes"
        className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
      >
        ← Back to Notes
      </Link>
      <h1 className="section-title">Some reflections on my first week at ramp</h1>
      <h2 className="text-gray-500 text-lg mb-6">5/17/2025</h2>
      <div className="space-y-6 text-md">
        <p>
          Prefacing these notes by mentioning that since Ramp is my corporate job, my point of reference for building software is mostly drawn from my experience building ATA.
        </p>

        <h3 className="text-xl font-bold">Peers</h3>
        <p>
          Something that I've intermittently felt in the past is impostor syndrome, most of which is unsurprisingly related to building and owning ATA. Interestingly, despite being, on paper, having a significantly less shiny resumés than my peers, I haven't really felt a hint of impostor syndrome so far. I'm not really sure why that is, but I think it's in my best interest to not really think about it and just keep chugging along.
        </p>

        <h2 className="text-xl font-bold">A learning curve</h2>
        <p>
          As with anything new, there is a learning curve. For me, these things might be:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Writing good tests</li>
          <li>Thinking about edge cases</li>
          <li>Actually doing QA</li>
          <li>Writing comprehensive design specs</li>
          <li>Being super customer centric and thinking through the product</li>
          <li>And a bunch more technical things</li>
        </ul>
        <p>
          I thought I would be able to leverage my communication skills as a strength, but it actually seems like I need to focus on improving that as well.
        </p>

        <h3 className="text-xl font-bold">Being the baby</h3>
        <p>
          Most people on the team have had multiple jobs in their career thus far. They have collectively a lot of experience, which is in stark contrast to me. Something that I think is important to remember is to accept my role as the baby, and learn as much as I can through the duration of my internship.
        </p>

        <p>
          I'm still not exactly sure what constitutes a dumb question or not, but I've been told that my first two weeks are a grace period for asking questions, stupid or not. I think the catch here though, is that some questions I can reasonably answer if I put in a little effort — but building the right intuition for how to get answers has been helpful too.
        </p>

        <h3 className="text-xl font-bold">Lessons learned</h3>
        <h4 className="text-lg font-semibold">Making use of one-on-ones:</h4>
        <p>
          Something worth noting is that in my short tenure, I've already felt the positive effects that having dedicated support systems (i.e. my mentor, Aaron, manager, Joowon, and everyone else on my team) provides. This is in sharp contrast to school and working on my own projects, where I'm solely responsible for my progress and well-being.
        </p>

        <p>
          This aside, on my second day, I had a one-on-one with my manager and didn't really have anything to say. This served as a good lesson to always prep (even just a little bit) for one-on-ones to avoid wasting their (and your!) time.
        </p>

        <p>
          All of my other 1-on-1s so far have been intros with other team members. So far, I've met Kevin, our tech lead, and Paul, a frontend dev on procurements, with more intros scheduled for next week with Eileen (designer), TK (PM), and Young (director). I am especially excited to have talked to Kevin, and to talk to TK, and Young to hear about their experience as founders of Venue. Young has an <a href="https://www.youngkim.co/" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">exceptionally good blog</a> that I've been digging into, and I'm excited to ask him a bunch of questions about it.
        </p>

        <h3 className="text-xl font-bold">Reputation</h3>
        <p>
          Something that my manager told me on day one is that your reputation matters, and is a form of currency (at Ramp, but also in general). This is something that I wasn't excited to hear, but makes sense.
        </p>

        <p>
          That being said, I don't think it necessarily means that actively focusing on improving my reputation is necessary, but more so that I shouldn't do anything dumb that will irreparably damage it.
        </p>

        <h4 className="text-lg font-semibold">Socialize</h4>
        <p>
          Another piece of advice that Mason, a fellow Brown alum and full-time engineer at Ramp, gave me, is to really make use of the network I have access to at Ramp. I'm paraphrasing — he said high school, college, and internships are realistically the places you'd meet someone who you liked enough and was good enough that you'd want to be their co-founder.
        </p>

        <p>
          I'm hoping that's not entirely true, but nevertheless, he's right in that being an intern at Ramp is a good opportunity to meet folks, make friends, network etc. Speaking of, I'm excited to get dim sum with some fellow interns tomorrow!
        </p>

        <h4 className="text-lg font-semibold">Using AI</h4>
        <p>
          Lastly, something that surprised me was how proactively Ramp seems to be using AI. Cursor, Notion AI, Windsurf, Entreprise ChatGPT — the list goes on. I had a pre-conceptions that AI use at Ramp would be minimal and discouraged, the reality seeming to be the opposite.
        </p>

        <h3 className="text-xl font-bold">Burning out</h3>
        <p>
          Ever since I've gotten to NYC, I've been getting 1-2 hours less sleep than I usually do (potentially due to my blind being ineffective at keeping my room dark in the early morning). That, combined with my excitement for being at Ramp and working longer hours than I'd originally anticipated could brew into something bad.
        </p>
´
        <p>
          I've added cardboard to help the window situation. I can be a bit of a workaholic too, so being mindful of how I'm resting and recovering will be important.
        </p>

        <h3 className="text-xl font-bold">Don't dive into rabbit holes</h3>
        <p>
          Something Kevin mentioned to me that stuck: you're only going to be here for three months, so it's infeasible to try and get a lot of context. To maximize impact with the duration of my internship in mind, scope things well and have discipline in executing a plan.
        </p>

        <p>
          Excited for my second week!
        </p>
      </div>
    </div>
  );
}
