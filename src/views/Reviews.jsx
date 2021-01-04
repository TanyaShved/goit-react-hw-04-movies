import { useState, useEffect } from 'react';
import ReviwesList from '../components/ReviwesList/ReviwesList';
import api from '../services/movies-api';

const Reviews = ({ id }) => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .fetchReviews(id)
      .then()
      .then(reviewsMovie => {
        if (reviewsMovie.id !== 0) {
          setReviews(reviewsMovie.results);
          return;
        }
        return Promise.reject(new Error(`Sorry, Something came wrong!`));
      })
      .catch(error => {
        setError(error);
      });
  }, [id]);

  return <ReviwesList reviews={reviews} />;
};

export default Reviews;
