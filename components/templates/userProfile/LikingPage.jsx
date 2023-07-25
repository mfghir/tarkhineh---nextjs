import { ArrowRight2, CloseCircle, Heart } from 'iconsax-react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import Image from 'next/image';
import ProfileMenu from './ProfileMenu';
import SearchBar from '@/components/modules/SearchBar';

import { convertToFaNumber } from '@/components/modules/FarsiNumber';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, toggleFavorite } from '@/redux/cartSlice';

import StarRating from '@/components/modules/StarRating ';

const LikingPage = () => {
  const { push } = useRouter();
  const dispatch = useDispatch();
  const favoriteIds = useSelector(state => state.cart.favorites);

  const favoriteItems = useSelector(state =>
    state.cart.items.filter(item => favoriteIds.includes(item.id))
  );

  return (
    <section className='px-5 lg:px-20 py-2 lg:py-12 lg:flex lg:flex-row lg:justify-between min-h-screen lg:min-h-fit'>
      <div className='hidden lg:block lg:w-[25%] h-full  min-h-screen'>
        <ProfileMenu />
      </div>

      <section className='lg:w-[73%] lg:border lg:border-gray-400 lg:rounded-lg lg:p-6'>
        <div className='flex items-center'>
          <ArrowRight2
            className='lg:hidden ml-4'
            size='16'
            onClick={() => push('/profile')}
          />
          <p className='w-full header-7 lg:header-6 text-gray-800 text-center mx-auto lg:text-right lg:pb-2 lg:border-b lg:border-gray-400'>
            علاقمندی‌ها
          </p>
        </div>

        <div className="lg:hidden mt-4 mb-20">
        <SearchBar />
        </div>

        <nav className='hidden mt-5 mb-8 lg:grid lg:grid-cols-5 lg:gap-4'>
          <ul className='flex justify-start items-center overflow-x-scroll lg:overflow-hidden col-span-3'>
            <li className='bg-tint-100 px-3 rounded-full whitespace-nowrap ml-2 flex justify-between items-center'>
              <CloseCircle size='18' color='#717171' />
              <p className='overline-lg text-primary mx-2'>همه</p>
              <Image
                src='/images/tick-square.png'
                alt='close'
                width='24'
                height='24'
              />
            </li>
            <li className='overline-lg text-gray-800 bg-gray-300 px-3 rounded-full whitespace-nowrap ml-2'>
              غذای اصلی
            </li>
            <li className='overline-lg text-gray-800 bg-gray-300 px-3 rounded-full whitespace-nowrap ml-2'>
              پیش غذا
            </li>
            <li className='overline-lg text-gray-800 bg-gray-300 px-3 rounded-full whitespace-nowrap ml-2'>
              دسر
            </li>
            <li className='overline-lg text-gray-800 bg-gray-300 px-3 rounded-full whitespace-nowrap ml-2'>
              نوشیدنی
            </li>
          </ul>

          <div className='w-full col-span-2'>
            <SearchBar />
          </div>
        </nav>

        {favoriteItems.length > 0 ? (
          <section className='grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-3'>
            {favoriteItems.map(item => {
              const { id, img, name, price, star, totalStars, fav } = item;

              return (
                <div
                  key={id}
                  className='border border-gray-400 rounded lg:rounded-lg flex justify-center flex-col overflow-hidden'>
                  <Image
                    className='object-cover w-full h-[109px]  lg:h-36 '
                    src={img}
                    alt={name}
                    width={288}
                    height={140}
                  />

                  <div className='w-full flex justify-between px-2 lg:px-4 mb-2'>
                    <p className='caption-md lg:header-7 text-gray-800 text-center my-1 lg:my-2'>
                      {name}
                    </p>

                    <button
                      onClick={() => dispatch(toggleFavorite(item))}
                      className='cursor-pointer'>
                      {fav ? (
                        <Heart size='16' variant='Bold' color='#ED2E2E' />
                      ) : (
                        <Heart size='16' color='#717171' />
                      )}
                    </button>
                  </div>

                  <ul className='w-full flex justify-between items-center flex-wrap px-2 lg:px-4 mb-2 lg:mb-6'>
                    
                  <li className='hidden lg:block'>
                      <StarRating rating={star} />
                    </li>

                  

                    <li className='lg:hidden flex justify-between flex-row-reverse items-center'>
                      <span className='hidden lg:block caption-sm text-gray-500'>
                        {convertToFaNumber(totalStars)}
                      </span>
                      <span className='caption-sm lg:button-sm text-gray-800 mx-1'>
                        {convertToFaNumber(star)}
                      </span>
                      <span className='text-base flex justify-center items-center text-warning-light'>
                        &#9733;
                      </span>
                    </li>

                    <li className='caption-sm lg:body-md text-gray-800'>
                      {convertToFaNumber(price)} تومان
                    </li>

                  </ul>

                  <button
                    className='caption-sm lg:caption-lg text-white bg-primary rounded py-2 mb-2 lg:mb-4 mx-2 lg:mx-4'
                    onClick={() => dispatch(addToCart(item))}>
                    افزودن به سبد خرید
                  </button>
                </div>
              );
            })}
          </section>
        ) : (
          <div className='bg-[url("/images/Empty-page.png")] bg-center bg-no-repeat min-h-[200px] lg:min-h-0 border border-gray-400 rounded-lg lg:border-none p-6 mt-6 flex justify-center items-center flex-col lg:mt-12'>
            <p className='caption-sm lg:body-xl text-gray-700 text-center'>
              شما در حال حاضر هیچ محصولی را به علاقه‌مندی‌ها اضافه نکرده‌اید!
            </p>
            <Link href='/menu'>
              <button className='caption-sm lg:button-lg rounded border border-primary text-primary hover:text-shade-200 hover:border-shade-200 active:text-shade-300 active:border-shade-300 duration-300 py-1 px-4 lg:px-12  mt-4 lg:mt-8'>
                منوی رستوران
              </button>
            </Link>
          </div>
        )}
      </section>
    </section>
  );
};

export default LikingPage;
