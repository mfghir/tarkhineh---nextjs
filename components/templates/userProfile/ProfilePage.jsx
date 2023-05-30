import { Edit } from 'iconsax-react';
import ProfileMenu from './ProfileMenu';
import { useState } from 'react';

const ProfilePage = () => {
  const [showBtns, setShowBtns] = useState(false);

  return (
    <>
      <section className='px-5 lg:px-20 py-2 lg:py-12 lg:flex lg:flex-row lg:justify-between'>
        <ProfileMenu />

        <section className='lg:w-[73%] lg:border lg:border-gray-400 lg:rounded-lg lg:p-6'>
          <p className='header-7 lg:header-6 text-gray-800 pb-2 border-b border-gray-400'>
            پروفایل من
          </p>

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

              <div className='relative w-full'>
                <input type='text' placeholder='' className='inp' />
                <label
                  htmlFor='name'
                  className='inp-label body-sm flex justify-center items-center absolute top-2 right-4'>
                  تاریخ تولد
                  <span className='caption-sm'>(اختیاری)</span>
                </label>
              </div>

              <div className='relative w-full'>
                <input type='text' placeholder='' className='inp' />
                <label htmlFor='name' className='inp-label'>
                  نام نمایشی
                </label>
              </div>
            </section>

            <div className={`mt-6 lg:mt-8 w-full  ${!showBtns ?  " lg:w-auto flex justify-center items-center" : "lg:w-10/12" } `} >
              {!showBtns ? (
                <button
                  className='caption-md lg:button-lg w-auto flex justify-center items-center lg:button-lg rounded border border-primary text-primary hover:text-shade-200 hover:border-shade-200 active:text-shade-300 active:border-shade-300 duration-300 px-2 py-1 lg:px-4'
                  onClick={() => setShowBtns(!showBtns)}>
                  <Edit className='ml-2' />
                  ویرایش اطلاعات شخصی
                </button>
              ) : (
                <div className='bg-red-200 w-full grid grid-cols-2 gap-x-4  lg:flex justify-end items-end'>
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

export default ProfilePage;
