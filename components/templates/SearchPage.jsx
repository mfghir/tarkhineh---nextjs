import React from 'react';
import StarRating from '../modules/StarRating ';
import { Heart } from 'iconsax-react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import foodMenuData from '@/db/foodMenuData';
import { convertToFaNumber } from '../modules/FarsiNumber';
import { addToCart, toggleFavorite } from '@/redux/cartSlice';

const SearchPage = () => {
  const dispatch = useDispatch();

  const searchTerm = useSelector(state => state.searchTerm);
  const filteredResults = foodMenuData.filter(result =>
    result.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className='px-5 lg:px-20 mt-14 lg:mt-8 mb-6 lg:mb-12'>
      {filteredResults.length > 0 ? (
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-6 gap-y-3 md:gap-y-6 '>
          {filteredResults.map(item => {
            const {
              id,
              name,
              img,
              ingredient,
              discount,
              discountPrice,
              price,
              star,
            } = item;

            return (
              <div
                className='w-full flex justify-center items-center rounded lg:rounded-lg border border-gray-400 overflow-hidden'
                key={id}>
                <Image
                  className='object-cover w-[92px] h-full lg:w-[169px]'
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
                        {convertToFaNumber(discountPrice)}
                      </span>
                    </p>
                  </li>

                  <li className='flex justify-between items-center text-gray-800 mt-2 mb-1 '>
                    <p className='caption-sm lg:caption-md line-clamp-1'>
                      {ingredient}
                    </p>
                    <p className='caption-sm lg:body-lg whitespace-nowrap mr-2'>
                      {convertToFaNumber(price)} تومان
                    </p>
                  </li>

                  <li className='flex justify-between items-center w-full'>
                    <button onClick={() => dispatch(toggleFavorite(item))}>
                      {/* {favoriteItems ? (
                   <>
                     <Heart
                       className='w-4 h-4 lg:w-6 lg:h-6 lg:hidden'
                       variant='Bold'
                       color='#ED2E2E'
                     /> */}
                      <Heart
                        className='w-4 h-4 lg:w-6 lg:h-6 lg:hidden'
                        color='#717171'
                      />
                      {/* </>
                 ) : (
                   <>
                     <Heart
                       className='w-4 h-4 lg:w-6 lg:h-6 lg:hidden'
                       color='#717171'
                     />
                     dd
                     {/* <Heart
                   className='w-4 h-4 lg:w-6 lg:h-6 lg:hidden'
                   variant='Bold'
                   color='#ED2E2E'
                 /> */}
                      {/* </> */}
                      {/* )} */}
                    </button>

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
      ) : (
        <section className=''>not</section>
      )}
    </section>
  );
};

export default SearchPage;
