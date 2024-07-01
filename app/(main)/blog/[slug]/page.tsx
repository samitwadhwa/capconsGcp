"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { blogData } from '@/lib/data';
import  BlogsCard  from '@/components/BlogsDetailsCard/BlogCard';
import { Button } from '@/components/ui/button';
import { LikeButton } from '@/components/common/LikesAndComment';

interface BlogSectionProps {
  title: string;
  blogs: typeof blogData.latestBlogs;
}

interface BlogsDetailedCardProps {
  title: string;
  blogsDetailed: typeof blogData.blogsDetailedCardArray;
}

const BlogDetails: React.FC<BlogSectionProps> = ({ title, blogs }) => {
  if (!blogs || blogs.length === 0) return <p>No blogs available</p>;

  const blog = blogs[0];

  return (
    <div className="container mx-auto p-4">
      <div className="w-full h-[486px] relative mb-4">
        <Image
          src={blog.imageUrl}
          alt={blog.title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-lg"
        />
        <div className="absolute top-4 left-4 bg-[#62447D] text-white p-2 rounded">
          {blog.category}
        </div>
      </div>
        <div className="bottom-0 w-full via-transparent to-transparent p-4 text-white">
          <div className="flex justify-between items-center">
          <div className='flex items-center'>
          <div className="w-10 h-10 rounded-full bg-gray-500 mr-4"></div>
            <div>{blog.username}</div>
          </div>
            <div>{blog.date}</div>
          </div>
        <div className='flex-grow border-t border-[#A0A0A0] mt-8'></div>
        </div>
      <h1 className="text-3xl font-bold mb-4 mt-4">{blog.title}</h1>
      <p className="text-lg mb-6">{blog.description}</p>
      <div className="prose mb-6">
        <p>{blog.content}</p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex space-x-4">
          <button className="flex items-center space-x-2">
            <img src="https://storage.googleapis.com/capcons-analytics/Capcons-dev-images/share.webp" className='w-6 h-6' alt="" />
            <span>Share this blog</span>
          </button>

          <button className="flex items-center space-x-2">
            <img src="https://storage.googleapis.com/capcons-analytics/Capcons-dev-images/visible.webp" className='w-6 h-6 bg-transparent' alt="" />
            <span>808</span>
          </button>

          <button className="flex items-center space-x-2">
          <LikeButton initialCount={blog.likes}/>
          </button>
        </div>
        <div>{blog.date}</div>
      </div>
      <div className='flex-grow border-t border-[#A0A0A0] mt-8'></div>
      <CommentSection />
      <BlogsDetailedCard title="Related Posts" blogsDetailed={blogData.blogsDetailedCardArray} />
    </div>
  );
};

const CommentSection: React.FC = () => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Comment Section</h2>
      <div className="space-y-4">
        {/* Mock comments */}
        {[...Array(5)].map((_, idx) => (
          <div key={idx} className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-gray-500"></div>
            <div className="flex-1">
              <p>Lorem ipsum dolor sit amet consectetur. Tortor vivamus nunc mauris adipiscing mauris.</p>
              {idx % 2 === 0 && (
                <>
                  <div className="ml-10 mt-2 space-y-2">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 rounded-full bg-gray-500"></div>
                      <div className="flex-1">
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                      </div>
                    </div>
                    <div className="ml-8">
                      <button className="text-sm text-gray-500">View replies (4)</button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-gray-500"></div>
          <input type="text" placeholder="Add a comment..." className="flex-1 p-2 rounded bg-[#2A2A2E]" />
          <button className="px-4 py-2 bg-purple-600 text-white rounded">Post</button>
        </div>
      </div>

    </div>
  );
};

const BlogsDetailedCard: React.FC<BlogsDetailedCardProps> = ({title , blogsDetailed}) => {

  const [showAllCards, setShowAllCards] = useState(false); // Ensure useState is not called conditionally

  if (!blogsDetailed || blogsDetailed.length === 0) {
    return null; // Don't render anything if blogs are undefined or empty
  }

  const toggleCardVisibility = () => {
    setShowAllCards((prevState) => !prevState);
  };

  const visibleCards = showAllCards ? blogData.editorsPick.length : 3;

  return (

    <section className="my-12">
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-xl font-bold">{title}</h2>
    <div>
      <select className="bg-[#2A2A2E] p-2 rounded">
        <option value="">Category</option>
        {/* Add more options here */}
      </select>
    </div>
  </div>
  <div className="grid mt-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">

    {blogsDetailed.slice(0,visibleCards).map((item, index) => {
      return (
        <BlogsCard 
          title={item.title}
          likes={item.likes}
          imageUrl={item.imageUrl}
          comments={item.comment}
          username={item.username}
          description={item.description}
          date={item.date} 
          category={item.category}          
        />
      );
    })}

  </div>
  <div className="flex justify-center mt-8">
    {blogData.blogsDetailedCardArray.length > 6}
    <Button className="bg-primary text-foreground px-4 py-2 rounded" onClick={toggleCardVisibility}>{showAllCards ? "View Less" : "View More"}</Button>
  </div>
</section>
  )

  
  
}

const BlogPage: React.FC = () => {
  return (
    <div>
      <BlogDetails title="Latest Blogs" blogs={blogData.latestBlogs} />
    </div>
  );
};

export default BlogPage;
