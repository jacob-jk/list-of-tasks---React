import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
  font-family: 'Montserrat', sans-serif;
  background-color: #e2e1e1;
  text-indent: 0;
  margin: 0;
  }
`;
