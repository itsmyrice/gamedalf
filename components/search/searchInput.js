import styled from "styled-components";

export default function Search({ searchInput, setSearchInput }) {
  return (
    <Input
      type="text"
      id="text"
      placeholder="Insert name"
      value={searchInput}
      onChange={(event) => setSearchInput(event.target.value)}
    />
  );
}
const Input = styled.input`
  height: 4rem;
  margin-top: 2rem;
  margin-left: 20%;
  width:60%;
  font-size: 2.2rem;
  border-radius: 1.5rem;
  padding: 0.5rem 1.5rem;
  outline: none;
  border: none;
  box-shadow: 3px 3px 5px grey;
`;
