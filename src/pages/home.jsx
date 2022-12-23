import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import toastParams from '../helpers/ToastParams';
import { MoviesList } from '../components/moviesList/moviesList';
import { getTrendingMovies } from 'API/moviesAPI';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [error, setError] = useState(null);

  const location = useLocation();

  useEffect(() => {
    getTrendingMovies()
      .then(trendingMovies => {
        setTrendingMovies(trendingMovies);
        setError(null);
      })
      .catch(error => {
        setError(error.message);
        setTrendingMovies([]);
      });
  }, []);
  return (
    <main>
      <MoviesList movies={trendingMovies} location={location} />
      {error &&
        toast.error(
          'Sorry, something went wrong.🦄 Please try again',
          toastParams
        )}
    </main>
  );
};

export default Home;
