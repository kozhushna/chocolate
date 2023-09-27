import { useEffect, useState } from 'react';
import { Svg } from 'components/SvgIcon/SvgIcon';
import { SocialBtn, SocialsStyled } from './Socials.styled';

export const Socials = () => {
  const [iconSize, setIconSize] = useState();

  useEffect(() => {
    window.addEventListener('resize', handleScreenWidth);
    return () => window.removeEventListener('resize', handleScreenWidth);
  }, [iconSize]);

  const handleScreenWidth = () => {
    if (window.innerWidth > 1199) {
      return setIconSize(24);
    } else return setIconSize(20);
  };

  const initialIconSize = () => {
    if (iconSize) {
      return iconSize;
    }
    if (window.innerWidth > 1199) {
      return 24;
    } else return 20;
  };

  return (
    <SocialsStyled>
      <SocialBtn
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Svg w={initialIconSize()} h={initialIconSize()} icon={'instagram'} />
      </SocialBtn>
      <SocialBtn
        href="https://www.facebook.com"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Svg w={initialIconSize()} h={initialIconSize()} icon={'facebook'} />
      </SocialBtn>
    </SocialsStyled>
  );
};
