import { useRouter } from "next/router";
import { FaArrowLeft } from "react-icons/fa";
import styled from "styled-components";
export default function BackButton() {
  const router = useRouter();
  return (
    <StyledBackButton onClick={() => router.back()}>
      <FaArrowLeft />
      Back
    </StyledBackButton>
  );
}
const StyledBackButton = styled.button`
  border: 1px solid white;
  border-radius: 20px;
  padding: 6px 20px;
  margin-left: 5%;
  cursor: pointer;
  color: black;
  display: flex;
  background: radial-gradient(circle, #f5f7fa 0%, #c3cfe2 100%);
  gap: 4px;
  align-items: center;
`;
