import React from 'react';
import T from 'prop-types';
import styles from './Controls.module.css';

export default function Controls({
  curPos,
  totalPub,
  onNextClick,
  onPrevClick,
}) {
  return (
    <section className={styles.controls}>
      <button
        type="button"
        onClick={onPrevClick}
        className={styles.button}
        disabled={curPos === 0}
      >
        Назад
      </button>
      <button
        type="button"
        onClick={onNextClick}
        className={styles.button}
        disabled={curPos === totalPub - 1}
      >
        Вперед
      </button>
    </section>
  );
}

Controls.propTypes = {
  curPos: T.number.isRequired,
  totalPub: T.number.isRequired,
  onNextClick: T.func.isRequired,
  onPrevClick: T.func.isRequired,
};
