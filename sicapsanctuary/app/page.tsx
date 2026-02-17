"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [verse, setVerse] = useState<string | null>(null);

  useEffect(() => {
    // Increment access counter
    fetch('/api/increment-access');

    // Get list of verses
    const verses = [
      '/verses/verse1.jpg',
      '/verses/verse2.jpg',
    ];
    // Pick random verse
    setVerse(verses[Math.floor(Math.random() * verses.length)]);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">SicapSanctuary</h1>
      {verse && (
        <Image src={verse} alt="Verse" width={400} height={400} />
      )}
      <p className="mt-4">Scan the QR to get a random verse!</p>
    </main>
  );
}
