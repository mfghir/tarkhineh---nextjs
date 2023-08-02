import { useState } from 'react';
import Map from './Map/index';
import { useSelector } from 'react-redux';
import { Input } from '@material-tailwind/react';

const ModalAddress = () => {
  const addressValue = useSelector(state => state.input.addressValue);
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const [touched, setTouched] = useState({});
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

  const touchedHandler = e => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const handleSubmit = e => {};

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
            {/* <Input dir='rtl' label="عنوان آدرس" color='#417F56' /> */}

            {/* <div className='.form-container'> */}
            <form className='form-container flex flex-col '>
              <div class='relative mt-2 rtl'>
                <input
                  className='block w-full border-gray-400 rounded-md focus:ring focus:ring-gray-800 focus:border-gray-800 body-sm'
                  type='text'
                  name='addressTitle'
                  required
                  value={inpVal.addressTitle}
                  onChange={changeHandler}
                  onFocus={touchedHandler}
                />
                <label
                  htmlFor='addressTitle'
                  className='body-sm caption-md absolute left-0 -top-2 transition-all duration-4 ease-in-out'>
                  عنوان آدرس
                </label>
              </div>

              <div class='relative mt-2'>
                <input
                  className='block w-full border-gray-400 rounded-md focus:ring focus:ring-gray-800 focus:border-gray-800 body-sm'
                  type='text'
                  name='phone'
                  required
                  value={inpVal.phone}
                  onChange={changeHandler}
                  onFocus={touchedHandler}
                />
                <label
                  htmlFor='phone'
                  className='body-sm caption-md absolute left-0 -top-2 transition-all duration-300 ease-in-out'>
                  شماره همراه
                </label>
              </div>
            </form>
            {/* </div> */}
          </div>
        </div>
      )}
    </section>
  );
};

export default ModalAddress;
