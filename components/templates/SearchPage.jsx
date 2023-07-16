import React, { useEffect } from 'react';
import { Heart } from 'iconsax-react';
import Image from 'next/image';

import { useDispatch, useSelector } from 'react-redux';
import foodMenuData from '@/db/foodMenuData';
import { convertToFaNumber } from '../modules/FarsiNumber';

import SearchBar from '../modules/SearchBar';
import { useRouter } from 'next/router';
import { setSearchTerm } from '@/redux/searchTermSlice';

const SearchPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const searchTerm = useSelector(state => state.searchTerm);
  const filteredResults = foodMenuData.filter(result =>
    result.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  useEffect(() => {
    const { q } = router.query;
    if (q) {
      dispatch(setSearchTerm(q));
    }
  }, [router.query, dispatch]);

  return (
    <section className='w-full px-5 lg:px-20 mt-14 lg:mt-8 mb-6 lg:mb-12 flex flex-col justify-center items-center'>
      {filteredResults?.length > 0 ? (
        <section className='w-full flex justify-center items-center flex-col'>
          <p className='header-7 lg:header-4 flex justify-center items-center text-gray-800'>
            نتایج جستجو برای:<span className='text-primary'>{searchTerm}</span>
          </p>

          <div className='w-[280px] lg:w-80 mt-6 mb-12'>
            <SearchBar />
          </div>

          <div className='grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-x-6 gap-y-3 md:gap-y-6 '>
            {filteredResults?.map(item => {
              const {
                id,
                img,
                name,
                discount,
                discountPrice,
                price,
                star,
                totalStars,
              } = item;

              return (
                // <div
                //   className='w-full flex justify-center items-center rounded lg:rounded-lg border border-gray-400 overflow-hidden'
                //   key={id}>

                <div
                  key={id}
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
                      <span className='text-error mr-2'>
                        {convertToFaNumber(discount)}
                      </span>
                      <span className='text-gray-500 line-through'>
                        {convertToFaNumber(discountPrice)}
                      </span>
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
                      {convertToFaNumber(price)} تومان
                    </li>

                    <li className='flex justify-between flex-row-reverse items-center'>
                      <span className='hidden lg:block caption-sm text-gray-500'>
                        ({convertToFaNumber(20)}) امتیاز
                      </span>
                      <span className='caption-sm lg:button-sm text-gray-800 mx-1'>
                        {convertToFaNumber(star)}
                      </span>
                      <span className='text-base flex justify-center items-center text-warning-light'>
                        &#9733;
                      </span>
                    </li>
                  </ul>
                  <button className='caption-sm lg:caption-lg text-white bg-primary hover:bg-shade-200 active:bg-shade-300 duration-300 rounded py-2 mb-2 lg:mb-4 mx-2 lg:mx-4'>
                    افزودن به سبد خرید
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      ) : (
        <section className='wf flex flex-col justify-center items-center'>
          <p className='body-md lg:body-xl text-gray-800 mb-4'>
            موردی با این مشخصات پیدا نکردیم!
          </p>

          <div className='w-[280px] lg:w-[360px] mb-12'>
            <SearchBar />
          </div>

          <Image
            src='/images/not-found.png'
            alt='not-found'
            className='w-56 lg:w-[390px]'
            width={390}
            height={345}
          />
        </section>
      )}
    </section>
  );
};

export default SearchPage;
