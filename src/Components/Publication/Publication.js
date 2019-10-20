import React from 'react';
import T from 'prop-types';

const Publication = ({ id, text, title }) => {
  return (
    <article className="publication" id={id}>
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  );
};
export default Publication;

Publication.propTypes = {
  id: T.string.isRequired,
  title: T.string.isRequired,
  text: T.string.isRequired,
};
