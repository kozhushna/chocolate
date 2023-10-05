import { Button } from './ButtonBgOrange.styled';

export const ButtonBgOrange = ({
  type = 'submit',
  action,
  title = 'Buy now',
  smallFontSize,
}) => {
  return (
    <Button
      type={type}
      onClick={action}
      title={title}
      smallFontSize={smallFontSize}
    >
      <p>{title}</p>
    </Button>
  );
};
