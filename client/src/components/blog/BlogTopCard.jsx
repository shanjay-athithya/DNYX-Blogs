// BlogCardTop.js
import React from 'react';
import Image from 'next/image';
import noImage from '../../../public/images/noImage.png';

const BlogTopCard = ({ blog }) => {

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
  

  return (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto max-w-7xl">
  {/* First larger blog on the left */}
  <div className="relative rounded-xl overflow-hidden transition transform duration-300 hover:scale-[98%] p-2 dark:hover:shadow-gray-500 hover:shadow-gray-700 shadow-md hover:shadow-lg shadow-gray-400 dark:shadow-gray-500 dark:bg-gray-900 border dark:border-gray-700">
    <Image src={blog[0]?.imageUrl || noImage} alt={blog[0].title} className="object-cover w-full h-72 md:h-[23rem]" />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
    <div className="absolute bottom-0 p-6 text-white">
      <h2 className="mt-4 text-2xl font-bold">{blog[0].title}</h2>
      <p className="mt-2">{blog[0].content}</p>

    </div>
  </div>

  {/* Two smaller blogs on the right */}
  <div className="grid gap-24">
    {blog.slice(1, 3).map((item, index) => (
      <div key={index} className="flex space-x-4 rounded-lg hover:bg-yellow-100 transition transform duration-300 hover:scale-[98%] p-2 dark:hover:shadow-gray-500 hover:shadow-gray-700 shadow-md hover:shadow-lg dark:shadow-gray-500 shadow-gray-400 dark:bg-gray-900 border dark:border-gray-700"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >
        <Image src={item?.imageUrl || noImage} alt={item.title} className="object-cover w-32 h-32 rounded-lg" />
        <div className="flex-1">
          <h3 className="mt-1 text-lg font-bold">{item.title}</h3>
          <p className="mt-2">{item.content}</p>
          {/* Convert and display the date */}
          <p className="dark:text-gray-400 text-gray-600 mt-1">{formatDate(item.publishedAt)}</p>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default BlogTopCard;
