import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CastList from '../CastList/CastList';
import Spinner from '../Spinner/Spinner';
import api from '../../services/movies-api';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Cast = ({ id }) => {
  const [casts, setCasts] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    setStatus(Status.PENDING);

    api
      .fetchCast(id)
      .then(castMovie => {
        if (castMovie.cast.length !== 0) {
          setCasts(castMovie.cast);
          setStatus(Status.RESOLVED);
          return;
        }
        return Promise.reject(new Error(`Sorry, Something came wrong!`));
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [id]);

  return (
    <>
      {status === Status.PENDING && <Spinner />}

      {status === Status.RESOLVED && <CastList casts={casts} />}

      {status === Status.REJECTED && <h1>{error.message}</h1>}
    </>
  );
};

Cast.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Cast;
