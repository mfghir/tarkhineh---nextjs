import { Document, Location } from 'iconsax-react';

const DeliveryPlace = () => {
  return (
    <section className=''>
      <div className=' h-[180px] lg:h-auto border border-gray-400 rounded-lg mb-3 p-4 lg:py-4 lg:px-6 lg:flex justify-between'>
        <div className=''>
          <p className='w-full body-sm lg:body-md pb-1 flex items-center border-b lg:border-none border-gray-400 text-gray-800'>
            <Location className='w-4 h-4 lg:w-6 lg:h-6 ml-1' />
            آدرس شعبه اکباتان
          </p>

          <div className='caption-sm lg:caption-md text-gray-700 flex flex-col items-start justify-center mt-4'>
            <p className='mb-1'>
              اکباتان، خیابان ریاحی، کوچه سیزدهم، ساختمان آیسا، طبقه همکف
            </p>
            <p className='mb-1'>شماره تماس ۱: ۱۲۵۴ ۵۴۸۹ -۰۲۱</p>
            <p className='mb-1'>شماره تماس ۲: ۱۲۵۵ ۵۴۸۹ -۰۲۱ </p>
            <p className=''>
              ساعت کاری: همه‌روزه از ساعت ۱۲ تا ۲۳ بجز روزهای تعطیل
            </p>
          </div>

          <button className='hidden lg:block caption-md rounded text-gray-700 border border-gray-700 hover:border-gray-800 hover:text-gray-800 active:border-black active:text-black duration-300 py-1 px-8 mt-6 mx-auto'>
            مشاهده در نقشه
          </button>
        </div>

        <div className='hidden lg:block'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207344.07543142117!2d51.18284130717154!3d35.70774021876205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00491ff3dcd9%3A0xf0b3697c567024bc!2sTehran%2C%20Tehran%20Province%2C%20Iran!5e0!3m2!1sen!2s!4v1687255819474!5m2!1sen!2s'
            width='246'
            height='205'
            style={{ border: '0' }}
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'></iframe>
        </div>
      </div>

      <div className='relative h-[180px] border border-gray-400 rounded-lg text-gray-700 lg:text-gray-800 mb-3'>
        <textarea className='w-full h-full p-4' />

        <div className='flex justify-center items-center absolute top-4 right-4'>
          <p className='caption-md flex justify-center items-center'>
            <Document className='w-4 h-4 lg:w-6 lg:h-6 ml-1' />
            توضیحات سفارش
          </p>

          <span className=' caption-sm lg:caption-md mr-1'>(اختیاری)</span>
        </div>
      </div>
    </section>
  );
};

export default DeliveryPlace;
