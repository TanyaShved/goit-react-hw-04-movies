import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReviwesList from '../ReviwesList/ReviwesList';
import Spinner from '../Spinner/Spinner';
import api from 'services/movies-api';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Reviews = ({ id }) => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    setStatus(Status.PENDING);

    api
      .fetchReviews(id)
      .then(reviewsMovie => {
        setReviews(reviewsMovie.results);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [id]);

  return (
    <>
      {status === Status.PENDING && <Spinner />}

      {status === Status.RESOLVED && reviews.length > 0 && (
        <ReviwesList reviews={reviews} />
      )}

      {status === Status.RESOLVED && reviews.length === 0 && (
        <h2>We don't have any reviews for this movies!</h2>
      )}

      {status === Status.REJECTED && <h1>{error.message}</h1>}
    </>
  );
};

Reviews.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Reviews;
