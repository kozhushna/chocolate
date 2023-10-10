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
import { phonePatterns } from 'utils/globalConstants';
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
            <StyledInput {...register('firstName')} placeholder="Name" />
            <StyledInput {...register('surname')} placeholder="Surname" />
          </WrapperInput>
        </Wrapper>
        <Wrapper>
          <StyledLabel htmlFor="email">Email</StyledLabel>
          <StyledInput {...register('email')} placeholder="Enter you email" />
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
        {/* <Wrapper>
          <StyledLabel htmlFor="card">Card number</StyledLabel>
          <StyledInput {...register('card')} placeholder="Enter card" />
        </Wrapper> */}
        <Wrapper>
          <StyledLabel htmlFor="Comment">Comment</StyledLabel>
          <StyledTextarea {...register('comment')} placeholder="Enter text" />
        </Wrapper>
        {/* <p>{data}</p> */}
        <ButtonBgOrange title="Submit" />
      </form>
    </StyledDiv>
  );
};
