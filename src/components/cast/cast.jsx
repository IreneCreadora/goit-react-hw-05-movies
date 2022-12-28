import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCasts } from '../../services/API/moviesAPI';
import { Wrapper, Actor } from './cast.styled';

const Cast = () => {
  const { id } = useParams();
  const [actors, setActors] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCasts(Number(id))
      .then(actors => {
        setActors(actors);
        setError(null);
      })
      .catch(error => {
        setError(error);
        setActors([]);
      });
  }, [id]);

  return (
    <>
      {actors?.length > 0 && (
        <Wrapper>
          {actors.map(({ id, name, profile_path, character }) => (
            <Actor key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : `https://sdlatlas.com/public/img/thumbnail.jpg`
                }
                alt={name}
                width={200}
              />
              <div>
                <h3>{name}</h3>
                <p>
                  <b>Character:</b> {character}
                </p>
              </div>
            </Actor>
          ))}
        </Wrapper>
      )}
      {actors.length === 0 && !error && (
        <p>There is no information about actors for this movie</p>
      )}
    </>
  );
};

export default Cast;
