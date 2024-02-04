import styled from "styled-components";
import Image from "next/image";
import Login from "./Login";
import logo from "../public/images/logo.png";
export default function Header() {
  return (
    <StyledHeader>
      <StyleImage src={logo} width={100} height={100} alt="Logo" />
      <Login />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background: radial-gradient(circle, #f5f7fa 0%, #c3cfe2 100%);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  width: 100%;
  z-index: 100;
  position: fixed;
  top: 0;
  display: flex;
  padding: 10px 5%;
  justify-content: space-between;
  align-items: center;
`;

const StyleImage = styled(Image)`
  height: 50px;
`;
