import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import api from '../../services/movies-api';

const MoviesList = ({ movieName }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const { url } = useRouteMatch();

  useEffect(() => {
    api
      .fetchMovieByName(movieName)
      .then(searchMovies => {
        if (searchMovies.results.length !== 0) {
          setMovies(searchMovies.results);
          return;
        }
        return Promise.reject(new Error(`Sorry. This movie was not found!`));
      })
      .catch(error => {
        setError(error);
      });
  }, [movieName]);

  return (
    <>
      <ul>
        {movies.map(({ title, id }) => (
          <li key={id}>
            <Link to={`${url}/:${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MoviesList;
