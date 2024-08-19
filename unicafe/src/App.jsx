import { useState } from "react";
import Button from "./Button";
import StatisticLine from "./StatisticLine";

const Statics = ({ good, neutral, bad, all, positive, average }) => {
  if (all === 0) {
    return <p>No feedback given</p>;
  }
  return (
    <>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" result={good} />
          <StatisticLine text="neutral" result={neutral} />
          <StatisticLine text="bad" result={bad} />
          <StatisticLine text="average" result={average} />
          <StatisticLine text="positive" result={positive} />
        </tbody>
      </table>
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  //console.log(good, neutral, bad);

  const all = good + neutral + bad;
  const average = (1 * good + 0 * neutral + -1 * bad) / all;
  const postive = `${(good * 100) / all} %`;

  return (
    <>
      <h1>Give feedback</h1>
      <Button text="good" value={good} setValue={setGood} />
      <Button text="neutral" value={neutral} setValue={setNeutral} />
      <Button text="bad" value={bad} setValue={setBad} />

      <Statics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={postive}
      />
    </>
  );
};

export default App;
