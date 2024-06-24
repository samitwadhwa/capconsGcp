"use client";
import React, { useState, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, X, Minus } from "lucide-react";
import background from "@/public/images/BackgroundCapCons.png";
import logo from "@/public/images/logo.png";

export default function Profile() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageScale, setImageScale] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target && event.target.result) {
          setSelectedImage(event.target.result as string);
          setIsModalOpen(true);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const resetImage = () => {
    setSelectedImage(null);
    setImageScale(1);
    setIsModalOpen(false);
  };

  const saveImage = () => {
    setProfileImage(selectedImage);
    setIsModalOpen(false);
  };

  return (
    <div className="w-4/5 lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center bg-background overflow-hidden">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="absolute top-3 left-5 m-4 flex items-center">
            <img src={logo.src} alt="Company Logo" className="h-8 w-8 mr-2" />
            <h2 className="text-3xl ">CapCons.</h2>
          </div>
          <div className="grid gap-2 text-center">
            <h1 className="text-2xl text-foreground font-bold">Upload your profile picture</h1>
            <div className="flex justify-center w-full max-w-sm items-center gap-1.5 mt-12">
              <label
                htmlFor="picture"
                className="relative w-32 h-32 rounded-full flex items-center justify-center cursor-pointer overflow-hidden"
              >
                <div
                  className="absolute inset-0 rounded-full border-2 border-transparent"
                  style={{
                    background: 'linear-gradient(#2A2A2E, #2A2A2E) padding-box, linear-gradient(90deg, #2A7FF5, #19C0B6, #B76FF7) border-box',
                  }}
                ></div>
                <Input
                  id="picture"
                  type="file"
                  className="absolute inset-0 opacity-0 w-full h-full cursor-pointer rounded-full"
                  onChange={handleImageChange}
                />
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="absolute inset-0 w-full h-full object-cover rounded-full"
                    style={{ transform: `scale(${imageScale})` }}
                  />
                ) : (
                  <Plus className="w-10 h-10 text-[#D6A7FF] z-[1]" />
                )}
              </label>
            </div>
          </div>
          <div className="grid gap-4">
            <Button type="submit" className="w-full mt-8">
              Next
            </Button>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <img
          className="absolute h-full w-2/4 w-[60%] object-cover"
          src={background.src}
          alt=""
          width={1920}
          height={1080}
        />
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#2A2A2E] rounded-lg shadow-lg p-6 relative w-25rem">
           
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              <X className="w-6 h-6 text-foreground mt-[0.7rem]" />
            </button>
            <h2 className="text-xl font-bold mb-4">Edit Photo</h2>
          
            <div className="relative w-40 h-40 mx-auto mb-4 border-2  rounded-full overflow-hidden">
              {selectedImage && (
                <img
                  src={selectedImage}
                  alt="Selected profile"
                  className="absolute inset-0 w-full h-full object-cover transform"
                  style={{ transform: `scale(${imageScale})` }}
                />
              )}
            </div>
            <div className="flex items-center justify-center gap-2">
              <button onClick={() => setImageScale(imageScale > 1 ? imageScale - 0.1 : 1)}>
                <Minus className="w-6 h-6 text-foreground" />
              </button>
              
              <input
                type="range"
                min="1"
                max="3"
                step="0.01"
                value={imageScale}
                onChange={(e) => setImageScale(parseFloat(e.target.value))}
                className="w-full"
              />
              <button onClick={() => setImageScale(imageScale < 3 ? imageScale + 0.1 : 3)}>
                <Plus className="w-6 h-6 text-foreground hover:text-gray-800" />
              </button>
            </div>
            <div className="flex items-center justify-between mt-4">
              <button
                onClick={resetImage}
                className="text-sm text-red-500 flex items-center gap-1"
              >
                <X className="w-4 h-4" />
                Reset Image
              </button>
              <button
                onClick={saveImage}
                className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
