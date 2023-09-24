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
import Avatar_01 from '../../../../images/avatar_01_@1x.jpg';
import Avatar_02 from '../../../../images/avatar_02_@1x.jpg';
import Avatar_03 from '../../../../images/avatar_03_@1x.jpg';
import Avatar_04 from '../../../../images/avatar_04_@1x.jpg';
import Avatar_05 from '../../../../images/avatar_05_@1x.jpg';
import Avatar_06 from '../../../../images/avatar_06_@1x.jpg';

const Data = [
  {
    id: '1',
    avatar: Avatar_01,
    userName: 'Victoria Dobrzhanska',
    userComment:
      'I love this chocolate bar. Perfect combination of light crispy wafer, covered in a thin layer chocolate.',
  },
  {
    id: '2',
    avatar: Avatar_02,
    userName: 'Nazar Babenko',
    userComment:
      'This chocolate confection is a delight! A delight! The wafer is light and crisp, the hazelnut cream is smooth, and the chocolate is good.',
  },
  {
    id: '3',
    avatar: Avatar_03,
    userName: 'Olena Kampusch',
    userComment:
      'Chocolate is a family favourite treat. Love the delicious smooth chocolate and the creaminess inside. The wafer is soft but crunchy.',
  },
  {
    id: '4',
    avatar: Avatar_04,
    userName: 'Petro Poroshenko',
    userComment:
      "This chocolate is just a masterpiece! Even better than my own! I'm just amazed! It's nice to feel that someone can do better))).",
  },
  {
    id: '5',
    avatar: Avatar_05,
    userName: 'Red Cat',
    userComment:
      "I'm a cat, I don't like chocolate. But I decided to write this comment because something had to be written. This comment is just to increase the content.",
  },
  {
    id: '6',
    avatar: Avatar_06,
    userName: 'Taras Bitenko',
    userComment:
      "I've been watching this team for a long time. If they took up this site, then this chocolate really deserves attention)).",
  },
];

export const Slider = () => {
  const [slidesCount, setSlidersCount] = useState();

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1199) {
        setSlidersCount(3);
      }
      if ((window.innerWidth < 1200) & (window.innerWidth > 767)) {
        setSlidersCount(2);
      }
      if (window.innerWidth < 767) {
        setSlidersCount(1);
      }
    });
  }, [slidesCount]);

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
          {Data.map(el => {
            return (
              <StyledLi key={el.id}>
                <Avatar src={el.avatar} alt="Avatar" width={80} height={80} />
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
