import { Svg } from "components/SvgIcon/SvgIcon";
import { useState, useEffect } from "react";
import { Icons } from "./SocialIcon.styled";
import { IconsButton } from "./SocialIcon.styled";

export const SocialIcon = () => {
    const [iconSize, setIconSize] = useState();

  useEffect(() => {
    window.addEventListener('resize', handleScreenWidth);
    return () => window.removeEventListener('resize', handleScreenWidth);
  }, [iconSize]);

  const handleScreenWidth = () => {
    if (window.innerWidth > 1199) {
      return setIconSize(24);
    } else return setIconSize(22);
  };

  const initialIconSize = () => {
    if (iconSize) {
      return iconSize;
    }
    if (window.innerWidth > 1199) {
      return 24;
    } else return 22;
  };
    return (
        <Icons>
            <IconsButton href="https://www.instagram.com/">
                <Svg icon="instagram" w={initialIconSize()} h={initialIconSize()}/>
            </IconsButton>
            <IconsButton href="https://facebook.com/">
                <Svg icon="facebook" w={initialIconSize()} h={initialIconSize()}/>
            </IconsButton>
        </Icons>
    )
}