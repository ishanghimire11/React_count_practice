const AddTwoNumbers = (props) => {
  return (
    <div className="info-box add-container">
      <p className="add-info">
        The sum of previous count and current count is{" "}
        {props.currentCount + props.previousCount}.{" "}
      </p>
    </div>
  );
};

export default AddTwoNumbers;
