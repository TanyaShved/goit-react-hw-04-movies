import s from './ReviewItem.module.css';

const ReviewItem = ({ author, review }) => {
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>{author}</h2>
      <p className={s.text}>{review}</p>
    </div>
  );
};

export default ReviewItem;
