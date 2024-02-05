import styled from "styled-components";
export default function EditButton({ onClick }) {
  return (
    <StyledButton type="button" onClick={onClick}>
      Edit
    </StyledButton>
  );
}

const StyledButton = styled.button`
  display: flex;
  border-radius: 20px;
  border: none;
  padding: 8px 20px;
  align-items: center;
  gap: 4px;
  font-size: 16px;
  color: white;
  background: #1a1a1a;
`;
