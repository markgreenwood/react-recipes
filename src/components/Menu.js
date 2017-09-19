import React, { PropTypes } from 'react';
import Recipe from './Recipe';
import '../../stylesheets/Menu.css';

const Menu = ({ recipes }) => // eslint-disable-line no-unused-vars
  (<article>
    <header>
      <h1>Delicious Recipes</h1>
    </header>
    <div className="recipes">
      { recipes.map((recipe, i) => <Recipe key={i} {...recipe} />)}
    </div>
  </article>);

Menu.displayName = 'Menu';

Menu.propTypes = {
  recipes: PropTypes.array
};

Menu.defaultProps = {
  recipes: []
};

export default Menu;
