"use client";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import ImageViewer from "react-simple-image-viewer";

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  const images = [
    "/images/photo1.jpg",
    "/images/photo2.jpg",
    "/images/photo3.jpg",
    "/images/photo4.jpg",
    "/images/photo5.jpg",
    "/images/photo6.jpg",
    "/images/photo7.jpg",
    "/images/photo8.jpg",
    "/images/photo9.jpg",
  ];
  return (
    <div className='w-full min-h-screen flex flex-col justify-center space-y-14 px-4'>
      <div className='w-full'>
        <h3 className='text-white font-sans font-semibold text-xl mt-2 mb-2'>
          Our Gallery
        </h3>
        <div className='grid grid-cols-3 gap-2'>
          {images.map((data, index) => (
            <div
              key={index}
              className='relative aspect-[6/9] cursor-pointer'
              onClick={() => openImageViewer(index)}>
              <Image
                src={data}
                alt={`${index + 1}`}
                layout='fill'
                objectFit='cover'
                className='rounded-lg'
              />
            </div>
          ))}
          {isViewerOpen && (
            <ImageViewer
              src={images}
              currentIndex={currentImage}
              onClose={closeImageViewer}
              disableScroll={false}
              backgroundStyle={{
                backgroundColor: "rgba(0,0,0,0.9)",
              }}
              closeOnClickOutside={true}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
