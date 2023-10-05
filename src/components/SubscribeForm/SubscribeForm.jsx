import { useForm } from 'react-hook-form';
import { ButtonClose } from 'components/ButtonIcon/ButtonClose';

import { ButtonBgOrange } from 'components/ButtonBgOrange/ButtonBgOrange';
import { Form, FormHolder, Input } from './SubscribeForm.styled';

export const SubscribeFoprm = ({ action }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <FormHolder>
      <ButtonClose action={action} />
      <Form
        onSubmit={handleSubmit(data => {
          console.log(data);
        })}
      >
        <Input
          type="text"
          {...register('email', {
            required: {
              value: true,
              message: 'Please enter your email address',
            },
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Invalid email address',
            },
          })}
        />

        {errors.email?.message && <p>{errors.email?.message}</p>}
        <ButtonBgOrange title="Submit" />
      </Form>
    </FormHolder>
  );
};
