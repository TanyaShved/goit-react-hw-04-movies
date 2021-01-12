import PropTypes from 'prop-types';
import s from './GoBackButton.module.css';

const GoBackButton = ({ history, path }) => {
  return (
    <button
      className={s.btn}
      type="button"
      onClick={() => {
        history.push(path?.state?.from || '/');
      }}
    >
      &#9754; Go Back
    </button>
  );
};

GoBackButton.propTypes = {
  history: PropTypes.object.isRequired,
  path: PropTypes.object.isRequired,
};

export default GoBackButton;
