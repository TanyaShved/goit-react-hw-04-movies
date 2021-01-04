import CastItem from '../CastItem/CastItem';
import s from './CastList.module.css';

const CastList = ({ casts }) => {
  return (
    <ul className={s.list}>
      {casts.map(({ id, name, profile_path }) => (
        <li key={id}>
          <CastItem name={name} foto={profile_path} />
        </li>
      ))}
    </ul>
  );
};

export default CastList;
