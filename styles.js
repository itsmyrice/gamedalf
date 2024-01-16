import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: system-ui;
  }
  .showMore {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: transparent;
    color: black;
    font-size: 60px;
    border-radius: 0.75rem;
    cursor: pointer;
    position: relative;
    .goPlus {
      display: none;
    }
  
    &:hover {
      box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
        0 8px 10px -6px rgb(0 0 0 / 0.1);
      transition: 0.3s;
    }
  }
  
`;
