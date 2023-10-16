import { Controller, useForm } from 'react-hook-form';
import { ButtonClose } from 'components/ButtonIcon/ButtonClose';
import {
  PhoneStyled,
  StyledDiv,
  StyledFormTitle,
  StyledInput,
  StyledLabel,
  StyledTextarea,
  Wrapper,
  WrapperInput,
} from './OderBuy.styled';
import { ButtonBgOrange } from 'components/ButtonBgOrange/ButtonBgOrange';
import { emailRegex, phonePatterns } from 'utils/globalConstants';
import { ErrorText } from 'components/ReviewForm/ReviewForm.styled';
import { Accent } from 'App.styled';
import { ChoiceWeight } from './WeightChocolate';

export const FormOderBuy = ({ action }) => {
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
    <StyledDiv>
      <ButtonClose action={action} />
      <form
        onSubmit={handleSubmit(data => {
          console.log(data);
          action();
        })}
      >
        <StyledFormTitle>
          <Accent>Buy </Accent>
          now
        </StyledFormTitle>
        <ChoiceWeight />
        <Wrapper>
          <StyledLabel htmlFor="firstName">Personal information</StyledLabel>
          <WrapperInput>
            <StyledInput
              type="text"
              {...register('firstName', {
                required: {
                  value: true,
                  message: 'Please enter your personal information',
                },
              })}
              placeholder="Name"
            />
            <StyledInput
              type="text"
              {...register('surname', {
                required: {
                  value: true,
                  message: 'Please enter your personal information',
                },
              })}
              placeholder="Surname"
            />
          </WrapperInput>
          {(errors.firstName?.message && (
            <ErrorText>{errors.firstName?.message}</ErrorText>
          )) ||
            (errors.surname?.message && (
              <ErrorText>{errors.surname?.message}</ErrorText>
            ))}
        </Wrapper>
        <Wrapper>
          <StyledLabel htmlFor="email">Email</StyledLabel>
          <StyledInput
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
        </Wrapper>
        <Wrapper>
          <StyledLabel htmlFor="phone">Phone number</StyledLabel>

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
        </Wrapper>

        <Wrapper>
          <StyledLabel htmlFor="Comment">Comment</StyledLabel>
          <StyledTextarea
            type="text"
            {...register('comment', {
              required: {
                value: true,
                message: 'Please enter your comment',
              },

              minLength: {
                value: 2,
                message: 'Your comment should be greater than 2 symbols',
              },
            })}
            placeholder="Enter text"
          />
          {errors.comment?.message && (
            <ErrorText>{errors.comment?.message}</ErrorText>
          )}
        </Wrapper>
        <ButtonBgOrange title="Submit" action={handleSubmit} />
      </form>
    </StyledDiv>
  );
};
