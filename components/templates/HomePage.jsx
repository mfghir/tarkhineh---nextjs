import {
  ArrowLeft2,
  Diagram,
  Gallery,
  HomeWifi,
  MenuBoard,
  SearchNormal1,
  User,
} from 'iconsax-react';
import Image from 'next/image';
import React from 'react';
import HeaderSlider from '../pages/home/HeaderSlider';
import SearchBar from '../modules/SearchBar';

const HomePage = () => {
  return (
    <div>
      <HeaderSlider />

      {/* ---------------    menu cards */}

      <section className='px-5 mt-4 mb-6 flex lg:hidden'>
        <SearchBar />
      </section>

      <section className='w-full p-5 lg:px-20 flex justify-center items-center flex-col flex-wrap'>
        <h6 className='text-gray-800 lg:hidden mb-3 mt-6'>منوی رستوران</h6>
        <h4 className='text-gray-800 hidden lg:block mb-8 mt-12'>
          منوی رستوران
        </h4>

        <ul className='mt-16 lg:mt-20 grid grid-cols-1 gap-y-16 gap-x-4 xs-p:grid-cols-2 md:grid-cols-4 md:gap-x-6'>
          <li className='border rounded-lg w-[152px] h-[81px] lg:w-52 lg:h-[120px] xl:w-72 xl:h-[180px] border-primary flex flex-col justify-center items-center relative'>
            <Image
              src='/images/menu1.png'
              alt='menu1'
              width={240}
              height={240}
              className='w-[102px] h-[100px] lg:w-40 lg:h-40 xl:w-60 xl:h-60 absolute -top-[60%] lg:bottom-0'
            />
            <button className='bg-primary caption-md lg:body-xl rounded-md text-white w-[71px] lg:w-[155px] h-8 lg:h-12 px-2 lg:px-4 absolute top-[100%] -translate-y-1/2'>
              غذای اصلی
            </button>
          </li>

          <li className='border rounded-lg w-[152px] h-[81px] lg:w-52 lg:h-[120px] xl:w-72 xl:h-[180px] border-primary flex flex-col justify-center items-center relative'>
            <Image
              src='/images/menu2.png'
              alt='menu1'
              width={240}
              height={240}
              className='w-[102px] h-[100px] lg:w-40 lg:h-40 xl:w-60 xl:h-60 absolute -top-[60%] lg:bottom-0'
            />
            <button className='bg-primary caption-md lg:body-xl rounded-md text-white w-[71px] lg:w-[155px] h-8 lg:h-12 px-2 lg:px-4 absolute top-[100%] -translate-y-1/2'>
              پیش غذا
            </button>
          </li>

          <li className='border rounded-lg w-[152px] h-[81px] lg:w-52 lg:h-[120px] xl:w-72 xl:h-[180px] border-primary flex flex-col justify-center items-center relative'>
            <Image
              src='/images/menu3.png'
              alt='menu1'
              width={240}
              height={240}
              className='w-[102px] h-[100px] lg:w-40 lg:h-40 xl:w-60 xl:h-60 absolute -top-[60%] lg:bottom-0'
            />
            <button className='bg-primary caption-md lg:body-xl rounded-md text-white w-[71px] lg:w-[155px] h-8 lg:h-12 px-2 lg:px-4 absolute top-[100%] -translate-y-1/2'>
              دسر
            </button>
          </li>

          <li className='border rounded-lg w-[152px] h-[81px] lg:w-52 lg:h-[120px] xl:w-72 xl:h-[180px] border-primary flex flex-col justify-center items-center relative'>
            <Image
              src='/images/menu4.png'
              alt='menu1'
              width={240}
              height={240}
              className='w-[102px] h-[100px] lg:w-40 lg:h-40 xl:w-60 xl:h-60 absolute -top-[60%] lg:bottom-0'
            />
            <button className='bg-primary caption-md lg:body-xl rounded-md text-white w-[71px] lg:w-[155px] h-8 lg:h-12 px-2 lg:px-4 absolute top-[100%] -translate-y-1/2'>
              نوشیدنی
            </button>
          </li>
        </ul>
      </section>

      {/* ---------------    Introduction */}
      <section className="bg-[url('/images/intro-phone.png')] lg:bg-[url('/images/intro-desktop.png')] bg-cover h-[339px] lg:h-[390px] px-5 lg:px-[80px] py-4 lg:py-12 text-white mt-10 md:flex md:justify-between md:items-center">
        <div className='md:w-[45%]'>
          <p className='overlay-lg lg:hidden'>رستوران‌های زنجیره‌ای ترخینه</p>
          <h4 className='overlay-lg hidden lg:block'>
            رستوران‌های زنجیره‌ای ترخینه
          </h4>
          <p className='caption-sm my-2 lg:body-lg font-normal'>
            مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار
            ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در
            رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر
            پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور
            شان شما عزیزان ارائه دهیم.
          </p>

          <div className='flex justify-end items-center mt-2 lg:mt-4'>
            <div></div>
            <button className='caption-md py-1 lg:py-2 lg rounded border border-white w-[152px] lg:w-[184px] lg:flex justify-center items-center '>
              اطلاعات بیشتر <ArrowLeft2 className='hidden lg:flex mr-2' />{' '}
            </button>
          </div>
        </div>

        <ul className='mt-6 md:mt-0 text-white flex justify-center items-center flex-wrap md:w-[45%]'>
          <li className='flex justify-center items-center flex-col w-1/2 lg:w-[35%] mb-4 lg:mb-7'>
            <User className='lg:w-8 lg:h-8' />
            <span className='caption-md mt-1 lg:body-lg'>
              پرسنلی مجرب و حرفه‌ای
            </span>
          </li>

          <li className='flex justify-center items-center flex-col w-1/2 lg:w-[35%] mb-4 lg:mb-7'>
            <Diagram className='lg:w-8 lg:h-8' />
            <span className='caption-md mt-1 lg:body-lg'>
              کیفیت بالای غذاها
            </span>
          </li>

          <li className='flex justify-center items-center flex-col w-1/2 lg:w-[35%]'>
            <HomeWifi className='lg:w-8 lg:h-8' />
            <span className='caption-md mt-1 lg:body-lg'>
              محیطی دلنشین و آرام
            </span>
          </li>

          <li className='flex justify-center items-center flex-col w-1/2 lg:w-[35%]'>
            <MenuBoard className='lg:w-8 lg:h-8' />
            <span className='caption-md mt-1 lg:body-lg'>منوی متنوع</span>
          </li>
        </ul>
      </section>

      {/* ---------------    choose branch */}
      <section className='px-5 lg:px-20 py-6 lg:py-12 flex justify-center items-center flex-col'>
        <h6 className='lg:hidden mb-3'>ترخینه گردی</h6>
        <h4 className='hidden lg:block mb-6'>ترخینه گردی</h4>

        <ul className='grid grid-cols-1 gap-y-3 md:grid-cols-2 md:gap-x-3 lg:grid-cols-4'>
          <li className='choose-branch lg:hover:choose-branch-shadow'>
            <Image
              src='/images/choose-branch1-phone.png'
              alt='phone'
              width={144}
              height={80}
              className='lg:hidden h-full'
            />
            <Image
              src='/images/choose-branch1-desktop.png'
              alt='desktop'
              width={288}
              height={230}
              className='img-desktop hidden lg:block w-full h-[187px]  xl:h-[230px] duration-300 relative'
            />

            <span className='w-[58px] h-[58px] rounded-full bg-white/20 hidden justify-center items-center absolute top-1/4 left-6/12 z-10 '>
              <span className='w-[42px] h-[42px] rounded-full bg-white/30 flex justify-center items-center'>
                <Gallery size={32} color='#ffffff' />
              </span>
            </span>

            <div className='flex justify-center items-center flex-col py-2 px-1 lg:mb-2 text-gray-800'>
              <span className='button-sm lg:header-7 mb-1'>شعبه اکباتان</span>
              <p className='caption-sm text-center lg:caption-lg'>
                شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم
              </p>
              <button className='caption-md text-shade-200 border border-primary rounded hidden justify-between items-center py-1 px-6 mt-2'>
                صفحه شعبه <ArrowLeft2 size='16' className='mr-2' />{' '}
              </button>
            </div>
          </li>

          <li className='choose-branch lg:hover:choose-branch-shadow'>
            <Image
              src='/images/choose-branch2-phone.png'
              alt='phone'
              width={144}
              height={80}
              className='lg:hidden h-full'
            />
            <Image
              src='/images/choose-branch2-desktop.png'
              alt='desktop'
              width={288}
              height={230}
              className='img-desktop hidden lg:block w-full h-[187px]  xl:h-[230px] duration-300 relative'
            />

            <span className='w-[58px] h-[58px] rounded-full bg-white/20 hidden justify-center items-center absolute top-1/4 left-6/12 z-10 '>
              <span className='w-[42px] h-[42px] rounded-full bg-white/30 flex justify-center items-center'>
                <Gallery size={32} color='#ffffff' />
              </span>
            </span>

            <div className='flex justify-center items-center flex-col py-2 px-1 lg:mb-2 text-gray-800'>
              <span className='button-sm lg:header-7 mb-1'>شعبه چالوس</span>
              <p className='caption-sm text-center lg:caption-lg'>
                چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر
                میلانی
              </p>
              <button className='caption-md text-shade-200 border border-primary rounded hidden justify-between items-center py-1 px-6 mt-2'>
                صفحه شعبه <ArrowLeft2 size='16' className='mr-2' />{' '}
              </button>
            </div>
          </li>

          <li className='choose-branch lg:hover:choose-branch-shadow'>
            <Image
              src='/images/choose-branch3-phone.png'
              alt='phone'
              width={144}
              height={80}
              className='lg:hidden h-full'
            />
            <Image
              src='/images/choose-branch3-desktop.png'
              alt='desktop'
              width={288}
              height={230}
              className='img-desktop hidden lg:block w-full h-[187px]  xl:h-[230px] duration-300 relative'
            />

            <span className='w-[58px] h-[58px] rounded-full bg-white/20 hidden justify-center items-center absolute top-1/4 left-6/12 z-10 '>
              <span className='w-[42px] h-[42px] rounded-full bg-white/30 flex justify-center items-center'>
                <Gallery size={32} color='#ffffff' />
              </span>
            </span>

            <div className='flex justify-center items-center flex-col py-2 px-1 lg:mb-2 text-gray-800'>
              <span className='button-sm lg:header-7 mb-1'>شعبه اقدسیه</span>
              <p className='caption-sm text-center lg:caption-lg'>
                خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸
              </p>
              <button className='caption-md text-shade-200 border border-primary rounded hidden justify-between items-center py-1 px-6 mt-2'>
                صفحه شعبه <ArrowLeft2 size='16' className='mr-2' />{' '}
              </button>
            </div>
          </li>

          <li className='choose-branch lg:hover:choose-branch-shadow'>
            <Image
              src='/images/choose-branch4-phone.png'
              alt='phone'
              width={144}
              height={80}
              className='lg:hidden h-full'
            />
            <Image
              src='/images/choose-branch4-desktop.png'
              alt='desktop'
              width={288}
              height={230}
              className='img-desktop hidden lg:block w-full h-[187px]  xl:h-[230px] duration-300 relative'
            />

            <span className='w-[58px] h-[58px] rounded-full bg-white/20 hidden justify-center items-center absolute top-1/4 left-6/12 z-10 '>
              <span className='w-[42px] h-[42px] rounded-full bg-white/30 flex justify-center items-center'>
                <Gallery size={32} color='#ffffff' />
              </span>
            </span>

            <div className='flex justify-center items-center flex-col py-2 px-1 lg:mb-2 text-gray-800'>
              <span className='button-sm lg:header-7 mb-1'>شعبه ونک</span>
              <p className='caption-sm text-center lg:caption-lg'>
                میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶{' '}
              </p>
              <button className='caption-md text-shade-200 border border-primary rounded hidden justify-between items-center py-1 px-6 mt-2'>
                صفحه شعبه <ArrowLeft2 size='16' className='mr-2' />{' '}
              </button>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default HomePage;
