import React, { PropTypes } from 'react';

const Instructions = ({ title, steps }) =>
  (
    <section className="instructions">
      <h2>{title}</h2>
      {steps.map((s, i) => <p key={i}>{s}</p>)}
    </section>
  );

Instructions.displayName = 'Instructions';

Instructions.propTypes = {
  title: PropTypes.string,
  steps: PropTypes.arrayOf(PropTypes.string)
};

export default Instructions;
