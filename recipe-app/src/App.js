import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Recipe from "./Recipe";

function App() {
  const APP_ID = "6b245131";
  const APP_KEY = "ef40982fca0dec21213eb6de177d853f";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("chicken");

  const fetchData = async (dish) => {
    const url = `https://api.edamam.com/search?q=${dish}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    const response = await fetch(url);
    const data = await response.json();
    setRecipes(data.hits);
  };

  useEffect(() => {
    fetchData(search);
  }, []);

  const onClickHandler = (e) => {
    e.preventDefault();
    fetchData(search);
  };
  return (
    <div className="App">
      <h1 className='title'>Find Your Favourite Recipe!</h1>
      <form className="search-form" onSubmit={onClickHandler}>
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((item, index) => {
          console.log(item);
          return <Recipe key={index} item={item.recipe}></Recipe>;
        })}
      </div>
      <a href="https://patrykbasiak.netlify.app/" target="blank">
        
        <p>Created by Patryk Basiak</p>
      </a>
    </div>
  );
}

export default App;
