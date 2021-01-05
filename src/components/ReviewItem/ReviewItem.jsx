import s from './ReviewItem.module.css';
import PropTypes from 'prop-types';

const ReviewItem = ({ author, review }) => {
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>{author}</h2>
      <p className={s.text}>{review}</p>
    </div>
  );
};

ReviewItem.propTypes = {
  author: PropTypes.string,
  review: PropTypes.string,
};

export default ReviewItem;
