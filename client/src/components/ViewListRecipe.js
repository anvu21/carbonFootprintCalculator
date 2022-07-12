import React, { Fragment, useEffect, useState } from "react";
import "../pages/InputFood.css"; // might change?
import "./ListFood.css"; // might change?
import SearchBar from "./SearchBar";
const ViewListRecipe = () => {
  const [recipe, setrecipe] = useState([]);

  const getrecipe = async () => {
    try {
      const response = await fetch("/recipe");
      const jsonData = await response.json();

      setrecipe(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getrecipe();
  }, []);

  console.log(recipe);

  return (
    <Fragment className="contents">
      <SearchBar placeholder="Recipe name" data={recipe}></SearchBar>
    </Fragment>
  );
};

export default ViewListRecipe;
