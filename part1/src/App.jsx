import { useState } from 'react';

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
);

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({ reviews }) => {
  const [good, neutral, bad] = reviews;
  const total = reviews.reduce((acc, cur) => acc + cur, 0);

  if (total === 0) return <p>No feedback given</p>;

  return (
    <table>
      <tbody>
        <StatisticLine text="Good"     value={good} />
        <StatisticLine text="Neutral"  value={neutral} />
        <StatisticLine text="Bad"      value={bad} />
        <StatisticLine text="All"      value={total} />
        <StatisticLine text="Average"  value={((good - bad) / total).toFixed(2)} />
        <StatisticLine text="Positive" value={((good / total) * 100).toFixed(1) + '%'} />
      </tbody>
    </table>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = (value, setValue) => setValue(value + 1);

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={() => handleClick(good, setGood)}       text="Good" />
      <Button onClick={() => handleClick(neutral, setNeutral)} text="Neutral" />
      <Button onClick={() => handleClick(bad, setBad)}         text="Bad" />
      <h1>Statistics</h1>
      <Statistics reviews={[good, neutral, bad]} />
    </div>
  );
};

export default App;