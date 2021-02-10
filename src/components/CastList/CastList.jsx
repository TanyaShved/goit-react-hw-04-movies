import PropTypes from 'prop-types';
import CastItem from '../CastItem/CastItem';
import s from './CastList.module.css';

const CastList = ({ casts }) => {
  return (
    <ul className={s.list}>
      {casts.map(({ id, name, profile_path, character }) => (
        <li key={id} className={s.item}>
          <CastItem name={name} foto={profile_path} character={character} />
        </li>
      ))}
    </ul>
  );
};

CastList.propTypes = {
  casts: PropTypes.array.isRequired,
};

export default CastList;
