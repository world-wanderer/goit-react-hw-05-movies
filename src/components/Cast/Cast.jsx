import { getCastById } from 'api/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';
// import myImage from 'img/default.png';

function Cast() {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    if (!movieId) return;

    getCastById(movieId).then(cast => setCast(cast));
  }, [movieId]);
  // console.log(cast);
  // console.log(myImage);
  if (!cast) return;
  return (
    <>
      <ul className={css.container}>
        {cast &&
          cast.map(item => {
            console.log(item.profile_path);
            return (
              <li key={item.id} className={css.item}>
                {item.profile_path && (
                  <img
                    src={
                      item.profile_path
                        ? `https://image.tmdb.org/t/p/w500${item.profile_path}`
                        : `https://gdr.one/simg/400`
                    }
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
