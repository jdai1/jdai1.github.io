export default function Home() {
  return (
    <>
      <div className="w-full h-full flex flex-col">
        <div className="w-full h-full flex flex-col">
          <h1 className="font-mono m-3 text-2xl font-semibold">Julian Dai</h1>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <div className="m-20 items-center w-5/6">
          <div>
            <p className="mb-4 text-md opacity-75">
              Hello! My name is Julian Dai.
            </p>
            <p className="mb-4 text-md opacity-75">
              I am currently an undergraduate student studying mathematics and
              computer science at Brown University. This summer, I joined Atlas,
              a systems lab @ Brown run by prof. Nikos Vasilakis. As a member of
              the lab, I contribute towards projects aiming to automate
              protections against software supply-chain threats, specifically in
              the Javascript ecosystem.
            </p>
            <p className="mb-4 text-md opacity-75">
              Right now, my plan is to learn more about systems and cloud
              related areas, like distributed systems, OS and virtualization,
              but I&apos;m also eager to explore new domains with equally
              motivating and meaningful problems to solve.
            </p>
            <p className="text-md opacity-75">
              Outside of everything else, I like to
            </p>
            <ul className="list-disc ml-4">
              <li className="text-md opacity-75">
                Play tennis. Shout out Brown Club Tennis.
              </li>
              <li className="text-md opacity-75">
                Read. I&apos;ll read whatever. My favorites are Infinite Jest by
                David Foster Wallace, Men Without Women by Haruki Murakami, and
                An Abundance of Katherines by John Green.
              </li>
              <li className="text-md opacity-75">
                Enjoy the great outdoors. To me, the outdoors is a never ending
                source of inspiration and beauty. I love hiking and fishing.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <footer className="items-center fixed bottom-0 w-full">
        <div className="flex-grow border-t border-gray-400"></div>
        <div className="m-3 text-center">
          <a
            className="ml-8 mr-8 hover:underline font-mono"
            href="mailto: julian_dai@brown.edu"
            target="_blank"
          >
            Email
          </a>
          <a
            className="ml-8 mr-8 hover:underline font-mono"
            href="https://github.com/jdai1"
            target="_blank"
          >
            Github
          </a>
          <a
            className="ml-8 mr-8 hover:underline font-mono"
            href="https://www.linkedin.com/in/julian-dai-a3bab1211/"
            target="_blank"
          >
            Linkedin
          </a>
          <a
            className="ml-8 mr-8 hover:underline font-mono"
            href="../../public/JDai Resume.pdf"
            target="_blank"
          >
            Resume
          </a>
        </div>
      </footer>
    </>
  );
}
