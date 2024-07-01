"use client"
import React, { useState } from 'react';
import { Card, CardHeader, CardFooter, CardMedia, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { events } from '@/lib/data';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { DatePicker } from '@/components/ui/DatePicker';

const EventListing = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const tags = ["Comedy", "Workshops", "Music Shows", "Meet Ups", "Kids", "Performances", "Exhibitions", "Screening", "Talks", "Spirituality"];

  const handleSearch = () => {
    // Add search functionality here
  };

  const handleTagClick = (tag: string) => {
    setSelectedTags(prevTags =>
      prevTags.includes(tag) ? prevTags.filter(t => t !== tag) : [...prevTags, tag]
    );
  };

  const filteredEvents = events.filter(event => {
    if (selectedTags.length === 0) return true;
    return selectedTags.some(tag => event.category.includes(tag));
  });

  return (
    <div>
      {/* Background Section */}
      <div className="relative h-[80vh] bg-cover bg-center" style={{ backgroundImage: "url('https://storage.googleapis.com/capcons-analytics/Capcons-dev-images/backgroundEvents.webp')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-25 flex flex-col items-center justify-center">
          <h1 className="text-white text-4xl font-bold">The Best Events for You!</h1>
          <p className="text-white text-xl">"Connecting People, Creating Memories."</p>
        </div>
      </div>

      <div className='flex justify-center'>
        <div className="mt-6 bg-white rounded-lg shadow-lg p-4 w-[90vw] flex justify-center items-center space-x-4">
          <Input 
            type="text" 
            placeholder="Search for event" 
            className="p-2 border border-[#9B9B9B] text-background bg-foreground !w-25rem  rounded-md w-full" 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
          <DatePicker className='bg-foreground border-[#9B9B9B] text-background !w-25rem rounded'/>
          <Input 
            type="text" 
            placeholder="Location" 
            className="p-2 border border-[#9B9B9B] text-background bg-foreground !w-25rem rounded-md w-full" 
            value={location} 
            onChange={(e) => setLocation(e.target.value)} 
          />
          <Button 
            className="p-2 rounded-md" 
            onClick={() => {}}
          >
            <img src="https://storage.googleapis.com/capcons-analytics/Capcons-dev-images/SearchIcon.webp" className='w-8 h-8'  alt="Search" />
          </Button>
        </div>
      </div>

      {/* Tags Section */}
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap space-x-2 mb-4">
          {tags.map(tag => (
            <button 
              key={tag} 
              className={`px-3 py-1 border rounded-full ${selectedTags.includes(tag) ? 'bg-purple-600 text-white' : 'border-gray-400'}`} 
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
        <div className="space-y-4">
          {filteredEvents.map(event => (
            <Card key={event.id} className="flex">
              {event.promoted && <span className="absolute top-0 left-0 bg-teal-500 text-white px-2 py-1">Promoted</span>}
              <CardMedia imageUrl={event.imageUrl} className="w-1/3" />
              <div className="p-4 flex flex-col justify-between w-2/3">
                <div>
                  <CardHeader className="flex flex-col items-start">
                    <span className="text-purple-600 text-xs uppercase font-bold">{event.category}</span>
                    <CardTitle className="text-lg font-semibold">{event.title}</CardTitle>
                    <CardDescription className="text-sm text-gray-600">{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-2">
                    <div className="flex items-center text-sm text-gray-600 space-x-4">
                      <span className="flex items-center"><i className="fas fa-map-marker-alt mr-1"></i> {event.location}</span>
                      <span className="flex items-center"><i className="fas fa-clock mr-1"></i> {event.time}</span>
                    </div>
                  </CardContent>
                </div>
                <CardFooter className="flex justify-between items-center mt-4">
                  <span className="text-xl font-bold">₹ {event.price}</span>
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-md">Book</button>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventListing;
