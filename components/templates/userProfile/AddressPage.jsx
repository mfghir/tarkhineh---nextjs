import { AddCircle, ArrowRight2, Edit2, Trash } from 'iconsax-react';
import ProfileMenu from './ProfileMenu';
import { useRouter } from 'next/router';

import { useState } from 'react';
import ModalAddress from '@/components/modules/ModalAddress';
import { useDispatch, useSelector } from 'react-redux';

import { convertToFaNumber } from '@/components/modules/FarsiNumber';
import { openModal } from '@/redux/modalSlice';
import { deleteInput, setEditing } from '@/redux/inputSlice';
import ModalMessage from '@/components/modules/ModalMessage';
import { ModalDelete } from '@/components/modules/ModalDelete';

const AddressPage = () => {
  const dispatch = useDispatch();
  const { push } = useRouter();
  const addressValue = useSelector(state => state.input.addressValue);

  const isEditAddressModalOpen = useSelector(
    state => state.modal['EditAddressModal']?.isOpen
  );
  const isAddAddressModalOpen = useSelector(
    state => state.modal['AddAddressModal']?.isOpen
  );

  const inputList = useSelector(state => state.input.inputList);
  const editHandler = index => {
    dispatch(openModal({ id: 'EditAddressModal' }));
    dispatch(setEditing(index));
  };

  const [saveAddressIndex, setSaveAddressIndex] = useState('');
  const isDeleteModalOpen = useSelector(
    state => state.modal['deleteAddressModal']?.isOpen
  );

  const handleDelete = index => {
    dispatch(openModal({ id: 'deleteAddressModal' }));
    setSaveAddressIndex(index);
  };

  return (
    <section className='px-5 lg:px-20 py-2 lg:py-12 lg:flex lg:flex-row lg:justify-between min-h-screen lg:min-h-fit'>
      <div className='hidden lg:block lg:w-[25%] h-full  min-h-screen'>
        <ProfileMenu />
      </div>

      <section className='lg:w-[73%] lg:border lg:border-gray-400 lg:rounded-lg lg:p-6'>
        <div className='flex items-center'>
          <ArrowRight2
            className='lg:hidden ml-4'
            size='16'
            onClick={() => push('/profile')}
          />
          <p className='w-full header-7 lg:header-6 text-gray-800 text-center mx-auto lg:text-right lg:pb-2 lg:border-b lg:border-gray-400 lg:flex lg:justify-between  '>
            آدرس ها
            {addressValue === '' ? (
              ''
            ) : (
              <button
                className='hidden lg:flex justify-center items-center text-primary'
                onClick={() => dispatch(openModal({ id: 'AddAddressModal' }))}>
                <AddCircle size='16' />
                <span className='caption-md whitespace-nowrap mr-1'>
                  افزودن آدرس جدید
                </span>
              </button>
            )}
          </p>
        </div>

        {inputList.length !== 0 ? (
          <section className='grid grid-cols-1 md:grid-cols-2 gap-y-3 md:gap-x-4  mt-6 md:mt-4'>
            {inputList.map((item, index) => (
              <div key={index} className='border border-gray-400 rounded p-4'>
                <ul className='flex justify-between items-start text-gray-800 mb-2'>
                  <li className='caption-sm lg:body-sm'>
                    {item.addressDetail}
                  </li>
                  <li className='grid grid-cols-2 gap-x-3 mr-2'>
                    <button onClick={() => editHandler(index)}>
                      <Edit2 className='w-4 h-4 lg:w-6 lg:h-6' />
                    </button>
                    <button onClick={() => handleDelete(index)}>
                      <Trash className='w-4 h-4 lg:w-6 lg:h-6' />
                    </button>
                  </li>
                </ul>

                <ul className='caption-sm lg:body-sm text-gray-700 flex justify-between items-center'>
                  <li>محل کار</li>
                  <li>
                    {item.receiverName ? item.receiverName : 'سردار وظیفه'}
                  </li>
                  <li>
                    {item.phone
                      ? convertToFaNumber(item.phone)
                      : convertToFaNumber(item.receiverPhone)}
                  </li>
                </ul>
              </div>
            ))}

            <button
              className='lg:hidden caption-sm lg:button-lg w-32 rounded border border-primary hover:border-shade-200 active:border-shade-300 duration-300 text-primary py-1 px-4 mx-auto'
              onClick={() => dispatch(openModal({ id: 'AddAddressModal' }))}>
              افزودن آدرس جدید
            </button>
          </section>
        ) : (
          <div className='bg-[url("/images/Empty-page.png")] bg-center bg-no-repeat min-h-[200px] lg:min-h-0 border border-gray-400 rounded-lg lg:border-none p-6 mt-6 flex justify-center items-center flex-col lg:mt-12'>
            <p className='caption-sm lg:body-xl text-gray-700 text-center'>
              شما در حال حاضر هیچ آدرسی ثبت نکرده‌اید!
            </p>
            <button
              className='caption-sm lg:button-lg rounded border border-primary text-primary hover:text-shade-200 hover:border-shade-200 active:text-shade-300 active:border-shade-300 duration-300 py-1 px-4 lg:px-12  mt-4 lg:mt-8'
              onClick={() => dispatch(openModal({ id: 'AddAddressModal' }))}>
              افزودن آدرس
            </button>
          </div>
        )}
      </section>

      { isAddAddressModalOpen ? <ModalAddress /> : ''}
      {isDeleteModalOpen === true ? (
        <ModalDelete saveAddressIndex={saveAddressIndex} />
      ) : (
        ''
      )}
    </section>
  );
};

export default AddressPage;
