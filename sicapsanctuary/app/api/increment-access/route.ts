import { NextResponse } from 'next/server';
import { updateDoc, doc, increment, getDoc, setDoc } from 'firebase/firestore';
// Corrected relative path to reach src/lib from app/api/...
import { db } from '../../../firebase'; 

export async function GET() {
  try {
    const statsRef = doc(db, 'analytics', 'total_scans');
    const docSnap = await getDoc(statsRef);
    
    if (docSnap.exists()) {
      // If document exists, increment the 'count' field by 1
      await updateDoc(statsRef, { count: increment(1) });
    } else {
      // Create the document if it's the first scan
      await setDoc(statsRef, { count: 1 });
    }
    
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}