import {
  Add,
  ArrowLeft2,
  ArrowRight2,
  Minus,
  ShoppingCart,
  TickSquare,
  Trash,
  User,
  Wallet,
  Warning2,
} from 'iconsax-react';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { convertToFaNumber } from '../modules/FarsiNumber';

import {
  addToCart,
  clearList,
  deleteOneItemFromCart,
  removeFromCart,
} from '@/redux/cartSlice';

import Link from 'next/link';
import Image from 'next/image';
import ModalShoppinCart from '../modules/ModalShoppinCart';

import StarRating from '../modules/StarRating ';
import ModalMessage from '../modules/ModalMessage';

const ShoppingCartPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const dispatch = useDispatch();
  
  const cart = useSelector(state => state.cart);
  const totalDiscountPrice = getTotalDiscountPrice(cart);
  const buttonClicked = useSelector(state => state.button);

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
          سبد خرید
        </p>

        <button onClick={() => setDeleteModal(!deleteModal)}>
          <Trash
            size='16'
            className={cart.length === 0 ? 'text-gray-400' : 'text-gray-800'}
          />
        </button>
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

            <Link href='/menu'>
              <button className='caption-sm lg:button-lg rounded border border-primary text-primary hover:text-shade-200 hover:border-shade-200 active:text-shade-300 active:border-shade-300 duration-300 py-1 px-4 lg:px-12  mt-4 lg:mt-8'>
                منوی رستوران
              </button>
            </Link>
          </div>
        </>
      ) : (
        <>
          <section className='lg:hidden border border-gray-400 rounded-lg p-6 flex justify-center items-center flex-col'>
            <div className='w-full h-44 overflow-y-scroll pb-3'>
              {cart.map(item => {
                return (
                  <div
                    className='w-full flex justify-between items-center p-2'
                    key={item.id}>
                    <p className='flex flex-col'>
                      <span className='caption-md lg:header-7 text-gray-800'>
                        {item.name}
                      </span>
                      <span className='caption-sm text-gray-700'>
                        {convertToFaNumber(item.price)}
                      </span>
                    </p>

                    <ul className='flex justify-center items-center bg-tint-100 p-1 rounded text-primary'>
                      <li
                        className=''
                        onClick={() => dispatch(addToCart(item))}>
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
                <Warning2 size='16' />
                <p className='caption-sm mr-2'>
                  هزینه ارسال در ادامه بر اساس آدرس، زمان و نحوه ارسال انتخابی
                  شما محاسبه و به این مبلغ اضافه خواهد شد.
                </p>
              </p>
            </div>

            <div className='w-full flex justify-between items-center body-sm py-3'>
              <p className='text-gray-800'>مبلغ قابل پرداخت</p>
              <p className='text-primary'>
                {convertToFaNumber(getTotalPrice())} تومان
              </p>
            </div>

            <button
              className='w-full bg-primary flex justify-center items-center hover:bg-shade-200 active:bg-shade-300 duration-300 rounded text-white py-2 caption-md lg:button-lg '
              onClick={() => setShowModal(!showModal)}>
              <User size='16' className='ml-1' />
              ورود/ثبت‌نام
            </button>
          </section>

          <section className='hidden lg:grid grid-cols-5 gap-x-6'>
            <section className='col-span-3 h-[400px] overflow-y-scroll border border-gray-400 p-6 rounded-lg'>
              <div className='w-full h-full overflow-y-scroll pb-3'>
                {cart.map(item => {
                  const {
                    id,
                    name,
                    img,
                    ingredient,
                    discount,
                    discountPrice,
                    price,
                    star,
                  } = item;

                  return (
                    <div
                      className='w-full flex flex-row rounded-lg border border-gray-400 overflow-hidden mb-4'
                      key={id}>
                      <Image
                        className='object-cover h-[158px] w-[169px]'
                        src={img}
                        alt={name}
                        width={169}
                        height={158}
                      />
                      

                      <ul className='w-full p-4'>
                        <li className='flex justify-between items-center'>
                          <p className='header-7 text-gray-800'>{name}</p>

                          <button
                            className='text-gray-800'
                            onClick={() =>
                              dispatch(deleteOneItemFromCart(item))
                            }>
                            <Trash />
                          </button>
                        </li>

                        <li className='flex justify-between items-center text-gray-800 mt-2 mb-1 '>
                          <p className='caption-sm lg:caption-md line-clamp-1'>
                            {ingredient}
                          </p>

                          <p className='flex justify-center items-center flex-row-reverse caption-sm lg:caption-md'>
                            <span className='text-error mr-2'>{discount}</span>
                            <span className='text-gray-500 line-through'>
                              {convertToFaNumber(discountPrice)}
                            </span>
                          </p>
                        </li>

                        <li className='flex justify-between items-center w-full'>
                          <div className='w-full flex justify-start items-center'>
                            <span className='ml-6'>
                              <StarRating rating={star} />
                            </span>

                            <ul className='flex justify-center items-center bg-tint-100 p-1 rounded text-primary'>
                              <li
                                className=''
                                onClick={() => dispatch(addToCart(item))}>
                                <Add size='16' />
                              </li>

                              <li className='body-sm mx-2'>
                                {convertToFaNumber(item.quantity)}
                              </li>

                              <li className=''>
                                <button
                                  className='w-4 h-4 block'
                                  onClick={() =>
                                    dispatch(removeFromCart(item))
                                  }>
                                  {item.quantity <= 1 ? (
                                    <Trash size='16' />
                                  ) : (
                                    <Minus size='16' />
                                  )}
                                </button>
                              </li>
                            </ul>
                          </div>

                          <p className='caption-sm lg:body-lg whitespace-nowrap mr-2'>
                            {convertToFaNumber(price)} تومان
                          </p>
                        </li>
                      </ul>
                    </div>
                  );
                })}
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

              <div className='w-full flex justify-between items-center border-b border-gray-400 body-sm py-3'>
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
                  <p className='caption-sm mr-2'>
                    هزینه ارسال در ادامه بر اساس آدرس، زمان و نحوه ارسال انتخابی
                    شما محاسبه و به این مبلغ اضافه خواهد شد.
                  </p>
                </p>
              </div>

              <div className='w-full flex justify-between items-center body-sm py-3'>
                <p className='text-gray-800'>مبلغ قابل پرداخت</p>
                <p className='text-primary'>
                  {convertToFaNumber(getTotalPrice())} تومان
                </p>
              </div>

              <button
                className='w-full bg-primary flex justify-center items-center hover:bg-shade-200 active:bg-shade-300 duration-300 rounded text-white py-2 caption-md lg:button-lg '
                onClick={() => setShowModal(!showModal)}>
                {buttonClicked ? (
                  <>
                    مرحله بعد
                    <ArrowLeft2 className='mr-1' />
                  </>
                ) : (
                  <>
                    <User size='16' className='ml-1' />
                    ورود/ثبت‌نام
                  </>
                )}
              </button>
            </section>
          </section>
        </>
      )}

      {showModal ? <ModalShoppinCart /> : ''}
      {deleteModal ? <ModalMessage /> : ''}
    </section>
  );
};

export default ShoppingCartPage;
