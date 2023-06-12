import HeaderSlider from '../pages/home/HeaderSlider';
import SearchBar from '../modules/SearchBar';
import { ArrowLeft2, Heart, ShoppingCart } from 'iconsax-react';

import foodMenuData from '@/db/foodMenuData';
import Image from 'next/image';
import StarRating from '../modules/StarRating ';

import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/cartSlice';
import useFarsiNumber from '../modules/useFarsiNumber';

const MenuPage = () => {
  const iranianFood = foodMenuData.filter(food => food.type === 'iranianFood');
  const nonIranianFood = foodMenuData.filter(
    food => food.type === 'nonIranianFood'
  );

  const pizza = foodMenuData.filter(food => food.type === 'pizza');
  const sandwich = foodMenuData.filter(food => food.type === 'sandwich');

  const dispatch = useDispatch();
  // const priceFa= useFarsiNumber(123)

  return (
    <>
      <HeaderSlider />
      {/* ${ ? "caption-lg lg:header-5 border-b border-primary" : ""} */}
      <nav className='bg-gray-300 px-5 lg:px-20 py-[6px] lg:py-3 flex justify-start'>
        <ul className='grid grid-cols-4 gap-x-4 lg:gap-x-8'>
          <li
            className={`caption-lg lg:header-5 border-b border-primary text-primary pb-1 flex justify-center items-center  `}>
            غذای اصلی
          </li>
          <li
            className={`caption-md lg:body-xl text-gray-700 flex justify-center items-center    `}>
            پیش غذا
          </li>
          <li
            className={`caption-md lg:body-xl text-gray-700 flex justify-center items-center    `}>
            دسر
          </li>
          <li
            className={`caption-md lg:body-xl text-gray-700 flex justify-center items-center    `}>
            نوشیدنی
          </li>
        </ul>
      </nav>

      <nav className='mt-2 lg:mt-4 lg:px-20 lg:grid lg:grid-cols-3 lg:gap-x-8'>
        <div className='pr-5 lg:pr-0 col-span-2'>
          <ul className='flex justify-start items-center overflow-x-scroll lg:overflow-hidden'>
            <li className='caption-sm lg:overline-lg text-gray-800 bg-gray-300 px-2 lg:px-3 py-1 rounded-lg lg:rounded-full whitespace-nowrap ml-2'>
              غذاهای ایرانی
            </li>
            <li className='caption-sm lg:overline-lg text-gray-800 bg-gray-300 px-2 lg:px-3 py-1 rounded-lg lg:rounded-full whitespace-nowrap ml-2'>
              غذاهای غیر ایرانی
            </li>
            <li className='caption-sm lg:overline-lg text-gray-800 bg-gray-300 px-2 lg:px-3 py-1 rounded-lg lg:rounded-full whitespace-nowrap ml-2'>
              پیتزاها
            </li>
            <li className='caption-sm lg:overline-lg text-gray-800 bg-gray-300 px-2 lg:px-3 py-1 rounded-lg lg:rounded-full whitespace-nowrap ml-2'>
              ساندویچ‌ها
            </li>
            <li className='caption-sm lg:overline-lg text-gray-800 bg-gray-300 px-2 lg:px-3 py-1 rounded-lg lg:rounded-full whitespace-nowrap ml-2'>
              پرفروش‌ترین
            </li>
            <li className='caption-sm lg:overline-lg text-gray-800 bg-gray-300 px-2 lg:px-3 py-1 rounded-lg lg:rounded-full whitespace-nowrap ml-2'>
              اقتصادی‌ترین
            </li>
            <li className=' text-gray-600'>
              <ArrowLeft2 />{' '}
            </li>
          </ul>
        </div>

        <div className='w-full px-5 lg:px-0 mt-3 lg:mt-0  col-span-1'>
          <SearchBar />
        </div>
      </nav>

      <section className='px-5 lg:px-20 mt-14 lg:mt-8 '>
        <section className='mb-6 lg:mb-12'>
          <div className='flex justify-between items-center  mb-3 lg:mb-6'>
            <p className='header-6 lg:header-4 text-gray-800'>غذاهای ایرانی</p>
            <button className='flex justify-center items-center border border-primary text-primary hover:text-shade-200 hover:border-shade-200 active:text-shade-300 active:border-shade-300  rounded caption-md lg:button-lg py-1 lg:py-2 px-2 duration-300'>
              <ShoppingCart className='w-4 h-4 lg:w-6 lg:h-6 ml-1 lg:ml-2' />
              تکمیل خرید
            </button>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-6 gap-y-3 md:gap-y-6'>
            {iranianFood.map((item, index) => {
              const {
                name,
                img,
                ingredient,
                discount,
                discountPrice,
                price,
                star,
              } = item;
              const formattedPrice = useFarsiNumber(price);

              return (
                <div
                  className='w-full flex justify-center items-center rounded lg:rounded-lg border border-gray-400 overflow-hidden'
                  key={index}>
                  <Image
                    className='object-cover w-[92px] h-full lg:w-[169px]  '
                    src={img}
                    alt={name}
                    width={169}
                    height={158}
                  />

                  <ul className='w-full p-2 lg:p-4'>
                    <li className='flex justify-end items-center lg:flex-wrap'>
                      <div className='flex justify-between items-center w-full'>
                        <p className='caption-md lg:header-7 text-gray-800'>
                          {name}
                        </p>
                        <Heart
                          className='hidden lg:w-6 lg:h-6 lg:block'
                          color='#717171'
                        />
                      </div>

                      <p className='flex justify-center items-center flex-row-reverse caption-sm lg:caption-md'>
                        <span className='text-error mr-2'>{discount}</span>
                        <span className='text-gray-500 line-through'>
                          {discountPrice}
                        </span>
                      </p>
                    </li>

                    <li className='flex justify-between items-center text-gray-800 mt-2 mb-1 '>
                      <p className='caption-sm lg:caption-md line-clamp-1'>
                        {ingredient}
                      </p>
                      <p className='caption-sm lg:body-lg whitespace-nowrap mr-2'>
                        {formattedPrice.toLocaleString()} تومان
                      </p>
                    </li>

                    <li className='flex justify-between items-center w-full'>
                      <Heart
                        className='w-4 h-4 lg:w-6 lg:h-6 lg:hidden'
                        color='#717171'
                      />

                      <div className=' lg:w-full flex justify-center lg:justify-between items-center flex-row-reverse'>
                        <button
                          className='bg-primary hover:bg-shade-200 active:bg-shade-300 duration-300 rounded text-white px-2 py-1 caption-sm lg:button-lg mr-2'
                          onClick={() => dispatch(addToCart(item))}>
                          افزودن به سبد خرید
                        </button>
                        <span className=''>
                          <StarRating rating={star} />
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        <section className='mb-6 lg:mb-12'>
          <p className='header-6 lg:header-4 text-gray-800 mb-3 lg:mb-6'>
            غذاهای غیر ایرانی
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-6 gap-y-3 md:gap-y-6'>
            {nonIranianFood.map((item, index) => {
              const {
                name,
                img,
                ingredient,
                discount,
                discountPrice,
                price,
                star,
              } = item;
              const formattedPrice = useFarsiNumber(price);

              return (
                <div
                  className='w-full flex justify-center items-center rounded lg:rounded-lg border border-gray-400 overflow-hidden'
                  key={index}>
                  <Image
                    className='object-cover w-[92px] h-full lg:w-[169px]  '
                    src={img}
                    alt={name}
                    width={169}
                    height={158}
                  />

                  <ul className='w-full p-2 lg:p-4'>
                    <li className='flex justify-end items-center lg:flex-wrap'>
                      <div className='flex justify-between items-center w-full'>
                        <p className='caption-md lg:header-7 text-gray-800'>
                          {name}
                        </p>
                        <Heart
                          className='hidden lg:w-6 lg:h-6 lg:block'
                          color='#717171'
                        />
                      </div>

                      <p className='flex justify-center items-center flex-row-reverse caption-sm lg:caption-md'>
                        <span className='text-error mr-2'>{discount}</span>
                        <span className='text-gray-500 line-through'>
                          {discountPrice}
                        </span>
                      </p>
                    </li>

                    <li className='flex justify-between items-center text-gray-800 mt-2 mb-1 '>
                      <p className='caption-sm lg:caption-md line-clamp-1'>
                        {ingredient}
                      </p>
                      <p className='caption-sm lg:body-lg whitespace-nowrap mr-2'>
                        {formattedPrice} تومان
                      </p>
                    </li>

                    <li className='flex justify-between items-center w-full'>
                      <Heart
                        className='w-4 h-4 lg:w-6 lg:h-6 lg:hidden'
                        color='#717171'
                      />

                      <div className=' lg:w-full flex justify-center lg:justify-between items-center flex-row-reverse'>
                        <button className='bg-primary hover:bg-shade-200 active:bg-shade-300 duration-300 rounded text-white px-2 py-1 caption-sm lg:button-lg mr-2'>
                          افزودن به سبد خرید
                        </button>
                        <span className=''>
                          <StarRating rating={star} />
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        <section className='mb-6 lg:mb-12'>
          <p className='header-6 lg:header-4 text-gray-800 mb-3 lg:mb-6'>
            پیتزاها
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-6 gap-y-3 md:gap-y-6'>
            {pizza.map((item, index) => {
              const {
                name,
                img,
                ingredient,
                discount,
                discountPrice,
                price,
                star,
              } = item;
              const formattedPrice = useFarsiNumber(price);

              return (
                <div
                  className='w-full flex justify-center items-center rounded lg:rounded-lg border border-gray-400 overflow-hidden'
                  key={index}>
                  <Image
                    className='object-cover w-[92px] h-full lg:w-[169px]  '
                    src={img}
                    alt={name}
                    width={169}
                    height={158}
                  />

                  <ul className='w-full p-2 lg:p-4'>
                    <li className='flex justify-end items-center lg:flex-wrap'>
                      <div className='flex justify-between items-center w-full'>
                        <p className='caption-md lg:header-7 text-gray-800'>
                          {name}
                        </p>
                        <Heart
                          className='hidden lg:w-6 lg:h-6 lg:block'
                          color='#717171'
                        />
                      </div>

                      <p className='flex justify-center items-center flex-row-reverse caption-sm lg:caption-md'>
                        <span className='text-error mr-2'>{discount}</span>
                        <span className='text-gray-500 line-through'>
                          {discountPrice}
                        </span>
                      </p>
                    </li>

                    <li className='flex justify-between items-center text-gray-800 mt-2 mb-1 '>
                      <p className='caption-sm lg:caption-md line-clamp-1'>
                        {ingredient}
                      </p>
                      <p className='caption-sm lg:body-lg whitespace-nowrap mr-2'>
                        {formattedPrice} تومان
                      </p>
                    </li>

                    <li className='flex justify-between items-center w-full'>
                      <Heart
                        className='w-4 h-4 lg:w-6 lg:h-6 lg:hidden'
                        color='#717171'
                      />

                      <div className=' lg:w-full flex justify-center lg:justify-between items-center flex-row-reverse'>
                        <button className='bg-primary hover:bg-shade-200 active:bg-shade-300 duration-300 rounded text-white px-2 py-1 caption-sm lg:button-lg mr-2'>
                          افزودن به سبد خرید
                        </button>
                        <span className=''>
                          <StarRating rating={star} />
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        <section className='mb-6 lg:mb-12'>
          <p className='header-6 lg:header-4 text-gray-800 mb-3 lg:mb-6'>
            ساندویچ‌ها
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-6 gap-y-3 md:gap-y-6'>
            {sandwich.map((item, index) => {
              const {
                name,
                img,
                ingredient,
                discount,
                discountPrice,
                price,
                star,
              } = item;
              const formattedPrice = useFarsiNumber(price)

              return (
                <div
                  className='w-full flex justify-center items-center rounded lg:rounded-lg border border-gray-400 overflow-hidden'
                  key={index}>
                  <Image
                    className='object-cover w-[92px] h-full lg:w-[169px]  '
                    src={img}
                    alt={name}
                    width={169}
                    height={158}
                  />

                  <ul className='w-full p-2 lg:p-4'>
                    <li className='flex justify-end items-center lg:flex-wrap'>
                      <div className='flex justify-between items-center w-full'>
                        <p className='caption-md lg:header-7 text-gray-800'>
                          {name}
                        </p>
                        <Heart
                          className='hidden lg:w-6 lg:h-6 lg:block'
                          color='#717171'
                        />
                      </div>

                      <p className='flex justify-center items-center flex-row-reverse caption-sm lg:caption-md'>
                        <span className='text-error mr-2'>{discount}</span>
                        <span className='text-gray-500 line-through'>
                          {discountPrice}
                        </span>
                      </p>
                    </li>

                    <li className='flex justify-between items-center text-gray-800 mt-2 mb-1 '>
                      <p className='caption-sm lg:caption-md line-clamp-1'>
                        {ingredient}
                      </p>
                      <p className='caption-sm lg:body-lg whitespace-nowrap mr-2'>
                        {formattedPrice} تومان
                      </p>
                    </li>

                    <li className='flex justify-between items-center w-full'>
                      <Heart
                        className='w-4 h-4 lg:w-6 lg:h-6 lg:hidden'
                        color='#717171'
                      />

                      <div className=' lg:w-full flex justify-center lg:justify-between items-center flex-row-reverse'>
                        <button className='bg-primary hover:bg-shade-200 active:bg-shade-300 duration-300 rounded text-white px-2 py-1 caption-sm lg:button-lg mr-2'>
                          افزودن به سبد خرید
                        </button>
                        <span className=''>
                          <StarRating rating={star} />
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
        </section>
      </section>
    </>
  );
};

export default MenuPage;
