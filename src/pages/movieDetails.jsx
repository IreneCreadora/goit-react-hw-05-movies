import { useState, useEffect, Suspense } from 'react';
import { useLocation, useParams, Outlet } from 'react-router-dom';
import { InfinitySpin } from 'react-loader-spinner';
import { getMovieById } from 'API/moviesAPI';
import GoBackBtn from 'components/goBackBtn/goBackBtn';

import {
  Wrapper,
  Poster,
  Info,
  InfoItem,
  Genre,
  Nav,
  Link,
} from './movieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    getMovieById(Number(id))
      .then(movie => {
        setMovie(movie);
        setError(null);
      })
      .catch(error => {
        setError(error.message);
        setMovie(null);
      });
  }, [id]);

  return (
    <main>
      <GoBackBtn to={backLinkHref}>Go back</GoBackBtn>
      {movie && (
        <>
          <Wrapper>
            <Poster
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : `https://sdlatlas.com/public/img/thumbnail.jpg`
              }
              alt={movie.title}
            />
            <Info>
              <h2>
                {movie.title ? movie.title : 'name not found'} (
                {new Date(movie.release_date).getFullYear()})
              </h2>
              <ul>
                <InfoItem>
                  <p>
                    <b>Audience Evaluation: </b>
                    {movie.vote_average.toFixed(1)}
                  </p>
                </InfoItem>
                <InfoItem>
                  <p>
                    <b>Overview:</b>{' '}
                    {movie.overview ? movie.overview : <span>N/A</span>}
                  </p>
                </InfoItem>
                <InfoItem>
                  <b>Genres:</b>
                  {movie.genres.length > 0 ? (
                    <ul>
                      {movie.genres.map(({ id, name }) => (
                        <Genre key={id}>
                          <span>{name}</span>
                        </Genre>
                      ))}
                    </ul>
                  ) : (
                    <span>N/A</span>
                  )}
                </InfoItem>
              </ul>
            </Info>
          </Wrapper>
          <div>
            <h2>Additional information:</h2>
            <Nav>
              <Link to="cast" state={{ from: backLinkHref }}>
                Cast
              </Link>
              <Link to="reviews" state={{ from: backLinkHref }}>
                Reviews
              </Link>
            </Nav>
            <Suspense fallback={<InfinitySpin width="200" color="#4fa94d" />}>
              <Outlet />
            </Suspense>
          </div>
        </>
      )}
    </main>
  );
};

export default MovieDetails;
