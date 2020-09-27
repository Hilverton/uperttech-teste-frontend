import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --primary: #4e71fb;
    --title: #112B7D;
    --border: #ddd;
    --white: #fff;
    --black: #000;
    --card-background: #f1f2f6;
    --navbar-shadow: 0px 5px 5px 0px rgba(0,0,0,0.2);
    --card-shadow: 0px 5px 5px 2px rgba(0,0,0,0.2);
    --error: red;
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
    background-attachment: fixed;

    @media(max-width: 760px) {
      background-position: center;
    }
  }

  ul {
    list-style: none;
  }
`;
