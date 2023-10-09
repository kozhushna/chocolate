import { Controller, useForm } from 'react-hook-form';
import { emailRegex, phonePatterns } from 'utils/globalConstants';
import { ButtonClose } from 'components/ButtonIcon/ButtonClose';
import { ButtonBgOrange } from 'components/ButtonBgOrange/ButtonBgOrange';
import {
  Accent,
  ContentWrapper,
  ErrorText,
  Form,
  FormHolder,
  FormTitle,
  Input,
  Textarea,
  PhoneStyled,
} from './ReviewForm.styled';

export const ReviewForm = ({ action }) => {
  const defaultCountry = 'ua';
  const isPhoneValid = value => {
    const culture = document.querySelector('.flag').classList[1];
    if (value && culture) {
      const phonePattern = phonePatterns[culture.toUpperCase()];
      return phonePattern && value.match(phonePattern) != null;
    }
    return false;
  };

  const {
    register,
    handleSubmit,
    control,
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
          <Accent> our chocolate</Accent>
        </FormTitle>
        <ContentWrapper>
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

          {errors.name?.message && (
            <ErrorText>{errors.name?.message}</ErrorText>
          )}
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
          {errors.email?.message && (
            <ErrorText>{errors.email?.message}</ErrorText>
          )}

          <Controller
            control={control}
            name="phone"
            rules={{
              validate: value => {
                return isPhoneValid(value);
              },
            }}
            render={({ field: { ref, ...field } }) => (
              <PhoneStyled
                {...field}
                inputExtraProps={{
                  ref,
                  required: true,
                  autoFocus: true,
                }}
                country={defaultCountry}
                excludeCountries={['ru']}
                countryCodeEditable={true}
                placeholder="Phone number"
              />
            )}
          />
          {errors['phone'] && <ErrorText>Invalid Phone</ErrorText>}

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
        </ContentWrapper>

        <ButtonBgOrange title={'Send'} smallFontSize={'14px'} />
      </Form>
    </FormHolder>
  );
};
