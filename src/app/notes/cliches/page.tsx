import Link from "next/link";

export default function ClichesNote() {
  return (
    <div className="p-4">
      <Link
        href="/notes"
        className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
      >
        ← Back to Notes
      </Link>
      <h1 className="section-title">Infinite Jest: Clichés and Default Settings</h1>
      <h2 className="text-gray-500 text-lg mb-6">2/22/2025</h2>
      <div className="space-y-6 text-md opacity-75">
        <p>
          "That the most obvious, important realities are often the ones that are hardest to see and talk about. Stated as an English sentence, of course, this is just a banal platitude, but the fact is that in the day to day trenches of adult existence, banal platitudes can have a life or death importance, or so I wish to suggest to you on this dry and lovely morning." - DFW
        </p>

        <h2 className="text-xl font-bold">This is Water</h2>
        <p>
          Around the time I graduated from high school, after being introduced to{" "}
          <a
            href="https://fs.blog/david-foster-wallace-this-is-water/"
            className="text-blue-600 hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            This is Water
          </a>
          , a commencement speech by David Foster Wallace, I started reading{" "}
          <a
            href="https://archive.org/details/InfiniteJest"
            className="text-blue-600 hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            Infinite Jest
          </a>
          . Infinite Jest is DFW's magnum opus — a 1000+ page monstrosity with hundreds of pages worth of footnotes, and at least one word per page you probably won't recognize.<sup className="text-sm">1</sup> Even though I haven't finished it yet<sup className="text-sm">2</sup>, some parts of the book have really stuck with me, even years after reading it, in a very impactful way. One of these such ideas, are that banal platitudes (i.e. clichés) can actually have a life or death importance.
        </p>

        <p>DFW's argument goes something like this:</p>
        <ol className="list-decimal pl-5 space-y-1">
          <li>
            For a long time, we have already known all about the secrets of how to live a happy life — this knowledge is codified and distributed as clichés, myths, and parables. In other words, we really haven't made much progress in spiritual knowledge in the same way that we've made progress in science or technology. A good example of this is Buddhism, a religion formed thousands of years ago that people still study today to learn more about spirituality and well being.
          </li>
          <li>
            Even so, we still struggle with mental wellness, which surfaces in the form of insecurity, anxiety, addictions, or depression.
          </li>
          <li>
            This is because, while we have access to all of the wisdom we need, the hard part is actually sticking to them, every day. A parallel can be drawn in what Paul Graham says in his{" "}
            <a
              href="https://paulgraham.com/ideas.html"
              className="text-blue-600 hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ideas for Startups
            </a>
            {" "}essay — that in the startup space, everybody overvalues ideas, but in reality, the ideas are relatively useless compared to execution. Similarly, when it comes to living a happy life, DFW argues that the hard part of mental wellness is execution.
          </li>
        </ol>

        <h2 className="text-xl font-bold">Default settings</h2>
        <p>
          So what makes execution so hard? DFW argues it's the tendency of people to operate in their default settings, referring to the fact that people often follow the path of least resistance in their actions or thought processes based on what's easy, what's natural, and what's habitual rather than consciously thinking about them. This phenomenon is ubiquitous in daily life. One example of how operating on default settings negatively impacts people is{" "}
          <a
            href="https://markmanson.net/feedback-loop-from-hell"
            className="text-blue-600 hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            negative feedback loops
          </a>
          .
        </p>

        <p>
          The crux of negative feedback loops is that negative thoughts and emotions naturally beget more negative thoughts and emotions, forming a feedback loop. For me personally, a large part of this has to do with the feeling of anxiety. Specifically, when doing something that takes a lot of thinking or effort (especially when I'm feeling tired), it's easy to start feeling anxious. These anxious feelings make me less focused on thinking or putting in the effort towards accomplishing what I want, which eventually make me more anxious. For example, in the context of tennis, a spiral of negative thoughts might go something like: I'm losing right now {'->'}  I can't hit my shots {'->'}  I suck {'->'}  Why am I even playing tennis I should just quit. Other contexts I've observed particularly gnarly negative feedback loops include socializing, going to the gym, and doing taxing intellectual work (like a math problem set maybe).
        </p>

        <p>
          I've also observed that the effects of this loop can play out over longer periods of time too. For example, last semester, I took only two classes to focus on building ATA. Accordingly, I set higher expectations for the progress that we would make, which evidently became a poor choice (we came from working on it full time over the summer to having to also juggle being at school and doing other things) since my expectations outpaced the progress we actually made. The stress induced by this misalignment lurked in the back of my mind, and started stealing away my attention from actually making progress. Through the semester, this feeling (at times) built up into a strong anxiety that, to put plainly, sucked, and made spending time on ATA no fun, which should rarely be the case, especially when it's not like there's any pressure on me to do this kind of thing in the first place.
        </p>

        <h2 className="text-xl font-bold">Clichés</h2>
        <p>
          Here are some clichés I've recently been trying to keep in my daily consciousness to help me fight the inertia of default settings:
        </p>

        <p>
          <strong>
            <a
              href="https://arc.net/l/quote/uayyljmu"
              className="text-blue-600 hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              Having a bias for action
            </a>
            :
          </strong>
          <br />
          For me, more often than not, the anxiety-related pitfalls I fall into come in the form of inaction rather than action. I find I'll usually feel better about things if I simply keep my head down and do the thing, and just disregard the negative emotions that I feel about it. This idea is a nice tool to combat negative feedback loops, since keeping yourself busy with something fun and productive is a much better option than allowing your brain to wallow in anxiety, even if that might not occur to you in the moment.
        </p>

        <p>
          <strong>
            <a
              href="https://paulgraham.com/greatwork.html"
              className="text-blue-600 hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              Producing as a heuristic
            </a>
            :
          </strong>
          <br />
          I feel like a big goal of college is to figure out what I want to spend my time on and how I should spend it in an{" "}
          <Link href="/notes/24" className="text-blue-600 hover:text-blue-800">
            efficient way
          </Link>
          . This is hard to do though, in part, because it is a process of trial and error and therefore takes a long time. One heuristic I've found to be very helpful is to <strong>produce</strong> as a heuristic of whether you want to actually spend time on something. So, if you want to be a writer, write something every day, if you want to be an entrepreneur, always be building and selling something, etc.
        </p>

        <p>
          The great thing about this heuristic is that it will often lead you to discover something that you find the right amount of interesting and engaging, which is very important. This is because:
        </p>
        <ol className="list-decimal pl-5 space-y-1">
          <li>
            You're spending so much time doing this thing, you'll get a great sense of if you're actually interested and engaged by it.
          </li>
          <li>
            Since you're spending so much time on it, if you don't like it, it should become pretty obvious much faster than if you hadn't been spending as much time on it, so you can move onto something else.
          </li>
        </ol>

        <p>
          <strong>
            <a
              href="https://paulgraham.com/greatwork.html"
              className="text-blue-600 hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              Have lower expectations
            </a>
            :
          </strong>
          <br />
          Unreasonable expectations personally are the source of a lot of my anxiety, and hence are a catalyst for negative feedback loops. It's not at all bad to be ambitious or to want to do great work, but having putting high expectations on yourself is just a burden that will slow you down.
        </p>

        <p>
          Again paraphrasing Paul Graham, great work comes from being in a state where you can consistently enjoy focusing on an engaging challenge (i.e. not too easy that it'll be boring and not too hard that it'll be anxiety-inducing) — something that athletes refer to as{" "}
          <a
            href="https://www.youtube.com/watch?v=KTHqbv2M0aA"
            className="text-blue-600 hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            flow
          </a>
          . So, the best strategy for making the most progress towards your goals is to take it day-by-day, and always be making incremental improvements. This is especially true when when you're working in ambiguity and your expectations aren't entirely being set for you. In the context of college, this probably means the stuff your doing outside of your classes.
        </p>

        <p>
          In conjunction with having a bias for action, I've also found having lower expectations to be an effective way to avoid falling into the trap of a negative feedback cycle. In the context of working on ATA, this means enjoying the process of stumbling and{" "}
          <a
            href="https://herman.bearblog.dev/my-product-is-my-garden/"
            className="text-blue-600 hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            puttering
          </a>
          {" "}about, feeling connected to the students who benefit from the work I put in, making the product better little by little as opposed to thinking I need to solve the{" "}
          <a
            href="https://www.benkuhn.net/hard/"
            className="text-blue-600 hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            most difficult problems
          </a>
          , and trusting that being consistently engaged in this process is what leads to the best outcome anyways.
        </p>

        <p className="text-sm mt-4 border-t pt-4">
          <sup>1</sup>"This is Water" is pretty much a bite-sized 10-minute-read SparkNotes of Infinite Jest — it touches on a lot of the same themes and philosophical topics, in a much more straightforward way.
        </p>

        <p className="text-sm mt-4 border-t pt-4">
          <sup>2</sup>on page {'>'} 500
        </p>
      </div>
    </div>
  );
}
