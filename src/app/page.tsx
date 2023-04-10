import Results from "@/components/Results";
import { ApiResponse } from "@/interfaces/tmdb";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }: any) {
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    throw new Error("failed to fetch data");
  }

  const data = (await res.json()) as ApiResponse;
  const results = data.results;

  return (
    <div>
      <Results results={results} />
    </div>
  );
}
