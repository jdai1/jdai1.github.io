import Link from "next/link";

export default function IrisNote() {
  return (
    <div className="p-4">
      <Link
        href="/notes"
        className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
      >
        ← Back to Notes
      </Link>
      <h1 className="section-title">A tool to traverse the blogosphere</h1>
      <h2 className="text-gray-500 text-lg mb-6">8/2/2026</h2>
      <div className="space-y-6 text-md">
        <p>
          If you know me, you know I have a deep appreciation of the blogosphere.<sup className="text-sm">1</sup> I've learned invaluable life lessons, valuable tips and tricks, and listened to the musings of kind, smart, and most importantly genuine people. This appreciation, and my desire to be a part of this community is why I{" "}
          <Link href="/notes/squareone" className="text-blue-600 hover:text-blue-800">
            started writing
          </Link>
          {" "}in the first place, and also why I encourage others to do so as well.
        </p>

        <h3 className="text-xl font-bold">Problems</h3>
        <p>
          I think there are a few fundamental problems with the methods that exist today for traversing the blogosphere (e.g. search engines + social media):
        </p>
        <ol className="list-decimal pl-5 space-y-2">
          <li>
            <strong>seo exists, and breaks trust.</strong> Values are misaligned in that search engines monetize from clicks and advertising, not from delivering relevant or desirable results to users. While sometimes seo'ed results == desirable results, ive personally found that this is not often times not the case, especially for the kinds of topics I'd look for in blogs. For example, I would expect a typical search engine to yield decent results for queries like "recipe for hainanese chicken" or "kalshi sinner vs zverev odds," but not for queries like, "im thinking of quitting my job, how should i think about what to look for next" or "how do i know if i should keep dating this person." Blogs have a raw, human element that often doesn't align with seo (unless it goes viral).<sup className="text-sm">2</sup>
          </li>
          <li>
            <strong>there's just so much damn content, also breaks trust.</strong> The internet has a lot of data (zettabytes). Too much fucking data. Current search engines don't provide a way to sift through it all in a trustworthy way. Finding juicy S-tier blog content in the internet is like trying to find a diamond in a massive massive pile of shit. A lot of the things on the internet just aren't worth reading, and sifting through it to find stuff that is is hard. Historically, recs I get from my friends have been the most consistent source of good content.
          </li>
          <li>
            <strong>people have short attention spans.</strong> It's harder for a blog to go viral because usually they are quite long, and in today's era of social media (instagram, twitter, etc.), short form content is far more likely to go viral then medium to long form content, which makes blogs less discoverable. There are forums like hacker news, but (I'm assuming) they get a lot less traffic in general.
          </li>
        </ol>

        <h3 className="text-xl font-bold">Solution shape</h3>
        <p>
          How can we engineer a solution to this problem? The right solution will establish a lot of trust with the user, and surface the right pieces of content at the right time so the user can intentionally consume media, as opposed to passively consuming media.
        </p>

        <p>How can we go about establishing trust?</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>constructing a trusted corpus of data</li>
          <li>making the data searchable</li>
          <li>emphasizing social connection</li>
        </ul>

        <h3 className="text-xl font-bold">Solution details</h3>
        <p>
          <a
            href="http://www.iriis.net"
            className="text-blue-600 hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.iriis.net
          </a>
          {" "}(couldn't get iris.com) - try it out! Please talk to me if you do try it! Just email me @{" "}
          <a href="mailto:julian.dai@gmail.com" className="text-blue-600 hover:text-blue-800">
            julian.dai@gmail.com
          </a>
          .
        </p>

        <h3 className="text-xl font-bold">Constructing a trusted corpus of data</h3>
        <p>Assumptions:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            When people write on their blogs, it is (often) unfiltered and genuine - it's an expression of self. Thus, by reading someone's blogs, I feel like I can quickly develop a pretty accurate picture of that person in my head - the things they are interested in, their values, their fears, etc. In my opinion, that's the power and the intrigue of the blogosphere.
          </li>
          <li>
            Blogs worth reading are almost always members and travelers of the blogosphere - they read other blogs to gain inspiration, and generously link to other blogs in their own posts. When they link to another blog, it typically means they have at the very minimum, read through that post, and enjoyed it or thought it was valuable. Often times, the blogs they link to are their friends, or people they have real relationships with.
          </li>
        </ul>

        <p>
          Under these assumptions, one way to build a trusted corpus of data is simply to follow the backlinks. Start from a trusted node, e.g. your favorite blogger, and then conduct a breadth-first-search outward to find blogs 1, 2, ..., N hops away, collecting all the posts we find along the way. In doing so, we can trade off comprehensiveness in our corpus for trust - e.g. since I trust my favorite blogger, id also consider the bloggers they read and cite as a trusted source.
        </p>

        <p>
          Empirically, the corpus can grow super quickly, e.g. there are thousands of blogs within a 3 hop radius from benkuhn.net, but that is still suuuuper tiny in comparison to the size of the internet. In other words, there <em>should</em> be enough data to cover a lot of different topics in the corpus, while also still maintaining a manageable size.
        </p>

        <h3 className="text-xl font-bold">Making the data searchable</h3>
        <p>
          This is a pretty simple problem - I think the best way to make this content searchable is to let an agent search it in the same way it might search a file system, e.g. with tools like grep, semantic search etc.
        </p>

        <h3 className="text-xl font-bold">Emphasizing social connection</h3>
        <p>
          I took inspiration from curius.app (at{" "}
          <a
            href="https://www.noahrousell.com/"
            className="text-blue-600 hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            noah's
          </a>
          {" "}recommendation), to add a social component - so other user's you're connected with in the app can see the things you're reading and also snippets you highlight from each post. This should reduce the friction for users to share interesting blog posts with their friends! Im personally quite excited to use this feature (and I know noah is too).
        </p>

        <h3 className="text-xl font-bold">Future directions</h3>
        <p>I think iris has a lot of potential! Some interesting ideas:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            user-led corpus distillation // auto-indexing: the corpus is adjustable based on your starting nodes and what you read. Start at a different node and you might end up with a completely different corpus. As you read more blogs, the corpus can adjust to encompass the epsilon ball around the blogs you've been reading
          </li>
          <li>
            chrome extension: pretty clear value add (again, inspiration from curius.app) to reduce the friction for users to favorite a blog post, highlight sections of a blog inline, etc.
          </li>
        </ul>

        <h3 className="text-xl font-bold">Some (or one) learning</h3>
        <p>
          I think the main learning from this experience is understanding the value of shipping to users, and understanding how you can get your first few users. In this case, I built this for myself and my friends who are also hitchhikers of the blogosphere - getting early feedback from them has been really valuable.
        </p>

        <p className="text-sm mt-4 border-t pt-4">
          <sup>1</sup> The blogosphere refers to the world of people who write about their passions and their lives online.
        </p>
        <p className="text-sm">
          <sup>2</sup>{" "}
          <a
            href="https://patrickcollison.com/travel"
            className="text-blue-600 hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            patrickcollison.com/travel
          </a>
        </p>
      </div>
    </div>
  );
}
