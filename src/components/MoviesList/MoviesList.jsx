import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './MoviesList.module.css';

const MoviesList = ({ movies }) => {
  const { url } = useRouteMatch();
  let newUrl = url;
  const location = useLocation();

  if (url === '/') {
    newUrl = url + 'movies';
  }

  return (
    <>
      <ul className={s.list}>
        {movies.map(({ title, id }) => (
          <li key={id}>
            <Link
              to={{
                pathname: `${newUrl}/:${id}`,
                state: { from: location },
              }}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MoviesList;
