import css from './Feedback.module.css'

const Feedback = ({ good, neutral, bad, total, positive }) => {
    return (
        <>
      {total > 0 && (
        <>
          <p className={css.feedBck} >Good: {good}</p>
          <p className={css.feedBck} >Neutral: {neutral}</p>
          <p className={css.feedBck} >Bad: {bad}</p>
          <p className={css.feedBck} >Total: {total}</p>
          <p className={css.feedBck} >Positive: {positive}%</p>
        </>
      )}
    </>
  );
};

export default Feedback;