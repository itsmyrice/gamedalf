import useSWR from "swr";

export default function DeleteButton({ id }) {

    const { data, isLoading, error, mutate } = useSWR(id ? `api/games/${id}` : null);
    async function handleDelete(id) {

    const response = await fetch(`/api/games/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      await response.json();
      mutate();
    } else {
      console.error();
    }
  }
  return (
    <button type="button" onClick={() => handleDelete(id)}>
      Delete
    </button>
  );
}
