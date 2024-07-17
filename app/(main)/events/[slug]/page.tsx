"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import { events } from '@/lib/data';
import { LikeButton } from '@/components/common/LikesAndComment';
import EventCard from '@/components/EventsCard/EventsCard';
import useWindowWidth from '@/hooks/useWindowWidth';
import Interest from '@/app/(onboarding)/interest/page';

interface EventsDetailedProps {
  event: typeof events.eventsListed;
}
interface EventsArtistsProps {
  eventsArtists: typeof events.artists;
}

const EventsDetail: React.FC<EventsDetailedProps> = ({ event }) => {

  const windowWidth = useWindowWidth();
  return (
    <div className="bg-background text-white md:p-8 lg:p-12">
      {/* Event Image */}
      <div className="relative h-[30vh] sm:h-[60vh] bg-cover bg-center mb-6 rounded-lg overflow-hidden" style={{ backgroundImage: `url(${event[0].imageUrl})` }}>
        <div className="absolute top-2 left-2 bg-[#62447D] text-white px-2 py-1 text-sm font-semibold rounded">{event[0].category}
        </div>
      </div>

      {/* Event Details */}
      {windowWidth > 1000 ? <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
        <div className="flex flex-col space-y-4">
          <h2 className="text-l p-4 md:text-3xl md:font-bold">{event[0].title}</h2>
          <div className="flex flex-col md:flex-row flex-wrap md:items-center space-x-4 p-4 text-gray-400">
            <div className="flex items-center space-x-2">
              <img src="https://storage.googleapis.com/capcons-analytics/Capcons-dev-images/calender.webp" className='w-6 h-6' alt="Calender"/>
              <span>{format(new Date(event[0].date), 'MM/dd/yyyy')}</span>
            </div>

            <div className="flex items-center space-x-2 md:border-l md:border-gray-400 md:pl-4">
            <img src="https://storage.googleapis.com/capcons-analytics/Capcons-dev-images/locationIcon.webp" className='w-6 h-6' alt="location icon" /> {event[0].location}
            </div>

            <div className="flex items-center space-x-2 md:border-l md:border-gray-400 md:pl-4">
            <img src="https://storage.googleapis.com/capcons-analytics/Capcons-dev-images/scheduleIcon.webp" className='w-6 h-6' alt="time icon" /> {event[0].time}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end space-y-4">
          <div className="text-xl md:text-2xl lg:text-3xl font-bold">₹ {event[0].price}</div>
          <Button className="px-4 md:px-8 lg:px-12 py-2 bg-purple-600 text-white rounded-md">Book</Button>
        </div>
      </div> :
        <div className='flex flex-col'>

          <h2 className="text-l p-4 md:text-3xl md:font-bold">{event[0].title}</h2>
          <InterestedSection event={events.eventsListed} />
        </div>

      }
    </div>
  );
};

const EventsArtist: React.FC<EventsArtistsProps> = ({ eventsArtists }) => {
  return (
    <div className="bg-background text-white p-4 md:p-8 lg:p-12 overflow-hidden">
      <h3 className="text-2xl md:text-3xl font-bold mb-4">Artists</h3>
      <div className="flex gap-4 md:gap-8 overflow-x-auto overflow-y-hidden space-x-4">
        {eventsArtists.map(artist => (
          <div key={artist.id} className="flex gap-4 items-center space-y-2 mb-4 min-w-max mt-4">
            <div className="bg-foreground rounded-full w-16 h-16 md:w-20 md:h-20 overflow-hidden">
              {/* Image here */}
            </div>
            <div>
              <div className="text-foreground">{artist.name}</div>
              <div className="text-foreground text-sm">{artist.profession}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const EventSponsored: React.FC = () => {
  return (
    <div className="bg-background text-white p-4 md:p-8 lg:p-12 overflow-hidden">
      <h3 className="text-2xl md:text-3xl font-bold mb-4">Sponsored By</h3>
      <div className="flex justify-start gap-4 md:gap-12 w-full p-4 items-center border rounded border-foreground mt-4 md:mt-10">
        <img className="w-24 h-12 md:w-48 md:h-20" src="https://storage.googleapis.com/capcons-analytics/Capcons-dev-images/woodlandLogo.webp" alt="company logo" />
        <img className="w-24 h-12 md:w-48 md:h-20" src="https://storage.googleapis.com/capcons-analytics/Capcons-dev-images/WoodsShield2.webp" alt="company logo" />
        <img className="w-24 h-12 md:w-48 md:h-20" src="https://storage.googleapis.com/capcons-analytics/Capcons-dev-images/WoodsShield.webp" alt="company logo" />
      </div>
    </div>
  );
};

const EventDescriptionLocation: React.FC<EventsDetailedProps> = ({ event }) => {
  return (
    <div className="bg-background text-white p-4 md:p-8 lg:p-12">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-start mb-6">
        <div className="flex-1 pr-4">
          <h3 className="text-2xl font-bold mb-2">Description:</h3>
          <p className="text-gray-400 mb-4">
            Lorem ipsum dolor sit amet consectetur. Justo sed sed ullamcorper risus facilisis. Pharetra accumsan adipiscing
            pellentesque posuere diam tempor. Tellus ridiculus mollis amet morbi. Amet ullamcorper aliquam id nulla sit
            aliquam mi. Facilisis nulla nisl id nec turpis lacus. Donec maecenas velit condimentum etiam elit imperdiet donec
            sed tincidunt. Volutpat vitae sit diam est aliquet. Eget semper eu volutpat feugiat purus elit. Sagittis diam
            pellentesque malesuada risus diam. Varius placerat molestie elit sit maecenas. Tincidunt aliquam id dis eu mi
            accumsan nam quis in.
          </p>
          <p className="text-gray-400">
            Cras bibendum nibh convallis ultricies consequat placerat lorem. Ac porttitor amet fringilla egestas ac ac. Risus
            vestibulum cursus quis vitae cras amet nisi. Egestas blandit malesuada sodales odio fermentum et.
          </p>
        </div>
        <div className="flex-1 lg:pl-4 w-full">
          <h3 className="text-2xl font-bold mb-2">Location:</h3>
          <div className="relative h-64 w-full rounded-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448181.07311402145!2d76.81306344269037!3d28.647279935146193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d5c5b555555%3A0x5555555555555555!2sHauz%20Khas%2C%20New%20Delhi%2C%20Delhi%20110016!5e0!3m2!1sen!2sin!4v1596616160161!5m2!1sen!2sin"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              aria-hidden="false"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
};

const InterestedSection: React.FC<EventsDetailedProps> = ({ event }) => {
  const windowWidth = useWindowWidth();
  return (
    <div className="bg-background text-white md:p-8 lg:p-12">
        <div className='flex justify-center items-center  bg-[#212129]'>
      <div className=" p-4 md:p-8 flex flex-col items-center justify-between">
        <p className="md:text-lg mb-4 md:mb-0 text-s">
          Click on Interested to stay updated about this event.
        </p>
        <div className="flex space-x-4 items-center md:right-0 relative right-8">
          {windowWidth > 730 ? <button className="flex items-center space-x-2 relative">
            <span className="before:absolute before:top-1/2 before:-translate-y-1/2"></span>
            <img src="https://storage.googleapis.com/capcons-analytics/Capcons-dev-images/share.webp" className='w-6 h-6' alt="Share" />
            <span>Share this blog</span>
          </button> : null}
          <button className="flex items-center space-x-2 relative">
            <span className="before:absolute md:before:left-[-8px] before:top-1/2 before:-translate-y-1/2 before:w-[1px] md:before:h-6 md:before:bg-gray-400"></span>
            <img src="https://storage.googleapis.com/capcons-analytics/Capcons-dev-images/visible.webp" className='w-6 h-6 bg-transparent' alt="Views" />
            <span>808</span>
          </button>
          <button className="flex items-center space-x-2 relative">
            <span className="before:absolute before:top-1/2 before:-translate-y-1/2 before:w-[1px] before:h-6 before:bg-gray-400"></span>
            <LikeButton initialCount={event[0].likes} />
          </button>
        </div>
        </div>
        <div className='p-2'>
          <Button className="px-6 py-2 border border-[#D6A7FF] bg-transparent hover:bg-primary hover:text-foreground text-[#D6A7FF] rounded-md">Interested</Button>
        </div>
      </div>
    </div>
  );
};

const CommentSection: React.FC = () => {
  return (
    <div className="bg-background text-white p-4 md:p-8 lg:p-12 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Comment Section</h2>
        <div className="space-y-4">
          {[...Array(5)].map((_, idx) => (
            <div key={idx} className="flex items-start space-x-4">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-500"></div>
              <div className="flex-1">
                <p>Lorem ipsum dolor sit amet consectetur. Tortor vivamus nunc mauris adipiscing mauris.</p>
                {idx % 2 === 0 && (
                  <div className="ml-4 md:ml-10 mt-2 space-y-2">
                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gray-500"></div>
                      <div className="flex-1">
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                      </div>
                    </div>
                    <div className="ml-8">
                      <button className="text-sm text-gray-500">View replies (4)</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-500"></div>
            <input type="text" placeholder="Add a comment..." className="flex-1 p-2 rounded bg-[#2A2A2E]" />
            <button className="px-4 py-2 bg-purple-600 text-white rounded">Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const RelatedPosts: React.FC<EventsDetailedProps> = ({ event }) => {
  return (
    <div className="space-y-4 p-4 md:p-8 lg:p-12">
      <h3 className="text-2xl md:text-3xl font-bold mb-4">Related Posts</h3>
      {event.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

const BlogPage: React.FC = () => {
  const windowWidth = useWindowWidth();
  return (
    <div className="w-full">
      <EventsDetail event={events.eventsListed} />
      <EventsArtist eventsArtists={events.artists} />
      <EventSponsored />
      <EventDescriptionLocation event={events.eventsListed} />
      {windowWidth > 1000 ? <InterestedSection event={events.eventsListed} /> : null}
      <CommentSection />
      <RelatedPosts event={events.eventsListed} />
    </div>
  );
};

export default BlogPage;
