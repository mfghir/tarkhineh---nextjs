import {
  ArrowDown2,
  HambergerMenu,
  Heart,
  Location,
  LogoutCurve,
  SearchNormal1,
  ShoppingCart,
  User,
  Wallet2,
} from 'iconsax-react';

import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useRouter } from 'next/router';

import Image from 'next/image';
import Link from 'next/link';
import { convertToFaNumber } from '../modules/FarsiNumber';

import { openModal } from '@/redux/modalSlice';
import MenuPhone from '../modules/MenuPhone';

const Navbar = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cart);

  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(false);

  const openSearchModalHandler = () => {
    dispatch(openModal({ id: 'searchModal' }));
  };

  const tokenSave = useSelector(state => state.auth.token);

  const openLoginModalHandler = () => {
    if (!tokenSave) {
      dispatch(openModal({ id: 'phone-login' }));
    } else {
      setOpenSubMenu(!openSubMenu);
    }
  };


  return (
    <>
      <section className='phoneMenu-shadow sticky top-0 z-50 bg-white w-full flex justify-between items-center flex-nowrap p-5 md:grid md:grid-cols-3 md:grid-flow-row lg:flex lg:justify-between lg:px-20 lg:py-8'>
        <HambergerMenu
          className='lg:hidden md:text-2xl text-primary cursor-pointer'
          onClick={() => setShowMenu(!showMenu)}
        />
        {/* {showMenu && <PhoneMenu showMenu={showMenu} />} */}
        {showMenu && <MenuPhone showMenu={showMenu} />}

        <Link href='/'>
          <Image
            className='lg:hidden mx-auto'
            src='/images/Logo-phone.png'
            alt='Logo-phone'
            width={102}
            height={32}
          />
        </Link>

        <Link href='/' className='hidden lg:block'>
          <Image
            src='/images/Logo-desktop.png'
            alt='Logo-desktop'
            width={155}
            height={51}
          />
        </Link>

        <ul className='hidden lg:flex justify-between items-center'>
          <li className='text-primary body-md'>
            <Link
              href='/'
              className={
                router.pathname === '/'
                  ? 'text-primary header-5 border-b border-primary pb-1'
                  : ''
              }>
              صفحه اصلی
            </Link>
          </li>

          {/* <li className="body-md text-gray-700 hover:text-primary flex justify-center items-center mr-6">
<select id="branch" className="body-md text-gray-700 hover:text-primary duration-300 bg-transparent focus:border-none"
value={selectedValue} onChange={handleSelectChange}
>
  <option selected className="appearance-none" >شعبه</option>
  <option value="ekbatan" className={`appearance-none bg-white w-36 border-b border-gray-100 hover:bg-tint-100 p-2 block whitespace-no-wrap rounded-tr rounded-tl dropdown-menu-shadow
   ${router.pathname === "/branch/ekbatan"? "text-primary header-5 border-b border-primary pb-1": ""}`}>    
  اکباتان </option>

</select>
</li> */}

          <li className='dropdown inline-block relative z-20 mr-6'>
            <div className='flex justify-center items-center cursor-pointer'>
              <span className='body-md text-gray-700 hover:text-primary duration-300'>
                شعبه
              </span>
              <ArrowDown2 size='16' className='mr-1 duration-300' />
            </div>

            <ul className='dropdown-menu absolute pt-2 bg-transparent hidden w-36 body-sm '>
              <li className='bg-white  border-b border-gray-100 hover:bg-tint-100 p-2 block whitespace-no-wrap rounded-tr rounded-tl dropdown-menu-shadow'>
                <Link
                  href='/branch/ekbatan'
                  className={
                    router.pathname === '/branch'
                      ? 'text-primary header-5 border-b border-primary pb-1'
                      : ''
                  }>
                  اکباتان
                </Link>
              </li>
              <li className='bg-white border border-b border-gray-100 hover:bg-tint-100 p-2 block whitespace-no-wrap'>
                <a href='#'>چالوس</a>
              </li>
              <li className='bg-white border border-b border-gray-100 hover:bg-tint-100 p-2 block whitespace-no-wrap'>
                <a href='#'>اقدسیه</a>
              </li>
              <li className='bg-white hover:bg-tint-100 p-2 block whitespace-no-wrap rounded-br rounded-bl'>
                <a href='#'>ونک</a>
              </li>
            </ul>
          </li>

          <li className='dropdown inline-block relative z-20 mr-6'>
            <div className='flex justify-center items-center cursor-pointer'>
              <span className='body-md text-gray-700 hover:text-primary border-primary duration-300'>
                <Link
                  href='/menu'
                  className={
                    router.pathname === '/branch'
                      ? 'text-primary header-5 border-b border-primary pb-1'
                      : ''
                  }>
                  منو
                </Link>
              </span>
              <ArrowDown2 size='16' className='mr-1 duration-300' />
            </div>

            <ul className='dropdown-menu absolute pt-2 bg-transparent hidden w-36 body-sm rounded'>
              <li className='bg-white border border-b border-gray-100 hover:bg-tint-100 p-2 block whitespace-no-wrap rounded-tr rounded-tl dropdown-menu-shadow '>
                <a href='#'>غذای اصلی</a>
              </li>
              <li className='bg-white border border-b border-gray-100 hover:bg-tint-100 p-2 block whitespace-no-wrap'>
                <a href='#'>پیش غذا</a>
              </li>
              <li className='bg-white border border-b border-gray-100 hover:bg-tint-100 p-2 block whitespace-no-wrap'>
                <a href='#'>دسر</a>
              </li>
              <li className='bg-white hover:bg-tint-100 p-2 block whitespace-no-wrap rounded-br rounded-bl'>
                <a href='#'>نوشیدنی</a>
              </li>
            </ul>
          </li>

          <li className='body-md text-gray-700 hover:text-primary flex justify-center items-center mr-6'>
            <Link
              href='/agency'
              className={
                router.pathname === '/agency'
                  ? 'text-primary header-5 border-b border-primary pb-1'
                  : ''
              }>
              اعطای نمایندگی
            </Link>
          </li>

          <li className='body-md text-gray-700 hover:text-primary flex justify-center items-center mr-6'>
            <Link
              href='/about-us'
              className={
                router.pathname === '/about-us'
                  ? 'text-primary header-5 border-b border-primary pb-1'
                  : ''
              }>
              درباره ما
            </Link>
          </li>

          <li className='body-md text-gray-700 hover:text-primary flex justify-center items-center mr-6'>
            <Link
              href='/contact'
              className={
                router.pathname === '/contact'
                  ? 'text-primary header-5 border-b border-primary pb-1'
                  : ''
              }>
              تماس با ما
            </Link>
          </li>
        </ul>

        <ul className='text-primary flex justify-between md:justify-end'>
          <li
            className='hidden md:flex justify-center items-center p-1 md:p-2 rounded bg-tint-100 hover:text-white hover:bg-shade-200 active:bg-shade-300 duration-300 cursor-pointer'
            onClick={openSearchModalHandler}>
            <SearchNormal1 />
          </li>

          <Link href='/shopping-cart'>
            <li
              className={`relative flex justify-center items-center p-1 md:p-2 rounded  ml-1 md:mx-2 hover:text-white hover:bg-shade-200 active:bg-shade-300 duration-300 
            ${
              router.pathname === '/shopping-cart' ||
              router.pathname === '/delivery-completion'
                ? 'bg-primary text-white'
                : 'bg-tint-100'
            }
          `}>
              <ShoppingCart className='w-4 h-4 md:w-6 md:h-6' />
              {cart.length === 0 ? (
                ''
              ) : (
                <span className='caption-sm bg-tint-600 text-white w-3 h-3 p-1 flex justify-center items-center rounded-full absolute bottom-4 left-4 lg:bottom-6 lg:left-6'>
                  {convertToFaNumber(cart.length)}
                </span>
              )}
            </li>
          </Link>

          <li className='user-dropdown relative z-20 p-1 md:p-2 rounded bg-tint-100 hover:bg-primary duration-300'>
            <div
              className='flex justify-center items-baseline cursor-pointer'
              onClick={openLoginModalHandler}>
              <User className='text-primary w-4 h-4 md:w-6 md:h-6' />
              <ArrowDown2 size='16' className='mr-[2px] duration-300 hidden' />
            </div>

            {openSubMenu && (
              <ul
                className='dropdown-menu absolute left-0 pt-4 bg-transparent  w-36 body-sm rounded text-gray-800'>
                <Link href='/profile'>
                  <li
                    className='cursor-pointer flex justify-start items-center bg-white border border-b border-gray-100 hover:bg-tint-100 p-2  whitespace-no-wrap rounded-tr rounded-tl  dropdown-menu-shadow'
                    onClick={() => setOpenSubMenu(false)}>
                    <User size='16' className='ml-1' />
                    پروفایل
                  </li>
                </Link>

                <Link href='/profile/order-tracking'>
                  <li
                    className='cursor-pointer flex justify-start items-center bg-white border border-b border-gray-100 hover:bg-tint-100 p-2 whitespace-no-wrap'
                    onClick={() => setOpenSubMenu(false)}>
                    <Wallet2 size='16' className='ml-1' />
                    پیگیری سفارش
                  </li>
                </Link>

                <Link href='/profile/liking'>
                  <li
                    className='cursor-pointer flex justify-start items-center bg-white border border-b border-gray-100 hover:bg-tint-100 p-2 whitespace-no-wrap'
                    onClick={() => setOpenSubMenu(false)}>
                    <Heart size='16' className='ml-1' />
                    علاقه‌مندی‌ها
                  </li>
                </Link>

                <li
                  className='cursor-pointer flex justify-start items-center bg-white border border-b border-gray-100 hover:bg-tint-100 p-2 whitespace-no-wrap'
                  onClick={() => setOpenSubMenu(false)}>
                  <Location size='16' className='ml-1' />
                  آدرس‌های من
                </li>

                <Link href='/profile/exit'>
                  <li
                    className='cursor-pointer flex justify-start items-center bg-white hover:bg-tint-100 p-2 whitespace-no-wrap rounded-br rounded-bl'
                    onClick={() => setOpenSubMenu(false)}>
                    <LogoutCurve size='16' className='ml-1' />
                    خروج از حساب
                  </li>
                </Link>
              </ul>
            )}
          </li>
        </ul>
      </section>
    </>
  );
};

export default Navbar;
