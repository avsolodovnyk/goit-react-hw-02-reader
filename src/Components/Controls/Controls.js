import React from 'react';
import T from 'prop-types';

const Controls = ({ curPos, totalPub, onNextClick, onPrevClick }) => {
  return (
    <section className="controls">
      <button
        type="button"
        onClick={onPrevClick}
        className="button"
        disabled={curPos === 0}
      >
        Назад
      </button>
      <button
        type="button"
        onClick={onNextClick}
        className="button"
        disabled={curPos === totalPub - 1}
      >
        Вперед
      </button>
    </section>
  );
};
export default Controls;
Controls.propTypes = {
  curPos: T.number.isRequired,
  totalPub: T.number.isRequired,
  onNextClick: T.func.isRequired,
  onPrevClick: T.func.isRequired,
};
