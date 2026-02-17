// app/api/increment-access/route.ts
import { NextResponse } from 'next/server';
import { updateDoc, doc, increment, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../../firebase'; // Correct path to root firebase.ts

export async function GET() {
  try {
    const statsRef = doc(db, 'analytics', 'total_scans');
    const docSnap = await getDoc(statsRef);
    
    if (docSnap.exists()) {
      await updateDoc(statsRef, { count: increment(1) });
    } else {
      await setDoc(statsRef, { count: 1 });
    }
    
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}