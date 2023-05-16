import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = label => {
    this.setState({ [label]: this.state[label] + 1 });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  render() {
    const totalFeedback = this.countTotalFeedback();
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
          onLeaveFeedback={this.leaveFeedback}
        />

        {this.state.good > 0 || this.state.bad > 0 || this.state.neutral > 0 ? (
          <Statistics
            onCountTotalFeedback={totalFeedback}
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}
