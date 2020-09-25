import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --primary: #4e71fb;
    --title: #112B7D;
    --border: #ddd;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-weight: normal;
    font-family: 'Montserrat', sans-serif;
  }

  #root, body {
    height: 100%;
    width: 100%;
    background-image: url(/background3.svg);
    background-size: cover;
  }

  ul {
    list-style: none;
  }
`;
