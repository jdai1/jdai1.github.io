import Link from "next/link";

export default function ManEatingCatsMediaNote() {
  return (
    <div className="p-4">
      <Link
        href="/notes"
        className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
      >
        ← Back to Notes
      </Link>
      <h1 className="section-title">Man-Eating Cats</h1>
      <div className="space-y-6 text-md opacity-75">
        <p>
        I can't recall exactly what we talked about, but we found a million topics and could have talked forever. With a laserlike clarity I could grasp everything she wanted to say. And things I couldn't explain well to anyone else came across to her with an exactness that took me by surprise. We were both married, with no major complaints about our married lives. We loved our spouses and respected them. Still, this was on the order of a minor miracle—running across someone you express your feelings to so clearly, so completely. Most people go their entire lives without meeting a person like that. It would have been a mistake to label this "love." It was more like total empathy.
        </p>
        <p>
	We started going out regularly for drinks. Her husband's job kept him out late, so she was free to come and go as she pleased. When we got together, though, the time just flew by. We'd look at our watches and discover that we could barely make the last train. It was always hard for me to say goodbye. There was so much more we wanted to tell each other.
        </p>
        <p>
	Neither of us lured the other to bed, but we did start sleeping together. We'd both been faithful to our spouses up to that point, but somehow we didn't feel guilty, for the simple reason that we had to do it. Undressing her, caressing her skin, holding her close, slipping inside her, coming—it was all just a natural extension of our conversations. So natural that our lovemaking was not a source of heartrending physical pleasure; it was just a calm, pleasant act, stripped of all pretense. Best of all were our quiet talks in bed after sex. I held her naked body close, and she'd curl up in my arms and we'd whisper secrets in our own private language
        </p>
        <p>
        - Haruki Murakami
        </p>
      </div>
    </div>
  );
}
