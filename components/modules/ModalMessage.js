import { clearList } from '@/redux/cartSlice';
import { closeModal } from '@/redux/modalSlice';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

const ModalMessage = () => {
  const [showModal, setShowModal] = useState(false);
  const { pathname } = useRouter();
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart.cart);

  const toggleModal = () => {
    setShowModal(!showModal);
    dispatch(closeModal({ id: 'exit-page' }));
    dispatch(closeModal({ id: 'clearList-open' }));
  };

  const isExitPageClose = useSelector(
    state => state.modal['exit-page']?.isOpen
  );

  const isClearListOpen = useSelector(
    state => state.modal['clearList-open']?.isOpen
  );
  console.log('clearList-open---', isClearListOpen);

  return (
    <>
      {!showModal || cart.length > 0 || isClearListOpen ? (
        <div
          className={`fixed z-50 top-0 left-0 w-full h-full flex items-center justify-center 
            ${showModal || cart.length === 0 ? 'hidden' : ''}
          `}>
          <div
            className='absolute w-full h-full inset-0 exitPage-bg'
            onClick={toggleModal}></div>

          <div className='lg:w-96 bg-white rounded-lg overflow-hidden transform transition-all mx-5'>
            <div className='bg-gray-300 flex justify-end items-center py-4 px-6'>
              <p className='caption-lg lg:header-7 text-gray-800 text-center mx-auto justify-start'>
                حذف محصولات
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

            <div className='p-6'>
              <p className='text-sm leading-5 text-gray-800 pb-6 text-center'>
                همه محصولات سبد خرید شما حذف شود؟
              </p>

              <div className='w-full flex justify-center items-center'>
                {isClearListOpen ? (
                  <>
                    <button
                      className='w-full lg:w-auto caption-sm lg:button-lg rounded border border-primary text-primary hover:text-shade-200 hover:border-shade-200 active:text-shade-300 active:border-shade-300 duration-300 py-1 px-4 lg:px-8'
                      onClick={toggleModal}>
                      بازگشت
                    </button>

                    <button
                      className='w-full lg:w-auto caption-sm lg:button-lg rounded bg-primary hover:bg-shade-200 active:bg-shade-300 duration-300 text-white py-1 px-4 lg:px-8 mr-5'
                      onClick={() => dispatch(clearList())}>
                      حذف
                    </button>
                  </>
                ) : null}

                {isExitPageClose ? (
                  <>
                    <button
                      className='w-full caption-sm lg:button-lg rounded bg-primary hover:bg-shade-200 active:bg-shade-300 duration-300 text-white py-1'
                      onClick={toggleModal}>
                      بازگشت
                    </button>

                    <button className='w-full caption-sm lg:button-lg rounded bg-error-lighter text-error duration-300 py-1 mr-4'>
                      خروج
                    </button>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default ModalMessage;
