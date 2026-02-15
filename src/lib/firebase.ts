import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA7v3sgAnQ74GPb3QUlHK6U50BGmlYRkkw',
  authDomain: 'sicapsanctuary.firebaseapp.com',
  projectId: 'sicapsanctuary',
  storageBucket: 'sicapsanctuary.firebasestorage.app',
  messagingSenderId: '638955945993',
  appId: '1:638955945993:web:3d4b953ebf169bcc6f38d8',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
