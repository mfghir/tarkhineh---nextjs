import {
  Add,
  ArrowLeft2,
  ArrowRight2,
  CloseCircle,
  Document,
  Location,
  Minus,
  ShoppingBag,
  ShoppingCart,
  TickCircle,
  TickSquare,
  Trash,
  Truck,
  TruckFast,
  User,
  Wallet,
  Warning2,
} from 'iconsax-react';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { convertToFaNumber } from '../modules/FarsiNumber';

import { addToCart, removeFromCart } from '@/redux/cartSlice';
import ModalMessage from '../modules/ModalMessage';
import { Radio, Typography } from '@material-tailwind/react';

import DeliveryPlace from './DeliveryPlace';
import Link from 'next/link';

const DeliveryCompletionPage = () => {
  const [delivery, setDelivery] = useState('deliverySend');
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

  const onOptionChange = e => {
    setDelivery(e.target.value);
  };

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
          <ShoppingCart size='32' className='ml-1' />
          سبد خرید
        </span>

        <p className='w-52 border border-dashed  dash text-gray-400 border-gray-400 mx-1'></p>
        <span className='flex items-center justify-center text-primary header-6'>
          <TickSquare className='ml-1' />
          تکمیل اطلاعات
        </span>

        <p className='w-52 border border-dashed  dash text-gray-400 border-gray-400 mx-1'></p>
        <span className='flex items-center justify-center text-gray-400 body-sm'>
          <Wallet className='ml-1' />
          پرداخت
        </span>
      </div>

      <>
        <section className='lg:hidden border border-gray-400 rounded-lg p-4 flex justify-between lg:flex-row items-center flex-col mb-3'>
          <div className='body-sm lg:body-md w-full  pb-2 lg:pb-0 flex lg:flex-row justify-start items-center border-b border-gray-400 lg:border-none text-gray-800 whitespace-nowrap'>
            <Truck className='w-4 h-4 lg:w-6 lg:h-6 ml-1' />
            روش تحویل سفارش
          </div>

          <div className='w-full flex flex-row items-center text-gray-700'>
            <Radio
              value='deliverySend'
              checked={delivery === 'deliverySend'}
              onChange={onOptionChange}
              name='delivery'
              color='green'
              label={
                <div className=''>
                  <Typography className='caption-md lg:body-sm '>
                    ارسال توسط پیک
                  </Typography>
                  <Typography
                    variant='small'
                    className='hidden lg:block caption-sm'>
                    توسط پیک رستوران ارسال شود.
                  </Typography>
                </div>
              }
              containerProps={{
                className: 'flex',
              }}
            />

            <TruckFast className='w-4 h-4 lg:w-6 lg:h-6 mr-1' />
          </div>

          <div className='w-full flex flex-row items-center text-gray-700'>
            <Radio
              value='placeSend'
              checked={delivery === 'placeSend'}
              onChange={onOptionChange}
              name='delivery'
              color='green'
              label={
                <div className=''>
                  <Typography className='caption-md lg:body-sm '>
                    تحویل حضوری
                  </Typography>
                  <Typography
                    variant='small'
                    className='hidden lg:block caption-sm'>
                    توسط پیک رستوران ارسال شود.
                  </Typography>
                </div>
              }
              containerProps={{
                className: 'flex',
              }}
            />

            <ShoppingBag className='w-4 h-4 lg:w-6 lg:h-6 mr-1' />
          </div>

          {/* <ul className='w-full  flex flex-col lg:flex-row justify-center lg:justify-between items-center mt-3'> 
             <li className='w-full flex flex-row text-gray-700 mb-2 lg:mb-0'>
              <Radio id='green' name='color' color='#00BA88' />
              <p className='flex flex-col mx-2'>
                <span className='caption-md lg:body-sm'>ارسال توسط پیک</span>
                <span className='hidden caption-sm'>
                  توسط پیک رستوران ارسال شود.
                </span>
              </p>
              <TruckFast className='w-4 h-4 lg:w-6 lg:h-6' />
            </li>

            <li className='w-full flex flex-row text-gray-700'>
              <input type='radio' className='accent-success-light' />
              <p className='flex flex-col mx-2'>
                <span className='caption-md lg:body-sm'>تحویل حضوری</span>
                <span className='hidden caption-sm'>
                  توسط پیک رستوران ارسال شود.
                </span>
              </p>
              <ShoppingBag className='w-4 h-4 lg:w-6 lg:h-6' />
            </li> 

          </ul> */}
        </section>

        {delivery === 'deliverySend' ? (
          <>
            <section className='lg:hidden h-[180px] border border-gray-400 rounded-lg p-4 flex flex-col mb-3'>
              <div className='w-full pb-2 lg:pb-0 flex justify-between items-center border-b border-gray-400'>
                <p className='body-sm lg:body-md text-gray-800 flex justify-center items-center'>
                  <Location className='w-4 h-4 lg:w-6 lg:h-6 ml-1' />
                  آدرس‌ها
                </p>

                <p className='caption-md text-primary flex justify-center items-center'>
                  <CloseCircle size='16' className='ml-1' />
                  افزودن آدرس
                </p>
              </div>

              <p className='caption-sm lg:body-sm text-gray-600 text-center my-auto'>
                شما در حال حاضر هیچ آدرسی ثبت نکرده‌اید!
              </p>
            </section>

            <section className='lg:hidden relative h-[180px] border border-gray-400 rounded-lg text-gray-700 lg:text-gray-800 mb-3'>
              <textarea className='w-full h-full p-4 ' />

              <div className='flex justify-center items-center absolute top-4 right-4'>
                <p className='caption-md flex justify-center items-center'>
                  <Document className='w-4 h-4 lg:w-6 lg:h-6 ml-1' />
                  توضیحات سفارش
                </p>

                <span className=' caption-sm lg:caption-md  mr-1 '>
                  (اختیاری)
                </span>
              </div>
            </section>

            <section className='lg:hidden border border-gray-400 rounded-lg p-6 flex justify-center items-center flex-col'>
              <div className='w-full flex justify-between items-center border-b border-gray-400 body-sm pb-3'>
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
                  <span className='caption-sm mr-2'>
                    هزینه ارسال در ادامه بر اساس آدرس، زمان و نحوه ارسال انتخابی
                    شما محاسبه و به این مبلغ اضافه خواهد شد.
                  </span>
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
          </>
        ) : (
          <section className='lg:hidden'>
            <DeliveryPlace />
          </section>
        )}

        {/* ------------------- desktop */}
        <section className='hidden lg:grid grid-cols-5 gap-x-6'>
          <section className='col-span-3 '>
            <div className='border border-gray-400 rounded-lg p-4 flex justify-between lg:flex-row items-center flex-col mb-3'>
              <div className='body-sm lg:body-md w-full  pb-2 lg:pb-0 flex lg:flex-row justify-start items-center border-b border-gray-400 lg:border-none text-gray-800 whitespace-nowrap'>
                <Truck className='w-4 h-4 lg:w-6 lg:h-6 ml-1' />
                روش تحویل سفارش
              </div>

              <div className='w-full flex flex-row items-center text-gray-700'>
                <Radio
                  value='deliverySend'
                  checked={delivery === 'deliverySend'}
                  onChange={onOptionChange}
                  name='delivery'
                  color='green'
                  label={
                    <div className=''>
                      <Typography className='caption-md lg:body-sm '>
                        ارسال توسط پیک
                      </Typography>
                      <Typography
                        variant='small'
                        className='hidden lg:block caption-sm'>
                        توسط پیک رستوران ارسال شود.
                      </Typography>
                    </div>
                  }
                  containerProps={{
                    className: 'flex',
                  }}
                />

                <TruckFast className='w-4 h-4 lg:w-6 lg:h-6 mr-1' />
              </div>

              <div className='w-full flex flex-row items-center text-gray-700'>
                <Radio
                  value='placeSend'
                  checked={delivery === 'placeSend'}
                  onChange={onOptionChange}
                  name='delivery'
                  color='green'
                  label={
                    <div className=''>
                      <Typography className='caption-md lg:body-sm '>
                        تحویل حضوری
                      </Typography>
                      <Typography
                        variant='small'
                        className='hidden lg:block caption-sm'>
                        توسط پیک رستوران ارسال شود.
                      </Typography>
                    </div>
                  }
                  containerProps={{
                    className: 'flex',
                  }}
                />

                <ShoppingBag className='w-4 h-4 lg:w-6 lg:h-6 mr-1' />
              </div>
            </div>

            {delivery === 'deliverySend' ? (
              <>
                <div className='h-[180px] border border-gray-400 rounded-lg p-4 flex flex-col mb-3'>
                  <div className='w-full pb-2 lg:pb-0 flex justify-between items-center border-b border-gray-400'>
                    <p className='body-sm lg:body-md text-gray-800 flex justify-center items-center'>
                      <Location className='w-4 h-4 lg:w-6 lg:h-6 ml-1' />
                      آدرس‌ها
                    </p>

                    <p className='caption-md text-primary flex justify-center items-center'>
                      <CloseCircle size='16' className='ml-1' />
                      افزودن آدرس
                    </p>
                  </div>

                  <p className='caption-sm lg:body-sm text-gray-600 text-center my-auto'>
                    شما در حال حاضر هیچ آدرسی ثبت نکرده‌اید!
                  </p>
                </div>

                <div className='relative h-[180px] border border-gray-400 rounded-lg text-gray-700 lg:text-gray-800 mb-3'>
                  <textarea className='w-full h-full p-4 ' />

                  <div className='flex justify-center items-center absolute top-4 right-4'>
                    <p className='caption-md flex justify-center items-center'>
                      <Document className='w-4 h-4 lg:w-6 lg:h-6 ml-1' />
                      توضیحات سفارش
                    </p>

                    <span className=' caption-sm lg:caption-md  mr-1 '>
                      (اختیاری)
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <DeliveryPlace />
            )}
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
                <Warning2 />
                <span className='caption-sm mr-2'>
                  هزینه ارسال در ادامه بر اساس آدرس، زمان و نحوه ارسال انتخابی
                  شما محاسبه و به این مبلغ اضافه خواهد شد.
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
                ثبت سفارش
                <TickCircle className='mr-1' />
              </button>
            </Link>
          </section>
        </section>
      </>

      {deleteModal ? <ModalMessage /> : ''}
    </section>
  );
};

export default DeliveryCompletionPage;
