import Link from "next/link";
import { IoIosSearch, IoMdHome } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
export default function Navbar() {
  return (
    <nav>
      <ul className="list-items">
        <li className="item">
          <Link href="/">
            <IoMdHome style={{ color: "black", fontSize: "24px" }} />
          </Link>
        </li>
        <li className="item">
          <Link href="/search">
            <IoIosSearch style={{ color: "black", fontSize: "24px" }} />
          </Link>
        </li>
        <li className="item">
          <Link href="/user">
            <AiOutlineUser style={{ color: "black", fontSize: "24px" }} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
