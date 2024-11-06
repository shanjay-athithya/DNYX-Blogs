"use client";

import BlogCard from './blog/BlogCard';
import BlogCardTop from './blog/BlogTopCard';
import { useEffect, useState } from 'react';
import { fetchBlogs } from './blog/fetchBlogs';
import { fetchTopBlogs } from './blog/fetchTopBlogs';
import { addBlogPost } from './blog/AddBlog';


const handleClick = () => {
  addBlogPost();
};

const TopBlogsSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto max-w-7xl animate-pulse">
    {/* First larger blog on the left */}
    <div className="relative rounded-xl overflow-hidden shadow-lg">
      <div className="bg-gray-200 dark:bg-gray-700 h-96 rounded-xl"></div> {/* Increase the height here */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 p-5"></div>
      <div className="absolute bottom-0 p-6 text-white">
        <div className="bg-gray-200 dark:bg-gray-700 h-4 w-1/2 rounded"></div>
        <div className="mt-2 bg-gray-200 dark:bg-gray-700 h-6 rounded"></div>
        <div className="mt-2 bg-gray-200 dark:bg-gray-700 h-4 w-3/4 rounded"></div>
        <div className="mt-2 bg-gray-200 dark:bg-gray-700 h-4 w-1/2 rounded"></div>
      </div>
    </div>

    {/* Two smaller blogs on the right */}
    <div className="grid gap-4">
      {[...Array(2)].map((_, index) => (
        <div key={index} className="flex space-x-4 rounded-lg">
          <div className="bg-gray-200 dark:bg-gray-700 w-32 h-32 rounded-lg"></div>
          <div className="flex-1 space-y-2">
            <div className="bg-gray-200 dark:bg-gray-700 h-4 w-1/2 rounded"></div>
            <div className="bg-gray-200 dark:bg-gray-700 h-4 w-3/4 rounded"></div>
            <div className="bg-gray-200 dark:bg-gray-700 h-4 w-1/2 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);


export default function Home() {
  const [blogIds, setBlogIds] = useState([]);
  const [topBlogs, setTopBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const [blogsData, topBlogsData] = await Promise.all([
        fetchBlogs(),
        fetchTopBlogs()
      ]);
      setBlogIds(blogsData);
      setTopBlogs(topBlogsData);
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <div className="container mx-auto py-8 px-5">
      
      {/* Top Blogs */}
      <div className="">
        <h1 className="text-4xl font-bold mb-6 dark:text-white">Featured <span className='text-yellow-500'>Blogs</span></h1>
        {loading ? (
          <TopBlogsSkeleton />
        ) : (
          topBlogs.length > 0 && <BlogCardTop blog={topBlogs} />
        )}
      </div>

      {/* Recent Blogs */}
      <div className="mt-12">
      <button onClick={handleClick} className='border-2 border-black rounded-xl p-2 left-60 top-0  hover:bg-yellow-100 transition translate transform duration-200 m-4 font-semibold dark:border-white dark:hover:text-black '>Add Blog Post Manually</button>
        <h1 className="text-4xl font-bold mb-6 mt-5 dark:text-white">Recent <span className='text-yellow-500'>Blogs</span></h1>
        <div className="grid md:grid-cols-3 gap-8 lg:mx-20">
          {blogIds.map(blog => (
            <div key={blog.id}>
              <BlogCard blogId={blog.id} loading={false} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
