import { useState } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';

import { ArrowRight2 } from 'iconsax-react';
import ModalShoppinCart from '../modules/ModalShoppinCart';
import { phoneCodeInputValue } from '@/redux/inputSlice';
import ModalCode from '../modules/ModalCode';
import { setUserLoginClick } from '@/redux/buttonSlice';
import { Dialog } from '@material-tailwind/react';
import { closeModal } from '@/redux/modalSlice';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [phoneNumber, setPhoneNumber] = useState('');
  const userLoginClicked = useSelector(state => state.button.userLoginClicked);

  //   if (verificationCode ==='1234') {
  //     dispatch(verifyPhoneNumber());
  //     alert('Verification successful!');
  //   } else {
  //     alert('Verification code is incorrect.');
  //   }
  // };

  // const [showModal, setShowModal] = useState(false);
  // const toggleModal = () => {
  //   setShowModal(!showModal);

  // };

  const [inputValue, setInputValue] = useState('');
  const [secondModal, setSecondModal] = useState(false);

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    // dispatch(phoneCodeInputValue(inputValue));
    setSecondModal(!secondModal);
  };

  const isModalOpen = useSelector(state => state.modal['phone-login']?.isOpen);
  const closeModalHandler = () => {
    dispatch(closeModal({ id: 'phone-login' }));
  };
  return (
    <>
      {/* {buttonClicked ? */}
      {/* <>
        {userLoginClicked ? (
          ''
        ) : (
          <> */}

      {isModalOpen ? (
        <section
          className={`lg:hidden fixed top-0 right-0 z-50 w-full h-screen px-5  flex justify-center items-center  bg-white  transition-all
          
              `}>
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

          <div className='w-full flex flex-col justify-center items-center'>
            <Image
              src='/images/logo-enter-phone.png'
              alt='logo-enter-phone'
              width={148}
              height={71}
            />
            <button className='header-6 text-gray-800 mt-20'>
              ورود / ثبت ‌نام
            </button>

            <p className='caption-md text-gray-700 text-center my-6'>
              شماره همراه خود را وارد کنید.
            </p>

            <input
              type='text'
              placeholder='شماره همراه'
              className='mt-6 w-full outline-none border border-gray-400 px-4 py-2  rounded placeholder:text-gray-700 caption-sm focus:border-primary'
              // value={inputValue}
              onChange={handleInputChange}
            />

            <button
              onClick={handleSubmit}
              className={`w-full py-1 caption-lg  mt-3 rounded 
                        ${
                          inputValue === '09221234567'
                            ? 'bg-primary text-white'
                            : 'bg-gray-300 text-gray-400'
                        }
                  `}>
              ورود
            </button>

            <p className='caption-sm text-center text-[#0C0C0C] mt-1'>
              ورود و عضویت در ترخینه به منزله قبول
              <span className='text-primary'>قوانین و مقررات</span> است.
            </p>
          </div>
        </section>
      ) : null}

{secondModal ?  <div className="w-full fixed top-0 right-0 z-50 z-[60] h-screen bg-white">
  <ModalCode />
</div> : ''}

      {/* </>
        )}
      </> */}

      <section className='hidden lg:block'>
        {userLoginClicked ? <ModalShoppinCart /> : ''}
      </section>

      {/* :
      "tr"
  } */}
    </>
  );
};

export default LoginPage;
