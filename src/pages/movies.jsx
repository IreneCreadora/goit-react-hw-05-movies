import { useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MoviesList } from 'components/moviesList/moviesList';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import toastParams from '../helpers/ToastParams';
import { SearchBox } from '../components/searchBox/searchBox';
import { getMovies } from 'API/moviesAPI';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';
  const [searchMovies, setSearchMovies] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (!searchQuery) {
      setSearchMovies([]);
      return;
    }

    if (searchQuery.trim() === '' || searchQuery === '') {
      toast.error('🦄Lets start the search', toastParams);
      return;
    }

    getMovies(searchQuery.toLowerCase().trim())
      .then(movies => {
        setSearchMovies(movies);
        if (movies.length === 0) {
          toast.error('🦄Lets start the search', toastParams);
        }
        setError(null);
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
