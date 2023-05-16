import React from 'react';
import PropTypes from 'prop-types';
import Section from '../Section/Section';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <Section title="Please leave feedback">
    {options.map(label => (
      <button
        key={label}
        type="button"
        onClick={() => onLeaveFeedback(label)}
        className={css.feedbackButton}
      >
        {label}
      </button>
    ))}
  </Section>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

export default FeedbackOptions;
