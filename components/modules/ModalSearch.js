import { useState } from 'react';
import { closeModal } from '@/redux/modalSlice';
import { useDispatch, useSelector } from 'react-redux';

import SearchBar from './SearchBar';

const ModalSearch = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(state => state.modal['searchModal']?.isOpen);

  const closeModalHandler = () => {
    dispatch(closeModal({ id: 'searchModal' }));
  };

  return (
    <>
      {isModalOpen ? (
        <div className='fixed z-50 top-0 left-0 w-full h-full flex items-center justify-center'>
          <div
            className='absolute w-full h-full phoneMenu-bg'
            onClick={closeModalHandler}></div>

          <section
            className={`bg-white w-96 h-60 max-w-xl rounded-lg  z-[10] overflow-hidden `}>
            <div className='bg-gray-300 flex justify-end items-center py-4 px-6'>
              <p className='caption-lg lg:header-7 text-gray-800 text-center mx-auto justify-start'>
                جستجو
              </p>

              <button onClick={closeModalHandler}>
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

            <p className='body-md text-gray-800 text-center mt-10 mb-4'>
              لطفا متن خود را تایپ و سپس دکمه Enter را بزنید.
            </p>

            <div className='mx-8'>
              <SearchBar />
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
};

export default ModalSearch;
