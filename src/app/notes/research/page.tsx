import Link from "next/link";

export default function ResearchNote() {
  return (
    <div className="p-4">
      <Link
        href="/notes"
        className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
      >
        ← Back to Notes
      </Link>
      <h1 className="section-title">Research wasn't for me</h1>
      <h2 className="text-gray-500 text-lg mb-6">4/29/2025</h2>
      <div className="space-y-6 text-md">
        <p>
          Nearing the end of my freshman year of college, since I couldn't find any internships, conventional wisdom led me to cold email professors in an attempt to do research with them, despite having no real idea or expertise about the areas these professors worked in. Nevertheless, I got interest back from both professors, and ended up going with one of them. One of the good things about Brown's computer science department is that most labs are open to getting undergrads involved in research.
        </p>

        <p>
          So, I joined a lab for the summer, which at the time, just consisted of me, the professor, and a visiting student. After reading some papers published on my PI's prior work (of which I didn't understand much), we agreed that I would contribute to a project related to using a static analysis tool to do language level system call filtering, under the supervision of the visiting student. Supposedly, this project was a slam dunk for publication — so I happily went along with it. That summer was great — I became good friends with the visiting student, made new friends who were also staying on campus over the summer, and hacked around freely.<sup className="text-sm">1</sup> However, things are always more complex than they seem, and progress eventually stalled.
        </p>

        <p>
          I continued to do research through the next year. That Fall, I even did research as a course credit so I could focus more on it. However, a month into the semester, my PI proposed a new project, one that he claimed was more urgent than the one I had been working on — and one where, when published, I would get to be the first author on. All excitedly, I started hacking away on this project, centered on regenerating software for security (with LLMs).
        </p>

        <p>
          Since this was my very own project, I coupled my well-being more closely with the project's perceived progress. At first, it was tough finding momentum while balancing classes, but I really started to dig in over winter break. I distinctly remember my mom commenting on how she'd never seen me work so hard before (only part jokingly). I slugged away to make progress on this project up until late April, when the target conference's deadline was approaching. It was in and after this period of time (spoiler, we did not make that conference deadline) that I made a few realizations:
        </p>

        <h2 className="text-xl font-bold">Not Enough Training</h2>
        <p>
          Part of the reason it was difficult to make progress on this project, was that I got little technical feedback or advice. This applied in 2 dimensions:
        </p>
        <ol className="list-decimal pl-5 space-y-1">
          <li>
            <strong>Software engineering:</strong> As I learned the hard way, over the course of a longer project, mistakes compound.<sup className="text-sm">2</sup> Technical debt accumulates. The codebase becomes a monstrosity, and modifying it in any meaningful way becomes hard and bug-prone. During my short tenure, good engineering practices weren't enforced or even encouraged. And while this might seem like it makes sense, in reality, I think learning and practicing even the basics of engineering is a must, and would have greatly improved my productivity (I still thought writing random scripts == software engineering at this point).
          </li>
          <li>
            <strong>Technical guidance:</strong> I frequently felt like I was in way over my head technically. Autonomy is good and all, but I don't feel like it's a good idea for an undergrad to be the only one who knows anything even remotely close to the technical side of their project after only 3 months of working on it. Specifically, when all your manager (PI) does in your one-on-one meetings is inspect the google sheet containing the results of your experiments, expecting the numbers to improve without really knowing how these numbers got there in the first place, they probably aren't very equipped to give you any technical guidance.
          </li>
        </ol>
        <p>
          These things are especially important for undergrads or PhDs who go into grad school right after undergrad and probably don't have technical expertise yet (from industry perhaps).
        </p>

        <h2 className="text-xl font-bold">Bad Project Management</h2>
        <p>
          Aside from not having much technical feedback, I also felt like the projects I worked on were pretty poorly managed. This manifested in the following ways:
        </p>
        <ol className="list-decimal pl-5 space-y-1">
          <li>
            <strong>The goal always shifted:</strong> Some part of goal-shifting and adjustment is unavoidable — such is the uncertain nature of doing research. However, when the goal shifts too much, it completely kills the momentum and morale surrounding a project.
          </li>
          <li>
            <strong>Uncertainty:</strong> Since the goals and expectations were always shifting, I often had no good proxy for how much progress I was making. As a result, I was unsure what all the hours I was putting in even meant for myself or my lab, which is a REALLY bad feeling. More on this later.
          </li>
          <li>
            <strong>Paper deadlines:</strong> It seems like in research, everything operates on "we're-chilling-until-a-week-before-the-deadline" schedule where nobody sleeps for that week, and not much gets done before that, which is horribly inefficient and adds way too much stress, depending on how seriously you take these things.<sup className="text-sm">3</sup>
          </li>
        </ol>

        <h2 className="text-xl font-bold">Misalignment</h2>
        <p>
          And at the crux of it all, there was a misalignment in incentives between me and my PI. As an undergrad dabbling in research, I wanted to learn a lot, build cool shit, and just have fun, whereas my PI's incentives were centered around publishing papers, getting funding, and growing headcount in his lab.
        </p>

        <p>
          For example, while I was worried about building something that I thought was solving a real problem, my PI was more concerned about how to present the idea so that it had the highest chance of getting accepted. This really frustrated me, and I remember when that conference deadline in April rolled around I thought we were nowhere close to something I'd be happy submitting, my professor was convinced if we could "spin" the paper the right way, we would have a submittable paper.
        </p>

        <p>
          Maybe if I knew I had wanted to go into academia and get a PhD, I would have a different perspective, but I can confidently say that this experience definitely drove me away from considering anything in the PhD/academia realm.
        </p>

        <h2 className="text-xl font-bold">Bad Org</h2>
        <p>
          So, for all of these reasons, doing research kinda sucked for me. That doesn't mean it sucks or would suck for everyone, but people smarter than me have argued that it actually does for a lot of{" "}
          <a
            href="https://www.benkuhn.net/grad/"
            className="text-blue-600 hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            people
          </a>
          .
        </p>

        <p>
          This excerpt from Ben Horowitz's "The Hard Thing about Hard Things," in which he talks about the difference between good and bad companies, really sums it up for me — and in academia it seems like a lot of the qualities that make organization good, are missing:
        </p>

        <p className="italic pl-4 border-l-4 border-gray-300">
          "In good organizations, people can focus on their work and have confidence that if they get their work done, good things will happen for both the company and them personally. It is a true pleasure to work in an organization such as this. Every person can wake up knowing that the work they do will be efficient, effective, and make a difference for the organization and themselves. These things make their jobs both motivating and fulfilling."
        </p>

        <p className="italic pl-4 border-l-4 border-gray-300">
          "In a poor organization, on the other hand, people spend much of their time fighting organizational boundaries, infighting, and broken processes. They are not even clear on what their jobs are, so there is no way to know if they are getting the job done or not. In the miracle case that they work ridiculous hours and get the job done, they have no idea what it means for the company or their careers. To make it all much worse and rub salt in the wound, when they finally work up the courage to tell management how fucked-up their situation is, management denies there is a problem, then defends the status quo, then ignores the problem."
        </p>

        <p className="text-sm mt-4 border-t pt-4">
          <sup>1</sup>All credit to my PI, he did a great job of making the environment very care-free and shielded from the pressures of academia.
        </p>

        <p className="text-sm">
          <sup>2</sup>I've only recently started to understand the distinction between just writing some random script vs software engineering; ty to Anna for the{" "}
          <a
            href="https://milkov.tech/assets/psd.pdf"
            className="text-blue-600 hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            rec
          </a>
          .
        </p>

        <p className="text-sm">
          <sup>3</sup>I'm exaggerating somewhat, but there is definitely truth here.
        </p>
      </div>
    </div>
  );
}
