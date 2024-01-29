import styles from '../FeedbackOptions/feedback-options.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return Object.keys(options).map(key => (
    <button
      className={styles.btn}
      key={key}
      onClick={() => onLeaveFeedback(key)}
    >
      {key}
    </button>
  ));
};
