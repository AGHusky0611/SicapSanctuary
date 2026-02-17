'use client';

import React, { useEffect, useState } from 'react';

// Make sure these images exist in your public/verses/ folder
const verseImages = [
  '/verses/verse1.jpg',
  '/verses/verse2.jpg',
];

export default function Home() {
  const [image, setImage] = useState('');

  useEffect(() => {
    // 1. Pick a random verse immediately
    const randomImage = verseImages[Math.floor(Math.random() * verseImages.length)];
    setImage(randomImage);

    // 2. Count the visit automatically
    fetch('/api/increment-access')
      .then((res) => res.json())
      .catch((err) => console.error('Counting error:', err));
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white p-4 text-center">
      <h1 className="text-3xl font-serif italic text-gray-800 mb-8">
        Verse of the Moment
      </h1>

      {image ? (
        <div className="shadow-2xl rounded-lg overflow-hidden border-4 border-gray-100">
          <img 
            src={image} 
            alt="A scripture verse" 
            className="max-w-full h-auto max-h-[70vh] object-contain"
          />
        </div>
      ) : (
        <p className="text-gray-400 animate-pulse">Opening the sanctuary...</p>
      )}

      <p className="mt-8 text-xs text-gray-300 uppercase tracking-widest">
        Sicap Sanctuary
      </p>
    </main>
  );
}