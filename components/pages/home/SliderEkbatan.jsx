import { useState } from 'react';
import { Keyboard, Mousewheel } from 'swiper';
import SliderBtn from '@/components/pages/home/SliderBtn';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

function SliderEkbatan() {

  return (
    <Swiper
    className="w-full"
      modules={[Mousewheel, Keyboard]}>
      <SliderBtn arrow='right' />
      <SliderBtn arrow='left' />

      {/* <SwiperSlide>
        <div className='relative flex flex-col justify-center items-center z-0 py-16 gap-6 h-[300px]'>
          <Image
            className='-z-[1] object-cover'
            src='/images/slider1-phone.png'
            alt='slide1'
            fill
          />
          <h2 className='w-full text-center text-tint-100'>
            تجربه غذای سالم و گیاهی به سبک ترخینه
          </h2>
          <h3 className='bg-primary text-sm rounded-md text-white px-6 py-2'>
            سفارش آنلاین غذا
          </h3>
        </div>
      </SwiperSlide> */}
      <SwiperSlide>
        <div className='z-0 py-16 gap-6 h-44 md:h-[300px]'>
          <Image
            className='-z-[1] object-cover'
            src='/images/ekbatan-desktop.png'
            alt='ekbatan'
            fill
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className='z-0 py-16 gap-6 h-44 md:h-[300px]'>
          <Image
            className='-z-[1] object-cover brightness-[0.3]'
            src='/images/ekbatan-desktop.png'
            alt='ekbatan'
            fill
          />
   
        </div>
      </SwiperSlide>

    
    </Swiper>
  );
}

export default SliderEkbatan;
