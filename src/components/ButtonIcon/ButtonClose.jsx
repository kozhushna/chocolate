import { Svg } from 'components/SvgIcon/SvgIcon';
import { StyledButton } from './ButtonClose.styled';
import { theme } from 'styles';

export const ButtonClose = ({ action, fill, hoverFill }) => {
  const size = window.innerWidth < theme.sizes.tablet ? 24 : 28;

  return (
    <StyledButton
      type="button"
      onClick={action}
      fill={fill}
      hoverFill={hoverFill}
    >
      <Svg w={size} h={size} icon="close" />
    </StyledButton>
  );
};
