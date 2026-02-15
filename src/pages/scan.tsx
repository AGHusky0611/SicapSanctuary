import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const QrReader = dynamic(() => import('react-qr-reader'), { ssr: false });

export default function ScanPage() {
  const [result, setResult] = useState<string | null>(null);
  const router = useRouter();

  const handleScan = (data: string | null) => {
    if (data) {
      setResult(data);
      router.push(`/verse?qr=${encodeURIComponent(data)}`);
    }
  };

  const handleError = (err: any) => {
    alert('QR Scan Error: ' + err);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: 40 }}>
      <h2>Scan QR Code</h2>
      <div style={{ display: 'inline-block', marginTop: 20 }}>
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: 300 }}
        />
      </div>
      {result && <p>Scanned: {result}</p>}
    </div>
  );
}
