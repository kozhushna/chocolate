import { Controller, useForm } from 'react-hook-form';
import { ButtonClose } from 'components/ButtonIcon/ButtonClose';
import {
  PhoneStyled,
  StyledDiv,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledTextarea,
  Wrapper,
  WrapperInput,
} from './OderBuy.styled';
import { ButtonBgOrange } from 'components/ButtonBgOrange/ButtonBgOrange';
import { phonePatterns } from 'utils/globalConstants';
import { ErrorText } from 'components/ReviewForm/ReviewForm.styled';

export const FormOderBuy = ({ action }) => {
  const defaultCountry = 'ua';
  let phonePattern = phonePatterns[defaultCountry.toUpperCase()];
  let isPhoneValid = false;

  const handlePhoneChanged = (value, country) => {
    if (country) {
      phonePattern = phonePatterns[country.countryCode.toUpperCase()];
      isPhoneValid = value && value.match(phonePattern) != null;
    }
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
      <StyledForm
        onSubmit={handleSubmit(data => {
          console.log(data);
        })}
      >
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
              validate: () => isPhoneValid,
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
                onChange={(value, country, e) => {
                  handlePhoneChanged(value, country);
                  field.onChange(e);
                }}
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
      </StyledForm>
    </StyledDiv>
  );
};
