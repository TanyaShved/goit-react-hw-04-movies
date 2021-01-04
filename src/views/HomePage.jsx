import { useState, useEffect } from 'react';
import api from '../services/movies-api';
import PopularMoviesList from '../components/PopularMoviesList/PopularMoviesList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .fetchPopularMovies()
      .then(popularMovies => {
        if (popularMovies.results.length !== 0) {
          setMovies(popularMovies.results);
          return;
        }
        return Promise.reject(new Error(`Sorry, Something came wrong!`));
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  return (
    <>
      <PopularMoviesList movies={movies} />
    </>
  );
};

export default HomePage;
