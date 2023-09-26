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
import Avatar_01 from '../../../../images/Comments/avatar_01_@1x.jpg';
import Avatar_02 from '../../../../images/Comments/avatar_02_@1x.jpg';
import Avatar_03 from '../../../../images/Comments/avatar_03_@1x.jpg';
import Avatar_04 from '../../../../images/Comments/avatar_04_@1x.jpg';
import Avatar_05 from '../../../../images/Comments/avatar_05_@1x.jpg';
import Avatar_06 from '../../../../images/Comments/avatar_06_@1x.jpg';
import Avatar_07 from '../../../../images/Comments/avatar_07_@1x.jpg';
import Avatar_08 from '../../../../images/Comments/avatar_08_@1x.jpg';

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
    userName: 'Natalia Sus',
    userComment:
      'The chocolate assortment was delicious. Both dark and milk chocolate pieces were smooth and just right on the sweetness level.',
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
  {
    id: '7',
    avatar: Avatar_07,
    userName: 'Danilo Nottingham',
    userComment:
      'This is delicious. It so rich and flavorful you don’t need to use as many. I love topping an apple with almond butter and these chips for a snack.',
  },
  {
    id: '8',
    avatar: Avatar_08,
    userName: 'Irina Tydnyuk',
    userComment:
      "This is simply the best chocolate around, and I'm just thrilled to support a local company! Best local chocolate - world class :)",
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
