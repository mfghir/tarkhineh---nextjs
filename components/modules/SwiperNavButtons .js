import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import { useSwiper } from "swiper/react";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div>
      <button
        className="absolute top-1/2 right-5 text-Primary text-xl z-10"
        onClick={() => swiper.slidePrev()}
      >
        <ArrowRight2 />
      </button>
      <button
        className="absolute top-1/2 left-5 text-Primary text-xl z-10"
        onClick={() => swiper.slideNext()}
      >
        <ArrowLeft2 />
      </button>
    </div>
  );
};
