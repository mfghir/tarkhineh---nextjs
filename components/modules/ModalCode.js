import { codeInputValue, phoneCodeInputValue } from '@/redux/inputSlice';
import Image from 'next/image';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { convertToFaNumber } from './FarsiNumber';
import { ArrowRight2, Clock } from 'iconsax-react';
import TwoMinuteTimer from './Timer';
import ModalShoppinCart from './ModalShoppinCart';
import { setButtonClick } from '@/redux/buttonSlice';

const ModalCode = () => {
  const dispatch = useDispatch();
  const [backModalOne, setBackModalOne] = useState(null);
  
  const code = useSelector(state => state.input);
  const inputValues = useSelector(state => state.input.inputValues);
  const buttonClicked = useSelector((state) => state.button);

  const handleChange = event => {
    const { name, value } = event.target;
    dispatch(codeInputValue({ field: name, value }));
  };

  const total = Object.values(inputValues)
    .reduce((acc, value) => acc + parseFloat(value), 0)
    .toString();
  console.log('total', total);

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };



  const handleClick = () => {
    dispatch(setButtonClick(true));
  };

  const backHandler = () => {
    setBackModalOne(true);
    // console.log('backModalOne', backModalOne);
  };
  if (backModalOne === true) return <ModalShoppinCart />;


  console.log("buttonClicked" ,buttonClicked);

  return (
    <>
      {showModal ? (
        ''
      ) : (
        <div className={`  inset-0 overflow-y-auto z-50 min-h-screen ${buttonClicked ? "hidden" :"fixed"}`}>
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
                    className='w-full outline-none border border-gray-700 focus:border-primary text-gray-800 px-4 py-2  rounded caption-sm'
                    name='value1'
                    value={inputValues.value1}
                    onChange={handleChange}
                  />

                  <input
                    type='text'
                    className='w-full outline-none border border-gray-700 focus:border-primary text-gray-800 px-4 py-2  rounded caption-sm'
                    name='value2'
                    value={inputValues.value2}
                    onChange={handleChange}
                  />

                  <input
                    type='text'
                    className='w-full outline-none border border-gray-700 focus:border-primary text-gray-800 px-4 py-2  rounded caption-sm'
                    name='value3'
                    value={inputValues.value3}
                    onChange={handleChange}
                  />

                  <input
                    type='text'
                    className='w-full outline-none border border-gray-700 focus:border-primary text-gray-800 px-4 py-2  rounded caption-sm'
                    name='value4'
                    value={inputValues.value4}
                    onChange={handleChange}
                  />

                  <input
                    type='text'
                    className='w-full outline-none border border-gray-700 focus:border-primary text-gray-800 px-4 py-2  rounded caption-sm'
                    name='value5'
                    value={inputValues.value5}
                    onChange={handleChange}
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

                {total === '15' ? (
                  <button
                    className='w-full py-1 caption-lg bg-primary text-white mt-3 rounded'
                    onClick={handleClick}>
                    ثبت کد
                  </button>
                ) : (
                  <button
                    className='w-full py-1 caption-lg bg-gray-300 text-gray-400 mt-3 rounded'
                    >
                    ثبت کد
                  </button>
                )}
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalCode;
