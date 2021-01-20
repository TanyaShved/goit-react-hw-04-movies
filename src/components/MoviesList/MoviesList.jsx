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
      <main className={s.main}>
        <ul className={s.list}>
          {movies.map(({ title, id, name, poster_path, vote_average }) => (
            <li key={id} className={s.item}>
              <Link
                to={{
                  pathname: `${newUrl}/:${id}`,
                  state: { from: location },
                }}
              >
                <article>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    alt={title}
                    width="100%"
                    className={s.poster}
                  />
                  <div className={s.info}>
                    <h2 className={s.title}>
                      {title ? title : name}
                      <span className={s.rating}>{vote_average}</span>
                    </h2>
                  </div>
                </article>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MoviesList;
