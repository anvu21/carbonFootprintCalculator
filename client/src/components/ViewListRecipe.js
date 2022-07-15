import React, { Fragment, useEffect, useState } from "react";
import "../pages/InputFood.css"; // might change?
import "./ListFood.css"; // might change?
import SearchBarRecipe from "./SearchBarRecipe";
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
      <SearchBarRecipe
        placeholder="Recipe name"
        data={recipe}
      ></SearchBarRecipe>
    </Fragment>
  );
};

export default ViewListRecipe;
