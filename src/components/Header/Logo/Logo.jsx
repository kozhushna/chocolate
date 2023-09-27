import { useEffect, useState } from 'react';
import { Svg } from 'components/SvgIcon/SvgIcon';
import { LogoAccent, LogoStyled, LogoTitle } from './Logo.styled';

export const Logo = () => {
  const [iconSize, setIconSize] = useState();

  useEffect(() => {
    window.addEventListener('resize', handleScreenWidth);
    return () => window.removeEventListener('resize', handleScreenWidth);
  }, [iconSize]);

  const handleScreenWidth = () => {
    if (window.innerWidth > 1199) {
      return setIconSize(24);
    } else return setIconSize(21);
  };

  const initialIconSize = () => {
    if (iconSize) {
      return iconSize;
    }
    if (window.innerWidth > 1199) {
      return 24;
    } else return 21;
  };

  return (
    <>
      <LogoStyled>
        <LogoTitle>
          <LogoAccent>SIMPLY</LogoAccent> CHOCOLATE
        </LogoTitle>
        <Svg w={initialIconSize()} h={initialIconSize()} icon={'logo'} />
      </LogoStyled>
    </>
  );
};
