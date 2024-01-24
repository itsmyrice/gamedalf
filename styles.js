import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  body {
    background: #5a4fcf;
    margin: 0;
    font-family: system-ui;
  }
  a {
    text-decoration: none;
}
`;
