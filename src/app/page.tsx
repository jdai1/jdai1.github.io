import Link from "next/link";

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
              Hello! My name is <strong>Julian Dai</strong>.
            </p>
            <p className="mb-4 text-md opacity-75">
              I am currently an undergraduate student studying{" "}
              <strong>math</strong> and <strong>computer science</strong> at{" "}
              <strong>Brown University</strong>. This summer, I joined{" "}
              <strong>Atlas</strong>, a systems lab @ Brown run by Prof. Nikos
              Vasilakis. As a member of the lab, I contribute towards projects
              aiming to automate protections against software supply-chain
              threats, specifically in the Javascript ecosystem.
            </p>
            <p className="mb-4 text-md opacity-75">
              Right now, my plan is to learn more about systems and cloud
              related areas, like distributed systems and virtualization, but
              I&apos;m also eager to explore new domains, especially those with
              meaningful problems. Future research interests might include deep
              learning and computer vision, databases, and programming
              languages.
            </p>
            <p className="mb-4 text-md opacity-75">
              Outside of work, you&apos;ll find me unwinding by playing tennis
              and chess, reading novels and philsophy, and enjoying the great
              outdoors—I especially love to fish and hike!
            </p>
            <p className="mb-4 text-md opacity-75">
              If you&apos;re looking to connect, please reach out! I&apos;m most
              easily reachable by{" "}
              <strong>
                <a className="underline" href="mailto: julian_dai@brown.edu">
                  email
                </a>
              </strong>
              .
            </p>
            <p className="mb-4 text-md opacity-75"></p>
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
          <Link
            className="ml-8 mr-8 hover:underline font-mono"
            href="/resume.pdf"
            target="_blank"
          >
            Resume
          </Link>
        </div>
      </footer>
    </>
  );
}
