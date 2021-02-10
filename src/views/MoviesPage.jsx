import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Spinner from 'components/Spinner/Spinner';
import Searchbar from 'components/Searchbar/Searchbar';
import MoviesList from 'components/MoviesList/MoviesList';
import useStyles from 'styles/stylesPagination';
import { Pagination } from '@material-ui/lab';
import api from 'services/movies-api';

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
  const [totalPage, setTotalPage] = useState(0);

  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const page = new URLSearchParams(location.search).get('page') ?? 1;

  useEffect(() => {
    if (location.search === '') {
      return;
    }

    findForMovies(new URLSearchParams(location.search).get('query'));
  }, [location.search]);

  const findForMovies = (query, page) => {
    api
      .fetchMovieByName(query, page)
      .then(({ results, total_pages }) => {
        if (results.length !== 0) {
          setFindFilms(results);
          setTotalPage(total_pages);
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

  const onHandlePage = (_, page) => {
    history.push({ ...location, search: `page=${page}` });
  };

  return (
    <main>
      <Searchbar />

      {status === Status.PENDING && <Spinner />}

      {status === Status.RESOLVED && (
        <>
          {findFilms && <MoviesList movies={findFilms} />}
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

export default MoviesPage;
