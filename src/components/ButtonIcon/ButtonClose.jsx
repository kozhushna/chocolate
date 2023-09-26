import { Svg } from 'components/SvgIcon/SvgIcon';
import { StyledButton } from './ButtonClose.styled';
import { theme } from 'styles';

export const ButtonClose = ({ action }) => {
  const size = window.innerWidth < theme.sizes.tablet ? 24 : 28;

  return (
    <StyledButton type="button" onClick={action}>
      <Svg w={size} h={size} icon="close" />
    </StyledButton>
  );
};
