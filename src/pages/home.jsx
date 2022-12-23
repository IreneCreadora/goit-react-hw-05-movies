import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
    </main>
  );
};

export default Home;
