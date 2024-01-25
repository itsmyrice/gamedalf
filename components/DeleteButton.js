import useSWR from "swr";
import { useRouter } from "next/router";

export default function DeleteButton({ id }) {
  const router = useRouter();

  const {data, mutate } = useSWR();

  async function handleDelete(id) {
    if (window.confirm("Are you sure you want to delete this game?")) {
      await fetch(`/api/games/${id}`, {
        method: "DELETE",
      });

      const response = await fetch("/api/games");

      if (response.ok) {
        await response.json();
        mutate();
        window.alert("Your game is successfully deleted.")
        router.push("/profile");
      }
      if (!response.ok) {
        response.status(404).json({ status: "Could not be deleted." });
      }
    }
  }
  return (
    <button type="button" onClick={() => handleDelete(id)}>
      Delete
    </button>
  );
}
