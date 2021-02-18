import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import slugify from 'slugify';
import avatar from 'icon/default.jpg';
import s from './MoviesList.module.css';

const makeSlug = string => slugify(string, { lower: true });

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <main className={s.main}>
        <ul className={s.list}>
          {movies.map(({ title, id, name, poster_path, vote_average }) => (
            <li key={id} className={s.item}>
              <Link
                to={{
                  pathname: `/movies/${makeSlug(`${title} ${id}`)}`,
                  state: { from: location },
                }}
              >
                <article>
                  <img
                    src={
                      poster_path
                        ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                        : avatar
                    }
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
