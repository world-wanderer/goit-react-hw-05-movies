import css from './MovieList.module.css';
import { lazy } from 'react';
import { Link, useLocation } from 'react-router-dom';

function MovieList({ movies }) {
  const location = useLocation();

  return (
    <>
      <ul className={css.list_movies}>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <div className={css.list_movies_card}>
                <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    loading={String(lazy)}
                  />
                  <p className={css.title}>{movie.title}</p>
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default MovieList;
