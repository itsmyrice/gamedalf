import Link from "next/link";
import { IoIosSearch, IoMdHome } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { GiRollingDices } from "react-icons/gi";
import styled from "styled-components";
import { FaRegBookmark } from "react-icons/fa";

export default function Navbar() {
  return (
    <Nav>
      <ListItems>
        <Link href="/">
          <Items>
            <IoMdHome style={{ color: "black", fontSize: "24px" }} />
            <StyledSpan>Home</StyledSpan>
          </Items>
        </Link>
        <Link href="/search">
          <Items>
            <IoIosSearch style={{ color: "black", fontSize: "24px" }} />
            <StyledSpan>Search</StyledSpan>
          </Items>
        </Link>
        <Link href="/dice-game">
          <Items>
            <RollingDices style={{ color: "white", fontSize: "24px" }} />
          </Items>
        </Link>
        <Link href="/favorites">
          <Items>
            <FaRegBookmark style={{ color: "black", fontSize: "24px" }} />
            <StyledSpan>Bookmarks</StyledSpan>
          </Items>
        </Link>
        <Link href="/profile">
          <Items>
            <AiOutlineUser style={{ color: "black", fontSize: "24px" }} />
            <StyledSpan>Profile</StyledSpan>
          </Items>
        </Link>
      </ListItems>
    </Nav>
  );
}
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
const ListItems = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
`;
const Items = styled.li`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50px;
  gap: 10px;
`;
const StyledSpan = styled.span`
  font-size: 12px;
  color: black;
`;

const Nav = styled.nav`
  background: radial-gradient(circle, #f5f7fa 0%, #c3cfe2 100%);
  width: 100%;
  padding: 10px;
  position: fixed;
  z-index: 10;
  bottom: 0;
  left: 0;
  z-index: 10;
  border-top: 1px solid white;
`;
