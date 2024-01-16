import Image from "next/image";
import styled from "styled-components";
export default function GameSearchList({ data }) {
  return (
    <ListGames>
      {data.map((item) => (
        <SingleListItem key={item.id}>
          <ImageDiv>
            <Image src={item.image} alt={item.id} height={100} width={120} />
          </ImageDiv>
        </SingleListItem>
      ))}
    </ListGames>
  );
}
const ListGames = styled.ul`
  width: 80%;
  margin-left: 10%;
  margin-top: 6rem;
  list-style: none;
`;
const SingleListItem = styled.li`
  border-radius: 1.4rem;
  margin-bottom: 2rem;
  box-shadow: 3px 3px 5px grey;
  owerflow: hidden;
  outline: none;
  height: 8rem;
`;
const ImageDiv = styled.div`
  height:100%;



`