import { deleteInput } from '@/redux/inputSlice';
import { openModal } from '@/redux/modalSlice';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

export const ModalDelete = ({saveAddressIndex}) => {

    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const toggleModal = () => {
        setShowModal(!showModal);
    }


    const handleConfirm = () => {
        dispatch(deleteInput(saveAddressIndex))
        dispatch(openModal({ id: 'deleteAddressModal' }));

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
              <p className='text-sm leading-5 text-gray-800 my-6 text-center'>
                همه محصولات سبد خرید شما حذف شود؟
              </p>


              <div className='w-full flex justify-center items-center px-6 mb-4'>
              <button
                      className='w-full lg:w-auto caption-sm lg:button-lg rounded border border-primary text-primary hover:text-shade-200 hover:border-shade-200 active:text-shade-300 active:border-shade-300 duration-300 py-1 px-4 lg:px-8'
                      onClick={toggleModal}>
                      بازگشت
                    </button>

                    <button
                      className='w-full lg:w-auto caption-sm lg:button-lg rounded bg-primary hover:bg-shade-200 active:bg-shade-300 duration-300 text-white py-1 px-4 lg:px-8 mr-5'
                      // onClick={() => dispatch(deleteInput(saveAddressIndex))}>
                      onClick={handleConfirm}>
                      حذف آدرس
                    </button>
</div>
        </div>
   </div>
   


    </section>
  )
}
