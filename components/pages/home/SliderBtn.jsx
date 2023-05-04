import { ArrowLeft2, ArrowRight2 } from 'iconsax-react';
import { useSwiper } from 'swiper/react';

const SliderBtn = ({ arrow = 'left', slot = 'container-end' }) => {
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
      className={`absolute top-1/2 -translate-y-1/2 ${buttonClassName} z-10`}
      slot={slot}>
      <ArrowElem size='30' color='white' />
    </button>
  );
};

export default SliderBtn;
