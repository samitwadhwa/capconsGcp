"use client"
import React, { useState } from 'react';
import { events } from '@/lib/data';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { DatePicker } from '@/components/ui/DatePicker';
import EventCard from '@/components/EventsCard/EventsCard';
import useWindowWidth from "@/hooks/useWindowWidth";


const EventListing = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const windowWidth = useWindowWidth();

  const tags = ["Comedy Shows", "Workshops", "Music Shows", "Meets", "Kids", "Performances", "Exhibitions", "Screening", "Talks", "Spirituality"];

  // const handleSearch = () => {
  //   // Add search functionality here
  // };

  const handleTagClick = (tag: string) => {
    setSelectedTags(prevTags =>
      prevTags.includes(tag) ? prevTags.filter(t => t !== tag) : [...prevTags, tag]
    );
  };

  const filteredEvents = events.eventsListed.filter(event => {
    if (selectedTags.length === 0) return true;
    return selectedTags.some(tag => event.category.includes(tag));
  });

  return (
    <div>
      {/* Background Section */}
      <section
        className="relative w-full bg-no-repeat bg-center bg-cover bg-[url(https://storage.googleapis.com/capcons-analytics/Capcons-dev-images/backgroundEvents.webp)]"
      >
        <div className="border mx-auto max-w-screen-3xl px-4 py-32 sm:px-6 flex flex-col justify-center lg:h-[90vh] items-center lg:px-8">
          <h1 className="text-white text-center text-3xl md:text-5xl font-bold sm:text-2xl">The Best Events for You!</h1>
          <p className="text-white text-lg md:text-2xl sm:text-base text-center">Connecting People, Creating Memories.</p>
        </div>
      </section>

      {/* Search Section */}
      {windowWidth >= 600 ?
        <div className='flex justify-center relative bottom-12'>
          <div className="mt-6 bg-transparent md:bg-foreground rounded-lg shadow-lg p-8 w-[90vw] flex justify-center items-center space-x-4">

            <Input
              type="text"
              placeholder="Search for event"
              className="p-2 border border-[#212129] md:border-[#9B9B9B] text-foreground md:text-background bg-[#212129] md:bg-foreground !w-25rem  rounded-md w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <DatePicker className='bg-[#212129] md:bg-foreground border-[#212129] md:border-[#9B9B9B] text-foreground md:text-background !w-25rem rounded' />
            <Input
              type="text"
              placeholder="Location"
              className="p-2 border border-[#212129] md:border-[#9B9B9B] text-foreground md:text-background bg-[#212129] md:bg-foreground !w-25rem rounded-md w-full"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />

            <Button
              className="p-2 rounded-md bg-[#977CCC] hover:bg-primary"
              onClick={() => { }}
            >
              <img
                src="https://storage.googleapis.com/capcons-analytics/Capcons-dev-images/SearchIcon.webp"
                className='w-auto h-auto md:w-8 md:h-8'
                alt="Search"
              />
            </Button>

          </div>
        </div> : null}

      {/* Tags Section */}
      <div className="container mx-auto p-6">
        <div className="flex overflow-x-auto space-x-4 mb-4">
          {tags.map(tag => (
            <button
              key={tag}
              className={`px-3 py-1 border text-xs rounded border-[#D6A7FF] text-[#D6A7FF] whitespace-nowrap ${selectedTags.includes(tag) ? 'bg-purple-600 text-white' : ''}`}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>


      {/* Upcoming Events Section */}
      {windowWidth <= 500 ?
        <div className="container mx-auto p-4">
          <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>

          <div className='flex justify-start'>
            <div className="bg-transparent md:bg-foreground rounded-lg shadow-lg w-[90vw] flex justify-center items-center space-x-4">

              <Input
                type="text"
                placeholder="Location"
                className="p-2 border border-[#212129] md:border-[#9B9B9B] text-foreground md:text-background bg-[#212129] md:bg-foreground w-40 rounded-md w-full"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <img src="https://storage.googleapis.com/capcons-analytics/Capcons-dev-images/chevronDown.webp" className='w-6 h-6 relative right-12' alt="chevron" />
              <DatePicker className='bg-[#212129] md:bg-foreground border-[#212129] md:border-[#9B9B9B] text-foreground md:text-background rounded' />



            </div>
          </div>
        </div>
        : null}

      <div className="space-y-4 md:p-12">
        {filteredEvents.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>

  );
};

export default EventListing;
