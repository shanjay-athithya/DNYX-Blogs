// fetchTopBlogs.js
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import { db } from '../../app/firebase';

export const fetchTopBlogs = async () => {
  const blogCollection = collection(db, "blogs");
  const q = query(blogCollection, orderBy("publishedAt", "desc"), limit(3));

  const querySnapshot = await getDocs(q);
  const blogs = querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));

  return blogs;
};
