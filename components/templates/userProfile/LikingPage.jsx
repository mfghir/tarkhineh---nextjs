import { ArrowRight2, CloseCircle } from 'iconsax-react';
import ProfileMenu from './ProfileMenu';
import { useRouter } from 'next/router';
import SearchBar from '@/components/modules/SearchBar';
import Image from 'next/image';

const LikingPage = () => {
  const { push } = useRouter();

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
          <p className='w-full header-7 lg:header-6 text-gray-800 text-center lg:text-right lg:pb-2 lg:border-b lg:border-gray-400'>
            علاقمندی‌ها
          </p>
        </div>

        <nav className='hidden mt-5 lg:grid lg:grid-cols-5 lg:gap-4'>
          <ul className='flex justify-start items-center overflow-x-scroll lg:overflow-hidden col-span-3'>
            <li className='bg-tint-100 px-3 rounded-full whitespace-nowrap ml-2 flex justify-between items-center'>
              <CloseCircle size='18' color='#717171' />
              <p className="overline-lg text-primary mx-2">همه</p>
              <Image
                src='/images/tick-square.png'
                alt='close'
                width='24'
                height='24'
              />
            </li>
            <li className='overline-lg text-gray-800 bg-gray-300 px-3 rounded-full whitespace-nowrap ml-2'>
              غذای اصلی
            </li>
            <li className='overline-lg text-gray-800 bg-gray-300 px-3 rounded-full whitespace-nowrap ml-2'>
              پیش غذا
            </li>
            <li className='overline-lg text-gray-800 bg-gray-300 px-3 rounded-full whitespace-nowrap ml-2'>
              دسر
            </li>
            <li className='overline-lg text-gray-800 bg-gray-300 px-3 rounded-full whitespace-nowrap ml-2'>
              نوشیدنی
            </li>
          </ul>

          <div className='w-full col-span-2'>
            <SearchBar />
          </div>
        </nav>

        <div className='bg-[url("/images/Empty-page.png")] bg-center bg-no-repeat min-h-[200px] lg:min-h-0 border border-gray-400 rounded-lg lg:border-none p-6 mt-6 flex justify-center items-center flex-col lg:mt-12'>
          <p className='caption-sm lg:body-xl text-gray-700'>
            شما در حال حاضر هیچ محصولی را به علاقه‌مندی‌ها اضافه نکرده‌اید!
          </p>
          <button className='caption-sm lg:button-lg rounded border border-primary text-primary hover:text-shade-200 hover:border-shade-200 active:text-shade-300 active:border-shade-300 duration-300 py-1 px-4 lg:px-12  mt-4 lg:mt-8'>
            منوی رستوران
          </button>
        </div>
      </section>
    </section>
  );
};

export default LikingPage;
