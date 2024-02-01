import styled from "styled-components";
import Image from "next/image";

export default function Header() {
  return (
    <StyledHeader>
      <Image src={"/images/Logo.svg"} width={100} height={100} alt="Logo" />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background: radial-gradient(circle, #f5f7fa 0%, #c3cfe2 100%);
  width: 100%;
  z-index: 10000000;
  position: fixed;
  top: 0;
`;
