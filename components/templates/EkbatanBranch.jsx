import HeaderSlider from '../pages/home/HeaderSlider';
import SearchBar from '../modules/SearchBar';

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import Image from 'next/image';
import { Heart } from 'iconsax-react';

const EkbatanBranch = ({ data }) => {
  const specialOffer = data.filter(food => food.type === 'specialOffer');

  return (
    <>
      <HeaderSlider />

      <SearchBar />

      <section className='min-h-screen pr-5 lg:pr-20 pt-6'>
        <p className='header-6 lg:header-4 text-gray-800 pb-3 lg:pb-6'>
          پیشنهاد ویژه
        </p>

<div className="h-auto">
        <Swiper
          slidesPerView={2}
          spaceBetween={16}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 24,
            },
          }}
          modules={[Pagination]}
          className='mySwiper'>
          {specialOffer.map((item, index) => {
            const {
              img,
              name,
              discount,
              discountPrice,
              price,
              star,
              totalStars,
            } = item;
            return (
              <SwiperSlide key={index} className='w-[168px] lg:w-[256px] border border-gray-400 rounded'>
                  <Image
                    className='object-cover w-full h-[109px] lg:w-64 lg:h-64 '
                    src={img}
                    alt={name}
                    width={288}
                    height={256}
                  />

                  <p className='caption-md lg:header-7 text-gray-800 text-center my-1 lg:my-2'>
                    {name}
                  </p>

                  <ul className='w-full flex justify-between flex-row-reverse px-2 mb-2'>
                    <li className='flex justify-center items-center flex-row-reverse caption-sm'>
                      <span className='text-error mr-2'>{discount}</span>
                      <span className='text-gray-500'>{discountPrice}</span>
                    </li>

                    <li className='flex justify-between flex-row-reverse text-gray-500'>
                      <span className='hidden lg:block caption-sm mr-1'>
                        افزودن به علاقمندی‌ها
                      </span>
                      <Heart size='16' />
                    </li>
                  </ul>

                  <ul className='w-full flex justify-between items-center flex-row-reverse px-2 mb-3'>
                    <li className='caption-sm lg:body-md text-gray-800'>{price}</li>

                    <li className='flex justify-between flex-row-reverse items-center'>
                      <span className="hidden lg:block caption-sm text-gray-500">({totalStars})</span>
                      <span className='caption-sm lg:button-sm text-gray-800 mx-1'>{star}</span>
                      <span className="text-base flex justify-center items-center text-warning-light">&#9733;</span>
                    </li>
                  </ul>
              </SwiperSlide>
            );
          })}
        </Swiper>
        </div>
      </section>
    </>
  );
};

export default EkbatanBranch;
