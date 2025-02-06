import Link from "next/link";

export default function SquareOneNote() {
  return (
    <div className="p-4">
      <Link href="/notes" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
        ← Back to Notes
      </Link>
      <h1 className="section-title">Square One</h1>
      <div>
        <div className="space-y-6 text-md opacity-75">
          <p>
            I really enjoy reading blogs. To me, blogs strike a happy medium in between long form content like books and short form content like social media (e.g. twitter). For example, while I often find myself becoming impatient trying to get through books, blogs are digestible, don't require too much of a commitment, and historically have been far more interesting and unpolluted to me than social media. Furthermore, depending on which blogs you read, they can offer anything from personal advice to anecdotes, opinions, technical writing, and everything in between.
          </p>

          <p>
            I've also noticed that most people who have blogs with broader audiences seem to have lots of friends who are also bloggers who are frequently referenced. Some pieces, like Collison's advice for people between 10-20, are referenced in a lot of different places — but most blogs contain a lot of external links to more media. Following these links and references is a great, low-effort way to find new and interesting voices as opposed to surfing the web myself — intuitively, if I like a given person's blog, it's likely that I'll enjoy consuming media that they think is worthwhile to read.
          </p>

          <p>
            Recently, I've been reading a lot of this <a href="https://benkuhn.net" className="text-blue-600 hover:text-blue-800">dude's</a> posts, which has inspired me to start my own blog. There are a couple of reasons I want to personally start a blog:
          </p>

          <ol className="list-decimal list-inside space-y-2 pl-4">
            <li>As a backlog of my thoughts and ideas, like a commit log of a repository if you will, so I don't forget random things that might be useful to me later</li>
            <li>To get better at writing and expressing my ideas — something that I think I'm OK at, but could stand to get a <em>lot</em> better at</li>
            <li>Because I think it's super cool, even though it's very scary to put all your thoughts on the internet for people to make fun of. But it being scary is also appealing in a strange way.</li>
          </ol>

          <p className="font-medium">Some other reasons why starting a blog is good (according to others), paraphrased:</p>
          <ol className="list-decimal list-inside space-y-2 pl-4">
            <li>To not be embarrassed to tell people that you've written about something or collected some things on a certain topic, i.e., to give yourself some confidence!</li>
            <li>To think better (somewhat related to getting better at writing & expressing ideas)</li>
            <li>To make new friends and strengthen existing friendships.
              <ul className="list-disc list-inside space-y-2 pl-8 mt-2">
                <li>Writing = New ideas = more things to talk about</li>
                <li>Blogging is a window into someone's real thoughts — in some ways, it's far more intimate than having a casual conversation with them. Thus it's a means to make and new and strengthen existing friendships. There's not much downside, but a huge upside in general to putting yourself out there!</li>
              </ul>
            </li>
            <li>For job opportunities and self-promotion — a quality blog could be the difference between you and the next person. Also it can be a good way to find people with the same interests, collaborators, future partners, co-founders etc.</li>
          </ol>

          <p>
            Following some <a href="https://www.benkuhn.net/writing/#:~:text=In%20my%20opinion%2C%20the%20strongest,which%20will%20make%20your%20existing" className="text-blue-600 hover:text-blue-800">advice</a> to start a blog<sup className="text-sm">1</sup>, here are a few reminders for myself:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>Write consistently — aim to write at least one word a day and publish something every week</li>
            <li>Brainstorm — a good heuristic for what to write about is anything you've said more than once in a conversation</li>
            <li>Keep a list of ideas — keep a list of ideas for things to write about, ranked by how excited you are about each one</li>
            <li>Writing unoriginal things is OK! Don't cling to the notion that you have to write the most revolutionary things. This guy has an <a href="https://guzey.com/personal/why-have-a-blog/#but-nobody-will-read-my-blog" className="text-blue-600 hover:text-blue-800">explanation</a> of this that I'm sure I'll revisit at some point. Funnily enough, this actually links to another <a href="https://www.youtube.com/watch?v=QzBoGVToWEo&ab_channel=TessaViolet" className="text-blue-600 hover:text-blue-800">video</a> that I haven't seen yet, but this proves my point from earlier, and also proves his point too (why unoriginal things can still be useful).</li>
            <li>Along the same lines as the last point, the bar is lower than you think</li>
          </ul>

          <p className="font-medium">Some more fine-grained advice:</p>
          <p>What to write about?</p>
          <ul className="list-disc list-inside space-y-2 pl-8">
            <li>advice I'd give to my friends</li>
            <li>personal experiences that might be useful for others (and healthy for me to share)</li>
            <li>hot takes</li>
            <li>how-tos, technical pieces, random shower thoughts, idk just have fun with it!</li>
          </ul>

          <p className="text-sm mt-8 border-t pt-4">
            <sup>1</sup> Actually, in doing some research on advice for how to start a blog, I realized I already violated a piece of advice from Ben Kuhn's blog about "futzing with your website instead of writing."
          </p>
        </div>
      </div>
    </div>
  );
}
