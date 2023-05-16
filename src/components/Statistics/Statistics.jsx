import React from 'react';
import PropTypes from 'prop-types';
import Section from 'components/Section/Section';
import css from './Statistics.module.css';

const Statistics = ({ onCountTotalFeedback, good, bad, neutral }) => (
  <Section title="Statistics">
    <ul className={css.statisticsList}>
      <li className={css.statisticsItem}>Good: {good}</li>
      <li className={css.statisticsItem}>Bad: {bad}</li>
      <li className={css.statisticsItem}>Neutral: {neutral}</li>
      <li className={css.statisticsItem}>Total: {onCountTotalFeedback}</li>
      <li className={css.statisticsItem}>
        Positive feedback: {((good * 100) / onCountTotalFeedback).toFixed(0)}%
      </li>
    </ul>
  </Section>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  onCountTotalFeedback: PropTypes.number.isRequired,
};

export default Statistics;
