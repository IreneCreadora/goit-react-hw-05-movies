import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { List, Item } from './moviesList.styled';
import { MovieInfo } from 'components/movieInfo/movieInfo';

export const MoviesList = ({ movies, location }) => {
  return (
    <List>
      {movies.map(({ id, title, poster_path, vote_average }) => (
        <Item key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <MovieInfo title={title} poster={poster_path} vote={vote_average} />
          </Link>
        </Item>
      ))}
    </List>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
      vote_average: PropTypes.string,
    })
  ).isRequired,
  location: PropTypes.object.isRequired,
};
