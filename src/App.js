import React, { useState, useEffect } from "react";
import "./App.css";
import Recipi_info from "./recipi";

const App = () => {
  let YOUR_APP_ID = "c25bb6b5";
  let YOUR_APP_KEY = "5ec3f14fc519f524c6aeb5d71fb6c56c";
  const [recipi, setRecipi] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    const getrecipe = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`
      );
      const data = await response.json();
      setRecipi(data.hits);
      console.log(data.hits);
    };
    getrecipe();
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input
          type="text"
          className="search-bar"
          value={search}
          onChange={updateSearch}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="recipies">
        {recipi.map((recipi, index) => (
          <Recipi_info
            key={index}
            title={recipi.recipe.label}
            calories={recipi.recipe.calories}
            img={recipi.recipe.image}
            ingredients={recipi.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
