import React, { PropTypes } from 'react';
import Ingredient from './Ingredient';

export const IngredientsList = ({ list }) =>
  (
    <ul className="ingredients">
      {list.map((ingredient, i) => <Ingredient key={i} {...ingredient} />)}
    </ul>
  );

IngredientsList.displayName = 'IngredientsList';

IngredientsList.propTypes = {
  list: PropTypes.shape({
    name: PropTypes.string,
    amount: PropTypes.string,
    measurement: PropTypes.string
  })
};

IngredientsList.defaultProps = {
  list: {}
};

export default IngredientsList;
