import PropTypes from 'prop-types';
import { Card, Thumb, Poster, Discription, Vote } from './movieInfo.styled';

export const MovieInfo = ({ title, poster, vote }) => {
  return (
    <Card>
      <Thumb>
        <Poster src={poster} alt={title} />
      </Thumb>
      <Discription>
        <span>{title}</span>
        {vote ? <Vote>{vote}</Vote> : null}
      </Discription>
    </Card>
  );
};

MovieInfo.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  vote: PropTypes.string,
};
