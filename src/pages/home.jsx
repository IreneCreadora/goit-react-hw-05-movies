import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import toastParams from '../helpers/ToastParams';
import { MoviesList } from '../components/moviesList/moviesList';
import { getTrendingMovies } from '../services/API/moviesAPI';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [error, setError] = useState('');

  const location = useLocation();

  useEffect(() => {
    error && toast.error(error, toastParams);
  }, [error]);

  useEffect(() => {
    getTrendingMovies()
      .then(trendingMovies => {
        setTrendingMovies(trendingMovies);
        setError('');
      })
      .catch(error => {
        setError(error.message);
        setTrendingMovies([]);
      });
  }, []);
  return (
    <main>
      <MoviesList movies={trendingMovies} location={location} />
    </main>
  );
};

export default Home;
