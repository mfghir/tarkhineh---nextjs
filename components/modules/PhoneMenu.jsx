import {
  ArrowDown2,
  CallCalling,
  Home,
  HomeHashtag,
  MenuBoard,
  Profile2User,
} from 'iconsax-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const PhoneMenu = ({ showMenu }) => {
  const [close, setClose] = useState(false);
  const router = useRouter();

  return (
    <div
      className={`w-full h-screen fixed top-0 z-30 duration-300 md:hidden opacity-0 
      ${showMenu ? 'right-0 opacity-100 duration-300' : ''}
      ${close ? '-right-[600px] opacity-0 duration-300' : ''}`}>
      <section
        className={`w-full h-full phoneMenu-bg z-30  
        ${close ? 'opacity-0 ' : ''}
        `}
        onClick={() => setClose(!close)}></section>

      <section className={`w-64 h-full bg-white z-50 absolute top-0 `}>
        <Link href='/'>
          <Image
            src='/images/menu-phone.png'
            alt='menu-phone'
            width={256}
            height={94}
          />
        </Link>

        <ul className='flex flex-col mt-2 px-4'>
          <Link
            href='/'
            className={
              router.pathname === '/' ? 'text-primary caption-md ' : ''
            }>
            <li className='caption-sm hover:caption-md text-gray-800 hover:text-primary duration-300 cursor-pointer flex justify-start items-center border-b border-gray-400 pb-1 mb-2'>
              <Home size='16' className='ml-1' />
              صفحه اصلی
            </li>
          </Link>

          <Link
            href='/menu'
            className={
              router.pathname === '/menu' ? 'text-primary caption-md ' : ''
            }>
            <li className='caption-sm hover:caption-md text-gray-800 hover:text-primary duration-300 cursor-pointer flex justify-between items-center border-b border-gray-400 pb-1 mb-2'>
              <span className='flex justify-start items-center'>
                <MenuBoard size='16' className='ml-1' />
                منو
              </span>
              <ArrowDown2 size='16' />
            </li>
          </Link>

          <li className='caption-sm hover:caption-md text-gray-800 hover:text-primary duration-300 cursor-pointer flex justify-between items-center border-b border-gray-400 pb-1 mb-2'>
            <span className='flex justify-start items-center'>
              <HomeHashtag size='16' className='ml-1' />
              شعبه
            </span>
            <ArrowDown2 size='16' />
          </li>

          <Link
            href='/about-us'
            className={
              router.pathname === '/about-us' ? 'text-primary caption-md ' : ''
            }>
            <li className='caption-sm hover:caption-md text-gray-800 hover:text-primary duration-300 cursor-pointer flex justify-start items-center border-b border-gray-400 pb-1 mb-2'>
              <Profile2User size='16' className='ml-1' />
              درباره ما
            </li>
          </Link>

          <Link
            href='/contact'
            className={
              router.pathname === '/contact' ? 'text-primary caption-md ' : ''
            }>
            <li className='caption-sm hover:caption-md text-gray-800 hover:text-primary duration-300 cursor-pointer flex justify-start items-center border-b border-gray-400 pb-1 mb-2'>
              <CallCalling size='16' className='ml-1' />
              تماس با ما
            </li>
          </Link>
        </ul>
      </section>
    </div>
  );
};

export default PhoneMenu;
