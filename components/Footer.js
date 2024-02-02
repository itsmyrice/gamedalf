import Link from "next/link"
import styled from "styled-components";

export default function Footer() {
    return (
        <StyledFooterWrapper>
            <nav>
                <StyledUlItems>
                    <li><StyledLink href={"/aboutus"}>About Us</StyledLink></li>
                    <li><StyledLink href={"/terms-of-use"}>Terms of Use</StyledLink></li>
                    <li>&copy; 2024 GameDalf</li>
                </StyledUlItems>              
            </nav>
        </StyledFooterWrapper>
    )
}

const StyledFooterWrapper = styled.footer`
width: 95%;
margin-bottom: 5rem;
font-size: 0.7rem;
color: white;
`;

const StyledUlItems = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
row-gap: 0.3rem;

`;
const StyledLink = styled(Link)`
color: white;
&:hover {
    cursor: pointer;
    color: #111111;
}
`;
