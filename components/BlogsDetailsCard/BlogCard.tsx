import React from 'react';
import { Card, CardHeader, CardFooter, CardMedia, CardTitle, CardDescription, CardContent } from '@/components/ui/card'; // Adjust the import path accordingly
import { FaRegComment } from "react-icons/fa";
import { CommentButton, LikeButton } from '@/components/common/LikesAndComment';

interface Blog {
  category: string;
  title: string;
  description: string;
  username: string;
  date: string;
  imageUrl: string;
  likes?: number;
  comments?: number;
}



const BlogsDetailedCard: React.FC<Blog> = ({ category, title, description, username, date, imageUrl, likes = 0, comments = 0 }) => {
  return (
    <Card className="w-full shadow-lg flex flex-col items-start p-4 bg-[#2C2338] text-white" noPadding>
      <div className="overflow-hidden rounded-lg border border-foreground/10 bg-[#2C2338] shadow-sm">
        <img src={imageUrl} alt={title} className="h-56 w-full object-cover" />
        <div className="absolute top-4 left-4 bg-[#62447D] text-white px-2 py-1 rounded">
          {category}
        </div>
      </div>
      <div className="flex justify-between items-center w-full mb-4 mt-4">
        <div className="flex space-x-2">
          <button className="flex items-center space-x-1">
            <LikeButton initialCount={likes} />
          </button>
          <button className="flex items-center space-x-1">
           <CommentButton initialCount={comments}/>
          </button>
        </div>
        <div className="text-xs">{date}</div>
      </div>
      <CardTitle className="text-xl mb-2">{title}</CardTitle>
      <CardDescription className="text-sm mb-4">{description}</CardDescription>
      <div className="flex justify-between items-center w-full mt-auto">
        <a href="#" className="text-sm text-foreground hover:underline">Link to page &rarr;</a>
      </div>
      <div className='flex-grow border-t border-[#A0A0A0] mt-8'></div>
      <CardFooter className="flex items-center w-full mt-4" noPadding>
        <div className="w-10 h-10 rounded-full bg-gray-500 mr-4"></div>
        <span>{username}</span>
      </CardFooter>
    </Card>
  );
};
export default BlogsDetailedCard;
