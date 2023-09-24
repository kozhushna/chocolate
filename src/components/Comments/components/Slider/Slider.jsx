import { Autoplay } from 'swiper/modules';
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

const Data = [
  {
    Avatar: Avatar_01,
    Name: 'Victoria Dobrzhanska',
    Comment:
      'I love this chocolate bar. Perfect combination of light crispy wafer, covered in a thin layer chocolate.',
  },
  {
    Avatar: Avatar_02,
    Name: 'Nazar Babenko',
    Comment:
      'This chocolate confection is a delight! A delight! The wafer is light and crisp, the hazelnut cream is smooth, and the chocolate is good.',
  },
  {
    Avatar: Avatar_03,
    Name: 'Olena Kampusch',
    Comment:
      ' Chocolate is a family favourite treat. Love the delicious smooth chocolate and the creaminess inside. The wafer is soft but crunchy.',
  },
];

export const Slider = () => {
  return (
    <StyledSwiper
      modules={[Autoplay]}
      autoplay={{ delay: 7000, disableOnInteraction: false }}
      loop={true}
      speed={1200}
    >
      <StyledLi>
        <Avatar src={Data[0].Avatar} alt="Avatar" width={80} height={80} />
        <UserName>{Data[0].Name}</UserName>
        <UserComment>{Data[0].Comment}</UserComment>
      </StyledLi>
      <StyledLi>
        <Avatar src={Data[1].Avatar} alt="Avatar" width={80} height={80} />
        <UserName>{Data[1].Name}</UserName>
        <UserComment>{Data[1].Comment}</UserComment>
      </StyledLi>
      <StyledLi>
        <Avatar src={Data[2].Avatar} alt="Avatar" width={80} height={80} />
        <UserName>{Data[2].Name}</UserName>
        <UserComment>{Data[2].Comment}</UserComment>
      </StyledLi>
    </StyledSwiper>
  );
};
