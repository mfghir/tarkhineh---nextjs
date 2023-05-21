import { useSwiper } from 'swiper/react';
import { useEffect, useState } from 'react';

const SliderDots = ({ activeIndex = 0 }) => {
  const swiper = useSwiper();

  return (
    <div
      slot='container-end'
      className='flex flex-row items-center gap-1 absolute bottom-0 left-1/2 -translate-x-1/2 w-fit z-10 px-4 py-2'>
      <svg
        width='154'
        height='33'
        viewBox='0 0 154 33'
        preserveAspectRatio='none'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='w-full h-full absolute inset-0 -z-[1]'>
        <path
          d='M13.1492 12.9957C15.3255 5.56588 21.9046 0 29.6466 0H125.118C132.571 0 138.998 5.16164 141.261 12.2634C144.25 21.6506 148.867 33 153.711 33C161.97 33 -9.49755 33 0.41389 33C6.07606 33 10.4444 22.2302 13.1492 12.9957Z'
          fill='white'
        />
      </svg>
      {swiper?.slides.map((slide, index) => (
        <span
          key={index}
          className={`block w-2 h-2 rounded-full
          ${index === activeIndex ? 'bg-primary !w-3 !h-3 border-2 border-tint-100' : 'bg-gray-500'}
          `}></span>
      ))}
    </div>
  );
};

export default SliderDots;
