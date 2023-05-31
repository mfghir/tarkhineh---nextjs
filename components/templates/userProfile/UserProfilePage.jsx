import { ArrowRight2, Edit } from 'iconsax-react';
import { useState } from 'react';

import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from 'react-modern-calendar-datepicker';
import ProfileMenu from './ProfileMenu';
import { useRouter } from 'next/router';

const UerProfilePage = () => {
  const [showBtns, setShowBtns] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const { pathname,push } = useRouter();

  const renderCustomInput = ({ ref }) => (
    <div className='relative w-full'>
      <input
        type='text'
        className='inp'
        readOnly
        ref={ref}
        value={selectedDay ? selectedDay.day : ''}
      />
      <label
        htmlFor='name'
        className='inp-label body-sm flex justify-center items-center absolute top-2 right-4'>
        تاریخ تولد
        <span className='caption-sm'>(اختیاری)</span>
      </label>
    </div>
  );

  return (
    <>
      <section className='px-5 lg:px-20 py-2 lg:py-12 lg:flex lg:flex-row lg:justify-between'>
        <div className='hidden lg:block lg:w-[25%] '>
          {/* {pathname === '/profile/user-profile' ? '' : <ProfileMenu />} */}
          <ProfileMenu />
        </div>

        <section className='lg:w-[73%] lg:border lg:border-gray-400 lg:rounded-lg lg:p-6'>
          <div className='flex items-center'>
            <ArrowRight2  className='lg:hidden ml-4' size="16" onClick={()=> push('/profile')} />
            <p className='w-full header-7 lg:header-6 text-gray-800 text-center lg:text-right lg:pb-2 lg:border-b lg:border-gray-400'>
              پروفایل من
            </p>
          </div>

          <section className='mt-6 lg:mt-12 flex justify-center items-center flex-col'>
            <section className='w-full lg:w-10/12 grid grid-cols-1 gap-y-3 lg:grid-cols-2 lg:gap-x-4 lg:gap-y-6'>
              <div className='relative w-full'>
                <input type='text' placeholder='' className='inp' />
                <label htmlFor='name' className='inp-label'>
                  نام
                </label>
              </div>

              <div className='relative w-full'>
                <input type='text' placeholder='' className='inp' />
                <label htmlFor='name' className='inp-label'>
                  نام خانوادگی
                </label>
              </div>

              <div className='relative w-full'>
                <input type='text' placeholder='' className='inp' />
                <label htmlFor='name' className='inp-label'>
                  آدرس ایمیل
                </label>
              </div>

              <div className='relative w-full'>
                <input type='text' placeholder='' className='inp' />
                <label htmlFor='name' className='inp-label'>
                  شماره همراه
                </label>
              </div>

              <DatePicker
                value={selectedDay}
                onChange={setSelectedDay}
                renderInput={renderCustomInput}
                locale='fa'
                colorPrimary='#417F56'
              />

              <div className='relative w-full'>
                <input type='text' placeholder='' className='inp' />
                <label htmlFor='name' className='inp-label'>
                  نام نمایشی
                </label>
              </div>
            </section>

            <div
              className={`mt-6 lg:mt-8 w-full  ${
                !showBtns
                  ? ' lg:w-auto flex justify-center items-center'
                  : 'lg:w-10/12'
              } `}>
              {!showBtns ? (
                <button
                  className='caption-md lg:button-lg w-auto flex justify-center items-center lg:button-lg rounded border border-primary text-primary hover:text-shade-200 hover:border-shade-200 active:text-shade-300 active:border-shade-300 duration-300 px-2 py-1 lg:px-4'
                  onClick={() => setShowBtns(!showBtns)}>
                  <Edit className='ml-2' />
                  ویرایش اطلاعات شخصی
                </button>
              ) : (
                <div className='w-full grid grid-cols-2 gap-x-4  lg:flex justify-end items-end'>
                  <button className='w-full md:w-auto caption-sm lg:button-lg rounded border border-primary text-primary hover:text-shade-200 hover:border-shade-200 active:text-shade-300 active:border-shade-300 duration-300 py-1 lg:px-4'>
                    انصراف
                  </button>
                  <button className='w-full md:w-auto caption-sm lg:button-lg rounded bg-primary hover:bg-shade-200 active:bg-shade-300 duration-300 text-white py-1 lg:px-4'>
                    ذخیره اطلاعات
                  </button>
                </div>
              )}
            </div>
          </section>
        </section>
      </section>
    </>
  );
};

export default UerProfilePage;
