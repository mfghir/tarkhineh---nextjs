import {
  Add,
  ArrowRight2,
  Card,
  DiscountShape,
  Minus,
  ShoppingCart,
  TickCircle,
  TickSquare,
  Trash,
  Wallet,
  Warning2,
} from 'iconsax-react';
import Link from 'next/link';
import React from 'react';
import { convertToFaNumber } from '../modules/FarsiNumber';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

const PaymentPage = () => {
  const [delivery, setDelivery] = useState('deliverySend');
  const [showModal, setShowModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  const totalDiscountPrice = getTotalDiscountPrice(cart);

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  function getTotalDiscountPrice(cart) {
    let totalDiscountPrice = 0;
    cart.map(item => {
      if (item.discountPrice) {
        totalDiscountPrice += parseFloat(item.discountPrice);
      }
    });
    return totalDiscountPrice;
  }

  return (
    <section className='px-5 lg:px-20 py-2 lg:py-12  min-h-screen'>
      <div className='flex items-center my-6 lg:hidden'>
        <ArrowRight2 className='lg:hidden ml-4' size='16' />
        <p className='w-full header-6 text-gray-800 text-center mx-auto lg:text-right lg:pb-2 lg:border-b lg:border-gray-400'>
          تکمیل اطلاعات
        </p>
      </div>

      <div className='justify-center items-center hidden lg:flex mb-12'>
        <span className='flex items-center justify-center text-gray-400 body-sm'>
          <TickSquare className='ml-1' />
          سبد خرید
        </span>

        <p className='w-52 border border-dashed  dash text-gray-400 border-gray-400 mx-1'></p>
        <span className='flex items-center justify-center text-gray-400 body-sm'>
          <Wallet className='ml-1' />
          تکمیل اطلاعات
        </span>

        <p className='w-52 border border-dashed  dash text-gray-400 border-gray-400 mx-1'></p>
        <span className='flex items-center justify-center text-primary header-6'>
          <ShoppingCart size='32' className='ml-1' />
          پرداخت
        </span>
      </div>

      <section className=' lg:grid grid-cols-5 gap-x-6'>
        <section className='col-span-3 '>
          <div className=' border border-gray-400 rounded-lg p-4 flex lg:justify-start items-center flex-col lg:flex-row mb-3'>
            <p className='w-full body-sm lg:body-md pb-1 flex items-center border-b lg:border-none border-gray-400 text-gray-800'>
              <DiscountShape className='w-4 h-4 lg:w-6 lg:h-6 ml-1' />
              ثبت کد تخفیف
            </p>

            <div className="w-full py-4 flex justify-center items-center">
                <input type="text" placeholder='کد تخفیف' className='w-fit outline-none border border-gray-400 text-gray-700 px-4 py-2 rounded' />
                <button className='bg-gray-400 text-gray-300 rounded px-2 py-1 mr-4'>ثبت کد</button>
            </div>
          </div>
        </section>

        <section className='col-span-2 rounded-lg border border-gray-400 p-6 h-fit'>
          <div className='w-full flex justify-between items-center border-b border-gray-400 body-sm pb-3'>
            <p className='body-md text-gray-800'>
              سبد خرید ({convertToFaNumber(cart.length)})
            </p>

            <button
              className='text-gray-800'
              onClick={() => setDeleteModal(true)}>
              <Trash />
            </button>
          </div>

          <div className='w-full h-44 overflow-y-scroll my-3'>
            {cart.map(item => {
              return (
                <div
                  className='w-full flex justify-between items-center p-2'
                  key={item.id}>
                  <p className='flex flex-col'>
                    <span className='body-sm text-gray-800'>{item.name}</span>
                    <span className='caption-md text-gray-700'>
                      {convertToFaNumber(item.price)}
                    </span>
                  </p>

                  <ul className='flex justify-center items-center bg-tint-100 p-1 rounded text-primary'>
                    <li className='' onClick={() => dispatch(addToCart(item))}>
                      <Add size='16' />
                    </li>

                    <li className='body-sm mx-2'>
                      {convertToFaNumber(item.quantity)}
                    </li>

                    <li className=''>
                      <button
                        className='w-4 h-4 block'
                        onClick={() => dispatch(removeFromCart(item))}>
                        {item.quantity <= 1 ? (
                          <Trash size='16' />
                        ) : (
                          <Minus size='16' />
                        )}
                      </button>
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>

          <div className='w-full flex justify-between items-center border-y border-gray-400 body-sm py-3'>
            <p className='text-gray-800'>تخفیف محصولات</p>
            <p className='text-gray-700'>
              {convertToFaNumber(totalDiscountPrice)} تومان
            </p>
          </div>

          <div className='w-full flex flex-col border-b border-gray-400 body-sm py-3'>
            <p className='flex justify-between items-center'>
              <span className='text-gray-800'>هزینه ارسال</span>
              <span className='text-gray-700'>
                {convertToFaNumber(0)} تومان
              </span>
            </p>

            <p className='text-warning flex justify-between items-start mt-2'>
              <Warning2 />
              <span className='caption-sm mr-2'>
                هزینه ارسال در ادامه بر اساس آدرس، زمان و نحوه ارسال انتخابی شما
                محاسبه و به این مبلغ اضافه خواهد شد.
              </span>
            </p>
          </div>

          <div className='w-full flex justify-between items-center body-sm py-3'>
            <p className='text-gray-800'>مبلغ قابل پرداخت</p>
            <p className='text-primary'>
              {convertToFaNumber(getTotalPrice())} تومان
            </p>
          </div>

          <Link href='/payment'>
            <button className='w-full bg-primary flex justify-center items-center hover:bg-shade-200 active:bg-shade-300 duration-300 rounded text-white py-2 caption-md lg:button-lg '>
              <Card className='ml-1' />
              تکمیل خرید
            </button>
          </Link>
        </section>
      </section>
    </section>
  );
};

export default PaymentPage;
