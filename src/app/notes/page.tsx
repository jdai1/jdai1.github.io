import Link from "next/link";

export default function Note() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="m-16 items-center w-5/6">
        <h1 className="text-lg font-semibold">Notes</h1>
        <div>
          <ul className="list-disc ml-5">
            <li>Tattoo</li>
            <li>Gintama</li>
            <li>Tattoo</li>
          </ul>
        </div>
        <h1 className="mt-3 text-lg font-semibold">Media</h1>
        <div>
          <ul className="list-disc ml-5">
            <li>Gintama - Hideaki Sorachi</li>
            <li>Man-Eating Cats - Haruki Murakami</li>
            <li>Beautiful World, Where Are You - Sally Rooney</li>
            <li>This is Water - David Foster Wallace</li>
            <li>Infinite Jest - David Foster Wallace</li>
            <li>An Abundance of Katherines - John Green</li>
            <li>Monkey King Cartoon</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
