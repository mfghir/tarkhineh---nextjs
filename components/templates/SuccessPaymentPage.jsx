import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SuccessPaymentPage = () => {
  return (
    <section className='px-5 lg:px-20 min-h-screen flex flex-col justify-center items-center bg-[url("/images/Celebration-phone.png")] bg-cover bg-center lg:bg-none'>


<Image
                    className='w-[120px] h-28 lg:w-64 lg:h-60 mb-6 lg:mb-12 '
                    src='/images/success.png'
                    alt='Bank1'
                    width={256}
                    height={240}
                  />


      <p className='header-6 lg:header-2 text-primary mt-6 lg:mt-12 mb-4 lg:mb-6'>پرداخت شما با موفقیت انجام شد!</p>
      <p className='caption-md lg:body-xl text-primary'>کد رهگیری سفارش شما: ۲۱۵۴۹۰۱۹</p>

      <div className='w-full lg:w-auto grid grid-cols-2 gap-x-4 lg:gap-x-6 mt-12'>
        <Link href='/'>
          <button className='w-full lg:w-auto caption-sm lg:button-lg rounded border border-primary text-primary hover:text-shade-200 hover:border-shade-200 active:text-shade-300 active:border-shade-300 duration-300 py-1 px-4 lg:px-8'>
            بازگشت به صفحه اصلی
          </button>
        </Link>
        <button className='w-full lg:w-auto caption-sm lg:button-lg rounded bg-primary hover:bg-shade-200 active:bg-shade-300 duration-300 text-white py-1 px-4 lg:px-8 '>
          پیگیری سفارش
        </button>
      </div>
    </section>
  );
};

export default SuccessPaymentPage;
