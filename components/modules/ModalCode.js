import Image from 'next/image';
import { useState } from 'react';
import TwoMinuteTimer from './Timer';

import { useDispatch, useSelector } from 'react-redux';
import { ArrowRight2, Clock } from 'iconsax-react';
import ModalShoppinCart from './ModalShoppinCart';

import { updateCodeValue } from '@/redux/inputSlice';
import { setButtonClick } from '@/redux/buttonSlice';
import { setToken } from '@/redux/authSlice';

const ModalCode = () => {
  const dispatch = useDispatch();
  const [backModalOne, setBackModalOne] = useState(null);
  const [popup, setPopup] = useState(false);

  const codeValues = useSelector(state => state.input.codeValues);
  const buttonClicked = useSelector(state => state.button.buttonClicked);
  const phoneNumberRegister = useSelector(state => state.input.value);

  const handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    dispatch(updateCodeValue({ name, value }));
  };

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const originalCode = Object.values(codeValues)
    .map(i => i)
    .join('');

  const handleClick = () => {
    dispatch(setButtonClick(true));
    if (originalCode === '۱۲۳۴۵') {
      const token = 112233445566778899;
      dispatch(setToken(token));
    }
  };

  const backHandler = () => {
    setBackModalOne(true);
  };

  if (backModalOne === true) return <ModalShoppinCart />;

  return (
    <>
      {showModal ? (
        ''
      ) : (
        <div
          className={`inset-0 overflow-y-auto z-50 min-h-screen  
          ${showModal ? 'hidden' : 'fixed'}
          ${buttonClicked ? 'hidden' : 'fixed'}
          `}>
          <div className='flex items-center justify-center min-h-screen'>
            <div
              className='absolute inset-0 exitPage-bg'
              onClick={() => toggleModal()}></div>

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

              <button
                className='h-6 w-6 text-gray-700 absolute top-4 right-6'
                onClick={backHandler}>
                <ArrowRight2 />
              </button>

              <div className='w-full flex flex-col justify-center items-center'>
                <Image
                  src='/images/logo-shoppinCartModal.png'
                  alt='logo-shoppinCartModal.png'
                  width={40}
                  height={44}
                />
                <button className='caption-lg lg:header-7 text-gray-800 mt-3'>
                  کد تایید
                </button>

                <p className='caption-md text-gray-700 text-center mb-6'>
                  کد تایید پنج‌رقمی به شماره {phoneNumberRegister}
                  ارسال شد.
                </p>

                <div className='grid grid-cols-5 gap-x-2 ltr '>
                  <input
                    type='text'
                    className={`w-full outline-none border  focus:border-primary text-gray-800 px-4 py-2  rounded caption-sm
                      ${
                        originalCode !== '۱۲۳۴۵'
                          ? 'border-error'
                          : 'border-gray-700'
                      }
                    `}
                    name='value1'
                    value={codeValues.value1}
                    onChange={handleChange}
                    maxLength={1}
                  />

                  <input
                    type='text'
                    className={`w-full outline-none border  focus:border-primary text-gray-800 px-4 py-2  rounded caption-sm
                    ${
                      originalCode !== '۱۲۳۴۵'
                        ? 'border-error'
                        : 'border-gray-700'
                    }

                  `}
                    name='value2'
                    value={codeValues.value2}
                    onChange={handleChange}
                    maxLength={1}
                  />

                  <input
                    type='text'
                    className={`w-full outline-none border  focus:border-primary text-gray-800 px-4 py-2  rounded caption-sm
                    ${
                      originalCode !== '۱۲۳۴۵'
                        ? 'border-error'
                        : 'border-gray-700'
                    }
                  `}
                    name='value3'
                    value={codeValues.value3}
                    onChange={handleChange}
                    maxLength={1}
                  />

                  <input
                    type='text'
                    className={`w-full outline-none border  focus:border-primary text-gray-800 px-4 py-2  rounded caption-sm
                    ${
                      originalCode !== '۱۲۳۴۵'
                        ? 'border-error'
                        : 'border-gray-700'
                    }
                  `}
                    name='value4'
                    value={codeValues.value4}
                    onChange={handleChange}
                    maxLength={1}
                  />

                  <input
                    type='text'
                    className={`w-full outline-none border  focus:border-primary text-gray-800 px-4 py-2  rounded caption-sm
                    ${
                      originalCode !== '۱۲۳۴۵'
                        ? 'border-error'
                        : 'border-gray-700'
                    }
                  `}
                    name='value5'
                    value={codeValues.value5}
                    onChange={handleChange}
                    maxLength={1}
                  />
                </div>

                <div className='w-full outline-none mt1 mb-4 flex justify-between items-center caption-sm text-gray-700'>
                  <p className='flex justify-center items-center'>
                    <Clock size='16' />
                    <span className='text-primary caption-md mx-1'>
                      <TwoMinuteTimer />
                    </span>
                    <span className=''>تا دریافت مجدد کد</span>
                  </p>

                  <p className='cursor-pointer' onClick={backHandler}>
                    ویرایش شماره
                  </p>
                </div>

                {originalCode === '۱۲۳۴۵' ? (
                  <button
                    className='w-full py-1 caption-lg bg-primary text-white mt-3 rounded'
                    onClick={handleClick}>
                    ثبت کد
                  </button>
                ) : (
                  <button className='w-full py-1 caption-lg bg-gray-300 text-gray-400 mt-3 rounded'>
                    ثبت کد
                  </button>
                )}

                <div
                  className={`relative bg-error-lighter p-2 rounded 
                  ${originalCode === '۱۲۳۴۵' || popup ? 'hidden' : 'block'}`}>
                  <button onClick={() => setPopup(!popup)}>
                    <svg
                      className='h-4 w-4 text-gray-700 absolute top-1 right-1 mt-2'
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
                  <p className='caption-lg text-error text-center'>
                    کد تایید نامعتبر
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalCode;
