import styled from '@emotion/styled';
import { ModalContent } from 'components/Modal/Modal.styled';
import { theme } from 'styles';

export const StyledDiv = styled(ModalContent)`
  @media screen and (${theme.devices.tablet}) {
    width: 609px;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  margin: 0 auto;
  padding: 48px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export const WrapperInput = styled.div`
  width: 100%;
  display: flex;
  column-gap: 22px;
`;

export const StyledInput = styled.input`
  width: 100%;
  border-radius: 13px;
  padding: 22px;
  font-size: 18px;
  /* display: flex;
  column-gap: 22px; */
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  border-radius: 13px;
  padding: 22px;
  font-size: 18px;
  /* display: flex;
  column-gap: 22px; */
`;

// .p {
//   color: #bf1650;
//   text-align: center;
// }

// textarea,
// select,
// input {
//   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
//     "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
//     sans-serif;
//   display: block;
//   box-sizing: border-box;
//   width: 100%;
//   border-radius: 4px;
//   border: 1px solid white;
//   padding: 10px 15px;
//   margin-bottom: 15px;
//   font-size: 14px;
// }

// .label,
// section > label {
//   line-height: 2;
//   text-align: left;
//   display: block;
//   margin-bottom: 13px;
//   margin-top: 20px;
//   color: white;
//   font-size: 14px;
//   font-weight: 200;
// }

// input[type="submit"],
// .button {
//   position: relative;
//   background: #ec5990;
//   color: white;
//   text-transform: uppercase;
//   border: none;
//   font-weight: 600;
//   margin-top: 20px;
//   padding: 20px;
//   font-size: 16px;
//   letter-spacing: 2px;
//   display: block;
//   appearance: none;
//   border-radius: 4px;
//   width: 100%;
//   font-weight: 400;
//   letter-spacing: 0.5rem;
//   transition: 0.3s all;
// }

// .buttonBlack {
//   background: black;
//   border: 1px solid white;
// }

// .App {
//   max-width: 600px;
//   margin: 0 auto;
// }

// .container {
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   grid-gap: 20px;
// }

// .counter {
//   font-weight: 400;
//   background: white;
//   color: black;
//   padding: 10px 15px;
//   border-radius: 4px;
//   position: fixed;
//   top: 20px;
//   right: 30px;
//   z-index: 9999999;
// }

// button[type="button"] {
//   padding: 5px;
//   background: #516391;
//   color: white;
//   letter-spacing: 0px;
//   text-transform: none;
//   padding: 10px;
//   letter-spacing: 1px;
// }

// input[type="submit"]:hover,
// button[type="button"]:hover {
//   background: #bf1650;
//   color: white;
// }

// input[type="submit"]:active {
//   transition: 0.3s all;
//   top: 2px;
// }

// .preact {
//   opacity: 0;
//   color: white;
// }

// .preact:hover {
//   opacity: 1;
// }
