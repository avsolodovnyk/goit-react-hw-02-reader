import React from 'react';
import T from 'prop-types';

const Counter = ({ curPos, totalPub }) => {
  return (
    <p className="counter">
      {curPos + 1}/{totalPub}
    </p>
  );
};
export default Counter;
Counter.propTypes = {
  curPos: T.number.isRequired,
  totalPub: T.number.isRequired,
};
