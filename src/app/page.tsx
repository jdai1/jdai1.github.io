export default function Home() {
  return (
    <div className="space-y-4">
      <section>
        <p className="text-lg text-text-primary">
          Hi! I'm Julian.
          
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
      </ul>
    </div>
  );
}
