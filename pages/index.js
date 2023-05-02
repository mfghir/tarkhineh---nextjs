import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* <h1 className="text-Primary font-estedadBlack">ترخینه</h1> */}

      <div class="swiper-container swiper-container-sm md:swiper-container-md lg:swiper-container-lg h-[176px] bg-pink-300">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="bg-red-500 h-full"
        >
          <SwiperSlide>
            <Image
              className="relative"
              src="https://i.postimg.cc/bJcsw4LF/slider-1-phone.png"
              alt="slide1"
              fill
            />
            <h6 className="w-full text-center text-Tint-1 absolute top-1/3  z-10">
              تجربه غذای سالم و گیاهی به سبک ترخینه
            </h6>
            <button className="bg-Primary rounded px-2 py-1 absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 Caption-sm text-white">
              سفارش آنلاین غذا
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="relative"
              src="https://i.postimg.cc/kG6VM8bq/12.jpg"
              alt="slide2"
              fill
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              className="relative"
              src="https://i.postimg.cc/FKpkThv5/14.jpg"
              alt="slide3"
              fill
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              className="relative"
              src="https://i.postimg.cc/DZzJDRfW/15.jpg"
              alt="slide4"
              fill
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="relative"
              src="https://i.postimg.cc/d1SkKnD5/8.jpg"
              alt="slide5"
              fill
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="relative"
              src="https://i.postimg.cc/KYxg7RdD/9.jpg"
              alt="slide6"
              fill
            />
          </SwiperSlide>
        
        </Swiper>
      </div>
    </main>
  );
}
