import PropTypes from 'prop-types';
import avatar from '../../icon/default.jpg';
import s from './CastItem.module.css';

const CastItem = ({ name, foto }) => {
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
      <h2 className={s.name}>{name}</h2>
    </div>
  );
};

CastItem.propTypes = {
  name: PropTypes.string.isRequired,
  foto: PropTypes.string,
};

export default CastItem;
