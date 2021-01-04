import { NavLink, useRouteMatch } from 'react-router-dom';

const AdditionalInformation = () => {
  const { url } = useRouteMatch();

  return (
    <div>
      <p>Additional information</p>
      <ul>
        <li>
          <NavLink to={`${url}/cast`}>Cast</NavLink>
        </li>
        <li>
          <NavLink to={`${url}/reviews`}>Reviews</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdditionalInformation;
