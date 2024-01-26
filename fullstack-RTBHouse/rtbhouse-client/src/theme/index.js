import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  :root {
    --primary-color: #59217c; 
    --secondary-color: #3A0B09;
    --accent-color: #ED4135;
    --text-color: #333333;
    --text-variant-color: #ffffff;
    --background-color: #ffffff;
    --neutral-color: #edeaea;

    --font-family: 'Arial', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font-family)
  }

  body{
    background-color: var(--background-color);
  }

`;