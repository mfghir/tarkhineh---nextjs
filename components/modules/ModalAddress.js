import { useState } from 'react';
import Map from './Map/Map';




const ModalAddress = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <section
      className={`fixed z-50 top-0 left-0 w-full h-full flex items-center justify-center 
      ${showModal ? 'hidden' : ''}
    `}>
      <div
        className='absolute w-full h-full inset-0 exitPage-bg'
        onClick={toggleModal}></div>

      <div className='w-full lg:w-96 bg-white rounded-lg overflow-hidden transform transition-all mx-5'>
        <div className='bg-gray-300 flex justify-end items-center py-4 px-6'>
          <p className='caption-lg lg:header-7 text-gray-800 text-center mx-auto justify-start'>
            افزودن آدرس
          </p>

          <button onClick={toggleModal}>
            <svg
              className='h-6 w-6 text-gray-700 cursor-pointer'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>

        <div className='w-full flex flex-col'>
          <span className='w-full h-60 overflow-hidden relative'>
            <Map />

{/*            
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207344.07543142117!2d51.18284130717154!3d35.70774021876205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00491ff3dcd9%3A0xf0b3697c567024bc!2sTehran%2C%20Tehran%20Province%2C%20Iran!5e0!3m2!1sen!2s!4v1687255819474!5m2!1sen!2s'
            // width='246'
            // height='205'
            style={{ border: '0' , width: '100%', height:'100%' }}
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'></iframe> */}
          </span>
          <button className='absolute bottom-6 left-1/2 -translate-x-1/2 z-50 caption-sm lg:button-lg rounded bg-primary hover:bg-shade-200 active:bg-shade-300 duration-300 text-white py-1 px-4 lg:px-8'>
            ثبت موقعیت
          </button>
        </div>
      </div>
    </section>
  );
};

export default ModalAddress;
