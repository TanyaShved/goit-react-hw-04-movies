import ReviewItem from '../ReviewItem/ReviewItem';
import PropTypes from 'prop-types';
import s from './ReviwesList.module.css';

const ReviwesList = ({ reviews }) => {
  return (
    <ul className={s.list}>
      {reviews.map(({ id, author, content }) => (
        <li key={id} className={s.item}>
          <ReviewItem author={author} review={content} />
        </li>
      ))}
    </ul>
  );
};

ReviwesList.propTypes = {
  reviews: PropTypes.array,
};

export default ReviwesList;
