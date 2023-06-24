import { useRouter } from 'next/router';
import ProfileMenu from './ProfileMenu';
import { ArrowRight2 } from 'iconsax-react';

const OrderTrackingPage = () => {
  const { pathname,push } = useRouter();


  return (
    <section className='px-5 lg:px-20 py-2 lg:py-12 lg:flex lg:flex-row lg:justify-between min-h-screen '>
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
          <p className='w-full header-7 lg:header-6 text-gray-800 text-center lg:text-right lg:pb-2 lg:border-b lg:border-gray-400'>
          سفارشات
          </p>
        </div>

        <section className='mt-6 lg:mt-12 flex justify-center items-center flex-col'></section>
      </section>
    </section>
  );
};

export default OrderTrackingPage;
