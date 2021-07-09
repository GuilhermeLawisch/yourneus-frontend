import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
  --background-white: #f8f8f8;
  --background-dark: #282a36;

  --title-light-theme: #000;
  --title-dark-theme: #fff;

  --text-light-theme: #29292e;
  --text-dark-theme: #f8f8f2;

  --input-text-dark-theme: #6272a4;
  --input-text-light-theme: #f8f8f2;

  --gray-light: #a8a8b3;
  --gray-dark: #696970;
  --purple: #835afd;
  --purple-pink: #a364d7;
  --pink: #e559f9;
  --red: #ea4335;
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: hsl(0, 0%, 97%);
  }

  a {
    text-decoration: none;
    color: black;
  }
  
`;