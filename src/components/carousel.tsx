"use client";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const CarouselPhoto = () => {
  return (
    <div className='w-full lg:px-8 relative'>
      <Carousel
        plugins={[Autoplay({ delay: 3500 })]}
        opts={{
          loop: true,
        }}>
        <CarouselContent>
          {Array.from({ length: 4 }).map((_, index) => (
            <CarouselItem key={index} className='p-0 h-full w-full'>
              <div className='relative h-[calc(100vh-50px)] w-full p-2'>
                <Image
                  src={`/images/photo${index + 1}.jpg`}
                  alt='Mesias&Shawir'
                  layout='fill'
                  objectFit='cover'
                  className='grayscale'
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className='absolute bottom-0 left-0 right-0 p-4 py-8 lg:px-12 grid from-black bg-gradient-to-t to-blacck/0'>
        <div className='py-1 px-2 bg-white/80 place-self-start rounded-md'>
          <div className='relative h-6 aspect-[8/2]'>
            <Image
              src={`/nikahfix.webp`}
              alt='Mesias&Shawir'
              layout='fill'
              objectFit='center'
            />
          </div>
        </div>
        <h1 className='font-sans font-bold text-white text-2xl capitalize my-2'>
          Mesias & Shawir
        </h1>
        <div className='flex space-x-2 py-1 items-center'>
          <span className='py-1 px-2 bg-red-700 tracking-widest text-white font-mono rounded-md text-xs font-bold'>
            Cooming Soon
          </span>
          <h1 className='font-sans text-white font-semibold text-sm'>
            28 February 2025
          </h1>
        </div>
        <div className='flex space-x-2 py-1 items-center'>
          <span className='py-1 px-2 bg-gray-700 text-white font-sans rounded-md text-[10px] font-bold'>
            #getmarried
          </span>
          <span className='py-1 px-2 bg-gray-700 text-white font-sans rounded-md text-[10px] font-bold'>
            #lovestory
          </span>
          <span className='py-1 px-2 bg-gray-700 text-white font-sans rounded-md text-[10px] font-bold'>
            #romantic
          </span>
          <span className='py-1 px-2 bg-gray-700 text-white font-sans rounded-md text-[10px] font-bold'>
            #documenter
          </span>
        </div>
      </div>
    </div>
  );
};

export default CarouselPhoto;
