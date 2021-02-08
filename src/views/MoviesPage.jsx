import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Spinner from '../components/Spinner/Spinner';
import Searchbar from '../components/Searchbar/Searchbar';
import MoviesList from '../components/MoviesList/MoviesList';
import api from '../services/movies-api';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const MoviesPage = () => {
  const [findFilms, setFindFilms] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  const location = useLocation();

  useEffect(() => {
    if (location.search === '') {
      return;
    }

    findForMovies(new URLSearchParams(location.search).get('query'));
  }, [location.search]);

  const findForMovies = query => {
    api
      .fetchMovieByName(query)
      .then(searchMovies => {
        if (searchMovies.results.length !== 0) {
          setFindFilms(searchMovies.results);
          setStatus(Status.RESOLVED);
          return;
        }
        return Promise.reject(new Error(`Sorry. This movie was not found!`));
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  };

  return (
    <main>
      <Searchbar />

      {status === Status.PENDING && <Spinner />}

      {status === Status.RESOLVED && (
        <>{findFilms && <MoviesList movies={findFilms} />}</>
      )}

      {status === Status.REJECTED && <h1>{error.message}</h1>}
    </main>
  );
};

export default MoviesPage;
