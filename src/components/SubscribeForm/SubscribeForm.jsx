import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { emailRegex } from 'utils/globalConstants';
import { ButtonClose } from 'components/ButtonIcon/ButtonClose';
import { sizes } from '../../styles/theme';
import { theme } from 'styles';

import { ButtonBgOrange } from 'components/ButtonBgOrange/ButtonBgOrange';
import {
  Accent,
  BackgroundWrapper,
  ButtonWrapper,
  ContentWrapper,
  ErrorMessage,
  Form,
  FormHolder,
  FormTitle,
  Input,
} from './SubscribeForm.styled';

export const SubscribeForm = ({ action }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  return (
    <FormHolder>
      <BackgroundWrapper />
      <ButtonClose action={action} fill={theme.colors.white} />
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
                value: emailRegex,
                message: 'Invalid email address',
              },
            })}
            placeholder="Enter you email"
          />

          <ButtonWrapper>
            <ButtonBgOrange
              title={windowSize[0] > sizes.onlymobile ? 'Subscribe' : 'Submit'}
              smallFontSize={'14px'}
            />
          </ButtonWrapper>
        </ContentWrapper>
        {errors.email?.message && (
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
        )}
      </Form>
    </FormHolder>
  );
};
