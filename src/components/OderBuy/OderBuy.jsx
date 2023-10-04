import { useForm } from 'react-hook-form';
// import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-input-2';
import './style.css';
import { ButtonClose } from 'components/ButtonIcon/ButtonClose';
import {
  StyledDiv,
  StyledForm,
  StyledInput,
  StyledLabel,
  // StyledPhoneInput,
  StyledTextarea,
  Wrapper,
  WrapperInput,
} from './OderBuy.styled';
// import { computeHeadingLevel } from '@testing-library/react';
// import { ClassNames } from '@emotion/react';
import { ButtonBgOrange } from 'components/ButtonBgOrange/ButtonBgOrange';
// import { PhoneInput } from 'react-international-phone';
// import 'react-international-phone/style.css';

export const FormOderBuy = ({ action }, props) => {
  // const [value, setValue] = useState();
  const { register, handleSubmit } = useForm();
  // const [data, setData] = useState('');
  // const [phone, setPhone] = useState('');

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
          {/* <PhoneInput
            {...register('phone')}
            defaultCountry="US"
            placeholder="Phone number"
            value={value}
            onChange={setValue}
            specialLabel={''}
            country={'th'}
            inputStyle={{
              borderColor: 'red',
            }}
          /> */}
          <StyledInput {...register('phone')} placeholder="Phone number" />
          <PhoneInput
            country={'ua'}
            placeholder="Phone number"
            inputStyle={{
              border: '1.6px solid',
              borderRadius: '13px',
              borderColor: `${props => props.theme.colors.inputBorder}`,
              padding: '22px 22px 22px 55px',
              fontSize: '14px',
              color: `${props => props.theme.colors.inputText}`,
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
