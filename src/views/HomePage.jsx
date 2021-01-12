import { useState, useEffect } from 'react';
import api from '../services/movies-api';
import MoviesList from '../components/MoviesList/MoviesList';
import Spinner from '../components/Spinner/Spinner';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    setStatus(Status.PENDING);

    api
      .fetchPopularMovies()
      .then(popularMovies => {
        if (popularMovies.results.length !== 0) {
          setMovies(popularMovies.results);
          setStatus(Status.RESOLVED);
          return;
        }
        return Promise.reject(new Error(`Sorry, Something came wrong!`));
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, []);

  return (
    <main>
      {status === Status.PENDING && <Spinner />}

      {status === Status.RESOLVED && (
        <>
          <h1 style={{ marginLeft: '20px' }}>Trending today</h1>
          <MoviesList movies={movies} />
        </>
      )}

      {status === Status.REJECTED && <h1>{error.message}</h1>}
    </main>
  );
};

export default HomePage;
