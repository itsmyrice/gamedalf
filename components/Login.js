import { useSession, signIn, signOut } from "next-auth/react";
import styled from "styled-components";

export default function Login() {
  const session = useSession();
  if (session.status === "authenticated") {
    return (
      <>
        <StyledButton onClick={() => signOut()}>Sign out</StyledButton>
      </>
    );
  }
  return (
    <>
      <StyledButton onClick={() => signIn()}>Sign in</StyledButton>
    </>
  );
}

const StyledButton = styled.button`
  border: 1px solid #0011ff;
  background-color: #0011ff;
  color: white;
  padding: 10px 40px;
  border-radius: 40px;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  margin-top: 20px;
  align-self: center;
  transition: 0.3s ease-in-out;
  &:hover {
    background-color: transparent;
    color: #0011ff;
    transition: 0.3s ease-in-out;
  }
`;