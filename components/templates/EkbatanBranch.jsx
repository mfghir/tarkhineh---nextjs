import HeaderSlider from '../pages/home/HeaderSlider';
import SearchBar from '../modules/SearchBar';
import { Heart, Note } from 'iconsax-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';

import 'swiper/css/pagination';
import Image from 'next/image';
import SliderLeftBtn from '../pages/home/SliderLeftBtn';

const EkbatanBranch = ({ data }) => {
  const specialOffer = data.filter(food => food.type === 'specialOffer');
  const favFood = data.filter(food => food.type === 'favFood');
  const foreignFood = data.filter(food => food.type === 'foreignFood');

  return (
    <>
      <HeaderSlider />

      <SearchBar />

      <section className='pr-5 lg:pr-20 pt-6 mb-6 lg:mb-12'>
        <p className='header-6 lg:header-4 text-gray-800 pb-3 lg:pb-6'>
          پیشنهاد ویژه
        </p>

        <div className='h-auto'>
          <Swiper
            slidesPerView={1.7}
            spaceBetween={16}
            breakpoints={{
              768: {
                slidesPerView: 3.5,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 4.5,
                spaceBetween: 24,
              },
              1440: {
                slidesPerView: 4.7,
                spaceBetween: 24,
              },
            }}
            modules={[Pagination]}
            className='mySwiper'>
            <SliderLeftBtn arrow='left' className='' />
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
                <SwiperSlide key={index}>
                  <div
                    key={index}
                    className='border border-gray-400 rounded lg:rounded-lg flex justify-center flex-col overflow-hidden'>
                    <Image
                      className='object-cover w-full h-[109px]  lg:h-64 '
                      src={img}
                      alt={name}
                      width={288}
                      height={256}
                    />

                    <p className='caption-md lg:header-7 text-gray-800 text-center my-1 lg:my-2'>
                      {name}
                    </p>

                    <ul className='w-full flex justify-between flex-row-reverse px-2 lg:px-4 mb-2'>
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

                    <ul className='w-full flex justify-between items-center flex-row-reverse px-2 lg:px-4 mb-3'>
                      <li className='caption-sm lg:body-md text-gray-800'>
                        {price}
                      </li>

                      <li className='flex justify-between flex-row-reverse items-center'>
                        <span className='hidden lg:block caption-sm text-gray-500'>
                          ({totalStars})
                        </span>
                        <span className='caption-sm lg:button-sm text-gray-800 mx-1'>
                          {star}
                        </span>
                        <span className='text-base flex justify-center items-center text-warning-light'>
                          &#9733;
                        </span>
                      </li>
                    </ul>
                    <button className='caption-sm lg:caption-lg text-white bg-primary rounded py-2 mb-2 lg:mb-4 mx-2 lg:mx-4'>
                      افزودن به سبد خرید
                    </button>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>

      <section className='pr-5 lg:pr-20 pt-6 mb-6 lg:mb-12 bg-primary'>
        <p className='header-6 lg:header-4 text-white pb-3 lg:pb-6'>
          غذاهای محبوب
        </p>

        <div className='h-auto pb-6 lg:pb-10'>
          <Swiper
            slidesPerView={1.7}
            spaceBetween={16}
            breakpoints={{
              768: {
                slidesPerView: 3.5,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 4.5,
                spaceBetween: 24,
              },
              1440: {
                slidesPerView: 4.7,
                spaceBetween: 24,
              },
            }}
            modules={[Pagination]}
            className='mySwiper'>
            <SliderLeftBtn arrow='left' className='' />
            {favFood.map((item, index) => {
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
                <SwiperSlide key={index}>
                  <div
                    key={index}
                    className='rounded lg:rounded-lg flex justify-center flex-col bg-white overflow-hidden'>
                    <Image
                      className='object-cover w-full h-[109px]  lg:h-64 '
                      src={img}
                      alt={name}
                      width={288}
                      height={256}
                    />

                    <p className='caption-md lg:header-7 text-gray-800 text-center my-1 lg:my-2'>
                      {name}
                    </p>

                    <ul className='w-full flex justify-between flex-row-reverse px-2 lg:px-4 mb-2'>
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

                    <ul className='w-full flex justify-between items-center flex-row-reverse px-2 lg:px-4 mb-3'>
                      <li className='caption-sm lg:body-md text-gray-800'>
                        {price}
                      </li>

                      <li className='flex justify-between flex-row-reverse items-center'>
                        <span className='hidden lg:block caption-sm text-gray-500'>
                          ({totalStars})
                        </span>
                        <span className='caption-sm lg:button-sm text-gray-800 mx-1'>
                          {star}
                        </span>
                        <span className='text-base flex justify-center items-center text-warning-light'>
                          &#9733;
                        </span>
                      </li>
                    </ul>
                    <button className='caption-sm lg:caption-lg text-white bg-primary rounded py-2 mb-2 lg:mb-4 mx-2 lg:mx-4'>
                      افزودن به سبد خرید
                    </button>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>

      <section className='pr-5 lg:pr-20 pt-6 mb-6 lg:mb-12'>
        <p className='header-6 lg:header-4 text-gray-800 pb-3 lg:pb-6'>
          غذاهای غیر ایرانی
        </p>

        <div className='h-auto'>
          <Swiper
            slidesPerView={1.7}
            spaceBetween={16}
            breakpoints={{
              768: {
                slidesPerView: 3.5,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 4.5,
                spaceBetween: 24,
              },
              1440: {
                slidesPerView: 4.7,
                spaceBetween: 24,
              },
            }}
            modules={[Pagination]}
            className='mySwiper'>
            <SliderLeftBtn arrow='left' className='' />
            {foreignFood.map((item, index) => {
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
                <SwiperSlide key={index}>
                  <div
                    key={index}
                    className='border border-gray-400 rounded lg:rounded-lg flex justify-center flex-col overflow-hidden'>
                    <Image
                      className='object-cover w-full h-[109px]  lg:h-64 '
                      src={img}
                      alt={name}
                      width={288}
                      height={256}
                    />

                    <p className='caption-md lg:header-7 text-gray-800 text-center my-1 lg:my-2'>
                      {name}
                    </p>

                    <ul className='w-full flex justify-between flex-row-reverse px-2 lg:px-4 mb-2'>
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

                    <ul className='w-full flex justify-between items-center flex-row-reverse px-2 lg:px-4 mb-3'>
                      <li className='caption-sm lg:body-md text-gray-800'>
                        {price}
                      </li>

                      <li className='flex justify-between flex-row-reverse items-center'>
                        <span className='hidden lg:block caption-sm text-gray-500'>
                          ({totalStars})
                        </span>
                        <span className='caption-sm lg:button-sm text-gray-800 mx-1'>
                          {star}
                        </span>
                        <span className='text-base flex justify-center items-center text-warning-light'>
                          &#9733;
                        </span>
                      </li>
                    </ul>
                    <button className='caption-sm lg:caption-lg text-white bg-primary rounded py-2 mb-2 lg:mb-4 mx-2 lg:mx-4'>
                      افزودن به سبد خرید
                    </button>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>

      <button className='mx-auto flex justify-center items-center border border-primary text-primary rounded caption-md lg:button-lg py-1 lg:py-2 px-2'>
        <Note className='w-4 h-4 lg:w-6 lg:h-6 ml-1 lg:ml-2' />
        مشاهده منوی کامل
      </button>
    </>
  );
};

export default EkbatanBranch;
