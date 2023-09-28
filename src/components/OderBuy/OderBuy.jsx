// import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ButtonClose } from 'components/ButtonIcon/ButtonClose';
import {
  StyledDiv,
  StyledForm,
  StyledInput,
  StyledTextarea,
  Wrapper,
  WrapperInput,
} from './OderBuy.styled';
// import { computeHeadingLevel } from '@testing-library/react';
// import { ClassNames } from '@emotion/react';
import { ButtonBgOrange } from 'components/ButtonBgOrange/ButtonBgOrange';

export const FormOderBuy = ({ action }) => {
  const { register, handleSubmit } = useForm();
  // const [data, setData] = useState('');

  return (
    <StyledDiv>
      <ButtonClose action={action} />
      <StyledForm
        onSubmit={handleSubmit(data => {
          console.log(data);
        })}
      >
        <Wrapper>
          <label htmlFor="firstName">Personal information</label>
          <WrapperInput>
            <StyledInput {...register('firstName')} placeholder="Name" />
            <StyledInput {...register('surname')} placeholder="Surname" />
          </WrapperInput>
        </Wrapper>
        <Wrapper>
          <label htmlFor="email">Email</label>
          <StyledInput {...register('email')} placeholder="Enter you email" />
        </Wrapper>
        <Wrapper>
          <label htmlFor="phone">Phone number</label>
          <StyledInput {...register('phone')} placeholder="Phone number" />
        </Wrapper>
        <Wrapper>
          <label htmlFor="card">Card number</label>
          <StyledInput {...register('card')} placeholder="Enter card" />
        </Wrapper>
        <Wrapper>
          <label htmlFor="Comment">Comment</label>
          <StyledTextarea {...register('comment')} placeholder="Enter text" />
        </Wrapper>
        {/* <p>{data}</p> */}
        <ButtonBgOrange title="Submit" />
      </StyledForm>
    </StyledDiv>
  );
};
