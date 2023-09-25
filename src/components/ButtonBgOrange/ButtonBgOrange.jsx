import { Button } from './ButtonBgOrange.styled';

export const ButtonBgOrange = ({
  type = 'submit',
  action,
  title = 'Buy now',
}) => {
  return (
    <Button type={type} onClick={action} title={title}>
      <p>{title}</p>
    </Button>
  );
};
