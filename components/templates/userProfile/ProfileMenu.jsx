import { Heart, Location, LogoutCurve, User, Wallet2 } from 'iconsax-react';
import Link from 'next/link';
import Image from 'next/image';

import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '@/redux/modalSlice';

const ProfileMenu = () => {
  const { pathname } = useRouter();
  const dispatch = useDispatch();

  // const isExitPageOpen = useSelector(state => state.modal['exit-page']?.isOpen);
  // console.log("isExitPageOpen" ,isExitPageOpen);

  return (
    <section className='w-full lg:border lg:border-gray-400 lg:rounded-lg lg:px-2 lg:py-4'>
      <nav className='flex py-2 border-b border-gray-400'>
        <Image
          className='w-12 h-12 lg:w-20 lg:h-20 border border-gray-400 rounded-full'
          src='/images/user.png'
          alt='user'
          width={88}
          height={88}
        />

        <p className='flex flex-col justify-center mr-2'>
          <span className='body-sm lg:body-md text-gray-800'>کاربر ترخینه</span>
          <span className='caption-sm lg:caption-md text-gray-700'>
            ۰۹۱۴ ۸۶۴ ۳۳۵۰
          </span>
        </p>
      </nav>

      <ul className='caption-md lg:body-sm text-gray-800 py-2'>
        <Link href='/profile/user-profile'>
          <li
            className={`flex items-center p-2 ${
              pathname === '/profile/user-profile'
                ? 'border-r-2 border-primary text-primary caption-lg lg:body-md'
                : ''
            }`}>
            {pathname === '/profile/user-profile' ? (
              <User size='16' className='ml-1' variant='Bold' />
            ) : (
              <User size='16' className='ml-1' />
            )}
            پروفایل
          </li>
        </Link>

        <Link href='/profile/order-tracking'>
          <li
            className={`flex items-center p-2 ${
              pathname === '/profile/order-tracking'
                ? 'border-r-2 border-primary text-primary caption-lg lg:body-md'
                : ''
            }`}>
            {pathname === '/profile/order-tracking' ? (
              <Wallet2 size='16' className='ml-1' variant='Bold' />
            ) : (
              <Wallet2 size='16' className='ml-1' />
            )}
            پیگیری سفارش
          </li>
        </Link>

        <Link href='/profile/liking'>
          <li
            className={`flex items-center p-2 
            ${
              pathname === '/profile/liking'
                ? 'border-r-2 border-primary text-primary caption-lg lg:body-md'
                : ''
            }`}>
            {pathname === '/profile/liking' ? (
              <Heart size='16' className='ml-1' variant='Bold' />
            ) : (
              <Heart size='16' className='ml-1' />
            )}
            علاقه‌مندی‌ها
          </li>
        </Link>

        <Link href='/profile/address'>
          <li
            className={`flex items-center p-2 
            ${
              pathname === '/profile/address'
                ? 'border-r-2 border-primary text-primary caption-lg lg:body-md'
                : ''
            }`}>
            {pathname === '/profile/address' ? (
              <Location size='16' className='ml-1' variant='Bold' />
            ) : (
              <Location size='16' className='ml-1' />
            )}
            آدرس‌ های من
          </li>
        </Link>

        <Link href='/profile/exit'>
          <li
            onClick={() => dispatch(openModal({ id: 'exit-page' }))}
            className={`flex items-center text-error p-2 
            ${
              pathname === '/profile/exit'
                ? 'border-r-2 border-error caption-lg lg:body-md'
                : ''
            }`}>
            {pathname === '/profile/exit' ? (
              <LogoutCurve size='16' className='ml-1' variant='Bold' />
            ) : (
              <LogoutCurve size='16' className='ml-1' />
            )}
            خروج
          </li>
        </Link>
      </ul>
    </section>
  );
};

export default ProfileMenu;
