import { useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MoviesList } from 'components/moviesList/moviesList';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import toastParams from '../helpers/ToastParams';
import { SearchBox } from '../components/searchBox/searchBox';
import { getMovies } from '../services/API/moviesAPI';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';
  const [searchMovies, setSearchMovies] = useState([]);
  const [error, setError] = useState('');
  const location = useLocation();

  useEffect(() => {
    error && toast.error(error, toastParams);
  }, [error]);

  useEffect(() => {
    if (!searchQuery) {
      setSearchMovies([]);
      return;
    }

    if (searchQuery.trim() === '' || searchQuery === '') {
      setError('🦄Lets start the search');
      return;
    }

    getMovies(searchQuery.toLowerCase().trim())
      .then(movies => {
        setSearchMovies(movies);
        if (movies.length === 0) {
          setError('Sorry, something went wrong.🦄 Please try again');
        }
        setError('');
      })
      .catch(error => {
        console.log(error.message);
        setSearchMovies([]);
        setError(error);
      });
  }, [searchQuery]);

  const updateQuery = value => {
    setSearchParams(value !== '' ? { query: value } : {});
  };

  return (
    <main>
      <SearchBox value={searchQuery} onChange={updateQuery} />
      <MoviesList movies={searchMovies} location={location} />
    </main>
  );
};

export default Movies;
