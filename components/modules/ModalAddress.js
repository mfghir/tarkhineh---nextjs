import { useState } from 'react';
import Map from './Map/index';
import { useDispatch, useSelector } from 'react-redux';
import { Checkbox, Input } from '@material-tailwind/react';
import { addressDetailInputValue } from '@/redux/inputSlice';

const ModalAddress = () => {
  const addressValue = useSelector(state => state.input.addressValue);
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const dispatch = useDispatch();
  const [inpVal, setInpVal] = useState({
    addressTitle: '',
    phone: '',
    receiverName: '',
    receiverPhone: '',
    addressDetail: '',
  });

  const changeHandler = e => {
    setInpVal({ ...inpVal, [e.target.name]: e.target.value });
    console.log(inpVal);
  };



  const [checkboxValue, setCheckboxValue] = useState(false);

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(addressDetailInputValue(inpVal))
    setShowModal(!showModal);

  };

  return (
    <section
      className={`fixed z-50 top-0 left-0 w-full h-full flex items-center justify-center 
      ${showModal ? 'hidden' : ''}
    `}>
      <div
        className='absolute w-full h-full inset-0 exitPage-bg'
        onClick={toggleModal}></div>

      {addressValue === '' ? (
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
            <span className='w-full h-80 overflow-hidden relative'>
              <Map />
            </span>
          </div>
        </div>
      ) : (
        ''
      )}

      {addressValue === '' ? (
        ''
      ) : (
        <div className='w-full lg:w-96 bg-white rounded-lg overflow-hidden transform transition-all mx-5'>
          <div className='bg-gray-300 flex justify-end items-center py-4 px-6'>
            <p className='caption-lg lg:header-7 text-gray-800 text-center mx-auto justify-start'>
              ثبت آدرس
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

          <div className='w-full h-full min-h-[200px] flex flex-col p-6'>
            <form className='form-container flex flex-col '>
              <div className='relative mb-4'>
                <input
                  className='body-sm rtl block w-full px-4 py-1 border border-gray-400 rounded outline-none focus:border-gray-800'
                  type='text'
                  name='addressTitle'
                  required
                  value={inpVal.addressTitle}
                  onChange={changeHandler}
                  
                />
                <label
                  htmlFor='addressTitle'
                  className='body-sm text-gray-700 absolute right-2 top-1 transition-all duration-4 ease-in-out'>
                  عنوان آدرس
                </label>
              </div>

              <div className='flex items-center justify-start flex-row mb-4'>
                {/* <Checkbox color="#417F56" defaultChecked /> */}
                <input
                  type='checkbox'
                  className='checkbox'
                  checked={checkboxValue}
                  onChange={e => setCheckboxValue(e.target.checked)}
                />
                <p className='caption-md lg:body-sm text-gray-800 mr-1'>
                  تحویل گیرنده خودم هستم.
                </p>
              </div>

              {checkboxValue ? (
                <div className='relative mb-4'>
                  <input
                    className='body-sm rtl block w-full px-4 py-1 border border-gray-400 rounded outline-none focus:border-gray-800'
                    type='text'
                    name='phone'
                    required
                    value={inpVal.phone}
                    onChange={changeHandler}
                    
                  />
                  <label
                    htmlFor='phone'
                    className='body-sm text-gray-700 absolute right-2 top-1 transition-all duration-4 ease-in-out'>
                    شماره همراه
                  </label>
                </div>
              ) : (
                <>
                  <div className='relative mb-2'>
                    <input
                      className='body-sm rtl block w-full px-4 py-1 border border-gray-400 rounded outline-none focus:border-gray-800'
                      type='text'
                      name='receiverName'
                      required
                      value={inpVal.receiverName}
                      onChange={changeHandler}
                      
                    />
                    <label
                      htmlFor='receiverName'
                      className='body-sm text-gray-700 absolute right-2 top-1 transition-all duration-4 ease-in-out'>
                      نام و نام‌خانوادگی تحویل گیرنده
                    </label>
                  </div>

                  <div className='relative mb-4'>
                    <input
                      className='body-sm rtl block w-full px-4 py-1 border border-gray-400 rounded outline-none focus:border-gray-800'
                      type='text'
                      name='receiverPhone'
                      required
                      value={inpVal.receiverPhone}
                      onChange={changeHandler}
                      
                    />
                    <label
                      htmlFor='receiverPhone'
                      className='body-sm text-gray-700 absolute right-2 top-1 transition-all duration-4 ease-in-out'>
                      شماره همراه تحویل گیرنده
                    </label>
                  </div>
                </>
              )}

              <div className='relative mb-4'>
                <textarea
                  className='body-sm rtl h-44 block w-full px-4 py-1 border border-gray-400 rounded outline-none focus:border-gray-800'
                  name='addressDetail'
                  id='addressDetail'
                  required
                  maxLength='200'
                  value={inpVal.addressDetail}
                  onChange={changeHandler}
                  ></textarea>
                <label
                  htmlFor='addressDetail'
                  className='body-sm text-gray-700 absolute right-2 top-1 transition-all duration-4 ease-in-out'>
                  آدرس دقیق شما
                </label>
              </div>

              <div className='grid grid-cols-2 gap-x-5'>
                <button
                  className=' caption-sm lg:button-lg rounded hover:text-shade-200 active:text-shade-300 duration-300 text-primary py-1 px-4'
                  onClick={toggleModal}>
                  انصراف
                </button>
                <button
                  className=' caption-sm lg:button-lg rounded bg-primary hover:bg-shade-200 active:bg-shade-300 duration-300 text-white py-1 px-4'
                  onClick={handleSubmit}
                  >
                  ثبت آدرس
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default ModalAddress;
