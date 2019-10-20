import React from 'react';
import T from 'prop-types';
import styles from './Counter.module.css';

export default function Counter({ curPos, totalPub }) {
  return (
    <p className={styles.counter}>
      {curPos + 1}/{totalPub}
    </p>
  );
}
Counter.propTypes = {
  curPos: T.number.isRequired,
  totalPub: T.number.isRequired,
};
