import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CastList from '../CastList/CastList';
import Spinner from '../Spinner/Spinner';
import api from 'services/movies-api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      .then(({ cast }) => {
        if (cast.length === 0) {
          toast.error('No results!');
          setStatus(Status.IDLE);
          return;
        }
        setCasts(cast);
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

      {status === Status.RESOLVED && <CastList casts={casts} />}

      {status === Status.REJECTED && <h1>{error.message}</h1>}
    </>
  );
};

Cast.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Cast;
