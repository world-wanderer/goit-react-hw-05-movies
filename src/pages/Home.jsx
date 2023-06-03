import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'components/api/api';
import MovieList from 'components/MovieList/MovieList';
function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(res => setTrendingMovies(res));
  }, []);

  if (!trendingMovies) return;

  return (
    <>
      <header>
        <h1>TRENDING FILMS</h1>
      </header>
      <main>{trendingMovies && <MovieList movies={trendingMovies} />}</main>
    </>
  );
}

export default Home;
