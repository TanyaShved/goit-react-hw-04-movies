import { Link, useRouteMatch } from 'react-router-dom';
import s from './PopularMoviesList.module.css';

const PopularMoviesList = ({ movies }) => {
  const { url } = useRouteMatch();
  const newUrl = url + 'movies';

  return (
    <>
      <ul className={s.list}>
        {movies.map(({ title, id }) => (
          <li key={id}>
            <Link to={`${newUrl}/:${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PopularMoviesList;
