import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function HomePage() {
  const { data, isLoading, error } = useSWR("api/games", fetcher)
  console.log(data)

  if (error) return <div>failed to load</div>
  if (!data || isLoading) return <div>loading...</div>

  return (
    <div>
      <h1>Gamedalf</h1>

    </div>
  );
}
