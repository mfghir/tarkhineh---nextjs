import SliderBtn from '@/components/pages/home/SliderBtn';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard } from 'swiper';

import Image from 'next/image';

function SliderEkbatan() {
  return (
    <Swiper className='w-full' modules={[Keyboard]}>
      <SliderBtn arrow='right' />
      <SliderBtn arrow='left' />
      <SwiperSlide>
        <div className='z-0 py-16 gap-6 h-44 md:h-[300px]'>
          <Image
            className='-z-[1] object-cover'
            src='/images/ekbatan-phone.png'
            alt='ekbatan'
            fill
          />
        </div>
      </SwiperSlide>

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
    </Swiper>
  );
}

export default SliderEkbatan;
