"use client"
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartOutline } from '@fortawesome/free-regular-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';

interface ButtonProps {
  initialCount?: number;
  className?: string;
}

const LikeButton: React.FC<ButtonProps> = ({ initialCount = 0, className = '' }) => {
  const [likes, setLikes] = useState(initialCount);
  const [liked, setLiked] = useState(false);

  const handleLikeToggle = () => {
    setLiked(!liked);
    setLikes(likes + (liked ? -1 : 1));
  };

  useEffect(() => {
    setLikes(initialCount);
  }, [initialCount]);

  return (
    <div
      className={`flex items-center text-foreground p-2 cursor-pointer ${liked ? 'text-foreground' : 'outline-red'} ${className}`}
      onClick={handleLikeToggle}
    >
      <FontAwesomeIcon icon={liked ? faHeart : faHeartOutline} style={{ color: liked ? 'bg-[#977CCC]' : '#977CCC' }} 
/>
      <span className="ml-2">{likes}</span>
    </div>
  );
};

const CommentButton: React.FC<ButtonProps> = ({ initialCount = 0, className = '' }) => {
  return (
    <div className={`flex items-center text-foreground p-2 cursor-pointer text-foreground ${className}`}>
      <FontAwesomeIcon icon={faComment} style={{ color: '#977CCC'}} />
      <span className="ml-2">{initialCount}</span>
    </div>
  );
};

export { LikeButton, CommentButton };
