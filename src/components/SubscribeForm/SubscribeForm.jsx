import { useForm } from 'react-hook-form';
import { ButtonClose } from 'components/ButtonIcon/ButtonClose';

import { ButtonBgOrange } from 'components/ButtonBgOrange/ButtonBgOrange';
import { ErrorMessage, Form, FormHolder, Input } from './SubscribeForm.styled';

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
          console.log(data.email);
          action();
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
          placeholder="Enter you email"
        />

        {errors.email?.message && (
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
        )}

        <ButtonBgOrange title="Subscribe" />
      </Form>
    </FormHolder>
  );
};
