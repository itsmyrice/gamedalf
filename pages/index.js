import useSWR from "swr";
import HorizontalGameList from "@/components/HorizontalGameList";

export default function HomePage() {
  const { data, error, isLoading } = useSWR("/api/games");

  if (error)
    return (
      <small>
        "Sorry, we couldn't retrieve the game data at the moment. Please try
        again later."
      </small>
    );

  if (!data || isLoading) return <small>loading...</small>;

  return (
    <>
      {data && (
        <div>
          <HorizontalGameList data={data.slice(0, 25)} categorieId={0} />
          <HorizontalGameList data={data.slice(26, 50)} categorieId={1} />
          <HorizontalGameList data={data.slice(51, 75)} categorieId={2} />
        </div>
      )}
    </>
  );
}
