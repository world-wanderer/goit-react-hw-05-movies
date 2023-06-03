import css from './MovieDetails.module.css';

import { fetchMovieDetails } from 'components/api/api';
import { lazy, Suspense, useEffect, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';

function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (!movieId) return;
    fetchMovieDetails(movieId).then(details => setMovieDetails(details));
  }, [movieId]);

  if (!movieDetails) {
    return null;
  }
  const backLink = location.state?.from ?? '/movies';
  return (
    <main>
      <button className={css.button}>
        <Link to={backLink} className={css.link}>
          Go back home
        </Link>
      </button>
      <div>
        {movieDetails && (
          <div className={css.wrapper}>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                alt={movieDetails.title}
                loading={String(lazy)}
                className={css.img}
              />
            </div>

            <div className={css.info}>
              <div>
                <h2>{movieDetails.title}</h2>
                <p>({parseInt(movieDetails.release_date)})</p>
              </div>
              <p>
                User Score: {`${movieDetails.vote_average.toFixed(2)} | 10`}
              </p>
              <h3>Overview</h3>
              <p>{`${movieDetails.overview}`}</p>
              <h3>Genres</h3>
              <p>{`${movieDetails.genres
                .map(genre => genre.name)
                .join(' / ')}`}</p>
            </div>
          </div>
        )}

        <hr />
        <h2>Additional information</h2>
        <ul className={css.list_item}>
          <li className={css.item}>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? '#70161E' : 'inherit',
              })}
              to="cast"
              state={{ from: backLink }}
            >
              Cast
            </NavLink>
          </li>
          <li className={css.item}>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? '#70161E' : 'inherit',
              })}
              to="reviews"
              state={{ from: backLink }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </main>
  );
}

export default MovieDetails;
