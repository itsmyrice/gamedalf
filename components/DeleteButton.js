import useSWR from "swr";
import styled from "styled-components";
export default function DeleteButton({ id }) {
  const { mutate } = useSWR();

  async function handleDelete(id) {
    if (window.confirm("Are you sure you want to delete this game?")) {
      await fetch(`/api/games/${id}`, {
        method: "DELETE",
      });

      const response = await fetch("/api/games");

      if (response.ok) {
        await response.json();
        mutate();
        window.alert("Your game is successfully deleted.");
      }
      if (!response.ok) {
        response.status(404).json({ status: "Could not be deleted." });
      }
    }
  }
  return (
    <StyledButton type="button" onClick={() => handleDelete(id)}>
      Delete
    </StyledButton>
  );
}
const StyledButton = styled.button`
  display: flex;
  border-radius: 20px;
  border: none;
  padding: 8px 20px;
  align-items: center;
  gap: 4px;
  font-size: 16px;
  color: white;
  background: #1a1a1a;
`;
