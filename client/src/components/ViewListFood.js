import React, { Fragment, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import "../pages/InputFood.css";
import "./ListFood.css";
import SearchBar from "./SearchBar";
const ViewListFood = () => {
  const [food, setfood] = useState([]);

  const getfood = async () => {
    try {
      const response = await fetch("/food");
      const jsonData = await response.json();

      setfood(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getfood();
  }, []);

  console.log(food);

  return (
    <Fragment className="contents">
      <SearchBar placeholder="Ingredient name" data={food}></SearchBar>
    </Fragment>
  );
};

export default ViewListFood;
