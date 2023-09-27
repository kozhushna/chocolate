import { css } from '@emotion/react';
import { theme } from './theme';

import ttfRegular from '../fonts/Montserrat-Regular.ttf';
import ttfMedium from '../fonts/Montserrat-Regular.ttf';
import ttfSemiBold from '../fonts/Montserrat-SemiBold.ttf';
import ttfBold from '../fonts/Montserrat-Bold.ttf';

export const GlobalStyles = css`
  @font-face {
    font-family: 'Montserrat';
    font-weight: 400;
    font-style: normal;
    src: url('${ttfRegular}') format('truetype');
  }

  @font-face {
    font-family: 'Montserrat';
    font-weight: 500;
    font-style: normal;
    src: url('${ttfMedium}') format('truetype');
  }

  @font-face {
    font-family: 'Montserrat';
    font-weight: 600;
    font-style: normal;
    src: url('${ttfSemiBold}') format('truetype');
  }

  @font-face {
    font-family: 'Montserrat';
    font-weight: 700;
    font-style: normal;
    src: url('${ttfBold}') format('truetype');
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    width: 100vw;
  }

  body {
    width: 100vw;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    min-height: 100vh;
    font-style: normal;
    font-size: 14px;
    line-height: 1.285717;
    background-color: ${theme.colors.mainBackground};
    color: ${theme.colors.primaryText};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }

  ul,
  ol {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;
