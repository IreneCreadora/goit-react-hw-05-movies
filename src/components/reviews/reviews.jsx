import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'API/moviesAPI';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getReviews(Number(id))
      .then(reviews => {
        setReviews(reviews);
        setError(null);
      })
      .catch(error => {
        setError(error);
        setReviews([]);
      });
  }, [id]);

  return (
    <>
      {reviews.length > 0 && !error && (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h4>Author: {author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
      {reviews.length === 0 && !error && (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
};

export default Reviews;
