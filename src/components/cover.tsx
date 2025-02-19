"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import NamaTamu from "./nama-tamu";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Pause, Play, Volume2Icon, VolumeOff } from "lucide-react";

const Cover = () => {
  const [cover, setCover] = useState(true);
  const [play, setPlay] = useState(true);
  const [mute, setMute] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  return (
    <>
      <audio autoPlay={true} loop ref={audioRef} className='hidden'>
        <source src='/music.mp3' type='audio/mpeg' />
      </audio>
      <div
        className={`${
          cover ? "hidden" : "fixed"
        } bottom-0 right-0 z-50 flex items-center justify-center bg-white mr-4 mb-4 py-1 px-2 rounded-full`}>
        <Button
          variant='link'
          className='px-2'
          onClick={() => {
            play ? audioRef.current?.pause() : audioRef.current?.play();
            setPlay(!play);
          }}>
          {play ? (
            <Pause size={24} className='text-red-500' />
          ) : (
            <Play size={24} className='text-red-500' />
          )}
        </Button>
        <Button
          variant='link'
          className='px-2'
          onClick={() => {
            setMute(!mute);
            audioRef.current!.muted = !mute;
          }}>
          {mute ? (
            <VolumeOff size={24} className='text-red-500' />
          ) : (
            <Volume2Icon size={24} className='text-red-500' />
          )}
        </Button>
      </div>
      <Dialog open={cover}>
        <DialogContent className=''>
          <div
            className={`fixed transform duration-300 ease-out z-50 overflow-hidden top-0 right-0 left-0 flex flex-col items-center justify-center py-20 space-y-4 bg-black w-full h-screen`}>
            <h1 className='text-sm font-normal font-sans text-white'>
              THE WEDDING OF
            </h1>
            <h1 className='text-4xl font-mono text-red-500'>
              MESIAS & SHAWIER
            </h1>
            <div className='py-10'>
              <div className='relative aspect-square w-44 bg-white rounded-lg'>
                <Image
                  src='/images/photo1.jpg'
                  alt='Mesias'
                  layout='fill'
                  objectFit='cover'
                  className='rounded-lg grayscale'
                />
              </div>
            </div>
            <h1 className='text-white font-sans text-xs'>Kepada yth.</h1>
            <NamaTamu />
            <div className='py-6'>
              <span
                className='px-4 py-2 mt-10 border border-red-500 hover:bg-red-500 text-white rounded-lg font-mono cursor-pointer'
                onClick={() => {
                  setCover(false);
                  audioRef.current?.play();
                  setPlay(true);
                }}>
                Buka Undangan
              </span>
            </div>
          </div>
          <DialogTitle />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Cover;
