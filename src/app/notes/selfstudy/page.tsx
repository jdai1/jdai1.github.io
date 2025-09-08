import Link from "next/link";

export default function SelfStudyNote() {
  return (
    <div className="p-4">
      <Link
        href="/notes"
        className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
      >
        ← Back to Notes
      </Link>
      <h1 className="section-title">Self-studying Classes</h1>
      <h2 className="text-gray-500 text-lg mb-6">3/3/2025</h2>
      <div className="space-y-6 text-md">
        <p>
          To be honest, the content in most CS classes (especially after you get through the intro sequences and have a solid foundation) at Brown isn't beyond the realm of self-studying, but most people don't do it, because self-learning an entire course worth of content is hard:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>There's no imposed structure</li>
          <li>There's maybe less motivation</li>
          <li>Less help (e.g. from TAs) when you run into problems</li>
        </ul>
        <p>
          I first started thinking about this concept when a guy who I look up to told me he has done this for core CS classes traditionally considered difficult and "must-takes", like networks, OS, and distributed systems, where the primary challenge is building a semester-long project (i.e. TCP/Weenix).
        </p>

        <h2 className="text-xl font-bold">Why Self-Study?</h2>
        <p>
          Having given this idea some thought recently, I've come up with some arguments for why self-studying is situationally worth doing to streamline the process of learning something — you might even save time and effort by self-studying the thing as opposed to spending a semester taking the actual class. Here's why:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Most classes move at a relatively pretty slow pace. The assumption is that you will work on the thing intermittently as you deal with everything else going on at college. There's a fixed cost associated with context switching like this — the learning process will be more streamlined if you work on it straight for one/two weeks and get the thing done (which in hindsight, seems very possible for some classes, e.g. IP/TCP). <strong>tldr;</strong> you can move at your own pace and get things done faster.
          </li>
          <li>
            There's no stress on a grade. Not like there's that much stress on a grade anyways at Brown, but there's really no stress if you just self-study the course. If you are self-learning the thing anyways, a grade probably isn't likely to keep motivation.
          </li>
          <li>
            You can take what you want from the course and ignore the rest. Self-studying lets you selectively pick out what you want to learn from the course's syllabus. This might be ill-advised for certain courses, but can work to your advantage — for example, you can skip content that you already are familiar with or breeze through assignments that are stupid.
          </li>
        </ul>

        <h2 className="text-xl font-bold">Especially True for Disorganized Classes</h2>
        <p>
          This is especially true for classes that are disorganized and don't have their shit together, like classes that are being taught for the first time. In these kinds of classes, you might see these kinds of problems:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>The stencil code is bad or not well-thought out</li>
          <li>The autograder (if there is one) is broken</li>
          <li>There's a ton of environment setup issues</li>
          <li>The assignments are either too easy or too hard</li>
          <li>The expectations are very ambiguous</li>
        </ul>

        <p>
          All of these reasons have the potential to make taking a class really annoying, where in contrast, a well-taught class usually has assignments that are very well thought out and abstract away everything else except the core concepts being taught and present challenges at an appropriate difficulty to encourage learning.
        </p>

        <h2 className="text-xl font-bold">When to Consider Self-Study</h2>
        <p>
          <strong>tldr;</strong> if the course materials for a class are readily accessible (e.g. via the website of a past iteration of the course), the topic is not too niche (so that there will be plenty of resources to look at online), you haven't heard raving reviews about the course (but you still want to take the class), it might be worth just learning yourself. (Note: This might be applicable mostly for project-based classes).
        </p>
        
        <p>
          Inspired by aforementioned dude, I'm going to try this for distributed systems.
        </p>
      </div>
    </div>
  );
}
