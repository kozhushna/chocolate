import { Button } from './ButtonBgWhite.styed';

export const ButtonBgWhite = ({
  type = 'button',
  action,
  title = 'Leave a review',
}) => {
  return (
    <Button type={type} onClick={action} title={title}>
      <p>{title}</p>
    </Button>
  );
};
