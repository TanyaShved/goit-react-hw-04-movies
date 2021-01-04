// import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CastList from '../components/CastList/CastList';
import api from '../services/movies-api';

const Cast = ({ id }) => {
  // const { movieId } = useParams();
  const [casts, setCasts] = useState([]);
  const [error, setError] = useState(null);

  // console.log(id)

  useEffect(() => {
    api
      .fetchCast(id)
      .then(castMovie => {
        if (castMovie.cast.length !== 0) {
          setCasts(castMovie.cast);
          return;
        }
        return Promise.reject(new Error(`Sorry, Something came wrong!`));
      })
      .catch(error => {
        setError(error);
      });
  }, [id]);

  // console.log(casts)

  return <CastList casts={casts} />;
};

export default Cast;
