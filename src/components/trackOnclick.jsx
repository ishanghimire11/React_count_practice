const TrackButtonClick = (props) => {
  let addButton = props.addButton;
  let differenceButton = props.differenceButton;
  let resetButton = props.resetButton;
  let addFiveButton = props.addFiveButton;
  return (
    <div className="info-box click-info-container">
      <h4>Number of times each button was clicked!</h4>
      <p className="click-info">Add +1 button : {addButton}</p>
      <p className="click-info">Difference -1 button : {differenceButton}</p>

      <p className="click-info">Reset Button : {resetButton}</p>
      <p className="click-info">Add +5 button : {addFiveButton}</p>
    </div>
  );
};

export default TrackButtonClick;
