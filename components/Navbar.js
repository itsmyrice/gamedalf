import Link from "next/link";
import { IoIosSearch, IoMdHome } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { GiRollingDices } from "react-icons/gi";
import styled from "styled-components";
import { FaRegHeart } from "react-icons/fa";
export default function Navbar() {
  return (
    <Nav>
      <ListItems>
        <Items>
          <Link href="/">
            <IoMdHome style={{ color: "black", fontSize: "24px" }} />
          </Link>
        </Items>
        <Items>
          <Link href="/search">
            <IoIosSearch style={{ color: "black", fontSize: "24px" }} />
          </Link>
        </Items>
        <Items>
          <Link href="/dice-game">
            <GiRollingDices style={{ color: "black", fontSize: "24px" }} />
          </Link>
        </Items>
        <Items>
          <Link href="/favorites">
            <FaRegHeart style={{ color: "black", fontSize: "24px" }} />
          </Link>
        </Items>
        <Items>
          <Link href="/profile">
            <AiOutlineUser style={{ color: "black", fontSize: "24px" }} />
          </Link>
        </Items>
      </ListItems>
    </Nav>
  );
}

const ListItems = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
`;
const Items = styled.li`
  cursor: pointer;
`;

const Nav = styled.nav`
  background-color: white;
  width: 100%;
  padding: 20px;
  position: fixed;
  z-index: 10;
  bottom: 0;
  left: 0;
  z-index: 10;
  border-top: 1px solid black;
`;
