import { useState } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';

import { ArrowRight2, Clock } from 'iconsax-react';
import ModalShoppinCart from '../modules/ModalShoppinCart';
import { codeInputValue } from '@/redux/inputSlice';

import { closeModal } from '@/redux/modalSlice';
import { convertToFaNumber } from '../modules/FarsiNumber';
import TwoMinuteTimer from '../modules/Timer';

import { setToken } from '@/redux/authSlice';
import convertToPersianNumber from '../modules/convertToPersianNumber';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [popup, setPopup] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const [secondModal, setSecondModal] = useState(false);

  const handleInputChange = e => {
    e.preventDefault();

    const persianValue = convertToPersianNumber(e.target.value);
    setInputValue(persianValue);
  };

  
  const handleSubmit = () => {
    if (inputValue === '۰۹۲۲۱۲۳۴۵۶۷'  ) {
      setSecondModal(!secondModal);
      setInputValue('');
    }

    if (isModalOpen) setInputValue('');
  };

  const handleClick = () => {
    dispatch(closeModal({ id: 'phone-login' }));
    if (originalCode === '12345') {
      const token = 112233445566778899;
      dispatch(setToken(token));
    }
  };

  const isModalOpen = useSelector(state => state.modal['phone-login']?.isOpen);
  const closeModalHandler = () => {
    dispatch(closeModal({ id: 'phone-login' }));
  };

  const inputValues = useSelector(state => state.input.codeInputValues);
  const handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    const persianValue = convertToPersianNumber(value);

    dispatch(codeInputValue({ name, persianValue }));
  };

  const originalCode = Object.values(inputValues)
    .map(i => i)
    .join('');

  return (
    <>
      {isModalOpen ? (
        <section className='lg:hidden fixed top-0 right-0 z-50 w-full h-screen px-5  flex justify-center items-center  bg-white  transition-all'>
          <button onClick={closeModalHandler}>
            <svg
              className='h-6 w-6 text-gray-700 absolute top-5 left-5'
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
            className={` h-6 w-6 text-gray-700 absolute top-5 right-5 
            ${!secondModal && 'hidden'}`}
            onClick={handleSubmit}>
            <ArrowRight2 />
          </button>

          <div className='w-full flex flex-col justify-center items-center'>
            <Image
              src='/images/logo-enter-phone.png'
              alt='logo-enter-phone'
              width={148}
              height={71}
            />
            <button className='header-6 text-gray-800 mt-20'>
              {secondModal ? 'کد تایید' : 'ورود / ثبت ‌نام'}
            </button>

            <p className='caption-md text-gray-700 text-center my-6'>
              {secondModal
                ? `کد تایید پنج‌رقمی به شماره ${convertToFaNumber(
                    inputValue
                  )}ارسال شد.`
                : 'شماره همراه خود را وارد کنید.'}
            </p>

            {secondModal ? (
              <>
                <div className='grid grid-cols-5 gap-x-2 ltr '>
                  <input
                    type='text'
                    className={`w-full outline-none border focus:border-primary text-gray-800 px-4 py-2  rounded caption-sm
                      ${
                        inputValues.value1 !== '1' || originalCode !== '12345'
                          ? 'border-error'
                          : 'border-gray-700'
                      }
                    `}
                    name='value1'
                    value={inputValues.value1}
                    onChange={handleChange}
                    maxLength={1}
                  />

                  <input
                    type='text'
                    className={`w-full outline-none border  focus:border-primary text-gray-800 px-4 py-2  rounded caption-sm
                    ${
                      inputValues.value2 !== '2' || originalCode !== '12345'
                        ? 'border-error'
                        : 'border-gray-700'
                    }
                    }

                  `}
                    name='value2'
                    value={inputValues.value2}
                    onChange={handleChange}
                    maxLength={1}
                  />

                  <input
                    type='text'
                    className={`w-full outline-none border  focus:border-primary text-gray-800 px-4 py-2  rounded caption-sm
                    ${
                      inputValues.value3 !== '3' || originalCode !== '12345'
                        ? 'border-error'
                        : 'border-gray-700'
                    }
                  `}
                    name='value3'
                    value={inputValues.value3}
                    onChange={handleChange}
                    maxLength={1}
                  />

                  <input
                    type='text'
                    className={`w-full outline-none border focus:border-primary text-gray-800 px-4 py-2  rounded caption-sm
                    ${
                      inputValues.value4 !== '4' || originalCode !== '12345'
                        ? 'border-error'
                        : 'border-gray-700'
                    }
                  `}
                    name='value4'
                    value={inputValues.value4}
                    onChange={handleChange}
                    maxLength={1}
                  />

                  <input
                    type='text'
                    className={`w-full outline-none border focus:border-primary text-gray-800 px-4 py-2  rounded caption-sm
                    ${
                      inputValues.value5 !== '5' || originalCode !== '12345'
                        ? 'border-error'
                        : 'border-gray-700'
                    }
                  `}
                    name='value5'
                    value={inputValues.value5}
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

                  <p className='cursor-pointer' onClick={handleSubmit}>
                    ویرایش شماره
                  </p>
                </div>
              </>
            ) : (
              <input
                type='text'
                placeholder='شماره همراه'
                className='mt-6 w-full outline-none border border-gray-400 px-4 py-2  rounded placeholder:text-gray-700 caption-sm focus:border-primary'
                value={inputValue}
                onChange={handleInputChange}
              />
            )}

            {secondModal ? (
              <button
                onClick={handleClick}
                className={`w-full py-1 caption-lg  mt-3 rounded 
                  ${
                    originalCode === '12345'
                      ? 'bg-primary text-white'
                      : 'bg-gray-300 text-gray-400'
                  }
                  `}>
                ثبت کد
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className={`w-full py-1 caption-lg  mt-3 rounded 
                        ${
                          inputValue === '۰۹۲۲۱۲۳۴۵۶۷'
                            ? 'bg-primary text-white'
                            : 'bg-gray-300 text-gray-400'
                        }
                  `}>
                ورود
              </button>
            )}

            <p
              className={`caption-sm text-center text-[#0C0C0C] mt-1 
              ${secondModal ? 'hidden' : ''} `}>
              ورود و عضویت در ترخینه به منزله قبول{' '}
              <span className='text-primary'>قوانین و مقررات</span> است.
            </p>

            {secondModal && (
              <div
                className={`relative bg-error-lighter p-2 rounded 
                ${originalCode == '12345' || popup ? 'hidden' : 'block'}
              `}>
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
            )}
          </div>
        </section>
      ) : null}

      <section className='hidden lg:block'>
        {isModalOpen ? <ModalShoppinCart /> : ''}
      </section>
    </>
  );
};

export default LoginPage;
