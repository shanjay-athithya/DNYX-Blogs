import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../app/firebase'; // Adjust the path to your firebase.js

// Function to fetch blogs from Firestore
export async function fetchBlogs() {
  try {
    const blogCollection = collection(db, 'blogs');
    const blogSnapshot = await getDocs(blogCollection);
    const blogs = blogSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      // Example: Ensure body is included in data
      body: {
        code: doc.data().body?.code || '', // Add this to ensure the body.code is included
      }
    }));
    return blogs;
  } catch (error) {
    console.error('Error fetching blogs: ', error);
    return [];
  }
}
