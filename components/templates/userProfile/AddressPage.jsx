import { ArrowRight2 } from 'iconsax-react';
import ProfileMenu from './ProfileMenu';
import { useRouter } from 'next/router';

import { useState } from 'react';
import ModalAddress from '@/components/modules/ModalAddress';
import { useSelector } from 'react-redux';

const AddressPage = () => {
  const { push } = useRouter();
  const [openModalAdress, setOpenModalAdress] = useState(false);
  const addressValue = useSelector(state => state.input.addressValue);


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
          <p className='w-full header-7 lg:header-6 text-gray-800 text-center mx-auto lg:text-right lg:pb-2 lg:border-b lg:border-gray-400'>
            آدرس ها
          </p>

          <p className="bg-red-200">
            -{addressValue ? "jdfdjj" : ""}
          </p>

        </div>

        <div className='bg-[url("/images/Empty-page.png")] bg-center bg-no-repeat min-h-[200px] lg:min-h-0 border border-gray-400 rounded-lg lg:border-none p-6 mt-6 flex justify-center items-center flex-col lg:mt-12'>
          <p className='caption-sm lg:body-xl text-gray-700 text-center'>
            شما در حال حاضر هیچ آدرسی ثبت نکرده‌اید!
          </p>
          <button className='caption-sm lg:button-lg rounded border border-primary text-primary hover:text-shade-200 hover:border-shade-200 active:text-shade-300 active:border-shade-300 duration-300 py-1 px-4 lg:px-12  mt-4 lg:mt-8'
          onClick={()=> setOpenModalAdress(!openModalAdress)}
          >
            افزودن آدرس
          </button>
        </div>
      </section>



{openModalAdress ? <ModalAddress  /> :"" }

    </section>
  );
};

export default AddressPage;
