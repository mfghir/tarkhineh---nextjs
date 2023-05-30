import { Heart, Location, LogoutCurve, User, Wallet2 } from 'iconsax-react';
import Link from 'next/link';
import Image from 'next/image';

import { useRouter } from 'next/router';

const ProfileMenu = () => {
  const { pathname } = useRouter();

  return (
    <section className='lg:w-[25%] lg:border lg:border-gray-400 lg:rounded-lg lg:px-2 lg:py-4'>
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
        <Link href='/profile'>
          <li
            className={`flex items-center p-2 ${
              pathname === '/profile'
                ? 'border-r-2 border-primary text-primary caption-lg lg:body-md'
                : ''
            }`}>
            {pathname === '/profile' ? (
              <User size='16' className='ml-1' variant='Bold' />
            ) : (
              <User size='16' className='ml-1' />
            )}
            پروفایل
          </li>
        </Link>

        <Link href='/orderTracking'>
          <li
            className={`flex items-center p-2 ${
              pathname === '/orderTracking'
                ? 'border-r-2 border-primary text-primary caption-lg lg:body-md'
                : ''
            }`}>
            {pathname === '/orderTracking' ? (
              <User size='16' className='ml-1' variant='Bold' />
            ) : (
              <User size='16' className='ml-1' />
            )}
            پیگیری سفارش
          </li>
        </Link>

        <li className='cursor-pointer flex items-center p-2'>
          <Heart size='16' className='ml-1' />
          علاقه‌مندی‌ها
        </li>
        <li className='cursor-pointer flex items-center p-2'>
          <Location size='16' className='ml-1' />
          آدرس‌های من
        </li>
        <li className='cursor-pointer flex items-center p-2 text-error'>
          <LogoutCurve size='16' className='ml-1' />
          خروج
        </li>
      </ul>
    </section>
  );
};

export default ProfileMenu;
