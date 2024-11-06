import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../app/firebase';
import noImage from '../../../public/images/noImage.png';

// Skeleton loader with dark mode support
const BlogCardSkeleton = () => (
  <div className="border p-4 rounded-lg shadow-md transition-shadow duration-300 animate-pulse dark:bg-gray-800 dark:border-gray-700">
    <div className="h-48 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
    <div className="h-6 bg-gray-300 rounded mt-4 dark:bg-gray-600"></div>
    <div className="h-4 bg-gray-300 rounded mt-2 dark:bg-gray-600"></div>
    <div className="h-4 bg-gray-300 rounded mt-2 dark:bg-gray-600"></div>
  </div>
);

const randomTilt = () => {
  return Math.floor(Math.random() * 10) - 5; // Random tilt between -5 and 5 degrees
};

const handleMouseEnter = (event) => {
  const tilt = randomTilt();
  event.currentTarget.style.transform = `scale(0.98) rotate(${tilt}deg)`;
};

const handleMouseLeave = (event) => {
  event.currentTarget.style.transform = 'scale(1) rotate(0deg)';
};

const formatDate = (timestamp) => {
  if (timestamp && timestamp.toDate) {
    return timestamp.toDate().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    });
  }
  return '';
};

export default function BlogCard({ blogId, loading: initialLoading }) {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(initialLoading);

  useEffect(() => {
    async function fetchBlog() {
      if (!initialLoading) {
        setLoading(true);
      }
      const blogCollection = collection(db, "blogs");
      const blogSnapshot = await getDocs(blogCollection);
      const blogsData = blogSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      const selectedBlog = blogsData.find(b => b.id === blogId);
      setBlog(selectedBlog);
      setLoading(false);
    }

    fetchBlog();
  }, [blogId, initialLoading]);

  if (loading) return <BlogCardSkeleton />;
  if (!blog) return <p className="text-gray-800 dark:text-gray-200">Blog not found</p>;

  return (
    <div className="border hover:bg-yellow-100 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-[98%] hover:underline dark:bg-gray-900 dark:border-gray-700 dark:hover:shadow-gray-500 hover:shadow-gray-700 shadow-gray-400 dark:shadow-gray-500"
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    >
      <Image 
        src={blog?.image || noImage} 
        alt={blog.title} 
        width={400} 
        height={200} 
        className="rounded-lg"
      />
      <h3 className="text-xl font-semibold mt-4 dark:text-white">{blog.title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mt-2">{blog.description}</p>
      <p className="mt-2 dark:text-gray-300">{formatDate(blog.publishedAt)}</p>
      <Link href={`/blogs/${blog.id}`} className="text-red-500 dark:text-red-400 font-medium mt-4 block">
        Read More &rarr;
      </Link>
    </div>
  );
}