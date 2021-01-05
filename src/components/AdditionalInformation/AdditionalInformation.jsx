import { NavLink, useRouteMatch } from 'react-router-dom';
import s from './AdditionalInformation.module.css';

const AdditionalInformation = () => {
  const { url } = useRouteMatch();

  return (
    <div>
      <p className={s.title}>Additional information</p>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink to={`${url}/cast`}>Cast</NavLink>
        </li>
        <li className={s.item}>
          <NavLink to={`${url}/reviews`}>Reviews</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdditionalInformation;
