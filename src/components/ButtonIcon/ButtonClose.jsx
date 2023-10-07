import { Svg } from 'components/SvgIcon/SvgIcon';
import { StyledButton } from './ButtonClose.styled';
import { theme } from 'styles';

export const ButtonClose = ({ action, fill }) => {
  const size = window.innerWidth < theme.sizes.tablet ? 24 : 28;

  return (
    <StyledButton type="button" onClick={action} fill={fill}>
      <Svg w={size} h={size} icon="close" />
    </StyledButton>
  );
};
