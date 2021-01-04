import { useState } from 'react';
import Searchbar from '../components/Searchbar/Searchbar';
import MoviesList from '../components/MoviesList/MoviesList';

const MoviesPage = () => {
  const [movieName, setMovieName] = useState('');

  const onSearch = movieName => {
    setMovieName(movieName);
  };

  return (
    <>
      <Searchbar onSubmit={onSearch} />
      {movieName && <MoviesList movieName={movieName} />}
    </>
  );
};

export default MoviesPage;
