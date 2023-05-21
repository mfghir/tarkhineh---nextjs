import { useState } from 'react';
import { Keyboard, Mousewheel } from 'swiper';
import Image from 'next/image';

import SliderBtn from '@/components/pages/home/SliderBtn';
import SliderDots from '@/components/pages/home/SliderDots';
import { Swiper, SwiperSlide } from 'swiper/react';

function HeaderSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Swiper
      onSlideChange={function () {
        setActiveIndex(this.realIndex);
      }}
      mousewheel={true}
      keyboard={true}
      modules={[Mousewheel, Keyboard]}>
      <SliderBtn arrow='right' />
      <SliderBtn arrow='left' />
      <SliderDots activeIndex={activeIndex} />

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
        <div className='relative flex flex-col justify-center items-center z-0 py-16 gap-6 h-44 md:h-[300px]'>
          <Image
            className='-z-[1] object-cover'
            src='/images/slide1-desktop.png'
            alt='slide1'
            fill
          />
          <h2 className='w-full text-center text-tint-100 header-6 lg:header-2'>
            تجربه غذای سالم و گیاهی به سبک ترخینه
          </h2>
          <h3 className='bg-primary text-sm rounded-md text-white px-6 py-2 caption-sm lg:button-lg'>
            سفارش آنلاین غذا
          </h3>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className='relative flex flex-col justify-center items-center z-0 py-16 gap-6 h-44 md:h-[300px]'>
          <Image
            className='-z-[1] object-cover brightness-[0.3]'
            src='/images/slide2.jpeg'
            alt='slide1'
            fill
          />
          <h2 className='w-full text-center text-tint-100 header-6 lg:header-2'>
            تجربه غذای سالم و گیاهی به سبک ترخینه
          </h2>
          <h3 className='bg-primary text-sm rounded-md text-white px-6 py-2 caption-sm lg:button-lg'>
            سفارش آنلاین غذا
          </h3>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className='relative flex flex-col justify-center items-center z-0 py-16 gap-6 h-44 md:h-[300px]'>
          <Image
            className='-z-[1] object-cover brightness-[0.3]'
            src='/images/slide3.jpeg'
            alt='slide1'
            fill
          />
          <h2 className='w-full text-center text-tint-100 header-6 lg:header-2'>
            تجربه غذای سالم و گیاهی به سبک ترخینه
          </h2>
          <h3 className='bg-primary text-sm rounded-md text-white px-6 py-2 caption-sm lg:button-lg'>
            سفارش آنلاین غذا
          </h3>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className='relative flex flex-col justify-center items-center z-0 py-16 gap-6 h-44 md:h-[300px]'>
          <Image
            className='-z-[1] object-cover brightness-[0.3]'
            src='/images/slide4.jpeg'
            alt='slide1'
            fill
          />
          <h2 className='w-full text-center text-tint-100 header-6 lg:header-2'>
            تجربه غذای سالم و گیاهی به سبک ترخینه
          </h2>
          <h3 className='bg-primary text-sm rounded-md text-white px-6 py-2 caption-sm lg:button-lg'>
            سفارش آنلاین غذا
          </h3>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className='relative flex flex-col justify-center items-center z-0 py-16 gap-6 h-44 md:h-[300px]'>
          <Image
            className='-z-[1] object-cover brightness-[0.3]'
            src='/images/slide5.jpeg'
            alt='slide1'
            fill
          />
          <h2 className='w-full text-center text-tint-100 header-6 lg:header-2'>
            تجربه غذای سالم و گیاهی به سبک ترخینه
          </h2>
          <h3 className='bg-primary text-sm rounded-md text-white px-6 py-2 caption-sm lg:button-lg'>
            سفارش آنلاین غذا
          </h3>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className='relative flex flex-col justify-center items-center z-0 py-16 gap-6 h-44 md:h-[300px]'>
          <Image
            className='-z-[1] object-cover brightness-[0.3]'
            src='/images/slide6.jpeg'
            alt='slide1'
            fill
          />
          <h2 className='w-full text-center text-tint-100 header-6 lg:header-2'>
            تجربه غذای سالم و گیاهی به سبک ترخینه
          </h2>
          <h3 className='bg-primary text-sm rounded-md text-white px-6 py-2 caption-sm lg:button-lg'>
            سفارش آنلاین غذا
          </h3>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default HeaderSlider;
