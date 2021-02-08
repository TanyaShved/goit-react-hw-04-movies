import { useState, useEffect, lazy, Suspense } from 'react';
import {
  useParams,
  Route,
  useRouteMatch,
  useHistory,
  useLocation,
} from 'react-router-dom';
import MovieItem from '../components/MovieItem/MovieItem';
import api from '../services/movies-api';
import Spinner from '../components/Spinner/Spinner';
import GoBackButton from '../components/GoBackButton/GoBackButton';

const Cast = lazy(() =>
  import('../components/Cast/Cast' /* webpackChunkName: "cast-page" */),
);
const Reviews = lazy(() =>
  import(
    '../components/Reviews/Reviews' /* webpackChunkName: "reviews-page" */
  ),
);

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { path } = useRouteMatch();

  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  // console.log(movieId)

  const history = useHistory();
  const location = useLocation();

  // const newMovieId = Number(movieId.replace(/[^0-9.-]+/g, ''));

  useEffect(() => {
    setStatus(Status.PENDING);

    api
      .fetchMovieInfo(movieId)
      .then(setMovie, setStatus(Status.RESOLVED))
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [movieId]);

  return (
    movie && (
      <div>
        {status === Status.PENDING && <Spinner />}

        {status === Status.RESOLVED && (
          <>
            <GoBackButton history={history} path={location} />

            <MovieItem movie={movie} />

            <Suspense fallback={<Spinner />}>
              <Route path={`${path}/cast`}>
                <Cast id={movieId} />
              </Route>

              <Route path={`${path}/reviews`}>
                <Reviews id={movieId} />
              </Route>
            </Suspense>
          </>
        )}

        {status === Status.REJECTED && <h1>{error.message}</h1>}
      </div>
    )
  );
};

export default MovieDetailsPage;
