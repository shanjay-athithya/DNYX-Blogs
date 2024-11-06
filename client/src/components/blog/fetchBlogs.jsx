import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../app/firebase';


export async function fetchBlogs() {
  try {
    // Reference to the 'blogs' collection
    const blogCollection = collection(db, 'blogs');
    // Get all documents from the collection
    const blogSnapshot = await getDocs(blogCollection);
    // Map snapshot data to an array of blog objects
    const blogs = blogSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return blogs;
  } catch (error) {
    console.error('Error fetching blogs: ', error);
    return [];
  }
}
