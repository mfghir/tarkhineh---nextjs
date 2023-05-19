import { ArrowLeft2, ArrowRight2 } from 'iconsax-react';
import { useSwiper } from 'swiper/react';

const SliderLeftBtn = ({ arrow = 'left', slot = 'container-end' }) => {
  const swiper = useSwiper();
  const ArrowElem = arrow === 'left' ? ArrowLeft2 : ArrowRight2;
  const buttonClassName = arrow === 'left' ? 'left-4' : 'right-4';

  const buttonClickHandler = () => {
    if (arrow === 'left') {
      swiper.slideNext();
    } else {
      swiper.slidePrev();
    }
  };

  return (
    <button
      onClick={buttonClickHandler}
      className={`absolute top-1/2 -translate-y-1/2 ${buttonClassName} z-10 bg-white text-gray-600 border border-gray-400 rounded-lg hidden lg:block`}
      slot={slot}>
      <ArrowElem size='32'  />
    </button>
  );
};

export default SliderLeftBtn;
