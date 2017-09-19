import React, { PropTypes } from 'react';

const Menu = ({ recipes }) => // eslint-disable-line no-unused-vars
  (<article>
    <header>
      <h1>Delicious Recipes</h1>
    </header>
  </article>);

Menu.displayName = 'Menu';

Menu.propTypes = {
  recipes: PropTypes.array
};

Menu.defaultProps = {
  recipes: []
};

export default Menu;
