import Results from "@/components/Results";

const apiKey = process.env.API_KEY;
export default async function Home({searchParams} : any) {
  const genre = searchParams.genre || "fetchTrendng";

  const apiUrl = `https://api.themoviedb.org/3/${
    genre === "fetchTopRated"?"movie/top_rated":"trending/all/week"
  }?api_key=${apiKey}&language=en-US&page=1`;

  const res = await fetch(apiUrl,{next:{revalidate:10000}});
  if(!res.ok){
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  const results = data.results;

  return (
    <div>
      <Results results={results} />
    </div>
  )
}
