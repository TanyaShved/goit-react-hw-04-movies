import PropTypes from 'prop-types';
import avatar from 'icon/default.jpg';
import s from './CastItem.module.css';

const CastItem = ({ name, foto, character }) => {
  return (
    <div className={s.item}>
      <img
        className={s.image}
        src={
          foto
            ? `http://image.tmdb.org/t/p/w300_and_h450_bestv2${foto}`
            : avatar
        }
        alt={name}
      />
      <h3 className={s.name}>{name}</h3>
      <p className={s.character}>{character}</p>
    </div>
  );
};

CastItem.propTypes = {
  name: PropTypes.string.isRequired,
  foto: PropTypes.string,
  character: PropTypes.string.isRequired,
};

export default CastItem;
