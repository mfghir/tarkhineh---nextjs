import { useState } from 'react';

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
          <span className='bg-pink-200 h-60'>jhj</span>
          <button className='mx-auto caption-sm lg:button-lg rounded bg-primary hover:bg-shade-200 active:bg-shade-300 duration-300 text-white py-1 px-4 lg:px-8 mb-6'>
            ثبت موقعیت
          </button>
        </div>
      </div>
    </section>
  );
};

export default ModalAddress;
