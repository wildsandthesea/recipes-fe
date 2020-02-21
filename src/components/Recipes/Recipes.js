import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Recipes = () => {
  const [ recipes, setRecipes ] = useState([]);
  useEffect(() => {
    const getRecipes = () => {
      axios
        .get('https://cors-anywhere.herokuapp.com/https://recipes-be.herokuapp.com/api/recipes')
        .then(response => {
          setRecipes(response.data);
          console.log(response.data);
          
        })
        .catch(error => {
          console.log('Server error', error);
          
        })
    }
    getRecipes();
    
  }, []);

  return (
    <div className="recipe-list">
      <h1>Recipes</h1>
      {recipes.map(recipe => (
        <RecipeDetails key={recipes.id} recipe={recipe} />
      ))}
    </div>
    
  )
}

function RecipeDetails({ recipe }) {
  const { name, description } = recipe;

  return (
    // <Link to={`recipes/instructions/${recipe.id}`} >
      <div className="recipe-card">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    // </Link>
    
  )
}

export default Recipes;