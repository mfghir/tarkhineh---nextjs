import { useState } from 'react';
import Image from 'next/image';
import { phoneCodeInputValue } from '@/redux/inputSlice';

import { useDispatch } from 'react-redux';
import ModalCode from './ModalCode';
import convertToPersianNumber from './convertToPersianNumber';

const ModalShoppinCart = () => {
  const [showModal, setShowModal] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [secondModal, setSecondModal] = useState(false);
  
  const dispatch = useDispatch();
  
  const toggleModal = () => {
    setShowModal(!showModal);
  };


  const handleInputChange = e => {
    const persianValue = convertToPersianNumber(e.target.value);
    setInputValue(persianValue);
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
            <div className='fixed z-50 top-0 left-0 w-full h-full flex items-center justify-center '>
              <div
                className='absolute w-full h-full inset-0 exitPage-bg'
                onClick={toggleModal}></div>

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
                    با وارد کردن شماره موبایل کد تاییدی برای شما ارسال خواهد شد.
                  </p>

                  <input
                    type='text'
                    placeholder='شماره همراه'
                    className='mt-6 w-full outline-none border border-gray-400 px-4 py-2  rounded placeholder:text-gray-700 caption-sm focus:border-primary'
                    value={inputValue}
                    onChange={handleInputChange}
                  />

                  {inputValue === '۰۹۲۲۱۲۳۴۵۶۷' ? (
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

                  <p className='caption-sm text-center text-[#0C0C0C] mt-2'>
                    ورود و عضویت در ترخینه به منزله قبول
                    <span className='text-primary'>قوانین و مقررات</span> است.
                  </p>
                </div>
              </section>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ModalShoppinCart;
