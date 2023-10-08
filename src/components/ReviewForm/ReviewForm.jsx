import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
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
} from './ReviewForm.styled';

export const ReviewForm = ({ action }) => {
  const defaultCountry = 'ua';
  let phonePattern = phonePatterns[defaultCountry.toUpperCase()];
  const [isPhoneValid, setIsPhoneValid] = useState(false);

  const handlePhoneChanged = (value, country) => {
    if (country) {
      phonePattern = phonePatterns[country.countryCode.toUpperCase()];

      setIsPhoneValid(value && value.match(phonePattern) != null);
    }
  };

  // const isValidPhone = value => {
  //   console.log(value, phonePattern, typeof value);
  //   if (value && value.match(phonePattern) != null) {
  //     console.log(value, phonePattern);
  //     return true;
  //   }

  //   return false;
  // };

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
              //required: true,
              validate: () => isPhoneValid,
            }}
            render={({ field: { ref, ...field } }) => (
              <PhoneInput
                {...field}
                inputExtraProps={{
                  ref,
                  required: true,
                  autoFocus: true,
                }}
                country={defaultCountry}
                regions={'europe'}
                countryCodeEditable={false}
                placeholder="Phone number"
                onChange={(value, country, e) => {
                  field.onChange(e);
                  handlePhoneChanged(value, country);
                }}
                specialLabel={'Player Mobile Number'}
              />
            )}
          />
          {errors['phone'] && <p>Invalid Phone</p>}
          {/* <Input
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
          /> */}

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
        </ContentWrapper>

        <ButtonBgOrange title={'Send'} smallFontSize={'14px'} />
      </Form>
    </FormHolder>
  );
};

// import React from 'react';
// import { useForm, Controller } from 'react-hook-form';
// import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';

// import 'react-phone-number-input/style.css';

// const MyForm = () => {
//   const {
//     handleSubmit,
//     formState: { errors },
//     control,
//   } = useForm();

//   const onSubmit = data => {
//     console.log(data);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="user-info-form">
//       <div>
//         <label htmlFor="phone-input">Phone Number</label>
//         <Controller
//           name="phone-input"
//           control={control}
//           rules={{
//             validate: value => isValidPhoneNumber(value),
//           }}
//           render={({ field: { onChange, value } }) => (
//             <PhoneInput
//               value={value}
//               onChange={onChange}
//               defaultCountry="TH"
//               id="phone-input"
//             />
//           )}
//         />
//         {errors['phone-input'] && (
//           <p className="error-message">Invalid Phone</p>
//         )}
//       </div>
//     </form>
//   );
// };

// export default MyForm;
