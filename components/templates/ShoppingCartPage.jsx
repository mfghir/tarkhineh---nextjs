import {
  ArrowRight2,
  ShoppingCart,
  TickSquare,
  Trash,
  Wallet,
} from 'iconsax-react';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ShoppingCartPage = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <section className='px-5 lg:px-20 py-2 lg:py-12  min-h-screen'>
      <div className='flex items-center my-6 lg:hidden'>
        <ArrowRight2 className='lg:hidden ml-4' size='16' />
        <p className='w-full header-6 text-gray-800 text-center mx-auto lg:text-right lg:pb-2 lg:border-b lg:border-gray-400'>
          سبد خرید
        </p>
        <Trash size='16' className={cart.length === 0 ? 'text-gray-400' : "text-gray-800"} />
      </div>

      {cart.length === 0 ? (
        <>
          <div className='justify-center items-center hidden lg:flex'>
            <span className='flex items-center justify-center text-primary header-6'>
              <ShoppingCart size='32' className='ml-1' />
              سبد خرید
            </span>

            <p className='w-52 border border-dashed  dash text-gray-400 border-gray-400 mx-1'></p>

            <span className='flex items-center justify-center text-gray-400 body-sm'>
              <TickSquare className='ml-1' />
              تکمیل اطلاعات
            </span>

            <p className='w-52 border border-dashed  dash text-gray-400 border-gray-400 mx-1'></p>

            <span className='flex items-center justify-center text-gray-400 body-sm'>
              <Wallet className='ml-1' />
              پرداخت
            </span>
          </div>

          <div className='bg-[url("/images/Empty-page.png")] bg-center bg-no-repeat min-h-[375px] border border-gray-400 rounded-lg  p-6 mt-6 flex justify-center items-center flex-col lg:mt-12'>
            <p className='caption-sm lg:body-xl text-gray-700'>
              شما در حال حاضر هیچ سفارشی ثبت نکرده‌اید!
            </p>
            <button className='caption-sm lg:button-lg rounded border border-primary text-primary hover:text-shade-200 hover:border-shade-200 active:text-shade-300 active:border-shade-300 duration-300 py-1 px-4 lg:px-12  mt-4 lg:mt-8'>
              منوی رستوران
            </button>
          </div>
        </>
      ) : (
        <section className='border border-gray-400 rounded-lg p-6 flex justify-center items-center flex-col'>
          {cart.map(item => (
            <div className='bg-red-500 w-full mb-5' key={item.id}>
              {/* <div className={styles.image}>
                <Image src={item.image} height='90' width='65' />
              </div> */}
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p>{item.quantity}</p>
              <p>{item.quantity * item.price}</p>
            </div>
          ))}
        </section>
      )}
    </section>
  );
};

export default ShoppingCartPage;
