import { useState, useEffect, lazy, Suspense } from 'react';
import { useParams, Route, useRouteMatch } from 'react-router-dom';
import MovieItem from '../components/MovieItem/MovieItem';
import api from '../services/movies-api';
import Spinner from '../components/Spinner/Spinner';

const Cast = lazy(() => import('./Cast' /* webpackChunkName: "cast-view" */));
const Reviews = lazy(() =>
  import('./Reviews' /* webpackChunkName: "reviews-view" */),
);

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { path } = useRouteMatch();
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  // const [cast, setCast] = useState([]);

  // console.log(movieId)
  // console.log(path)

  const newMovieId = Number(movieId.replace(/[^0-9.-]+/g, ''));
  // console.log(newMovieId)

  useEffect(() => {
    api
      .fetchMovieInfo(newMovieId)
      .then(setMovie)
      .catch(error => {
        setError(error);
      });
  }, [newMovieId]);

  return (
    <>
      {movie && (
        <>
          <MovieItem movie={movie} id={newMovieId} />
        </>
      )}

      <Suspense fallback={<Spinner />}>
        <Route path={`${path}/cast`}>
          <Cast id={newMovieId} />
        </Route>

        <Route path={`${path}/reviews`}>
          <Reviews id={newMovieId} />
        </Route>
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
