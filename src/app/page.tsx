import CarouselPhoto from "@/components/carousel";
import CarouselBreaking from "@/components/carousel-breaking";
import Cover from "@/components/cover";
import DayCount from "@/components/days-count";
import {
  CalendarDays,
  ChevronsUp,
  Clock10Icon,
  MapPinHouse,
  Navigation,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className=''>
      <Cover />
      <div className='grid items-center justify-items-center min-h-screen bg-black'>
        <main className='max-w-lg w-full bg-black relative'>
          <div className='flex flex-col w-full justify-items-center'>
            <CarouselPhoto />
            <div className='flex justify-center items-center gap-4 w-full'>
              <div className='flex flex-col items-center gap-4 w-full'>
                <h3 className='font-sans font-light text-white/60 text-xs'>
                  Swipe form more
                </h3>
                <ChevronsUp className='text-white/60 animate-bounce' />
              </div>
            </div>
            <div className='w-full min-h-screen flex flex-col items-center justify-center py-20'>
              <div className='relative w-full aspect-video'>
                <Image
                  src='/documenter.jpg'
                  alt=''
                  fill
                  layout='fill'
                  objectFit='cover'
                  className='grayscale-[60%] rounded-lg'
                />
              </div>
              <div className='py-2 px-4 w-full mt-2'>
                <div className='flex items-end space-x-3'>
                  <div className='w-4 aspect-[4/6] relative'>
                    <Image
                      alt='nikahflix'
                      src='/netflix.webp'
                      fill
                      objectFit='center'
                      layout='fill'
                    />
                  </div>
                  <h3 className='text-sm font-light font-sans text-white/70 tracking-wider leading-none'>
                    DOCUMENTER
                  </h3>
                </div>
                <h3 className='text-white font-sans font-semibold text-xl mt-2'>
                  Mesias & Shawir : Getting Married
                </h3>
                <div className='flex space-x-2 mt-4'>
                  <DayCount count='28' type='Days' />
                  <DayCount count='12' type='Hours' />
                  <DayCount count='30' type='Minutes' />
                  <DayCount count='50' type='Seconds' />
                </div>
                <div className='flex space-x-2 mt-4 mb-2'>
                  <p className='text-green-500 font-sans text-xs'>100% match</p>
                  <Image
                    alt='hd'
                    src='/nikahfix-4k.webp'
                    height={15}
                    width={17}
                  />
                  <Image
                    alt='hd'
                    src='/nikahfix-hd.webp'
                    height={15}
                    width={17}
                  />
                </div>
                <p className='text-sm text-white font-sans font-semibold'>
                  Setelah Mesias & Shawir dipertemukan dalam situasi yang tepat,
                  di mana keduanya telah siap untuk memulai hubungan bersama,
                  tibalah mereka di awal perjalanan baru menuju pernikahan.
                </p>
                <p className='text-white/70 font-sans mt-4 italic text-xs'>
                  &ldquo;Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia
                  menciptakan pasangan-pasangan untukmu dari jenismu sendiri,
                  agar kamu cenderung dan merasa tenteram kepadanya, dan Dia
                  menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada
                  yang demikian itu benar-benar terdapat tanda-tanda (kebesaran
                  Allah) bagi kaum yang berpikir.&ldquo;
                </p>
                <h3 className='font-sans font-semibold text-xs text-white mt-4'>
                  QS. AR-RUUM : 21
                </h3>
              </div>
            </div>

            <div className='w-full min-h-screen flex flex-col items-center justify-center space-y-32'>
              <div className='w-full px-4'>
                <h3 className='text-white font-sans font-semibold text-xl mt-2 mb-2'>
                  Breaking News
                </h3>
                <CarouselBreaking />
                <p className='text-xs text-white font-sans font-light mt-2 italic'>
                  Assalamualaikum Warahmatullahi Wabarakatuh
                </p>
                <p className='text-sm text-white font-sans font-medium mt-4'>
                  Maha Suci Allah SWT yang telah menciptakan makhluk-Nya
                  berpasangan-pasangan, Perkenankan kami merangkaikan kkasih
                  sayang yang kau ciptakan diantara putra putri kami.
                </p>
              </div>
              <div className='w-full px-4'>
                <h3 className='text-white font-sans font-semibold text-xl mb-2'>
                  Bride & Groom
                </h3>
                <div className='grid w-full grid-cols-2 gap-6'>
                  <div className='pb-16'>
                    <div className='w-full aspect-[3/4] relative'>
                      <Image
                        src='/brides.jpg'
                        alt='Mesias'
                        layout='fill'
                        objectFit='cover'
                        className='rounded-lg grayscale blur-[1px] hover:blur-0 hover:grayscale-0'
                      />
                    </div>
                    <h3 className='text-red-500 font-mono mt-2 tracking-wider'>
                      Mesias Citra Dewi
                    </h3>
                    <p className='text-xs text-white font-sans font-medium mt-2 capitalize'>
                      putri kedua keluarga Bapak H. Liangto (Alm) & Ibu Hj.
                      Rehana
                    </p>
                  </div>
                  <div className='pb-16'>
                    <div className='w-full aspect-[3/4] relative'>
                      <Image
                        src='/groom.jpg'
                        alt='Shawir'
                        layout='fill'
                        objectFit='cover'
                        className='rounded-lg grayscale blur-[1px] hover:blur-0 hover:grayscale-0'
                      />
                    </div>
                    <h3 className='text-red-500 font-mono mt-2 tracking-wider'>
                      Mushawiruddin Muhtar
                    </h3>
                    <p className='text-xs text-white font-sans font-medium mt-2 capitalize'>
                      putra kedua keluarga Bapak Muh. Tahang (Alm) & Ibu Hj.
                      Ruaena
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='w-full min-h-screen flex flex-col justify-center space-y-14 px-4'>
              <div className='w-full'>
                <h3 className='text-white font-sans font-semibold text-xl mt-2 mb-2'>
                  Save The Date
                </h3>
                <p className='text-sm text-white font-sans font-medium leading-5'>
                  Dengan segala kerendahan hati dan dengan ungkapan syukur atas
                  Karunia & Rahmat Allah SWT, kami bermaksud mengundang Bapak/
                  Ibu/ Saudara/i untuk menghadiri Acara Pernikahan kami yang
                  akan diselenggarakan pada :
                </p>
              </div>
              <div className='w-full grid grid-cols-2 gap-4'>
                <div className='w-full relative aspect-[12/10]'>
                  <Image
                    src='/akad.jpg'
                    alt='Mesias'
                    layout='fill'
                    objectFit='cover'
                    className='rounded-lg grayscale'
                  />
                </div>
                <div className='py-1 flex flex-col space-y-2 justify-center'>
                  <div className='px-2 py-1 bg-red-500 flex justify-center items-center rounded-sm text-white space-x-2 place-self-start'>
                    <CalendarDays size={14} />
                    <h3 className='font-sans text-xs font-bold uppercase'>
                      Akad Nikah
                    </h3>
                  </div>
                  <p className='text-sm text-white font-sans font-medium leading-5'>
                    Jum&apos;at, 28 Februari 2025
                  </p>
                  <div className='px-2 py-1 bg-gray-600/70 flex justify-center items-center rounded-sm text-white space-x-2 place-self-start'>
                    <Clock10Icon size={14} />
                    <h3 className='font-sans text-xs font-bold uppercase'>
                      10:00 wita
                    </h3>
                  </div>
                  <div className='py-1 flex justify-center items-start rounded-sm text-white space-x-2 place-self-start my-1'>
                    <MapPinHouse size={24} />
                    <h3 className='font-sans text-xs font-bold'>
                      Gedung DMI Kutai Kartanegara, Jl. Patin, Timbau,
                      Tenggarong
                    </h3>
                  </div>

                  <a
                    href='https://maps.app.goo.gl/ud67CigoUVmpXLFt6'
                    target='_blank'
                    className='cursor-pointer group flex justify-center items-center rounded-sm text-white space-x-2 place-self-start mt-1'>
                    <Navigation
                      size={14}
                      className=' group-hover:text-blue-500'
                    />
                    <h3 className='font-sans text-xs font-bold group-hover:text-blue-500'>
                      Lihat Maps
                    </h3>
                  </a>
                </div>
              </div>
              <div className='w-full grid grid-cols-2 gap-4'>
                <div className='w-full relative aspect-[12/10]'>
                  <Image
                    src='/photo4.jpg'
                    alt='Mesias'
                    layout='fill'
                    objectFit='cover'
                    className='rounded-lg grayscale'
                  />
                </div>
                <div className='py-1 flex flex-col  justify-center'>
                  <div className='px-2 py-1 bg-red-500 flex justify-center items-center rounded-sm text-white space-x-2 place-self-start my-1'>
                    <CalendarDays size={14} />
                    <h3 className='font-sans text-xs font-bold uppercase'>
                      Resepsi
                    </h3>
                  </div>
                  <p className='text-sm text-white font-sans font-medium leading-5 my-1'>
                    Jum&apos;at, 28 Februari 2025
                  </p>
                  <div className='px-2 py-1 bg-gray-600/70 flex justify-center items-center rounded-sm text-white space-x-2 place-self-start my-1'>
                    <Clock10Icon size={14} />
                    <h3 className='font-sans text-xs font-bold uppercase'>
                      13:00 - 17:00 wita
                    </h3>
                  </div>
                  <div className='py-1 flex justify-center items-start rounded-sm text-white space-x-2 place-self-start my-1'>
                    <MapPinHouse size={24} />
                    <h3 className='font-sans text-xs font-bold'>
                      Gedung DMI Kutai Kartanegara, Jl. Patin, Timbau,
                      Tenggarong
                    </h3>
                  </div>

                  <a
                    href='https://maps.app.goo.gl/ud67CigoUVmpXLFt6'
                    target='_blank'
                    className='cursor-pointer group flex justify-center items-center rounded-sm text-white space-x-2 place-self-start mt-1'>
                    <Navigation
                      size={14}
                      className=' group-hover:text-blue-500'
                    />
                    <h3 className='font-sans text-xs font-bold group-hover:text-blue-500'>
                      Lihat Maps
                    </h3>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
