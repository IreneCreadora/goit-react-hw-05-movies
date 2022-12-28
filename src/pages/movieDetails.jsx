import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import toastParams from '../helpers/ToastParams';
import { getMovieById } from '../services/API/moviesAPI';
import GoBackBtn from 'components/goBackBtn/goBackBtn';
import MovieDescription from 'components/movieDescription/movieDescription';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState('');
  const { id } = useParams();
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    error && toast.error(error, toastParams);
  }, [error]);

  useEffect(() => {
    getMovieById(Number(id))
      .then(movie => {
        setMovie(movie);
        setError('');
      })
      .catch(error => {
        setError(error.message);
        setMovie(null);
      });
  }, [id]);

  return (
    <main>
      <GoBackBtn to={backLinkHref}>Go back</GoBackBtn>
      {movie && <MovieDescription movie={movie} location={location} />}
    </main>
  );
};

export default MovieDetails;
