import { Gallery } from 'iconsax-react';
import Image from 'next/image';
import React from 'react';

const ContactPage = () => {
  return (
    <>
      <Image
        className='md:hidden'
        src='/images/contact/contact-header-phone.png'
        alt='contact-header-phone'
        width={360}
        height={176}
      />
      <Image
        className='hidden md:block'
        src='/images/contact/contact-header-desktop.png'
        alt='contact-header-desktop'
        width={1440}
        height={336}
      />

      <section className='px-5 lg:px-20 py-6 lg:py-12 '>
        <div className='card-contact lg:hover:card-contact-shadow  md:grid md:grid-cols-2 md:gap-5 mb-6'>
          <Image
            className='w-full md:hidden'
            src='/images/contact/contact-1-phone.png'
            alt='contact-1-phone'
            width={320}
            height={112}
          />

          <div className='pic-contact relative hidden md:block h-full'>
            <Image
              className='w-full h-full duration-300 '
              src='/images/contact/contact-1-desktop.png'
              alt='contact-1-desktop'
              width={602}
              height={280}
            />
            <span className='icon-pic w-[58px] h-[58px] rounded-full bg-white/20 hidden justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 '>
              <span className='w-[42px] h-[42px] rounded-full bg-white/30 flex justify-center items-center'>
                <Gallery size={32} color='#ffffff' />
              </span>
            </span>
          </div>

          <div className='w-full duration-300'>
            <p className='caption-md lg:header-7 text-gray-800 text-center py-1 md:pb-3 w-full'>
              شعبه اکباتان
            </p>

            <ul className='px-4 md:px-5 flex justify-center flex-col items-center duration-300'>
              <li className='w-full caption-sm lg:body-lg text-gray-700 text-center'>
                <p>
                  شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم
                </p>
                <p className='my-1 lg:my-2 flex justify-between items-center lg:flex-col test'>
                  <span>شماره تماس ۱: ۱۲۵۴ ۵۴۸۹ -۰۲۱</span>
                  <span className='md:mt-3'>شماره تماس ۲: ۱۲۵۵ ۵۴۸۹ -۰۲۱</span>
                </p>
                <p>
                  ساعت کاری: همه‌روزه از ساعت ۱۲ تا ۲۳ بجز روزهای تعطیل
                </p>
              </li>

              <li className='btn-contact grid grid-cols-2 gap-x-4 lg:hidden justify-center items-center mt-3 md:mt-6 mb-4 md:mb-6 w-full duration-300'>
                <button className='caption-sm lg:button-lg rounded border border-primary text-primary hover:text-shade-200 hover:border-shade-200 active:text-shade-300 active:border-shade-300 duration-300 py-1 lg:w-auto lg:px-4'>
                  صفحه شعبه
                </button>
                <button className='caption-sm lg:button-lg rounded bg-primary hover:bg-shade-200 active:bg-shade-300 duration-300 text-white mr-4 md:mr-5 py-1 lg:w-auto lg:px-4'>
                  دیدن در نقشه
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className='card-contact lg:hover:card-contact-shadow  md:grid md:grid-cols-2 md:gap-5 mb-6'>
          <Image
            className='w-full md:hidden'
            src='/images/contact/contact-2-phone.png'
            alt='contact-1-phone'
            width={320}
            height={112}
          />

          <div className='pic-contact relative hidden md:block h-full'>
            <Image
              className='w-full h-full duration-300 '
              src='/images/contact/contact-2-desktop.png'
              alt='contact-1-desktop'
              width={602}
              height={280}
            />
            <span className='icon-pic w-[58px] h-[58px] rounded-full bg-white/20 hidden justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 '>
              <span className='w-[42px] h-[42px] rounded-full bg-white/30 flex justify-center items-center'>
                <Gallery size={32} color='#ffffff' />
              </span>
            </span>
          </div>

          <div className='w-full duration-300'>
            <p className='caption-md lg:header-7 text-gray-800 text-center py-1 md:pb-3 w-full'>
              شعبه چالوس
            </p>

            <ul className='px-4 md:px-5 flex justify-center flex-col items-center duration-300'>
              <li className='w-full caption-sm lg:body-lg text-gray-700 text-center'>
                <p>
                  چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر
                  میلانی
                </p>
                <p className='my-1 lg:my-2 flex justify-between items-center lg:flex-col test'>
                  <span>شماره تماس ۱: ۱۲۵۴ ۵۴۸۹ -۰۲۱</span>
                  <span className='md:mt-3'>شماره تماس ۲: ۱۲۵۵ ۵۴۸۹ -۰۲۱</span>
                </p>
                <p>ساعت کاری: همه‌روزه از ساعت ۱۲ تا ۲۳ بجز روزهای تعطیل</p>
              </li>

              <li className='btn-contact grid grid-cols-2 gap-x-4 lg:hidden justify-center items-center mt-3 md:mt-6 mb-4 md:mb-6 w-full duration-300'>
                <button className='caption-sm lg:button-lg rounded border border-primary text-primary hover:text-shade-200 hover:border-shade-200 active:text-shade-300 active:border-shade-300 duration-300 py-1 lg:w-auto lg:px-4'>
                  صفحه شعبه
                </button>
                <button className='caption-sm lg:button-lg rounded bg-primary hover:bg-shade-200 active:bg-shade-300 duration-300 text-white mr-4 md:mr-5 py-1 lg:w-auto lg:px-4'>
                  دیدن در نقشه
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className='card-contact lg:hover:card-contact-shadow  md:grid md:grid-cols-2 md:gap-5 mb-6'>
          <Image
            className='w-full md:hidden'
            src='/images/contact/contact-3-phone.png'
            alt='contact-1-phone'
            width={320}
            height={112}
          />

          <div className='pic-contact relative hidden md:block h-full'>
            <Image
              className='w-full h-full duration-300 '
              src='/images/contact/contact-3-desktop.png'
              alt='contact-1-desktop'
              width={602}
              height={280}
            />
            <span className='icon-pic w-[58px] h-[58px] rounded-full bg-white/20 hidden justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 '>
              <span className='w-[42px] h-[42px] rounded-full bg-white/30 flex justify-center items-center'>
                <Gallery size={32} color='#ffffff' />
              </span>
            </span>
          </div>

          <div className='w-full duration-300'>
            <p className='caption-md lg:header-7 text-gray-800 text-center py-1 md:pb-3 w-full'>
              شعبه اقدسیه
            </p>

            <ul className='px-4 md:px-5 flex justify-center flex-col items-center duration-300'>
              <li className='w-full caption-sm lg:body-lg text-gray-700 text-center'>
                <p>خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸</p>
                <p className='my-1 lg:my-2 flex justify-between items-center lg:flex-col test'>
                  <span>شماره تماس ۱: ۱۲۵۴ ۵۴۸۹ -۰۲۱</span>
                  <span className='md:mt-3'>شماره تماس ۲: ۱۲۵۵ ۵۴۸۹ -۰۲۱</span>
                </p>
                <p>ساعت کاری: همه‌روزه از ساعت ۱۲ تا ۲۳ بجز روزهای تعطیل</p>
              </li>

              <li className='btn-contact grid grid-cols-2 gap-x-4 lg:hidden justify-center items-center mt-3 md:mt-6 mb-4 md:mb-6 w-full duration-300'>
                <button className='caption-sm lg:button-lg rounded border border-primary text-primary hover:text-shade-200 hover:border-shade-200 active:text-shade-300 active:border-shade-300 duration-300 py-1 lg:w-auto lg:px-4'>
                  صفحه شعبه
                </button>
                <button className='caption-sm lg:button-lg rounded bg-primary hover:bg-shade-200 active:bg-shade-300 duration-300 text-white mr-4 md:mr-5 py-1 lg:w-auto lg:px-4'>
                  دیدن در نقشه
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className='card-contact lg:hover:card-contact-shadow  md:grid md:grid-cols-2 md:gap-5 '>
          <Image
            className='w-full md:hidden'
            src='/images/contact/contact-4-phone.png'
            alt='contact-1-phone'
            width={320}
            height={112}
          />

          <div className='pic-contact relative hidden md:block h-full'>
            <Image
              className='w-full h-full duration-300 '
              src='/images/contact/contact-4-desktop.png'
              alt='contact-1-desktop'
              width={602}
              height={280}
            />
            <span className='icon-pic w-[58px] h-[58px] rounded-full bg-white/20 hidden justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 '>
              <span className='w-[42px] h-[42px] rounded-full bg-white/30 flex justify-center items-center'>
                <Gallery size={32} color='#ffffff' />
              </span>
            </span>
          </div>

          <div className='w-full duration-300'>
            <p className='caption-md lg:header-7 text-gray-800 text-center py-1 md:pb-3 w-full'>
              شعبه ونک
            </p>

            <ul className='px-4 md:px-5 flex justify-center flex-col items-center duration-300'>
              <li className='w-full caption-sm lg:body-lg text-gray-700 text-center'>
                <p>میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶</p>
                <p className='my-1 lg:my-2 flex justify-between items-center lg:flex-col test'>
                  <span>شماره تماس ۱: ۱۲۵۴ ۵۴۸۹ -۰۲۱</span>
                  <span className='md:mt-3'>شماره تماس ۲: ۱۲۵۵ ۵۴۸۹ -۰۲۱</span>
                </p>
                <p>ساعت کاری: همه‌روزه از ساعت ۱۲ تا ۲۳ بجز روزهای تعطیل</p>
              </li>

              <li className='btn-contact grid grid-cols-2 gap-x-4 lg:hidden justify-center items-center mt-3 md:mt-6 mb-4 md:mb-6 w-full duration-300'>
                <button className='caption-sm lg:button-lg rounded border border-primary text-primary hover:text-shade-200 hover:border-shade-200 active:text-shade-300 active:border-shade-300 duration-300 py-1 lg:w-auto lg:px-4'>
                  صفحه شعبه
                </button>
                <button className='caption-sm lg:button-lg rounded bg-primary hover:bg-shade-200 active:bg-shade-300 duration-300 text-white mr-4 md:mr-5 py-1 lg:w-auto lg:px-4'>
                  دیدن در نقشه
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
