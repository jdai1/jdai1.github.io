import Image from "next/image";
import Link from "next/link";

export default function MonkeyCartoonNote() {
  return (
    <>
      <Link className="font-mono hover:underline" href="/notes">
        Back
      </Link>
      <Image
        src="/monkey-king-cartoon.png"
        alt="monkey-king-cartoon"
        width={500}
        height={500}
      />
    </>
  );
}
