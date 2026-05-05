import { db } from './firebase.js';
import { doc, setDoc } from 'firebase/firestore';
import content from './content.json';

async function migrate() {
  try {
    await setDoc(doc(db, 'content', 'website'), content);
    console.log('Migration successful!');
  } catch (err) {
    console.error('Migration failed:', err);
  }
}

migrate();
