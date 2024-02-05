import Link from "next/link";
import { useRouter } from "next/router";
import { IoIosSearch, IoMdHome } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { GiRollingDices } from "react-icons/gi";
import styled from "styled-components";
import { FaRegBookmark } from "react-icons/fa";

export default function Navbar() {
  const router = useRouter();

  const isActive = (pathname) => router.pathname === pathname;

  return (
    <Nav>
      <StyledUl>
        <Link href="/" passHref>
          <StyledLi active={isActive("/")}>
            <IoMdHome style={{ color: "black", fontSize: "24px" }} />
            <StyledSpan>Home</StyledSpan>
          </StyledLi>
        </Link>
        <Link href="/search" passHref>
          <StyledLi active={isActive("/search")}>
            <IoIosSearch style={{ color: "black", fontSize: "24px" }} />
            <StyledSpan>Search</StyledSpan>
          </StyledLi>
        </Link>
        <Link href="/dice-game">
          <StyledLi>
            <RollingDices style={{ color: "white", fontSize: "24px" }} />
          </StyledLi>
        </Link>

        <Link href="/favorites" passHref>
          <StyledLi active={isActive("/favorites")}>
            <FaRegBookmark style={{ color: "black", fontSize: "24px" }} />
            <StyledSpan>Bookmarks</StyledSpan>
          </StyledLi>
        </Link>
        <Link href="/profile" passHref>
          <StyledLi active={isActive("/profile")}>
            <AiOutlineUser style={{ color: "black", fontSize: "24px" }} />
            <StyledSpan>Profile</StyledSpan>
          </StyledLi>
        </Link>
      </StyledUl>
    </Nav>
  );
}

const Nav = styled.nav`
  background: radial-gradient(circle, #f5f7fa 0%, #c3cfe2 100%);
  width: 100%;
  padding: 10px;
  position: fixed;
  z-index: 10;
  bottom: 0;
  left: 0;
  border-top: 1px solid white;
`;

const StyledUl = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
`;

const StyledLi = styled.li`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50px;
  gap: 10px;

  text-decoration: ${({ active }) =>
    active ? "underline black" : "transparent"};
`;

const RollingDices = styled(GiRollingDices)`
  font-size: 100px;
  height: 80px;
  width: 80px;
  background: linear-gradient(to right, #4231cc, #32bea6);
  border-radius: 100px;
  padding: 10px;
  position: absolute;
  top: 0;
  transform: translateY(-50%);
  border-top: 2px solid white;
`;

const StyledSpan = styled.span`
  font-size: 12px;
  color: black;
`;
