import { useEffect, useState } from 'react';
import { Logo } from './Logo/Logo';
import { BurgerMenu, ContainerStyled, HeaderStyled } from './Header.styled';
import { Svg } from 'components/SvgIcon/SvgIcon';
import { Nav } from './Nav/Nav';
import { Socials } from './Socials/Socials';

export const Header = () => {
  const [iconSize, setIconSize] = useState();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', handleScreenWidth);
    return () => window.removeEventListener('resize', handleScreenWidth);
  }, [iconSize]);

  const handleScreenWidth = () => {
    if (window.innerWidth > 767) {
      return setIconSize(32);
    } else return setIconSize(28);
  };

  const initialIconSize = () => {
    if (iconSize) {
      return iconSize;
    }
    if (window.innerWidth > 767) {
      return 32;
    } else return 28;
  };

  const toggleMenu = () => {
    isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
  };

  return (
    <HeaderStyled>
      <ContainerStyled>
        <Logo />
        <Nav children isOpen={isMenuOpen} onClick={toggleMenu}>
          <Socials />
        </Nav>
        <BurgerMenu type="button" onClick={toggleMenu}>
          <Svg w={initialIconSize()} h={initialIconSize()} icon={'burger'} />
        </BurgerMenu>
      </ContainerStyled>
    </HeaderStyled>
  );
};
