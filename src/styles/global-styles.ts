import { createGlobalStyle, css } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      outline: none;
      box-sizing: border-box;
    }

    html {
      font-size: 62.5%;
    }

    body {
      font-family: 'Open Sans', sans-serif;
      font-size: ${theme.font.sizes.medium};

      /* .Toastify .Toastify__toast-container .Toastify__toast--success,
      .Toastify .Toastify__toast-container .Toastify__toast--warning,
      .Toastify .Toastify__toast-container .Toastify__toast--error {
      } */
    }
  `}
`;
