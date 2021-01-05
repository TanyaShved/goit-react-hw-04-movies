import { useState, useEffect } from 'react';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../Spinner/Spinner';
import api from '../../services/movies-api';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const MoviesList = ({ movieName }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  const { url } = useRouteMatch();
  const location = useLocation();

  useEffect(() => {
    setStatus(Status.PENDING);

    api
      .fetchMovieByName(movieName)
      .then(searchMovies => {
        if (searchMovies.results.length !== 0) {
          setMovies(searchMovies.results);
          setStatus(Status.RESOLVED);
          return;
        }
        return Promise.reject(new Error(`Sorry. This movie was not found!`));
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [movieName]);

  return (
    <main>
      {status === Status.PENDING && <Spinner />}

      {status === Status.RESOLVED && (
        <>
          <ul>
            {movies.map(({ title, id }) => (
              <li key={id}>
                <Link
                  to={{
                    pathname: `${url}/:${id}`,
                    state: { from: location },
                  }}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}

      {status === Status.REJECTED && <h1>{error.message}</h1>}
    </main>
  );
};

MoviesList.propTypes = {
  movieName: PropTypes.string.isRequired,
};

export default MoviesList;
