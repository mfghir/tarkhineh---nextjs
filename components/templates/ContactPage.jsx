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

      <section className='px-5 lg:px-20 py-6 lg:py-12'>
        <div className='md:flex md:justify-center rounded lg:rounded-lg border border-gray-400 overflow-hidden'>
          <Image
            className='md:hidden'
            src='/images/contact/contact-1-phone.png'
            alt='contact-1-phone'
            width={320}
            height={112}
          />
          <Image
            className='hidden md:block md:w-1/2'
            src='/images/contact/contact-1-desktop.png'
            alt='contact-1-desktop'
            width={602}
            height={280}
          />

          <div className='md:mr-5'>
            <p className='caption-md lg:header-7 text-gray-800 text-center py-1 md:pb-3 w-full'>
              شعبه اکباتان
            </p>

            <ul className='px-4 md:px-5 flex justify-center flex-col items-center'>
              <li className='w-full caption-sm lg:body-lg text-gray-700 text-center'>
                <p className=''>
                  شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم
                </p>
                <p className='my-1 lg:my-3 flex justify-between items-center lg:flex-col'>
                  <span className=''>شماره تماس ۱: ۱۲۵۴ ۵۴۸۹ -۰۲۱</span>
                  <span className='md:mt-3'>شماره تماس ۲: ۱۲۵۵ ۵۴۸۹ -۰۲۱</span>
                </p>
                <p className=''>
                  ساعت کاری: همه‌روزه از ساعت ۱۲ تا ۲۳ بجز روزهای تعطیل
                </p>
              </li>

              <li className='flex justify-center items-center mt-3 md:mt-6 mb-4 md:mb-6 w-full'>

                <button className='caption-sm lg:button-lg rounded border border-primary text-primary hover:text-shade-200 hover:border-shade-200 active:text-shade-300 active:border-shade-300 duration-300 py-1 w-1/2 lg:w-auto lg:px-4'>
                  صفحه شعبه
                </button>
                <button className='caption-sm lg:button-lg rounded bg-primary hover:bg-shade-200 active:bg-shade-300 duration-300 text-white mr-4 md:mr-5 py-1 w-1/2 lg:w-auto lg:px-4'>
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
