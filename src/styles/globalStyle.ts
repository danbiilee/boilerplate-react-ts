import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box;
  }
  a{
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }
  input, textarea {
    -moz-user-select: auto;
    -webkit-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
    padding: 0;
    border: 0;
  }
  input:focus {
    outline: none;
  }
  button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
  }
  html,
  body {
    height: 100%;
    font-size: 62.5%;
  }
  #root {
    height: 100%;
    color: #000000;
    font-size: 1.6rem;
    font-family: '맑은 고딕', 'malgun gothic', 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo',
                  'Microsoft NeoGothic', 'Droid sans', sans-serif;
  }
`;
