const Feedback = ({ good, neutral, bad, total, positive }) => {
    return (
        <>
      {total > 0 && (
        <>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive: {positive}%</p>
        </>
      )}
    </>
  );
};

export default Feedback;