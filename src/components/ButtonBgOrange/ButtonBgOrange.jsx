import { Button } from './ButtonBgOrange.styled';

export const ButtonBgOrange = ({
  type = 'submit',
  action,
  title = 'Buy now',
  tabletFontSize,
}) => {
  return (
    <Button
      type={type}
      onClick={action}
      title={title}
      tabletFontSize={tabletFontSize}
    >
      <p>{title}</p>
    </Button>
  );
};
