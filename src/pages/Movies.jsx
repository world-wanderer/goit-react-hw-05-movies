import { searchMovieByTitle } from '../components/api/api';
import MovieList from '../components/MovieList/MovieList';
import SearchForm from '../components/SearchForm/SearchForm';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

function Movies() {
  const [searchedMovies, setSearchedMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieToSearch = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!movieToSearch) return;

    searchMovieByTitle(movieToSearch).then(data =>
      setSearchedMovies(data.results)
    );
  }, [movieToSearch]);

  const handleSubmit = async newQuery => {
    setSearchParams({ query: newQuery });
  };

  return (
    <>
      <header>
        <SearchForm onSubmit={handleSubmit} />
      </header>
      <main>{searchedMovies && <MovieList movies={searchedMovies} />}</main>
    </>
  );
}

export default Movies;
