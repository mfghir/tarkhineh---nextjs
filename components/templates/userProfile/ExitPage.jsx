import ProfileMenu from './ProfileMenu';
import { ArrowRight2 } from 'iconsax-react';
import ModalMessage from '@/components/modules/ModalMessage';

import { useRouter } from 'next/router';

const ExitPage = () => {
  const { push } = useRouter();

  return (
    <>
      <section className='px-5 lg:px-20 py-2 lg:py-12 lg:flex lg:flex-row lg:justify-between min-h-screen'>
        <div className='hidden lg:block lg:w-[25%] h-full  min-h-screen'>
          <ProfileMenu />
        </div>

        <section className='flex justify-center items-center lg:hidden'>
          <ArrowRight2 size='16' onClick={() => push('/profile')} />
          <p className=' header-7 lg:header-6 text-error text-center mx-auto'>
            خروج
          </p>
        </section>
      </section>

      <ModalMessage />
    </>
  );
};

export default ExitPage;
