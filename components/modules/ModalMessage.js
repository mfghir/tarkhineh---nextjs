import React, { useState } from 'react'

const ModalMessage = () => {
    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => {
      setShowModal(!showModal);
    };
  return (
    <div className='fixed  inset-0 overflow-y-auto z-50 min-h-screen'>
    <div className='flex items-center justify-center min-h-screen'>
      <div className='fixed inset-0 transition-opacity'>
        <div
          className='absolute inset-0 exitPage-bg'
          onClick={toggleModal}></div>
      </div>
      <span className='hidden sm:inline-block sm:align-middle sm:h-screen'></span>
      &#8203;
      <div className='lg:w-96 bg-white rounded-lg overflow-hidden transform transition-all mx-5'>
        <div className='bg-gray-300 flex justify-end items-center py-4 px-6'>
          <p className='caption-lg lg:header-7 text-gray-800 text-center mx-auto justify-start'>
            حذف محصولات
          </p>

          <svg
            className='h-6 w-6 text-gray-700'
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
        </div>

        <div className='p-6'>
          <p className='text-sm leading-5 text-gray-800 pb-6'>
            همه محصولات سبد خرید شما حذف شود؟
          </p>

          <div className='w-full flex justify-between'>
            <button className='w-full caption-sm lg:button-lg rounded bg-primary hover:bg-shade-200 active:bg-shade-300 duration-300 text-white py-1'>
              بازگشت
            </button>

            <button className='w-full caption-sm lg:button-lg rounded bg-error-lighter text-error duration-300 py-1 mr-4'>
              خروج
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ModalMessage