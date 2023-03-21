const SubtractTwoNumbers = (props) => {
  return (
    <div className="info-box subtract-container">
      <p className="subtract-info">
        The difference between current count and previous count is{" "}
        {props.currentCount - props.previousCount}.{" "}
      </p>
    </div>
  );
};

export default SubtractTwoNumbers;
