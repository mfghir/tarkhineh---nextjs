import Home from '@/pages';
import { hideModal } from '@/redux/modalSlice';
import { Dialog, DialogBody, DialogHeader } from '@material-tailwind/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from './SearchBar';
import { useRouter } from 'next/router';

const ModalSearch = () => {
  const visible = useSelector(state => state.modal.visible);
  const dispatch = useDispatch();
  const router = useRouter();

  const handlClose = () => {
    dispatch(hideModal());
  };

  return (
    <>
    {}
      {/* <section className='phoneMenu-bg w-full h-screen fixed inset-0'> */}
      {visible ? (
        <Dialog
          open={visible}
          handler={handlClose}
          size='xs'
          className='bg-red-200 '>
          <section className={`bg-white max-w-xl rounded-lg ${router.pathname === '/search' ? handlClose() : ""} `}>

          <div className='bg-gray-300 flex justify-end items-center py-4 px-6'>
            <p className='caption-lg lg:header-7 text-gray-800 text-center mx-auto justify-start'>
              جستجو
            </p>

            <button onClick={handlClose}>
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

          <p className='body-md text-gray-800 text-center mt-10 mb-4'>لطفا متن خود را تایپ و سپس دکمه Enter را بزنید.</p>

          {/* <DialogHeader className='bg-gray-300 text-center header-7 mx-auto'>جستجو</DialogHeader>
        <DialogBody divider>
        لطفا متن خود را تایپ و سپس دکمه Enter را بزنید.
        </DialogBody>
        <SearchBar /> */}

          <div className='mx-8'>
            <SearchBar />
          </div>

          </section>
        </Dialog>
      ) : (
        'no'
      )}
      {/* </section> */}
    </>
  );
};

export default ModalSearch;
