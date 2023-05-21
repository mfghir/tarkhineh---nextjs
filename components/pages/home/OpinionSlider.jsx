import SliderBtn from '@/components/pages/home/SliderBtn';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard } from 'swiper';

import Image from 'next/image';
import SliderLeftBtn from './SliderLeftBtn';
import { useState } from 'react';
import SliderDots from './SliderDots';

function OpinionSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Swiper
      onSlideChange={function () {
        setActiveIndex(this.realIndex);
      }}
      slidesPerView={1.2}
      spaceBetween={16}
      breakpoints={{
        768: {
          slidesPerView: 2.7,
          spaceBetween: 16,
        },
        1024: {
          slidesPerView: 2.3,
          spaceBetween: 24,
        },
      }}
      className='w-full'
      modules={[Keyboard]}>
      <SliderLeftBtn arrow='right' />
      <SliderLeftBtn arrow='left' />

      <div className='hidden lg:block mt-8'>
        <SliderDots activeIndex={activeIndex} />
      </div>

      <SwiperSlide>
        <section className='px-4 lg:px-8 py-5 lg:py-6 rounded lg:rounded-lg border border-gray-400 flex justify-between items-center'>
          <div className='flex flex-col caption-sm lg:body-sm text-gray-700'>
            <Image
              className='object-cover w-14 h-14 lg:w-24 lg:h-24 rounded-full whitespace-nowrap'
              src='/images/user1.png'
              alt='user1'
              width={96}
              height={96}
            />
            <span className='whitespace-nowrap'>آرزو محمدعلیزاده</span>
            <span className='whitespace-nowrap'>۲۳ اسفند ۱۴۰۱</span>
          </div>

          <div className='flex flex-col items-end'>
            <p className='caption-sm lg:body-md text-gray-800 mr-2 lg:mr-3'>
              از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی
              عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا
              تشکر میکنم.
            </p>

            <div className='flex justify-center items-center mt-1 lg:mt-2'>
              <Image
                className=' w-3 h-3 lg:w-4 lg:h-4'
                src='/images/star.png'
                alt='star'
                width={16}
                height={16}
              />
              <span className='caption-md lg:button-lg mr-1'>۴</span>
            </div>
          </div>
        </section>
      </SwiperSlide>

      <SwiperSlide>
        <section className='px-4 lg:px-8 py-5 lg:py-6 rounded lg:rounded-lg border border-gray-400 flex justify-between items-center'>
          <div className='flex flex-col caption-sm lg:body-sm text-gray-700'>
            <Image
              className='object-cover w-14 h-14 lg:w-24 lg:h-24 rounded-full whitespace-nowrap'
              src='/images/user2.png'
              alt='user2'
              width={96}
              height={96}
            />
            <span className='whitespace-nowrap'>سردار وظیفه</span>
            <span className='whitespace-nowrap'>۲۳ اسفند ۱۴۰۱</span>
          </div>

          <div className='flex flex-col items-end'>
            <p className='caption-sm lg:body-md text-gray-800 mr-2 lg:mr-3'>
              از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی
              عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا
              تشکر میکنم.
            </p>

            <div className='flex justify-center items-center mt-1 lg:mt-2'>
              <Image
                className='w-3 h-3 lg:w-4 lg:h-4'
                src='/images/star.png'
                alt='star'
                width={16}
                height={16}
              />
              <span className='caption-md lg:button-lg mr-1'>۴</span>
            </div>
          </div>
        </section>
      </SwiperSlide>

      <SwiperSlide>
        <section className='px-4 lg:px-8 py-5 lg:py-6 rounded lg:rounded-lg border border-gray-400 flex justify-between items-center'>
          <div className='flex flex-col caption-sm lg:body-sm text-gray-700'>
            <Image
              className='object-cover w-14 h-14 lg:w-24 lg:h-24 rounded-full whitespace-nowrap'
              src='/images/user3.png'
              alt='user3'
              width={96}
              height={96}
            />
            <span className='whitespace-nowrap'>سردار وظیفه</span>
            <span className='whitespace-nowrap'>۲۳ اسفند ۱۴۰۱</span>
          </div>

          <div className='flex flex-col items-end'>
            <p className='caption-sm lg:body-md text-gray-800 mr-2 lg:mr-3'>
              از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی
              عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا
              تشکر میکنم.
            </p>

            <div className='flex justify-center items-center mt-1 lg:mt-2'>
              <Image
                className='w-3 h-3 lg:w-4 lg:h-4'
                src='/images/star.png'
                alt='star'
                width={16}
                height={16}
              />
              <span className='caption-md lg:button-lg mr-1'>۴</span>
            </div>
          </div>
        </section>
      </SwiperSlide>

      <SwiperSlide>
        <section className='px-4 lg:px-8 py-5 lg:py-6 rounded lg:rounded-lg border border-gray-400 flex justify-between items-center'>
          <div className='flex flex-col caption-sm lg:body-sm text-gray-700'>
            <Image
              className='object-cover w-14 h-14 lg:w-24 lg:h-24 rounded-full whitespace-nowrap'
              src='/images/user1.png'
              alt='user1'
              width={96}
              height={96}
            />
            <span className='whitespace-nowrap'>آرزو محمدعلیزاده</span>
            <span className='whitespace-nowrap'>۲۳ اسفند ۱۴۰۱</span>
          </div>

          <div className='flex flex-col items-end'>
            <p className='caption-sm lg:body-md text-gray-800 mr-2 lg:mr-3'>
              از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی
              عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا
              تشکر میکنم.
            </p>

            <div className='flex justify-center items-center mt-1 lg:mt-2'>
              <Image
                className=' w-3 h-3 lg:w-4 lg:h-4'
                src='/images/star.png'
                alt='star'
                width={16}
                height={16}
              />
              <span className='caption-md lg:button-lg mr-1'>۴</span>
            </div>
          </div>
        </section>
      </SwiperSlide>

      <SwiperSlide>
        <section className='px-4 lg:px-8 py-5 lg:py-6 rounded lg:rounded-lg border border-gray-400 flex justify-between items-center'>
          <div className='flex flex-col caption-sm lg:body-sm text-gray-700'>
            <Image
              className='object-cover w-14 h-14 lg:w-24 lg:h-24 rounded-full whitespace-nowrap'
              src='/images/user2.png'
              alt='user2'
              width={96}
              height={96}
            />
            <span className='whitespace-nowrap'>سردار وظیفه</span>
            <span className='whitespace-nowrap'>۲۳ اسفند ۱۴۰۱</span>
          </div>

          <div className='flex flex-col items-end'>
            <p className='caption-sm lg:body-md text-gray-800 mr-2 lg:mr-3'>
              از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی
              عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا
              تشکر میکنم.
            </p>

            <div className='flex justify-center items-center mt-1 lg:mt-2'>
              <Image
                className='w-3 h-3 lg:w-4 lg:h-4'
                src='/images/star.png'
                alt='star'
                width={16}
                height={16}
              />
              <span className='caption-md lg:button-lg mr-1'>۴</span>
            </div>
          </div>
        </section>
      </SwiperSlide>

      <SwiperSlide>
        <section className='px-4 lg:px-8 py-5 lg:py-6 rounded lg:rounded-lg border border-gray-400 flex justify-between items-center'>
          <div className='flex flex-col caption-sm lg:body-sm text-gray-700'>
            <Image
              className='object-cover w-14 h-14 lg:w-24 lg:h-24 rounded-full whitespace-nowrap'
              src='/images/user3.png'
              alt='user3'
              width={96}
              height={96}
            />
            <span className='whitespace-nowrap'>سردار وظیفه</span>
            <span className='whitespace-nowrap'>۲۳ اسفند ۱۴۰۱</span>
          </div>

          <div className='flex flex-col items-end'>
            <p className='caption-sm lg:body-md text-gray-800 mr-2 lg:mr-3'>
              از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی
              عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا
              تشکر میکنم.
            </p>

            <div className='flex justify-center items-center mt-1 lg:mt-2'>
              <Image
                className='w-3 h-3 lg:w-4 lg:h-4'
                src='/images/star.png'
                alt='star'
                width={16}
                height={16}
              />
              <span className='caption-md lg:button-lg mr-1'>۴</span>
            </div>
          </div>
        </section>
      </SwiperSlide>
    </Swiper>
  );
}

export default OpinionSlider;
