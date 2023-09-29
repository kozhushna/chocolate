import { useEffect, useState } from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/autoplay';
import 'swiper/css';
import {
  Avatar,
  StyledLi,
  StyledSwiper,
  UserComment,
  UserName,
} from './Slider.styled';
import { commentsData } from 'utils/comments';

export const Slider = () => {
  const [slidesCount, setSlidersCount] = useState();

  useEffect(() => {
    window.addEventListener('resize', handleScreenWidth);
    return () => window.removeEventListener('resize', handleScreenWidth);
  }, [slidesCount]);

  const handleScreenWidth = () => {
    if (window.innerWidth > 1199) {
      setSlidersCount(3);
    }
    if ((window.innerWidth < 1200) & (window.innerWidth > 767)) {
      setSlidersCount(2);
    }
    if (window.innerWidth < 767) {
      setSlidersCount(1);
    }
  };

  const initialSlidesCount = () => {
    if (slidesCount) {
      return slidesCount;
    }
    if (window.innerWidth > 1199) {
      return 3;
    }
    if ((window.innerWidth < 1200) & (window.innerWidth > 767)) {
      return 2;
    }
    if (window.innerWidth < 768) {
      return 1;
    }
  };

  return (
    <>
      <StyledSwiper
        modules={[Autoplay, Pagination]}
        spaceBetween={16}
        slidesPerView={initialSlidesCount()}
        pagination={{ el: '.pagination-box' }}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        loop={true}
        speed={1500}
      >
        <>
          {commentsData.map(el => {
            return (
              <StyledLi key={el.id}>
                <picture>
                  <source srcSet={`${el.avatar} 1x, ${el.avatarRetina} 2x`} />
                  <Avatar src={el.avatar} alt="Avatar" width={80} height={80} />
                </picture>
                <UserName>{el.userName}</UserName>
                <UserComment>{el.userComment}</UserComment>
              </StyledLi>
            );
          })}
        </>
      </StyledSwiper>
    </>
  );
};
