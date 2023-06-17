import { phoneCodeInputValue } from '@/redux/inputSlice';
import Image from 'next/image';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import ModalCode from './ModalCode';

const ModalShoppinCart = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const [secondModal, setSecondModal] = useState(false);

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    dispatch(phoneCodeInputValue(inputValue));
    setSecondModal(!secondModal);
  };

  return (
    <>
      {showModal ? (
        ''
      ) : (
        <>
          {secondModal ? (
            <ModalCode />
          ) : (
            <div className='fixed  inset-0 overflow-y-auto z-50 min-h-screen'>
              <div className='flex items-center justify-center min-h-screen'>
                <div className='fixed inset-0 transition-opacity'>
                  <div
                    className='absolute inset-0 exitPage-bg'
                    onClick={() => toggleModal()}></div>
                </div>

                <section className='w-full relative flex justify-center items-center py-4 px-6 lg:w-96 bg-white rounded-lg overflow-hidden transform transition-all mx-5'>
                  <button onClick={() => toggleModal()}>
                    <svg
                      className='h-6 w-6 text-gray-700 absolute top-4 left-6'
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

                  <div className='w-full flex flex-col justify-center items-center'>
                    <Image
                      src='/images/logo-shoppinCartModal.png'
                      alt='logo-shoppinCartModal.png'
                      width={40}
                      height={44}
                    />
                    <button className='caption-lg lg:header-7 text-gray-800 mt-3'>
                      ورود / ثبت ‌نام
                    </button>

                    <p className='caption-md text-gray-700 text-center'>
                      با وارد کردن شماره موبایل کد تاییدی برای شما ارسال خواهد
                      شد.
                    </p>

                    <input
                      type='text'
                      placeholder='شماره همراه'
                      className='mt-6 w-full outline-none border border-gray-400 px-4 py-2  rounded placeholder:text-gray-700 caption-sm focus:border-primary'
                      value={inputValue}
                      onChange={handleInputChange}
                    />

                    {inputValue === '09221234567' ? (
                      <button
                        className='w-full py-1 caption-lg bg-primary text-white mt-3 rounded'
                        onClick={handleSubmit}>
                        تایید و ادامه
                      </button>
                    ) : (
                      <button className='w-full py-1 caption-lg bg-gray-300 text-gray-400 mt-3 rounded'>
                        تایید و ادامه
                      </button>
                    )}

                    <p className='caption-sm text-center text-[#0C0C0C] mt-1'>
                      ورود و عضویت در ترخینه به منزله قبول
                      <span className='text-primary'>قوانین و مقررات</span> است.
                    </p>
                  </div>
                </section>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ModalShoppinCart;
