import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin:  0;
    padding:  0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
    background: ${props => props.theme.colors.grey4};
    color: ${props => props.theme.colors.grey0};
    height:  100vh;
  }
`

export default GlobalStyle;
