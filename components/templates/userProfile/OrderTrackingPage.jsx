import { useRouter } from 'next/router';
import ProfileMenu from './ProfileMenu';
import {
  ArrowRight2,
  Box,
  Calendar,
  Clock,
  CloseCircle,
  Home,
  Location,
  TickCircle,
  TickSquare,
  Wallet2,
} from 'iconsax-react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import orderTrackingData from '@/db/orderTrackingData';
import Image from 'next/image';
import { convertToFaNumber } from '@/components/modules/FarsiNumber';
import { useState } from 'react';

const OrderTrackingPage = () => {
  const { push } = useRouter();
  const cart = useSelector(state => state.cart.items);

  const currentOrder = orderTrackingData.filter(
    food => food.type === 'current'
  );
  const canceledOrder = orderTrackingData.filter(
    food => food.type === 'canceled'
  );
  const deliveredOrder = orderTrackingData.filter(
    food => food.type === 'delivered'
  );

  const [seeMore, setSeeMore] = useState(false);

  return (
    <section className='px-5 lg:px-20 py-2 lg:py-12 lg:flex lg:flex-row lg:justify-between min-h-screen '>
      <div className='hidden lg:block lg:w-[25%] h-full  min-h-screen'>
        <ProfileMenu />
      </div>

      <section className='lg:w-[73%] lg:border lg:border-gray-400 lg:rounded-lg lg:p-6'>
        <div className='flex items-center'>
          <ArrowRight2
            className='lg:hidden ml-4'
            size='16'
            onClick={() => push('/profile')}
          />
          <p className='w-full header-7 lg:header-6 text-gray-800 text-center lg:text-right lg:pb-2 lg:border-b lg:border-gray-400'>
            سفارشات
          </p>
        </div>

        {cart.length === 0 ? (
          <div className='bg-[url("/images/Empty-page.png")] bg-center bg-no-repeat min-h-[375px]   p-6 mt-6 flex justify-center items-center flex-col lg:mt-12'>
            <p className='caption-sm lg:body-xl text-gray-700'>
              شما در حال حاضر هیچ سفارشی ثبت نکرده‌اید!
            </p>

            <Link href='/menu'>
              <button className='caption-sm lg:button-lg rounded border border-primary text-primary hover:text-shade-200 hover:border-shade-200 active:text-shade-300 active:border-shade-300 duration-300 py-1 px-4 lg:px-12  mt-4 lg:mt-8'>
                منوی رستوران
              </button>
            </Link>
          </div>
        ) : (
          <section className='flex justify-start items-start flex-col'>
            <ul className='flex justify-start items-star mt-3 lg:mt-4'>
              <li className='flex justify-center items-center text-primary bg-tint-100 p-1 lg:px-3  rounded-lg lg:rounded-full whitespace-nowrap ml-2'>
                <CloseCircle className='w-4 h-4 lg:w-6 lg:h-6 text-gray-700' />
                <p className='caption-sm lg:overline-lg mx-2'>همه</p>
                <TickSquare className='w-4 h-4 lg:w-6 lg:h-6' />
              </li>
              <li className='caption-sm lg:overline-lg text-gray-800 bg-gray-300 px-3 py-1 rounded-lg lg:rounded-full whitespace-nowrap ml-2'>
                جاری
              </li>
              <li className='caption-sm lg:overline-lg text-gray-800 bg-gray-300 px-3 py-1 rounded-lg lg:rounded-full whitespace-nowrap ml-2'>
                تحویل شده
              </li>
              <li className='caption-sm lg:overline-lg text-gray-800 bg-gray-300 px-3 py-1 rounded-lg lg:rounded-full whitespace-nowrap '>
                لغو شده
              </li>
            </ul>

            <div className='w-full h-fit py-2 px-3 lg:p-6 mt-6 lg:mt-8 border border-gray-400 rounded'>
              <div className='flex justify-between items-center mb-4 lg:mb-3'>
                <p className='caption-md lg:body-sm text-gray-600'>
                  شعبه اقدسیه
                </p>

                <p className='flex justify-center items-center caption-sm lg:caption-md'>
                  <span className='text-gray-800 py-[2px] px-1 lg:px-3 rounded bg-gray-300'>
                    تحویل حضوری
                  </span>
                  <span className='text-warning bg-warning-lighter py-[2px] px-4 lg:px-3'>
                    جاری
                  </span>
                </p>
              </div>

              <ul className='w-full flex flex-col items-start text-gray-700 caption-sm'>
                <li className='w-full flex justify-between items-center'>
                  <p className='flex justify-center items-center'>
                    <Calendar className='w-3 h-3 lg:w-4 lg:h-4 ml-1' />
                    <span>شنبه، ۸ مرداد، ساعت ۱۸:۵۳</span>
                    <span className='mx-1'>مبلغ: ۲۲۸٬۵۰۰ تومان</span>
                    <span>تخفیف: ۲۸٬۵۰۰ تومان </span>
                  </p>

                  <p className='flex justify-center items-center lg:caption-md'>
                    <Clock size='16' className='ml-1' />
                    آماده تحویل تا
                    <span className='mr-1 text-primary'>۲۵:۳۳</span>
                  </p>
                </li>

                <li className='flex justify-center items-center my-2'>
                  <Location className='w-3 h-3 lg:w-4 lg:h-4 ml-1' />
                  تهران: اقدسیه، بزرگراه ارتش، مجتمع شمیران سنتر، طبقه ۱۰
                </li>

                <li className='flex justify-center items-center lg:hidden'>
                  <Wallet2 className='w-3 h-3 lg:w-4 lg:h-4 ml-1' />
                  <span className=''>مبلغ: ۲۲۸٬۵۰۰ تومان</span>
                  <span className='mr-1'>تخفیف: ۲۸٬۵۰۰ تومان </span>
                </li>
              </ul>

              <ul className='w-full flex justify-center items-center my-4 lg:mt-3 text-gray-400'>
                <li className='flex justify-center items-center text-primary'>
                  <Home className='' />
                  <span className='hidden whitespace-nowrap lg:block lg:mr-1 header-6'>
                    در حال آماده‌سازی
                  </span>
                </li>

                <li className='w-full border border-dashed text-gray-400 border-gray-400 mx-1 lg:mx-2'></li>

                <li className='flex justify-center items-center'>
                  <Box className='w-4 h-4 lg:w-6 lg:h-6' />
                  <span className='hidden whitespace-nowrap lg:block lg:mr-1 body-sm'>
                    ارسال توسط پیک
                  </span>
                </li>

                <li className='w-full border border-dashed text-gray-400 border-gray-400 mx-1 lg:mx-2'></li>

                <li className='flex justify-center items-center'>
                  <TickCircle className='w-4 h-4 lg:w-6 lg:h-6' />
                  <span className='hidden whitespace-nowrap lg:block lg:mr-1 body-sm'>
                    تحویل سفارش
                  </span>
                </li>
              </ul>

              <ul className='bg-red-200 flex justify-center items-center gap-x-2'>
                
              
                {currentOrder.slice(0, seeMore ? currentOrder.length : 3).map(item => (
                  <div
                    key={item.id}
                    className=' rounded-lg flex flex-col items-center justify-center'>
                    <div className='relative w-full'>
                      <Image
                        src={item.img}
                        alt={item.name}
                        fill
                        className='w-full h-[48px] lg:h-[81px]'
                      />
                      <span className='absolute bottom-2 left-2'>
                        {convertToFaNumber(item.num)}
                      </span>
                    </div>
                    <p className='caption-sm'>{item.name}</p>
                    <p className='caption-sm'>
                      {convertToFaNumber(item.price)}تومان
                    </p>
                  </div>
                ))}


              </ul>

<button className="caption-sm text-gray-700 mt-2" onClick={()=> setSeeMore(!seeMore) }>مشاهده همه سفارشات</button>

            </div>
          </section>
        )}
      </section>
    </section>
  );
};

export default OrderTrackingPage;
