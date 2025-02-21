"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Copy, Gift, Wallet } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import { toast } from "sonner";

const WeddingGift = () => {
  return (
    <div className='w-full flex flex-col space-y-14 px-4 min-h-[60vh]'>
      <div className='w-full'>
        <h3 className='text-white font-sans font-semibold text-xl mt-2 mb-2'>
          Wedding Gift
        </h3>
        <p className='text-sm text-white font-sans font-medium mt-4'>
          Do’a restu keluarga, sahabat, serta rekan-rekan semua di pernikahan
          kami sudah sangat cukup sebagai hadiah, tetapi jika memberi merupakan
          tanda kasih, kami dengan senang hati menerimanya dan tentunya semakin
          melengkapi kebahagiaan kami.
        </p>
        <Accordion type='single' collapsible className='mt-4'>
          <AccordionItem value='item-1' className='border-none'>
            <AccordionTrigger
              asChild
              className='flex flex-1 items-center justify-center text-sm font-medium transition-all my-0 py-2'>
              <div className='bg-red-500 border border-red-500 rounded-md p-2 py-1 w-full flex items-center justify-center space-x-2 cursor-pointer transition-all duration-500 hover:scale-105'>
                <Wallet className='text-white' />
                <h4 className='text-white font-sans font-semibold text-sm hover:no-underline'>
                  Kirim Hadiah
                </h4>
              </div>
            </AccordionTrigger>
            <AccordionContent className='p-4'>
              <div className='grid gap-y-4 w-full'>
                <div className='border border-red-500 rounded-md text-white px-2 py-4 flex flex-col items-center justify-center space-x-2'>
                  <Gift className='text-white h-14 w-14' />
                  <p className='font-sans mt-4 font-medium'>
                    Alamat Pengiriman Kado
                  </p>
                  <p className='font-sans text-center'>
                    Jl Jelawat No. 35 A RT V, Kelurahan Timbau, Kecamatan
                    Tenggarong, Kabupaten Kutai Kartanegara, Kalimantan Timur
                  </p>
                  <Button
                    className='py-1 px-2 bg-red-500 font-sans mt-6'
                    variant='default'
                    onClick={() => {
                      const copy = async () => {
                        await navigator.clipboard.writeText(
                          "Jl Jelawat No. 35 A RT V, Kelurahan Timbau, Kecamatan Tenggarong, Kabupaten Kutai Kartanegara, Kalimantan Timur"
                        );
                        toast("Alamat Telah Disalin", {
                          duration: 1000,
                        });
                      };

                      copy();
                    }}>
                    <Copy className='h-8 w-8 text-white' /> Copy Alamat
                  </Button>
                </div>
                <div className='border border-red-500 rounded-md text-white p-2 grid w-full gap-4'>
                  <div className='w-full bg-[url(/card-bg.webp)] bg-center rounded-md px-5 py-4 flex flex-col'>
                    <div className='flex justify-between'>
                      <div className='relative h-8 aspect-[4/3]'>
                        <Image
                          alt='gift'
                          fill
                          objectFit='center'
                          src='/card-sim.webp'
                          className=''
                        />
                      </div>
                      <div className='relative h-8 aspect-[9/3]'>
                        <Image
                          alt='gift'
                          fill
                          objectFit='center'
                          src='/mandiri-logo.png'
                          className=''
                        />
                      </div>
                    </div>
                    <div className='my-10'>
                      <p className='font-sans text-sm font-semibold text-black'>
                        1490006346268
                      </p>
                      <p className='font-sans text-sm font-semibold text-black'>
                        a/n Mesias Citra Dewi
                      </p>
                    </div>
                    <div className='w-full flex justify-center gap-4 px-10 font-sans'>
                      <Button
                        className='flex space-x-2'
                        onClick={() => {
                          const copy = async () => {
                            await navigator.clipboard.writeText("0909958508");
                            toast("Rekening Telah Disalin", {
                              duration: 1000,
                            });
                          };

                          copy();
                        }}>
                        <Copy />
                        Copy Rekening
                      </Button>
                    </div>
                    <p className='font-sans text-xs text-right font-light text-black mt-4'>
                      Sebelum melakukan Transfer, pastikan{" "}
                      <b className='font-semibold'>Nomor Rekening</b> dan
                      <b className='font-semibold'> Nama Penemerima</b> sudah
                      sesuai.
                    </p>
                  </div>
                  <div className='w-full bg-[url(/card-bg.webp)] bg-center rounded-md px-5 py-4 flex flex-col'>
                    <div className='flex justify-between'>
                      <div className='relative h-8 aspect-[4/3]'>
                        <Image
                          alt='gift'
                          fill
                          objectFit='center'
                          src='/card-sim.webp'
                          className=''
                        />
                      </div>
                      <div className='relative h-8 aspect-[9/3]'>
                        <Image
                          alt='gift'
                          fill
                          objectFit='center'
                          src='/bni-logo.png'
                          className=''
                        />
                      </div>
                    </div>
                    <div className='my-10'>
                      <p className='font-sans text-sm font-semibold text-black'>
                        0909958508
                      </p>
                      <p className='font-sans text-sm font-semibold text-black'>
                        a/n Mushawiruddin Muhtar
                      </p>
                    </div>
                    <div className='w-full flex justify-center gap-4 px-10 font-sans'>
                      <Button
                        className='flex space-x-2'
                        onClick={() => {
                          const copy = async () => {
                            await navigator.clipboard.writeText("0909958508");
                            toast("Rekening Telah Disalin", {
                              duration: 1000,
                            });
                          };

                          copy();
                        }}>
                        <Copy />
                        Copy Rekening
                      </Button>
                    </div>
                    <p className='font-sans text-xs text-right font-light text-black mt-4'>
                      Sebelum melakukan Transfer, pastikan{" "}
                      <b className='font-semibold'>Nomor Rekening</b> dan
                      <b className='font-semibold'> Nama Penemerima</b> sudah
                      sesuai.
                    </p>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default WeddingGift;
