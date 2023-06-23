import { Checkbox } from '@material-tailwind/react';
import { Bank, Book, Chart, Component, EmptyWallet } from 'iconsax-react';
import Image from 'next/image';
import React from 'react';
import DragDrop from '../modules/DragDrop';

const AgencyPage = () => {
  return (
    <>
      <div className='relative flex flex-col justify-center items-center'>
        <Image
          className='w-full h-[176px] lg:h-[336px] object-cover'
          src='/images/agency-desktop.png'
          alt='agency-desktop'
          width={360}
          height={176}
        />

        <p className='header-6 lg:header-2 w-full text-tint-100 absolute mx-auto text-center'>
          همین الان به خانواده بزرگ ترخینه بپیوندید!
        </p>
      </div>

      <section className='py-4 lg:py-12 px-5 lg:px-20 '>
        <ul className='grid grid-cols-1  xs-p:grid-cols-2 gap-8 md:flex md:justify-between lg:justify-center mx-auto'>
          <li className='flex justify-center items-center flex-col w-full lg:w-[184px]'>
            <span className='w-[70px] h-[70px] lg:p-[30px] lg:w-32 lg:h-32 text-primary rounded-full border-4 border-primary flex justify-center items-center'>
              <Bank className='w-8 h-8 lg:w-20 lg:h-20' />
            </span>
            <p className='body-sm lg:body-lg text-gray-800 mt-2 lg:mt-4 text-center '>
              بیش از 20 شعبه فعال در سراسر کشور
            </p>
          </li>

          <li className='flex justify-center items-center flex-col w-full lg:w-[184px] lg:mr-12'>
            <span className='w-[70px] h-[70px]  lg:p-[30px] lg:w-32 lg:h-32 text-primary rounded-full border-4 border-primary flex justify-center items-center'>
              <EmptyWallet className='w-8 h-8 lg:w-20 lg:h-20' />
            </span>
            <p className='body-sm lg:body-lg text-gray-800 mt-2 lg:mt-4 text-center'>
              تسهیلات راه‌اندازی رستوران و تجهیز آن{' '}
            </p>
          </li>

          <li className='flex justify-center items-center flex-col w-full lg:w-[184px] lg:mr-12'>
            <span className='w-[70px] h-[70px] lg:p-[30px] lg:w-32 lg:h-32 text-primary rounded-full border-4 border-primary flex justify-center items-center'>
              <Chart className='w-8 h-8 lg:w-20 lg:h-20' />
            </span>
            <p className='body-sm lg:body-lg text-gray-800 mt-2 lg:mt-4 text-center'>
              طرح‌های تشویقی ارتقای فروش{' '}
            </p>
          </li>

          <li className='flex justify-center items-center flex-col w-full lg:w-[184px] lg:mr-12'>
            <span className='w-[70px] h-[70px] lg:p-[30px] lg:w-32 lg:h-32 text-primary rounded-full border-4 border-primary flex justify-center items-center'>
              <Book className='w-8 h-8 lg:w-20 lg:h-20' />
            </span>
            <p className='body-sm lg:body-lg text-gray-800 mt-2 lg:mt-4 text-center '>
              اعطای دستورالعمل پخت غذاها{' '}
            </p>
          </li>
        </ul>
        <div className='flex justify-center items-start md:items-center flex-col py-6 lg:py-12  my-6 lg:my-12 border-y border-gray-400'>
          <p className='header-6 lg:header-4 text-gray-800 mb-6'>
            مزیت دریافت نمایندگی
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-8'>
            <ul className='flex flex-col items-start'>
              <li className='flex justify-center items-center mb-2 lg:mb-4'>
                <Component size='16' color='#417F56' />
                <p className='body-md lg:body-xl text-gray-800 mr-1'>
                  استفاده از برند شناخته شده ترخینه
                </p>
              </li>

              <li className='flex justify-center items-center mb-2 lg:mb-4'>
                <Component size='16' color='#417F56' />
                <p className='body-md lg:body-xl text-gray-800 mr-1'>
                  به حداقل رساندن ریسک سرمایه گذاری
                </p>
              </li>

              <li className='flex justify-center items-center mb-2 lg:mb-4'>
                <Component size='16' color='#417F56' />
                <p className='body-md lg:body-xl text-gray-800 mr-1'>
                  تسریع روند بازگشت سرمایه
                </p>
              </li>

              <li className='flex justify-center items-center mb-2 lg:mb-0'>
                <Component size='16' color='#417F56' />
                <p className='body-md lg:body-xl text-gray-800 mr-1'>
                  مشاوره های تخصصی جهت مدیریت رستوران
                </p>
              </li>
            </ul>

            <ul className='flex flex-col items-start'>
              <li className='flex justify-center items-center mb-2 lg:mb-4'>
                <Component size='16' color='#417F56' />
                <p className='body-md lg:body-xl text-gray-800 mr-1'>
                  مشاوره در امور حقوقی، مالی و مالیاتی
                </p>
              </li>

              <li className='flex justify-center items-center mb-2 lg:mb-4'>
                <Component size='16' color='#417F56' />
                <p className='body-md lg:body-xl text-gray-800 mr-1'>
                  پشتیبانی بازاریابی و منابع انسانی
                </p>
              </li>

              <li className='flex justify-center items-center mb-2 lg:mb-4'>
                <Component size='16' color='#417F56' />
                <p className='body-md lg:body-xl text-gray-800 mr-1'>
                  دریافت مشاوره جهت تامین مواد اولیه و تجهیزات
                </p>
              </li>

              <li className='flex justify-center items-center'>
                <Component size='16' color='#417F56' />
                <p className='body-md lg:body-xl text-gray-800 mr-1'>
                  طرح های تشویقی برای ارتقا فروش
                </p>
              </li>
            </ul>
          </div>
        </div>
        `
        <div className='flex justify-center items-start md:items-center flex-col pb-6 lg:pb-12  mb-6 lg:mb-12 border-b border-gray-400'>
          <p className='header-6 lg:header-4 text-gray-800'>دریافت مشاوره</p>

          <div className='w-full grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-x-6 my-6'>
            <input
              type='text'
              placeholder='نام و نام خانوادگی'
              className='w-full h-10 mb-3 bg-transparent border border-gray-400 px-4 py-2 rounded placeholder:text-gray-700 body-sm focus:border-gray-700'
            />

            <input
              type='text'
              placeholder='شماره تماس'
              className='w-full h-10 mb-3 bg-transparent border border-gray-400 px-4 py-2 rounded placeholder:text-gray-700 body-sm focus:border-gray-700'
            />

            <input
              type='text'
              placeholder='زمان ایدئال'
              className='w-full h-10 mb-3 bg-transparent border border-gray-400 px-4 py-2 rounded placeholder:text-gray-700 body-sm focus:border-gray-700'
            />
          </div>

          <button className='button-sm lg:button-lg text-white bg-primary rounded py-2 px-4 mx-auto'>
            درخواست مشاوره
          </button>
        </div>
        <div className='flex justify-center items-start p-4  lg:px-4 lg:py-8 md:items-center flex-col pb-6 lg:pb-12 rounded-lg mb-6 lg:mb-12 border border-gray-400'>
          <p className='header-6 lg:header-4 text-gray-800'>
            فرم درخواست نمایندگی
          </p>

          <div className='w-full flex flex-col items-start mt-6 lg:mt-12'>
            <p className='body-md lg:body-lg text-gray-800 mb-3'>
              مشخصات فردی متقاضی
            </p>

            <div className='w-full grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-x-6'>
              <input
                type='text'
                placeholder='نام و نام خانوادگی'
                className='w-full h-10 mb-3 bg-transparent border border-gray-400 px-4 py-2 rounded placeholder:text-gray-700 body-sm focus:border-gray-700'
              />

              <input
                type='text'
                placeholder='کدملی'
                className='w-full h-10 mb-3 bg-transparent border border-gray-400 px-4 py-2 rounded placeholder:text-gray-700 body-sm focus:border-gray-700'
              />

              <input
                type='text'
                placeholder='شماره تماس'
                className='w-full h-10 mb-3 bg-transparent border border-gray-400 px-4 py-2 rounded placeholder:text-gray-700 body-sm focus:border-gray-700'
              />
            </div>
          </div>

          <div className='w-full flex flex-col items-start mt-6 lg:mt-12'>
            <p className='body-md lg:body-lg text-gray-800 mb-3'>
              آدرس ملک متقاضی
            </p>

            <div className='w-full grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-x-6'>
              <div className='h-fit grid grid-cols-1 gap-y-3 lg:gap-y-4'>
                <input
                  type='text'
                  placeholder='استان'
                  className='w-full h-10  bg-transparent border border-gray-400 px-4 py-2 rounded placeholder:text-gray-700 body-sm focus:border-gray-700'
                />

                <input
                  type='text'
                  placeholder='منطقه'
                  className='w-full h-10 bg-transparent border border-gray-400 px-4 py-2 rounded placeholder:text-gray-700 body-sm focus:border-gray-700'
                />
              </div>

              <div className='h-fit grid grid-cols-1 gap-y-3 lg:gap-y-4'>
                <input
                  type='text'
                  placeholder='شهر'
                  className='w-full h-10 mb-3 bg-transparent border border-gray-400 px-4 py-2 rounded placeholder:text-gray-700 body-sm focus:border-gray-700'
                />

                <textarea
                  type='text'
                  placeholder='آدرس دقیق'
                  className='w-full h-24 mb-3 bg-transparent border border-gray-400 px-4 py-2 rounded placeholder:text-gray-700 body-sm focus:border-gray-700'
                />
              </div>

              <div className='w-fit h-fit'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207344.07543142117!2d51.18284130717154!3d35.70774021876205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00491ff3dcd9%3A0xf0b3697c567024bc!2sTehran%2C%20Tehran%20Province%2C%20Iran!5e0!3m2!1sen!2s!4v1687255819474!5m2!1sen!2s'
                  style={{ border: '0' , width : "100%" ,height:"100%" }}
                  allowFullScreen=''
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'></iframe>
              </div>
            </div>
          </div>

          <div className='w-full flex flex-col items-start mt-6 lg:mt-12'>
            <p className='body-md lg:body-lg text-gray-800 mb-3'>
              مشخصات ملک متقاضی
            </p>

            <div className='w-full grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-x-6'>
              <input
                type='text'
                placeholder='نوع مالکیت'
                className='w-full h-10 mb-3 bg-transparent border border-gray-400 px-4 py-2 rounded placeholder:text-gray-700 body-sm focus:border-gray-700'
              />

              <input
                type='text'
                placeholder='مساحت ملک (متر مربع)'
                className='w-full h-10 mb-3 bg-transparent border border-gray-400 px-4 py-2 rounded placeholder:text-gray-700 body-sm focus:border-gray-700'
              />

              <input
                type='text'
                placeholder='سن بنا'
                className='w-full h-10 mb-3 bg-transparent border border-gray-400 px-4 py-2 rounded placeholder:text-gray-700 body-sm focus:border-gray-700'
              />
            </div>
          </div>


               <div className='w-full flex flex-col items-start mt-6 lg:mt-12'>
            <p className='body-md lg:body-lg text-gray-800 mb-3'>
              آدرس ملک متقاضی
            </p>

            <div className="w-full grid grid-cols-1 gap-y-4 lg:grid-cols-2 lg:gap-x-6">

              <div className=" text-gray-700">
                <p className="body-md mb-2 lg:mb-4">ملک متقاضی:</p>

                <div className="body-sm grid grid-cols-1 md:grid-cols-2  gap-y-2">
                <Checkbox  color="green" label="پروانه کسب دارد." />
                <Checkbox  color="green" label="آشپزخانه دارد." />
                <Checkbox  color="green" label="پارکینگ دارد." />
                <Checkbox  color="green" label="انبار دارد." />
                </div>

              </div>

              <div className="">
                <p className="body-md text-gray-700 mb-1">تصاویر ملک</p>
                <DragDrop />
              </div>

            </div>

</div>

          <button className='button-sm lg:button-lg text-white bg-primary rounded py-2 px-12 mx-auto mt-4'>
            ثبت اطلاعات
          </button>
        </div>
      </section>
    </>
  );
};

export default AgencyPage;
