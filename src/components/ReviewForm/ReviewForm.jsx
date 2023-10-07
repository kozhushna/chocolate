import { useForm } from 'react-hook-form';
import { ButtonClose } from 'components/ButtonIcon/ButtonClose';

import { ButtonBgOrange } from 'components/ButtonBgOrange/ButtonBgOrange';
import {
  Accent,
  // ContentWrapper,
  ErrorText,
  Form,
  FormHolder,
  FormTitle,
  Input,
  Textarea,
} from './ReviewForm.styled';

export const ReviewForm = ({ action }) => {
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
          action();
        })}
      >
        <FormTitle>
          Leave a review about
          <br />
          <Accent> our chocolate</Accent>
        </FormTitle>
        {/* <ContentWrapper> */}
        <Input
          type="text"
          {...register('name', {
            required: {
              value: true,
              message: 'Please enter your name',
            },
          })}
          placeholder="Name"
        />

        {errors.name?.message && <ErrorText>{errors.name?.message}</ErrorText>}
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
          <ErrorText>{errors.email?.message}</ErrorText>
        )}
        <Input
          type="text"
          {...register('phone', {
            required: {
              value: true,
              message: 'Please enter your phone number',
            },

            maxLength: {
              value: 10,
              message: 'Your phone should be less than 10 numbers',
            },

            minLength: {
              value: 8,
              message: 'Your phone should be greater than 8 numbers',
            },
          })}
          placeholder="Phone number"
        />

        {errors.phone?.message && (
          <ErrorText>{errors.phone?.message}</ErrorText>
        )}
        <Textarea
          type="text"
          {...register('comment', {
            required: {
              value: true,
              message: 'Please enter your review',
            },

            minLength: {
              value: 2,
              message: 'Your review should be greater than 2 symbols',
            },
          })}
          placeholder="Enter text"
        />

        {errors.comment?.message && (
          <ErrorText>{errors.comment?.message}</ErrorText>
        )}

        <ButtonBgOrange title={'Send'} smallFontSize={'14px'} />
        {/* </ContentWrapper> */}
      </Form>
    </FormHolder>
  );
};
