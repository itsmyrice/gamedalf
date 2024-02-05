import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const StyledSection = styled.section`
  height: 100%;
  min-height: 100vh;
  padding: 100px 5% 150px 5%;
`;

export default createGlobalStyle`

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  body {
    background: radial-gradient(circle, #f5f7fa 0%, #c3cfe2 100%);
    margin: 0;
    font-family: 'Space Grotesk', sans-serif;
    overflow-y: auto;
  }
  a {
    text-decoration: none;
}
.swiper-button-next, .swiper-button-prev {
  background-color: white;
  padding: 20px 16px;
  border: 1px solid black;
  border-radius: 10px;
  color: black;
  background-size: 20px 20px; 
}
:root {
  --square-w: 15px;
  --square-h: 15px;
  --square-margin: 5px;
  --loader-w: calc(3 * var(--square-w) + 2 * var(--square-margin));
  --loader-h: calc(3 * var(--square-h) + 2 * var(--square-margin));
  --delay-enter: 0.3s;
  --top-enter: -10px;
}

@keyframes enter {
  0% {
    opacity: 0;
    top: var(--top-enter);
  }
  5% {
    opacity: 1;
    top: 0px;
  }
  50.9%, 55.9% {
    opacity: 0;
    top: calc(-1 * var(--top-enter));
  }
}

.swiper-wrapper{ 
  padding: 20px 0;
}
.loader {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: calc(-1 * var(--loader-w) / 2);
  margin-top: calc(-1 * var(--loader-h) / 2);
}

.square {
  background: white;
  width: var(--square-w);
  height: var(--square-h);
  float: left;
  top: var(--top-enter);
  margin-right: var(--square-margin);
  margin-top: var(--square-margin);
  position: relative;
  opacity: 0;
  animation: enter 3.5s infinite;
}

.square:last-child {
  margin-right: 0;
}

.square.clear {
  clear: both;
}

.square:nth-child(1) { animation-delay: calc(6 * var(--delay-enter)); }
.square:nth-child(2) { animation-delay: calc(7 * var(--delay-enter)); }
.square:nth-child(3) { animation-delay: calc(8 * var(--delay-enter)); background: #fdc96f; }
.square:nth-child(4) { animation-delay: calc(3 * var(--delay-enter)); }
.square:nth-child(5) { animation-delay: calc(4 * var(--delay-enter)); }
.square:nth-child(6) { animation-delay: calc(5 * var(--delay-enter)); }
.square:nth-child(8) { animation-delay: calc(1 * var(--delay-enter)); }
.square:nth-child(9) { animation-delay: calc(2 * var(--delay-enter)); }

`;
`
`;
