import { useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import './style.css';
import { ButtonClose } from 'components/ButtonIcon/ButtonClose';
import {
  StyledDiv,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledTextarea,
  Wrapper,
  WrapperInput,
} from './OderBuy.styled';
import { ButtonBgOrange } from 'components/ButtonBgOrange/ButtonBgOrange';

export const FormOderBuy = ({ action }, props) => {
  const { register, handleSubmit } = useForm();

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
          <PhoneInput
            {...register('phone')}
            country={'ua'}
            placeholder="Phone number"
            inputStyle={{
              padding: '22px 22px 22px 55px',
            }}
            {...props}
          />
        </Wrapper>
        <Wrapper>
          <StyledLabel htmlFor="card">Card number</StyledLabel>
          <StyledInput {...register('card')} placeholder="Enter card" />
        </Wrapper>
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
