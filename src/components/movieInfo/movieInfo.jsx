import PropTypes from 'prop-types';
import { Card, Thumb, Poster, Discription, Vote } from './movieInfo.styled';

export const MovieInfo = ({ title, poster, vote }) => {
  const posterUrl = poster
    ? `https://image.tmdb.org/t/p/w500${poster}`
    : `https://sdlatlas.com/public/img/thumbnail.jpg`;

  return (
    <Card>
      <Thumb>
        <Poster src={posterUrl} alt={title} />
      </Thumb>
      <Discription>
        <span>{title ? title : 'name not found'}</span>
        {vote ? <Vote>{vote.toFixed(1)}</Vote> : null}
      </Discription>
    </Card>
  );
};

MovieInfo.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
};
