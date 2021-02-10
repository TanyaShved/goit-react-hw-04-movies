import ShowMore from 'react-simple-show-more';
import s from './ReviewItem.module.css';
import PropTypes from 'prop-types';

const ReviewItem = ({ author, review }) => {
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>{author}</h2>
      <p>
        <ShowMore
          text={review}
          length={700}
          showMoreLabel=" Show more >>"
          showLessLabel=" Show less <<"
          style={{
            cursor: 'pointer',
            color: '#ff6b08',
            fontWeight: 'bold',
          }}
        />
      </p>
    </div>
  );
};

ReviewItem.propTypes = {
  author: PropTypes.string,
  review: PropTypes.string,
};

export default ReviewItem;
