import { useState } from "react";
import AddTwoNumbers from "./addTwoNumbers";
import SubtractTwoNumbers from "./subtractTwoNumbers";
import TrackButtonClick from "./trackOnclick";

const Home = () => {
  const initialValue = 0;
  const [mycount, setmyCount] = useState(initialValue);
  const [previousCount, setPrevCount] = useState(initialValue);
  const [addButton, setAddButton] = useState(0);
  const [differenceButton, setDifferenceButton] = useState(0);
  const [resetButton, setResetButton] = useState(0);
  const [addFiveButton, setFiveButton] = useState(0);

  const plusone = () => {
    setmyCount((prevCount) => setPrevCount(prevCount));
    setmyCount(mycount + 1);
    setAddButton(addButton + 1);
  };

  const minusone = () => {
    setmyCount((prevCount) => setPrevCount(prevCount));
    setmyCount(mycount - 1);
    setDifferenceButton(differenceButton + 1);
  };

  const resetCount = () => {
    setmyCount(0);
    setResetButton(resetButton + 1);
  };

  const incrementByFive = () => {
    setmyCount((prevCount) => setPrevCount(prevCount));
    setmyCount(mycount + 5);
    setFiveButton(addFiveButton + 1);
  };

  return (
    <>
      <div className="main-container">
        <div className="main-wrapper">
          <h1>Calculate count with useState</h1>
          <div className="button-container">
            <button onClick={plusone}>Count + 1</button>
            <button onClick={minusone}>Count - 1</button>
            <button onClick={resetCount}>Reset Count</button>
            <button onClick={incrementByFive}>Add 5</button>
          </div>
          <p className="count-number current-count">
            Current Count = {mycount}
          </p>
          <p className="count-number previous-count">
            Previous Count = {previousCount}
          </p>
        </div>
      </div>

      <div className="more-information">
        <AddTwoNumbers currentCount={mycount} previousCount={previousCount} />
        <SubtractTwoNumbers
          currentCount={mycount}
          previousCount={previousCount}
        />
        <TrackButtonClick
          addButton={addButton}
          differenceButton={differenceButton}
          resetButton={resetButton}
          addFiveButton={addFiveButton}
        />
      </div>
    </>
  );
};

export default Home;
