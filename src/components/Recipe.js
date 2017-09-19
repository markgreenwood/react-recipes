import React, { PropTypes } from 'react';
import IngredientsList from './IngredientsList';
import Instructions from './Instructions';

const Recipe = ({ name, ingredients, steps }) =>
  (
    <section id={name.toLowerCase().replace(/ /g, '-')}>
      <h1>{name}</h1>
      <IngredientsList list={ingredients} />
      <Instructions title="Cooking Instructions" steps={steps} />
    </section>
  );

Recipe.displayName = 'Recipe';

Recipe.propTypes = {
  name: PropTypes.string,
  ingredients: PropTypes.arrayOf(PropTypes.string)
};

Recipe.defaultProps = {
  name: '',
  ingredients: []
};

export default Recipe;
