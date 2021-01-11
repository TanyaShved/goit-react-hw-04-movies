import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './PopularMoviesList.module.css';

const PopularMoviesList = ({ movies }) => {
  const { url } = useRouteMatch();
  const newUrl = url + 'movies';
  const location = useLocation();

  return (
    <>
      <ul className={s.list}>
        {movies.map(({ title, id }) => (
          <li key={id}>
            <Link
              to={{
                pathname: `${newUrl}/:${id}`,
                state: { from: location.pathname },
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

PopularMoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default PopularMoviesList;
