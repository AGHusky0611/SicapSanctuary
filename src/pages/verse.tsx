import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { db } from '../lib/firebase'; // Uses the db from your lib/firebase.ts
import { doc, setDoc, updateDoc, increment, getDoc } from 'firebase/firestore';

// Note: Ensure all these files exist in your public/verses/ folder
const verseImages = [
  '/verses/verse1.jpg',
  '/verses/verse2.jpg',
  // '/verses/verse3.jpg', // Remove or add the file to your public folder
];

export default function VersePage() {
  const router = useRouter();
  const { qr } = router.query;
  const [image, setImage] = useState<string>('');

  useEffect(() => {
    // 1. Randomly select a verse image
    if (verseImages.length > 0) {
      setImage(verseImages[Math.floor(Math.random() * verseImages.length)]);
    }

    // 2. Count the scan in Firebase
    const countScan = async () => {
      // Reference to a document named 'total_scans' in an 'analytics' collection
      const statsRef = doc(db, 'analytics', 'total_scans');
      
      try {
        const docSnap = await getDoc(statsRef);
        if (docSnap.exists()) {
          // Increment the existing count by 1
          await updateDoc(statsRef, { count: increment(1) });
        } else {
          // Initialize the document if it doesn't exist
          await setDoc(statsRef, { count: 1 });
        }
      } catch (error) {
        console.error("Error updating scan count:", error);
      }
    };

    if (qr) {
      countScan();
    }
  }, [qr]);

  return (
    <div style={{ textAlign: 'center', marginTop: 40, fontFamily: 'sans-serif' }}>
      <h2 style={{ color: '#2c3e50' }}>Verse of God</h2>
      {image ? (
        <img 
          src={image} 
          alt="Verse" 
          style={{ maxWidth: '90%', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', margin: '20px 0' }} 
        />
      ) : (
        <p>Loading your message...</p>
      )}
      {qr && <p style={{ color: '#7f8c8d', fontSize: '0.9rem' }}>Reflecting on scan: {qr}</p>}
    </div>
  );
}