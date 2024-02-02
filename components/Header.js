import styled from "styled-components";
import Image from "next/image";

export default function Header() {
  return (
    <StyledHeader>
      <StyleImage
        src={"/images/Logo.svg"}
        width={100}
        height={100}
        alt="Logo"
      />
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
  padding: 10px 0;
`;

const StyleImage = styled(Image)`
  height: 50px;
  width: 100%;
`;
