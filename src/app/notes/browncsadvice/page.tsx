import Link from "next/link";

export default function ClassAdviceNote() {
  return (
    <div className="p-4">
      <Link
        href="/notes"
        className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
      >
        ← Back to Notes
      </Link>
      <h1 className="section-title">Advice for Brown CS students</h1>
      <h2 className="text-gray-500 text-lg mb-6">2/11/2025</h2>
      <div className="space-y-6 text-md opacity-75">
        <p>
          This blog post is advice for current and prospective Brown students who are thinking about concentrating in math or computer science.
        </p>

        <h2 className="text-xl font-bold">What not to do:</h2>

        <p>
          <strong>Don't take classes just because they're easy.</strong><br />
          I feel like this goes without saying, but this is definitely not an{" "}
          <a
            href="https://www.burntoutatbrown.com/courses"
            className="text-blue-600 hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            unpopular sentiment
          </a>{" "}
          at Brown. The rationale goes something like: "I'm already taking 3/4 hard classes so I should take a blow-off 4/5th class." Since the people I've heard this from are almost exclusively majors in a STEM subject (although this is probably a super biased sample), this usually manifests in the form of taking a class outside of their concentration that has a low number of hours on critical review. Please don't decide on taking a class just because it has a low time commitment. If that's the only reason you're taking the class, you're better off not taking it at all!
        </p>

        <p>
          <strong>Also don't just take classes because they are hard.</strong><br />
          Taking classes only because they're hard is also dumb. As I'm writing this, I'm realizing that this is probably not an issue for most people in the absolute sense. However, a piece of advice is that you should also never really feel like the classes you're in are too difficult (or boring) for you.
        </p>

        <p>Some real scenarios that might land you in this situation:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            You're concentrating in computer science solely to pursue that juicy swe salary (nothing wrong with that), but you're drowning in the workload. From what I've heard from my friends and seen on the internet, while some other schools (e.g. ucberkely) work to actively weed people out of doing CS as a concentration, Brown does the opposite, and holds your hand through the introductory and intermediate sequences. Famously, the CS department at Brown encourages students who have never done any computer science courses to try it out, and provide a ton of resources to students who need it (e.g. an army of TAs). This is a definitely good in terms of providing an equitable shot at a good CS education, but just know that classes <strong>do get harder</strong> — if you find yourself consistently struggling and not having fun, you should re-evealuate your options.<sup className="text-sm">1</sup>
          </li>
          <li>
            You aren't sure what classes to take but since you think that suffering is correlated to learning or building character, you choose to take really hard classes. I think this is largely untrue, and just because a class is hard does not mean it is necessarily worth taking!
          </li>
        </ul>

        <p>
          <strong>Don't pursue a masters in 4 years</strong><br />
          I happen to know quite a few people who are pursuing a concurrent masters in 4 years from the CS department. It can certainly work out for some people<sup className="text-sm">2</sup>, but if you're on the fence about it, I would advice against it. Here's why:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            I think most people are pursuing this degree as a means stand out from their peers in a career-oriented way, and feel pressured to do it because they feel like they wouldn't be maximizing the value of their education otherwise<sup className="text-sm">3</sup>. However, this has stated to be entirely untrue by Tom Doeppner (the current director of undergrad studies) and backed up by data from Brown's career center in{" "}
            <a
              href="https://www.browndailyherald.com/article/2024/10/computer-science-department-to-eliminate-concurrent-masters-program"
              className="text-blue-600 hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              this
            </a>{" "}
            BDH article. tldr; the value of your education has little, if anything, to do with the degree.
          </li>
          <li>
            Arguably the most difficult part about satisfying the requirements of the masters for most people is the breadth requirements, which essentially require people to take an absurd number of classes (8?) in a wide range of categories (e.g. life sciences and social sciences) outside of CS. If you were not originally planning on taking a wide range of courses, chances are you're not going to be that interested in these classes anyways, and you will end up looking for the easiest classes to take that will satisfy these requirements. Which like I said, is bad.
          </li>
          <li>
            You are also required to take at least 36 credits worth of classes, which means 5 class semester for 4 out of your 8 semesters at Brown. The number of classes you take is not correlated to the value you get out of them. The more classes you take the more you'll spread yourself thin, and the less deep you'll go into the stuff you really care about (going deep on things is the first piece of{" "}
            <a
              href="https://patrickcollison.com/advice"
              className="text-blue-600 hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              advice
            </a>{" "}
            from patrick collison).<sup className="text-sm">4</sup>
          </li>
        </ul>

        <p>I'm also pushing back against some arguments that are pro concurrent masters.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            "You can pursue a masters at no additional monetary cost, since masters programs are usually expensive"
            <ul className="list-disc pl-8 mt-1">
              <li>
                This is true, but as I've mentioned already, the program has a lot of demanding requirements. I'd argue that, as a Brown undergrad, you can get the same <strong>education</strong> as a master's student at no additional monetary cost, without chasing the degree and having to deal with the pressure of conforming to the program's requirements.
              </li>
            </ul>
          </li>
          <li>
            "You can take grad level classes"
            <ul className="list-disc pl-8 mt-1">
              <li>
                Pretty much all grad seminars at Brown let in undergrads. Being a concurrent masters student doesn't make a difference 95% of the time.
              </li>
            </ul>
          </li>
          <li>
            It's "really the only way you could do more and get more out of your degree."
            <ul className="list-disc pl-8 mt-1">
              <li>
                This is just not true. You can take any classes you want to take without pursuing a concurrent masters! (The only difference is MsC CS on your resume).
              </li>
            </ul>
          </li>
        </ul>

        <p>
          This argument is kind of moot, since the CS department is punting the program anyways, so the current sophomore and junior classes are the only ones that this might impact (if you're currently a freshman or younger, don't worry, you're not missing out on much).
        </p>

        <p>
          The overarching point here is that you should be <strong>intentional</strong> with your course selection. You are more likely to get something useful out of your education if you have a plan and make intentional choices to get to where you want to go. Here are some heuristics that might help you out with that:
        </p>

        <h2 className="text-xl font-bold">What to do:</h2>

        <p>
          <strong>Take classes because you're curious about the topic</strong><br />
          At Brown, there is virtually infinite freedom in course selection. This is for two reasons:
        </p>
        <ol className="list-decimal pl-5 space-y-1">
          <li>
            The hallmark of Brown — the open curriculum! Take full advantage of this to take whatever you want. The default application of the open curriculum seems to be spreading out and taking a wide breadth of classes, but an equally good application of it is also to go super deep into subjects your curious about.
          </li>
          <li>
            Shopping period — By shopping classes, you can get a much more accurate mental model of any class than you would from reading reviews or talking to friends. Shopping a ton of classes has a high expected value for little cost — finding one or two classes you really like can improve your semester by a lot. Also, trying out stuff you haven't really done before but are somewhat interested in is great. (But sometimes you realize that your interest is the kind that would be sated with a 3h youtube video and not a full class)<sup className="text-sm">5</sup>
          </li>
          <li>
            With a few exceptions (i.e. an intro sequence), listed prerequisites (in the CS department) are more of a suggestion than a requirement — most professors will let you take their class if you tell them you know what you're doing, and things usually turn out well even if you haven't met all of the listed requirements.
          </li>
        </ol>

        <p>
          Given this freedom, there is little downside to following your curiosity! Taking classes is a fast way to figure out what things you're interested in and what your good at (yet another reference to Collison's advice).
        </p>

        <p>
          <strong>Take classes because you think that you can be in a great environment with other smart and like-mined people</strong><br />
          Also a cliché — be in an environment with other people who can 1) think for themselves, 2) are nice people, and 3) work towards their ambitions. Picking your classes can be a great way to craft a community like this, and certain classes at Brown are very impactful in this regard. For example, I found that most of the people who I've worked with, respect, and formed friendships with (who also study cs), I met in the very first CS class I took at Brown. Also from personal experience #2 (finding nice people) is generally not hard to do at Brown compared to #1 and #3.
        </p>

        <p>
          <strong>Take classes because other people have told you they are amazing (but be careful)</strong><br />
          In general, be careful of what other people say of classes. Everyone has their own taste for certain classes, and you should definitely try to develop this taste in your freshman/sophomore year, as it will help you lot. I've also found that most of the time, the hour counts for CS classes are usually overblown, especially for classes like OS — the best approximation for how much work a class will take is usually from friends rather than critical review. This strategy (seeking out class advice and information from friends who are similar to you in interest/experience) is also generally the best way to go in my opinion when scoping out new classes — you're friends are probably a good yard stick to measure things with, since they'll likely have a taste that's more similar to yours than the average student.
        </p>

        <p>
          <strong>Take classes because the professor is good</strong>
        </p>
        <p>Some heuristics for a good professor:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            You don't get bored listening to them speak for ~40 hours (the total lecture time of a semester) — they are clearly passionate about the topic and do their best to make the lectures engaging. Brown places a huge emphasis on their undergrad education, oftentimes{" "}
            <a
              href="https://dof.brown.edu/resources/teaching#:~:text=Faculty%20must%20teach%20at%20least,the%20size%20of%20the%20department"
              className="text-blue-600 hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              requiring faculty to teach
            </a>
            . This usually means that you're far more likely to get professors who care about you and will put in the effort to be super engaging, but that's certainly not always the case. Utilize recommendations from friends and shopping period to make sure you actually like the professor.
          </li>
          <li>
            They are organized and the class is well run — assignments are released and graded in a timely way, the teaching staff makes themselves available via office hours and 1-on-1s, etc.
          </li>
        </ul>

        <p>Some excellent professors I've had, who all exceeded my expectations for caring about their students:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Christine Breiner</li>
          <li>Bena Tshitshiku</li>
          <li>Nick Demarinis</li>
          <li>Shriram Krishnamurthi</li>
          <li>Serdar Kadioglu</li>
        </ul>

        <h2 className="text-xl font-bold">Courses</h2>
        <p>Here are the courses I've taken at Brown so far:</p>
        <p>Fall 2022</p>
        <ul className="list-disc pl-5">
          <li>math 350, math 540, cs19, eeps 50</li>
        </ul>

        <p>Spring 2023:</p>
        <ul className="list-disc pl-5">
          <li>math 1530, cs32, cs1470, apma 1655, rels 815</li>
        </ul>

        <p>Fall 2023:</p>
        <ul className="list-disc pl-5">
          <li>research, cs1570, cs33, math 1060</li>
        </ul>

        <p>Spring 2024:</p>
        <ul className="list-disc pl-5">
          <li>math 1010, cs1515, cs1670 + 1690, eeps 1720</li>
        </ul>

        <p>Fall 2024:</p>
        <ul className="list-disc pl-5">
          <li>research, networks, dbms</li>
        </ul>

        <p>Spring 2025:</p>
        <ul className="list-disc pl-5">
          <li>cs2951 (prescriptive analytics), cs1660, cs1675, apma 1710</li>
        </ul>

        <p>A subset of the classes I'd recommend:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            CS19 — Where I met most of my friends who also study CS. Shriram is a controversial, but in my opinion, excellent professor who will keep you on your toes. Taking this class is a very good opportunity to meet some cool people early on (i.e. in the first semester) of your college years.
          </li>
          <li>
            MATH 350 or 540 — you should try a proof-based math class if you haven't already! it's completely different than the math I was taught in high school. I also think that the density of bright (and genuinely curious) kids in math classes is way higher than in cs classes (because no one really pursues pure math for any reason other than the fact that they enjoy it).
          </li>
          <li>
            CS2951 — a seminar-based class I'm taking right now. Great because it focuses on practical, industry-related problems, and the professor is highly engaging (partly due to the fact that it's capped at 25) and also has loads of experience doing the things in industry he teaches. Hard to get into, but highly recommended.
          </li>
          <li>
            CS1680 — Nick is an extremely organized professor who obviously cares very deeply about his students. The class runs like a well-oiled machine (as I assume any class he teaches does), and he is very passionate about networks. (The lectures are great).
          </li>
        </ul>
        <p>
          If you have any questions or vehement disagreements with me, you can email me, or we can chat over lunch or coffee (if you're a Brown student).
        </p>

        <p>
          Thanks to Noah Rousell for reading the draft and giving feedback.
        </p>

        <p className="text-sm mt-4 border-t pt-4">
          <sup>1</sup>This is generally true — not just in the context of taking classes.
        </p>

        <p className="text-sm mt-4 border-t pt-4">
          <sup>2</sup>I know one out of maybe 10 people pursuing the concurrent masters for who I think it's actually a good fit for.
        </p>

        <p className="text-sm mt-4 border-t pt-4">
          <sup>3</sup>Which is hard! Brown's tuition is going up by{" "}
          <a
            href="https://www.brown.edu/news/2025-02-10/corporation#:~:text=After%20an%20extensive%20analysis%2C%20the,%2C%20effective%20July%201%2C%202025"
            className="text-blue-600 hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            5% next year
          </a>
        </p>

        <p className="text-sm mt-4 border-t pt-4">
          <sup>4</sup>The webpage says it's advice for people aged 10-20, but realistically it's probably good advice for anyone. Patrick might've been doing these things from 10-20, but that doesn't mean these things don't apply for someone from 20-30!
        </p>
        <p className="text-sm mt-4 border-t pt-4">
          <sup>5</sup>Crediting this point to Noah
        </p>
      </div>
    </div>
  );
}
