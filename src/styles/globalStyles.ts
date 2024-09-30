// src/styles/GlobalStyles.ts
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    font-family: 'Arial', sans-serif; 
    background-color: #121212; 
    color: #e0e0e0; 
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #root {
    height: 100%;
    width: 100%;
  }
`;

export default GlobalStyles;
