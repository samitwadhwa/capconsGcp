import React from 'react';
import { LikeButton } from '@/components/common/LikesAndComment';
import useWindowWidth from "@/hooks/useWindowWidth";

interface Event {
  id: number;
  promoted: boolean;
  imageUrl: string;
  category: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  price: string;
  likes: number;
}

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {

  const windowWidth = useWindowWidth();

  return (
    <div className="bg-[#1B1B21] text-white flex flex-col md:flex-row rounded-lg shadow-md overflow-hidden mb-6 relative">
      {event.promoted && (
        <span className="absolute top-2 left-2 bg-teal-500 text-white px-2 py-1 text-sm z-[1] font-semibold rounded">
          Promoted
        </span>
      )}
      <div className="w-full md:w-1/3 relative">
        <img src={event.imageUrl} alt={event.title} className="w-full h-36 md:h-full object-cover" />
        {windowWidth >= 600 ?
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 flex items-center gap-4">
            <div className="text-[#D6A7FF] text-3xl lg:text-6xl">{new Date(event.date).getDate()}</div>
            <div className="flex flex-col">
            <div className="text-white md:text-2xs text-xs lg:text-lg font-bold">{new Date(event.date).toLocaleString('default', { month: 'long' })}, {new Date(event.date).getFullYear()}</div>
            <div className="text-white md:text-2xs text-xs lg:text-lg font-bold">{new Date(event.date).toLocaleString('default', { weekday: 'long' })}</div>
            </div>
          </div>
          : null
        }
        <div className="absolute bottom-4 right-4 text-white md:text-xs text-xs lg:text-lg flex items-center">
          <LikeButton initialCount={event.likes} />
        </div>
      </div>

      <div className="w-full md:w-2/3 p-4 flex flex-col justify-between">
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <span className="bg-[#62447D] text-white text-xs px-2 py-1 rounded uppercase font-bold">
              {event.category}
            </span>
          </div>
          <h2 className="text-xl font-bold">{event.title}</h2>
          {windowWidth >= 700 && (
            <p className="text-gray-400 mb-4">{event.description}</p>
          )}
          <div className="flex md:justify-start justify-between md:items-center text-sm text-gray-400 mt-4">

            <span className="mr-4 flex items-center gap-2">
              <img src="https://storage.googleapis.com/capcons-analytics/Capcons-dev-images/locationIcon.webp" className='w-6 h-6' alt="location icon" /> {event.location}
            </span>
            <span className='flex items-center gap-2'>
              <img src="https://storage.googleapis.com/capcons-analytics/Capcons-dev-images/scheduleIcon.webp" className='w-6 h-6' alt="time icon" /> {event.time}
            </span>

          </div>
        </div>
        <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-700">
          <div className="text-right">
            <div className="text-xl font-bold">₹ {event.price}</div>
          </div>
          <div>
            <button className="px-4 py-2 bg-transparent hover:border-transparent hover:bg-primary border border-[#D6A7FF] hover:text-foreground text-[#D6A7FF] rounded-md">Book</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
