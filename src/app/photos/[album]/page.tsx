import Link from "next/link";
import fs from 'fs';
import path from 'path';

interface Props {
  params: {
    album: string;
  };
}

export default function AlbumPage({ params }: Props) {
  const albumPath = path.join(process.cwd(), 'public', params.album);
  const files = fs.readdirSync(albumPath);
  const imageFiles = files.filter(file => 
    /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
  );

  return (
    <div className="p-4">
      <Link href="/photos" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
        ← Back to Albums
      </Link>
      
      <h1 className="text-2xl font-bold mb-6 capitalize">{params.album}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {imageFiles.map((file, index) => (
          <div key={file} className="aspect-square relative">
            <img
              src={`/${params.album}/${file}`}
              alt={`Photo ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return [
    { album: 'NH' },
    { album: 'california' },
    { album: 'japan' },
    { album: '2022' },
    { album: 'bolt' },
    { album: 'mammoth' },
  ];
}
