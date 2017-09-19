import React, { PropTypes } from 'react';

const Ingredient = ({ amount, measurement, name }) =>
  (
    <li>
      <span className="amount">{amount} </span>
      <span className="measurement">{measurement} </span>
      <span className="name">{name}</span>
    </li>
  );

Ingredient.displayName = 'Ingredient';

Ingredient.propTypes = {
  amount: PropTypes.number,
  measurement: PropTypes.string,
  name: PropTypes.string
};

export default Ingredient;
