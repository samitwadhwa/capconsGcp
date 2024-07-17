
"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { FaPen, FaPlus } from 'react-icons/fa';
import { dummyPersonalInfo } from '@/lib/data';

const Modal: React.FC<{ onClose: () => void, data: any }> = ({ onClose, data }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-background rounded-lg shadow-md w-11/12 max-w-xl relative">
        <div className='flex justify-between items-start bg-secondary rounded p-1'>
          <div className='flex justify-start items-start p-2'>
            <h2 className="text-foreground text-l underline mb-4 cursor-pointer" onClick={onClose}>Personal Information</h2>
            <button onClick={onClose} className='items-center'>
              <img src="https://storage.googleapis.com/capcons-analytics/Capcons-dev-images/chevronUp.webp" className='w-6 h-6' alt="" />
            </button>
          </div>
          <div className='p-2'>
            <button className="top-4 right-4 text-foreground hover:text-gray-400">
              <FaPen size={12} />
            </button>
          </div>
        </div>
        <div className="text-foreground p-8">
          <div className="mb-4 dark:bg-[#212129] rounded p-2 flex flex-col gap-4">
            <h3 className="font-bold">General</h3>
            <div className='flex gap-2'>
              <img src="https://storage.googleapis.com/capcons-analytics/Capcons-dev-images/personAccIcon.webp" className="w-6 h-6" alt="" />
              <p>Name: {data.general.name}</p>
            </div>
            <div className='flex gap-2'>
              <img src="https://storage.googleapis.com/capcons-analytics/Capcons-dev-images/CakeIcon.webp" className="w-6 h-6" alt="" />
              <p>dob: {data.general.dob}</p>
            </div>
            <div className='flex gap-2'>
              <img src="https://storage.googleapis.com/capcons-analytics/Capcons-dev-images/mailicon.webp" className="w-6 h-6" alt="" />
              <p>Email: {data.general.email}</p>
            </div>
            <div className='flex gap-2'>
              <img src="https://storage.googleapis.com/capcons-analytics/Capcons-dev-images/CallIcon.webp" className="w-6 h-6" alt="" />
              <p>Contact Details: {data.general.contact}</p>
            </div>
            <div className='flex gap-2'>
              <img src="https://storage.googleapis.com/capcons-analytics/Capcons-dev-images/LoacationIcon.webp" className="w-6 h-6" alt="" />
              <p>Location: {data.general.location}</p>
            </div>
            <div className='flex gap-2'>
              <img src="https://storage.googleapis.com/capcons-analytics/Capcons-dev-images/languageIcon.webp" className="w-6 h-6" alt="" />
              <p>Nationality: {data.general.nationality}</p>
            </div>
          </div>
          <div className="mb-4 dark:bg-[#212129] rounded p-2 flex flex-col gap-4">
            <h3 className="font-bold">Education</h3>
            <div className='flex gap-2'>
              <img src="https://storage.googleapis.com/capcons-analytics/Capcons-dev-images/DegreeIcon.webp" className="w-6 h-6" alt="" />
              <p>Higher Education: {data.education.school}</p>
            </div>
            <div className='flex gap-2'>
              <img src="https://storage.googleapis.com/capcons-analytics/Capcons-dev-images/DegreeIcon.webp" className="w-6 h-6" alt="" />
              <p>Degree: {data.education.degree}</p>
            </div>
            <div className='flex gap-2'>
              <img src="https://storage.googleapis.com/capcons-analytics/Capcons-dev-images/socialLinksIcon.webp" className="w-6 h-6" alt="" />
              <p>Social Links: {data.education.socialLinks}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PhotosComponent: React.FC<{ photos: string[] }> = ({ photos }) => {
  const mainPhoto = photos[0];
  const gridPhotos = photos.slice(1, 5);
  const morePhotosCount = photos.length - 5;

  return (
    <div className="dark:bg-[#212129]  bg-card p-6 rounded-lg w-full max-w-xxl mt-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-foreground">Photos</h2>
        <a href="#" className="text-purple-400">See All</a>
      </div>
      <div className="flex gap-2">
        <div className="w-full md:w-[70%] pr-0 md:pr-2">
          <img src={mainPhoto} alt="Main Photo" className="w-full h-auto rounded-lg" />
        </div>
        <div className="md:w-2/3 w-[96%] grid grid-cols-2 gap-2">
          {gridPhotos.map((photo, index) => (
            <div key={index} className="relative">
              <img src={photo} alt={`Photo ${index + 1}`} className="w-full h-auto rounded-lg" />
              {index === gridPhotos.length - 1 && morePhotosCount > 0 && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                  <FaPlus className="text-white" />
                  <span className="text-white ml-2">+{morePhotosCount}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const VideosComponent: React.FC<{ videos: string[] }> = ({ videos }) => {
  return (
    <div className="dark:bg-[#212129]  bg-card mt-4 p-6 rounded-lg w-full max-w-xxl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-foreground">Videos</h2>
        <a href="#" className="text-purple-400">See All</a>
      </div>
      <div className="grid grid-cols-1 gap-2">
       
          <div className="relative">
            <img src={videos[0]} alt="video" className="w-full h-auto rounded-lg" />
            
          </div>
      
      </div>
    </div>
  );
};

const ProfileComponent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  return (
    <div className="max-w-[50rem] dark:bg-[#212129] flex flex-col justify-between  bg-card p-8 rounded-lg shadow-md relative">
      <div className="absolute top-4 right-4">
        <button className="text-foreground hover:text-gray-400">
          <FaPen size={16} />
        </button>
      </div>
      <div className="flex items-center">
        <div className="relative w-24 h-24">
          <Image
            src="https://storage.googleapis.com/capcons-analytics/Capcons-dev-images/ProfilePicOfUser.webp"
            alt="Profile Picture"
            layout="fill"
            objectFit="cover"
            className="rounded-full gradient-border"
          />
        </div>
        <div className="ml-4 text-foreground">
          <h2 className="text-xl font-bold flex items-center ">
            ttt_official <img src="https://storage.googleapis.com/capcons-analytics/Capcons-dev-images/verifiedTick.webp" className='ml-2 w-6 h-6' alt="" />
          </h2>
          <p>Terribly Tiny Tales</p>
          <p>000 Connections</p>
        </div>
      </div>
      <p className="mt-4 text-gray-400">
        Lorem ipsum dolor sit amet consectetur. Tellus ut ut nibh euismod. Euismod id proin diam
        phasellus egestas fringilla pellentesque eu lacus. Morbi sagittis sit netus purus nibh
        semper iaculis. Purus platea diam purus ac posuere morbi posuere.
      </p>
      <div className="mt-6 flex justify-between items-center md:bg-secondary rounded gap-4">
        <button onClick={openModal} className="text-white md:text-s text-xs lg:text-lg flex px-4 md:py-2 py-1 whitespace-nowrap items-center rounded-lg bg-secondary hover:bg-secondary/80">
          Personal Information  
          <img src="https://storage.googleapis.com/capcons-analytics/Capcons-dev-images/chevronDown.webp" className='w-6 h-6' alt="" />
        </button>
  
        <button className="text-white py-2 px-4 md:text-s text-xs lg:text-lg rounded-lg hover:bg-secondary/80 bg-secondary flex gap-2 items-center">
          <span>Connect</span> 
          <img src="https://storage.googleapis.com/capcons-analytics/Capcons-dev-images/VectorDashboard.webp" alt="vector" className='lg:w-6 lg:h-4 md:w-4 md:h-3  w-4 h-3' />
        </button>
      </div>
      {isModalOpen && <Modal onClose={closeModal} data={dummyPersonalInfo} />}
    </div>
  );
};


const RemindersComponent: React.FC = () => {
  return (
    <div className="w-full max-w-[50rem] bg-background rounded-lg shadow-md">
      <div className="flex gap-4 justify-around items-center mb-6 md:mt-0 mt-4">
        <div className="text-foreground dark:bg-[#212129] bg-card flex flex-row justify-start items-center max-w-[16rem] w-[16rem] h-24 p-4 gap-8 rounded-lg">
         <div>
          <img src="https://storage.googleapis.com/capcons-analytics/Capcons-dev-images/goldCoin.webp" className='md:h-20 md:w-20 w-10 h-10' alt="" />
         </div>
          <div>
          <h3 className="md:text-lg text-[#D6A7FF] text-xs">Know More</h3>
          <p className="md:text-4xl text-[#D6A7FF] text-xs">000 <span className="text-xl text-foreground font-bold">xp</span></p>
          </div>
        </div>
        <div className="text-foreground flex flex-col justify-center dark:bg-[#212129]  bg-card max-w-[18rem] w-[18rem] h-24 p-8 rounded-lg ">
          <h3 className="md:text-lg text-xs">Your Circle</h3>
          <div className="flex items-center mt-2">
            <div className="relative w-8 h-8 rounded-full overflow-hidden bg-foreground gradient-border">
              {/* <Image
              src="https://storage.googleapis.com/capcons-analytics/Capcons-dev-images/ProfilePicOfUser.webp" // Update with actual image path
              alt="Circle"
              layout="fill"
              objectFit="cover"
            /> */}
            </div>
            <p className="ml-2 md:text-lg text-xs">Circle Name</p>
          </div>
        </div>
      </div>
      <div className="text-white dark:bg-[#212129]   bg-card rounded p-4">
        <div className="mb-4 flex items-center justify-start gap-4 ">
          <h3 className="text-4xl text-[#D6A7FF]">10</h3>
          <div className='flex flex-col'>
            <span className='text-s text-foreground'>2024</span>
            <span className='text-s text-foreground'>September</span>
          </div>

        </div>
        <div className='flex justify-between items-center gap-4'>
        <div className="bg-secondary p-4 rounded-lg max-w-[16rem] w-[16rem] h-36">
          <div className='flex items-center'>
          <img src="https://storage.googleapis.com/capcons-analytics/Capcons-dev-images/CakeIcon.webp" alt="Cake" className='w-6 h-6' /> <p>Ankush Birthday</p>
          </div>
          <p className='text-xs '>xyz course by abc</p>
          <p className='text-xs '> 00:00 am</p>
        </div>
        <div className="flex flex-col justify-start p-4 rounded-lg max-w-[16rem] w-[16rem] h-[11rem] relative">
            <div className="absolute left-0 top-0 h-4/5  w-0.5 bg-teal-400 mt-4"></div>
            <div className="pl-2">
              <h4 className="text-gray-500 opacity-50">Tomorrow</h4>
              <p className="text-teal-400 opacity-50">2 events</p>
              <p className="text-xs opacity-50 text-foreground">xyz course by abckdl..... 00:00 am</p>
              <p className="text-xs opacity-50 text-foreground">xyz course by abcefghij 00:00 am</p>
              <p className="text-xs opacity-50 text-foreground">October 22, Tue</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Dashboard: React.FC = () => {

  const dummyPhotos = [
    "https://storage.googleapis.com/capcons-analytics/Capcons-dev-images/ViratImage.webp",
    "https://storage.googleapis.com/capcons-analytics/Capcons-dev-images/SecondImageDash.webp",
    "https://storage.googleapis.com/capcons-analytics/Capcons-dev-images/ThirdImageDash.webp",
    "https://storage.googleapis.com/capcons-analytics/Capcons-dev-images/fourthImageDash.webp",
    "https://storage.googleapis.com/capcons-analytics/Capcons-dev-images/fifthImageDash.webp",
    "https://example.com/photo3.jpg",
    "https://example.com/photo3.jpg",
  ];

  const dummyVideos = [
    "https://storage.googleapis.com/capcons-analytics/Capcons-dev-images/VideoDashboard.webp",
    "https://example.com/video2.jpg",
    "https://example.com/video3.jpg",
  ];
  return (
    <>
    <div className="md:flex md:justify-center md:px-8 md:flex-row md:flex-col flex-col lg:flex-row w-full gap-4 ">
      <ProfileComponent />
      <RemindersComponent />
    </div>
      <div className='flex md:flex-row flex-col md:gap-4 md:px-8'>
      <VideosComponent videos={dummyVideos}/>
      <PhotosComponent photos={dummyPhotos}/>
      </div>
    </>
  );
};

export default Dashboard;
