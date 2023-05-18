import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leaveFeedback = label => {
    if (label === 'good') {
      setGood(good + 1);
    } else if (label === 'neutral') {
      setNeutral(neutral + 1);
    } else if (label === 'bad') {
      setBad(bad + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const totalFeedback = countTotalFeedback();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
      }}
    >
      <FeedbackOptions
        options={['good', 'bad', 'neutral']}
        onLeaveFeedback={leaveFeedback}
      />

      {good > 0 || bad > 0 || neutral > 0 ? (
        <Statistics
          onCountTotalFeedback={totalFeedback}
          good={good}
          neutral={neutral}
          bad={bad}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
}
