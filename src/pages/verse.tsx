import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const verseImages = [
  '/verses/verse1.jpg',
  '/verses/verse2.jpg',
  '/verses/verse3.jpg',
];

export default function VersePage() {
  const router = useRouter();
  const { qr } = router.query;
  const [image, setImage] = useState<string>('');

  useEffect(() => {
    // Randomly select a verse image
    setImage(verseImages[Math.floor(Math.random() * verseImages.length)]);
    // TODO: Count the scan in Firebase
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: 40 }}>
      <h2>Verse of God</h2>
      {image && <img src={image} alt="Verse" style={{ maxWidth: 400, margin: '20px auto' }} />}
      <p>QR Code: {qr}</p>
    </div>
  );
}
