import React, { useEffect, useState } from 'react';
import Recipe from './components/recipe';
import './App.css';

const App = () => {
  const APP_ID = '2a538a1a';
  const APP_KEY = '6988e3cd04946467a744df460214c895';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    getRecipe();
  }, [query]);
  const getRecipe = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className='App'>
      <h1>Recipe Finder</h1>

      <form onSubmit={getSearch} className='search-form'>
        <input
          className='search-bar'
          type='text'
          value={search}
          onChange={updateSearch}
        />
        <button className='search-button' type='submit'>
          Search
        </button>
      </form>
      <div className='recipes'>
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            ingredients={recipe.recipe.ingredients}
            image={recipe.recipe.image}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
