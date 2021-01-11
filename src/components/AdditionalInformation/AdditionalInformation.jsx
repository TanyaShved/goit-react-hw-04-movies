import { NavLink, useRouteMatch, useLocation } from 'react-router-dom';
import s from './AdditionalInformation.module.css';

const AdditionalInformation = () => {
  const { url } = useRouteMatch();
  const location = useLocation();

  return (
    <div>
      <p className={s.title}>Additional information</p>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink
            to={{
              pathname: `${url}/cast`,
              state: { from: location },
            }}
          >
            Cast
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink
            to={{
              pathname: `${url}/reviews`,
              state: { from: location },
            }}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdditionalInformation;
