// "use client";

/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";

// import { useState } from "react";
import { albumFiles } from "../../../utility/helpers";

function splitToNChunks(array: Array<any>, n: number) {
  let result = [];
  for (let i = n; i > 0; i--) {
    result.push(array.splice(0, Math.ceil(array.length / i)));
  }
  return result;
}

export default function Album() {
  //   const [chunks, setChunks] = useState<number>(4);

  const albumChunks = splitToNChunks(albumFiles, 4);
  console.log(albumChunks);
  return (
    <>
      <h1 className="text-lg font-semibold">Trips</h1>
      <div>
        <ul className="list-disc ml-5">
          <li>Florida</li>
          <li>Iceland</li>
          <li>Preserve</li>
          <li>Portugal</li>
          <li>California</li>
          <li>BOLT</li>
        </ul>
      </div>
      <h1 className="text-lg font-semibold">College</h1>
      <div>
        <ul className="list-disc ml-5">
          <li>S1</li>
          <li>S2</li>
          <li>S3</li>
        </ul>
      </div>
      <h1 className="text-lg font-semibold">Photo Wall</h1>
      <div className={`grid grid-cols-4 gap-4`}>
        {/* {albumChunks.map((albumChunk, index) => {
          return (
            <div key={index} className="grid gap-4">
              {albumChunk.map((albumFile) => {
                return (
                  <div key={albumFile}>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src={`/album/${albumFile}`}
                      alt=""
                    />
                  </div>
                );
              })}
            </div>
          ); */}
        {/* })} */}
      </div>
    </>
  );
}
