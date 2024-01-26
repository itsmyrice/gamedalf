import Link from "next/link";
import styled from "styled-components";

export default function AboutUs() {
    return (
        <StyledLink href={"/aboutus"}>About us</StyledLink>
    )
}

const StyledLink = styled(Link)`
color: #111111;
padding: 0.3rem;
margin-left: 1.2rem;
/* border-left: 1px solid #111111;
box-shadow: 0px 0px 3px 0px; */
&:hover {
    color: #ff8200;
    border-left: 1px solid #111111;
}
`;