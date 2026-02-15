import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: 40 }}>
      <h1>Sicap Sanctuary</h1>
      <p>Scan a QR code to see a verse!</p>
      <Link href="/scan">
        <button style={{ fontSize: 20, padding: '10px 20px' }}>Scan QR Code</button>
      </Link>
    </div>
  );
}
