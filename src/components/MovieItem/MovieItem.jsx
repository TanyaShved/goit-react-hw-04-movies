import { NavLink, useRouteMatch, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import AdditionalInformation from '../AdditionalInformation/AdditionalInformation';
import s from './MovieItem.module.css';

const MovieItem = ({ movie, toggleModal }) => {
  const { url } = useRouteMatch();
  const location = useLocation();

  return (
    <>
      <div className={s.card}>
        <div className={s.image_card}>
          <div>
            <NavLink
              to={{
                pathname: `${url}/trailer`,
                state: { from: location.state.from },
              }}
            >
              <button type="button" onClick={toggleModal} className={s.youtube}>
                <div className={s.overlayText}>
                  <h2 className={s.btnText}>Movie Trailer</h2>
                </div>
              </button>
            </NavLink>
          </div>

          {movie.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt="{movie.title}"
              className={s.poster}
            />
          )}
        </div>
        <div className={s.wrapper}>
          <h2 className={s.name}>{movie.title}</h2>
          <table className={s.table_style}>
            <tbody>
              <tr>
                <td className={s.item_text}>Vote / Votes</td>
                <td>
                  <span>{movie.vote_average}</span>/
                  <span>{movie.vote_count}</span>
                </td>
              </tr>
              <tr>
                <td className={s.item_text}>Popularity</td>
                <td>{movie.popularity}</td>
              </tr>
              <tr>
                <td className={s.item_text}>Original Title</td>
                <td className={s.title}>{movie.original_title}</td>
              </tr>
              <tr>
                <td className={s.item_text}>Release date</td>
                <td>{movie.release_date}</td>
              </tr>
              {movie.genres && (
                <tr>
                  <td className={s.item_text}>Genre</td>
                  <td>
                    {movie.genres.map(({ name, id }) => (
                      <li key={id}>{name}</li>
                    ))}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <p className={s.item_about}>About</p>
          <p className={s.description}>{movie.overview}</p>{' '}
        </div>
      </div>
      <hr />

      <AdditionalInformation />
      <hr />
    </>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.any.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default MovieItem;
