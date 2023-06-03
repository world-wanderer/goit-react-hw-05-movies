import { getCastById } from 'components/api/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';

function Cast() {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    getCastById(movieId).then(cast => setCast(cast));
  }, [movieId]);

  console.log(cast);

  if (!cast) return;

  return (
    <>
      <ul className={css.container}>
        {cast &&
          cast.map(item => {
            return (
              <li key={item.id} className={css.item}>
                {item.profile_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                    alt={item.name}
                  />
                )}
                <p>{item.name}</p>
                <p>
                  <span>Character:</span> {item.character}
                </p>
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default Cast;
