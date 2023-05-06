import Image from 'next/image'
import React from 'react'
import HeaderSlider from '../pages/home/HeaderSlider'

const HomePage = () => {
  return (
    <div>
      <HeaderSlider />


<section className='w-full p-5 lg:px-[109px] flex justify-center items-center flex-col flex-wrap'>
  <input type="text" placeholder='جست و جو' className='mt-4 w-full h-8 border border-gray-400' />

<h6 className='text-gray-800 lg:hidden mb-3'>منوی رستوران</h6>
<h4 className='text-gray-800 hidden lg:block mb-8'>منوی رستوران</h4>

<ul className='mt-16 grid grid-cols-2 gap-y-16 gap-x-4 lg:grid-cols-4 lg:gap-x-6'>
  <li className='border rounded-lg w-[152px] h-[81px]  xl:w-72 xl:h-[180px] border-primary flex flex-col justify-center items-center relative'>
    <Image src="/images/menu1.png" alt='menu1' width={240} height={240} className="w-[102px] h-[100px] xl:w-60 xl:h-60 absolute -top-[60%]" />
    <button className='bg-primary caption-md rounded-md text-white w-[71px] h-8 p-2 absolute top-[80%]'>غذای اصلی</button>
  </li>

  <li className='border rounded-lg w-[152px] h-[81px]  xl:w-72 xl:h-[180px] border-primary flex flex-col justify-center items-center relative'>
    <Image src="/images/menu2.png" alt='menu1' width={240} height={240} className="w-[102px] h-[100px] xl:w-60 xl:h-60 absolute -top-[60%]" />
    <button className='bg-primary caption-md rounded-md text-white w-[71px] h-8 p-2 absolute top-[80%]'>پیش غذا</button>
  </li>

  <li className='border rounded-lg w-[152px] h-[81px]  xl:w-72 xl:h-[180px] border-primary flex flex-col justify-center items-center relative'>
    <Image src="/images/menu3.png" alt='menu1' width={240} height={240} className="w-[102px] h-[100px] xl:w-60 xl:h-60 absolute -top-[60%]" />
    <button className='bg-primary caption-md rounded-md text-white w-[71px] h-8 p-2 absolute top-[80%]'>دسر</button>
  </li>

  <li className='border rounded-lg w-[152px] h-[81px]  xl:w-72 xl:h-[180px] border-primary flex flex-col justify-center items-center relative'>
    <Image src="/images/menu4.png" alt='menu1' width={240} height={240} className="w-[102px] h-[100px] xl:w-60 xl:h-60 absolute -top-[60%]" />
    <button className='bg-primary caption-md rounded-md text-white w-[71px] h-8 p-2 absolute top-[80%]'>نوشیدنی</button>
  </li>
</ul>
      
</section>
    </div>
  )
}

export default HomePage