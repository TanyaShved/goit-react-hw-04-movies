import ReviewItem from '../ReviewItem/ReviewItem';
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

export default ReviwesList;
