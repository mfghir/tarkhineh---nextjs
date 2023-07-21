import { codeInputValue, phoneCodeInputValue } from '@/redux/inputSlice';
import Image from 'next/image';
import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { convertToFaNumber } from './FarsiNumber';
import { ArrowRight2, Clock } from 'iconsax-react';

import TwoMinuteTimer from './Timer';
import ModalShoppinCart from './ModalShoppinCart';
import { setButtonClick } from '@/redux/buttonSlice';
import { closeModal } from '@/redux/modalSlice';

const ModalCode = () => {
  const dispatch = useDispatch();
  const [backModalOne, setBackModalOne] = useState(null);

  const code = useSelector(state => state.input);
  const inputValues = useSelector(state => state.input.inputValues);
  const buttonClicked = useSelector(state => state.button.buttonClicked);

  console.log(inputValues.value1);

  const handleChange = e => {
    const { name, value } = e.target;
    dispatch(codeInputValue({ field: name, value }));
  };
  console.log("inputValues" , inputValues.value1);

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const originalCode = Object.values(inputValues)
    .map(i => i)
    .join('');
    console.log("originalCode",originalCode);
    console.log("originalCode[0]",originalCode[0]);

  const handleClick = () => {
    dispatch(setButtonClick(true));
  };

  const backHandler = () => {
    setBackModalOne(true);
  };


  const isModalOpen = useSelector(state => state.modal['code-login']?.isOpen);
  const closeModalHandler = () => {
    dispatch(closeModal({ id: 'code-login' }));
  };

  if (backModalOne === true) return <ModalShoppinCart />;

  return (
    <>
      {showModal ? (
        ''
      ) : (
        <div
          className={`inset-0 overflow-y-auto z-50 min-h-screen  ${showModal ? "hidden": 'fixed'}
          ${buttonClicked ? 'hidden' : 'fixed'}
          `}>
          <div className='flex items-center justify-center min-h-screen'>
            {/* <div className='fixed inset-0 transition-opacity'> */}
              <div
                className='absolute inset-0 exitPage-bg'
                onClick={() => toggleModal()}></div>
            {/* </div> */}

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

              <button className='h-6 w-6 text-gray-700 absolute top-4 right-6'>
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
                  کد تایید پنج‌رقمی به شماره {convertToFaNumber(code.value)}
                  ارسال شد.
                </p>

                <div className='grid grid-cols-5 gap-x-2 ltr '>
                  <input
                    type='text'
                    className={`w-full outline-none border  focus:border-primary text-gray-800 px-4 py-2  rounded caption-sm
                      ${
                        !inputValues.value1 === '1' || originalCode !== '12345'
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
                      !inputValues.value2 === '2' || originalCode !== '12345'
                      ? 'border-error'
                      : 'border-gray-700'
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
                      !inputValues.value3 === '3' || originalCode !== '12345'
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
                    className={`w-full outline-none border  focus:border-primary text-gray-800 px-4 py-2  rounded caption-sm
                    ${
                      !inputValues.value4 === '4' || originalCode !== '12345'
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
                    className={`w-full outline-none border  focus:border-primary text-gray-800 px-4 py-2  rounded caption-sm
                    ${
                      !inputValues.value5 === '5' || originalCode !== '12345'
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

                  <p className='cursor-pointer' onClick={backHandler}>
                    ویرایش شماره
                  </p>
                </div>

                {originalCode === '12345' ? (
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

                {originalCode !== '12345' &&
                  <div className='relative bg-error-lighter p-2 rounded'>
                    <button onClick={() => toggleModal()}>
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
                }
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalCode;
