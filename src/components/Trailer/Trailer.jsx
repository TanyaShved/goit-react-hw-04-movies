import { useEffect, useState } from 'react';
// import { useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../Spinner/Spinner';
import Modal from '../Modal/Modal';
import api from 'services/movies-api';
import s from './Trailer.module.css';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const YOUTUBE_URL = 'https://www.youtube.com//embed/';

const Trailer = ({ movieId, toggleModal, showModal }) => {
  const [trailer, setTrailer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    setStatus(Status.PENDING);

    api
      .fetchModalForTrailler(movieId)
      .then(video => {
        if (video.results.length !== 0) {
          setTrailer(video.results);
          setStatus(Status.RESOLVED);
          return;
        }
        return Promise.reject(new Error(`Sorry, Something came wrong!`));
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [movieId]);

  return (
    <>
      {status === Status.PENDING && <Spinner />}

      {status === Status.RESOLVED && (
        <>
          {trailer && (
            <ul className={s.trailerList}>
              {trailer.map(
                ({ id, key, name }) =>
                  key && (
                    <li key={id + key} className={s.trailerItem}>
                      {showModal && (
                        <Modal onClose={toggleModal}>
                          <iframe
                            title={name}
                            width="100%"
                            height="100%"
                            src={YOUTUBE_URL + key}
                            frameBorder="0"
                            allowFullScreen
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          />
                        </Modal>
                      )}
                    </li>
                  ),
              )}
            </ul>
          )}
        </>
      )}

      {status === Status.REJECTED && <h1>{error.message}</h1>}
    </>
  );
};

Trailer.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default Trailer;
