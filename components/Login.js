import { useSession, signIn, signOut } from "next-auth/react";
import styled from "styled-components";
import { MdOutlineLogin } from "react-icons/md";
import { MdLogout } from "react-icons/md";

export default function Login() {
  const session = useSession();
  if (session.status === "authenticated") {
    return (
      <StyledButton onClick={() => signOut()}>
        <MdLogout />
        Sign Out
      </StyledButton>
    );
  }
  return (
    <>
      <StyledButton onClick={() => signIn()}>
        <MdOutlineLogin />
        Sign In
      </StyledButton>
    </>
  );
}

const StyledButton = styled.button`
  background: transparent;
  border: none;
  background: white;
  border-radius: 20px;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 4px;
`;
