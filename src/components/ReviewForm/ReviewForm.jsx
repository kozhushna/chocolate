import { useForm } from 'react-hook-form';
import { ButtonClose } from 'components/ButtonIcon/ButtonClose';
import { theme } from 'styles';

import { ButtonBgOrange } from 'components/ButtonBgOrange/ButtonBgOrange';
import {
  Accent,
  ContentWrapper,
  ErrorMessage,
  Form,
  FormHolder,
  FormTitle,
  Input,
} from './ReviewForm.styled';

export const ReviewForm = ({ action }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <FormHolder>
      <ButtonClose
        action={action}
        fill={theme.colors.white}
        hoverFill={theme.colors.accent}
      />
      <Form
        onSubmit={handleSubmit(data => {
          console.log(data.email);
          action();
        })}
      >
        <FormTitle>
          Explore our
          <br />
          <Accent>new chocolate</Accent> first!
        </FormTitle>
        <ContentWrapper>
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

          <ButtonBgOrange title={'Send'} smallFontSize={'14px'} />
        </ContentWrapper>
        {errors.email?.message && (
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
        )}
      </Form>
    </FormHolder>
  );
};
