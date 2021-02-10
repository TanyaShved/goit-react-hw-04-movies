import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import api from 'services/movies-api';
import MoviesList from 'components/MoviesList/MoviesList';
import Spinner from 'components/Spinner/Spinner';
import useStyles from 'styles/stylesPagination';
import { Pagination } from '@material-ui/lab';

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
  const [totalPage, setTotalPage] = useState(0);

  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const page = new URLSearchParams(location.search).get('page') ?? 1;

  useEffect(() => {
    setStatus(Status.PENDING);

    api
      .fetchPopularMovies(page)
      .then(({ results, total_pages }) => {
        if (results.length !== 0) {
          setMovies(results);
          setTotalPage(total_pages);
          setStatus(Status.RESOLVED);
          return;
        }
        return Promise.reject(new Error(`Sorry, Something came wrong!`));
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [page]);

  const onHandlePage = (_, page) => {
    history.push({ ...location, search: `page=${page}` });
  };

  return (
    <main>
      {status === Status.PENDING && <Spinner />}

      {status === Status.RESOLVED && (
        <>
          <h1 style={{ textAlign: 'center', color: '#ff6b08' }}>
            Trending today
          </h1>
          <MoviesList movies={movies} />
          {totalPage > 1 && (
            <Pagination
              className={classes.root}
              count={totalPage}
              onChange={onHandlePage}
              page={Number(page)}
              showFirstButton
              showLastButton
              size="large"
            />
          )}
        </>
      )}

      {status === Status.REJECTED && <h1>{error.message}</h1>}
    </main>
  );
};

export default HomePage;
