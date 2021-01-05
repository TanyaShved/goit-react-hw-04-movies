import PropTypes from 'prop-types';
import s from './CastItem.module.css';

const CastItem = ({ name, foto }) => {
  return (
    <div className={s.item}>
      <h2 className={s.name}>{name}</h2>
      <img
        className={s.image}
        src={
          foto
            ? `http://image.tmdb.org/t/p/w300_and_h450_bestv2${foto}`
            : 'https://www.ruprom.ru/templates/images/newdesign/noimage2.png'
        }
        alt="actor"
      />
    </div>
  );
};

CastItem.propTypes = {
  name: PropTypes.string.isRequired,
  foto: PropTypes.string,
};

export default CastItem;
