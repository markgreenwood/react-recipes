import React from 'react';
import { render } from 'react-dom';
import RecipeMenu from './components/Menu';
import data from '../data/recipes.json';

window.React = React;

render(
  <RecipeMenu recipes={data} />, // eslint-disable-line no-unused-vars
  document.getElementById('react-container')
);
