export default function Home() {
  return (
    <div className="space-y-4">
      <section>
        <p className="text-lg text-text-primary">
          Hi! I'm Julian. This website is an experiment to see if maintaining a clean environment
          on the internet will encourage me to write and share my thoughts more freely and frequently.
          
        </p>
      </section>
      
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <a href="/about" className="hover:underline">
            About
          </a>
        </li>
        <li>
          <a href="/notes" className="hover:underline">
            Notes
          </a>
        </li>
        <li>
          <a href="/photos" className="hover:underline">
            Albums
          </a>
        </li>
      </ul>
    </div>
  );
}
