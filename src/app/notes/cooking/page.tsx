import Link from "next/link";

export default function CookingNote() {
  return (
    <div className="p-4">
      <Link
        href="/notes"
        className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
      >
        ← Back to Notes
      </Link>
      <h1 className="section-title">Cooking as a default action</h1>
      <h2 className="text-gray-500 text-lg mb-6">6/14/2026</h2>
      <div className="space-y-6 text-md">
        <p>
          Making cooking more of a default action has led to step function improvements in my life.
        </p>

        <p>
          I think food is a pretty important part of my life. I suspect this is also the case for a lot of immigrant families - food is one of the main ways we stay connected to our heritage and culture even as we grow up speaking a different language and learn to operate in a different culture.
        </p>

        <p>
          The best way to learn cooking and to figure out if you like it is to cook a lot (e.g. best heuristic is to produce), but also to learn from the good cooks around you, e.g. members of your family. Unfortunately, I think I realized that too little too late in some ways and didn't push hard enough to break the default mold of having my parents or grandparents do the cooking while I primarily sat back and did more of the hard work (e.g. the eating) - kinda a joke but also somewhat not really.
        </p>

        <p>
          In a lot of ways I feel like I'm learning cooking with a blank slate. A ton of the things I've learned have come from cooking with / being introduced to recipes by my partner. Overtime, I felt like I've gradually learned the basics during cooking date nights. I now have a few go-tos when it comes to cooking tasty food like:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>some (weird, but good) variants of pasta (shoutout susan)</li>
          <li>some japanese soul food, like oyakodon, curry, nabe, gyudon</li>
          <li>
            some chinese inspired foods, like twice cooked pork and{" "}
            <a
              href="https://cabagges.world/recipes/beef-and-radish-soup"
              className="text-blue-600 hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              beef brisket soup
            </a>
          </li>
        </ul>

        <p>
          Which is great! I honestly love some of these recipes and I'm excited to learn about how to cook more things (especially more Chinese food).
        </p>

        <p>
          The thing is though, cooking takes time. Sure, braising some brisket can take hours, while oyakadon might take 20 minutes, but either way, they take varying degrees of time and physical and mental effort. In college, where I ate 90% of my meals at a dining hall, cooking was a break from shitty dining hall food and a way for me to spend time with my partner, but when I moved to NYC, cooking definitely felt more like a chore.
        </p>

        <p>
          When I came home from a long day of work, I found that that friction was often enough to discourage setting foot in the kitchen. As a result I did a lot of grabbing takeout on my way home, eating my company's catered dinners, or grabbing food with friends. Obviously, this is sometimes normal and sometimes even unavoidable, but I think doing this everyday started to have a negative impact on my health, because most catered food is just not that healthy.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Restaurant foods aren't really optimized for a good balance of macronutrients.</li>
          <li>
            Unlike foods sold in a grocery store that are required to list ingredients, macronutrients, and calories, restaurants give you no visibility into anything about the dish, other than what you can glean from the menu. By the time you are tasting the actual food, it's too late - it's not like you can unorder the food and go with a different option.
          </li>
        </ul>

        <p>
          Anecdotally, I think this reflected itself in fluctuating energy levels & generally less healthy gut.
        </p>

        <p>
          I still cooked sometimes on weekends, but I think that cooking and not cooking are both feedback loops since they both become the default action the more you do it.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>the more you cook, the more you will enjoy cooking & eating the food you cook.</li>
          <li>on the other hand, the more you eat out, the more you will avoid cooking because it seems so much more difficult than just paying for food & the more you will be unconvinced that you can cook yourself a more nutritional & tasty meal.</li>
        </ul>

        <p>
          Some inspiration from my roommate is what ended up reversing course on the feedback cycle for me. Some background on him is that - for as long as I can really remember - he takes his health pretty seriously; he takes vitamins and probiotics and eats chia seeds and shit like that. He's also a founder, so he's super busy.<sup className="text-sm">1</sup>
        </p>

        <p>
          For probably a few months now, he's made the same ridiculously simple thing for every single meal he's ate: a whole chicken breast, mixed raw greens, and cut up sweet potato. the chicken and potato are popped in the air fryer for ~15 minutes, and voila.
        </p>

        <p>
          So at one point, just out of curiosity, I tried this out, with rice as a substitute for the potato, and thighs as a substitute for the breast<sup className="text-sm">2</sup>, and I ended up being pretty blown away - it was really easy to cook + there's almost no way to really mess it up: it was yummy (the chicken was super juicy + you can add whatever seasoning you want), and it was a balanced meal. In addition, you can really modify or tweak this however you wanted if you ever got bored. For example, recently, ive been experimenting with skin-on + bone-in vs skin-on + boneless etc.<sup className="text-sm">3</sup>, and also trying different kinds of sauces + seasonings.
        </p>

        <p>
          Having some kind of bread and butter meal that ticks the boxes of efficiency, nutrition, and taste has been great. It's improved my life in some really tangible ways, like eating more healthy & saving a bit of money (groceries are much cheaper, especially when trader joes is selling bone in skin on chicken thighs for a whopping 2$ a lb!?), and also given me a bit more confidence and inspiration to explore an important space to me that I traditionally avoided.
        </p>

        <p>
          For example, I'm now more comfortable cooking for other people, like my partner and my friends. Recently, I had a friend over who I cooked{" "}
          <a
            href="https://cabagges.world/recipes/oyakodon"
            className="text-blue-600 hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            oyakodon
          </a>
          {" "}for. I don't think he really has homecooked stuff very often, and he was really appreciative of it - he had initially said he wasn't hungry but then after seeing my plate, went to eat some and even grabbed seconds. I think this may have been one of the first times I really experienced the joy that cooking can give someone from the other side of the equation, which felt eye opening in retrospect.
        </p>

        <p>
          I think I've only just started to scratch the surface of all the personal enjoyment and benefit that cooking can bring and I already think it's been a huge improvement in life quality. So if eating out is your default action, you should try cooking more! Pay attention to what's stopping you from experimenting more in the kitchen. I suspect for most people reading this blog, it will be efficiency (/laziness), like it was for me - but, as I've hope I've shown - there's ways to break the default!
        </p>

        <p>
          If you <em>do</em> give it a shot, I'd be really curious to hear about it! I'm trying to optimize my blog more for{" "}
          <a
            href="https://jvns.ca/blog/2018/02/20/measuring-blog-success/"
            className="text-blue-600 hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            conversations
          </a>
          {" "}- so if you're still reading at this point and have some thoughts I'd love to hear them.
        </p>

        <p className="text-sm mt-4 border-t pt-4">
          <sup>1</sup> They are actually hiring right now so if you are looking for a job at a cyber startup in nyc...
        </p>
        <p className="text-sm">
          <sup>2</sup> thighs are superior.
        </p>
        <p className="text-sm">
          <sup>3</sup> I found this{" "}
          <a
            href="https://www.youtube.com/watch?v=TDUcQhOzO1Q"
            className="text-blue-600 hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            video
          </a>
          {" "}to be super helpful.
        </p>
      </div>
    </div>
  );
}
