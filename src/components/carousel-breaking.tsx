"use client";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const CarouselBreaking = () => {
  return (
    <Carousel
      plugins={[Autoplay({ delay: 2500 })]}
      opts={{
        align: "start",
        loop: true,
      }}
      className='w-ful'>
      <CarouselContent className='ml-0 w-full'>
        {Array.from({ length: 6 }).map((_, index) => (
          <CarouselItem key={index} className='basis-1/3 pl-0'>
            <div className='p-0'>
              <Card className='rounded-none border-none'>
                <CardContent className='flex aspect-square items-center justify-center relative'>
                  <Image
                    src={`/photo${index + 1}.jpg`}
                    alt='Mesias'
                    layout='fill'
                    objectFit='cover'
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default CarouselBreaking;
