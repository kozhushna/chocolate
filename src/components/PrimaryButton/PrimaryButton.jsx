import { Button } from './PrimaryButton.styled';

export const PrimaryButton = ({
  type = 'submit',
  action,
  title = 'Buy now',
  style,
}) => {
  return (
    <Button type={type} onClick={action} title={title} style={style}>
      <p>{title}</p>
    </Button>
  );
};
