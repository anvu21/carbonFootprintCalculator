import React, { useState, Fragment, useEffect } from "react";
import "./SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import "../pages/InputFood.css";
import "./ListFood.css";
//import SearchIcon from "@mui/icons-material/Search";
//import DisplayClick from "./DisplayClick";

function SearchBarRecipe({ placeholder, data }) {
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

  //   const [filteredData, setFilteredData] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  // takes in backend data as list and index of the start
  function recipeCalc(recipeName, index) {
    var recipeTable = recipeName;
    var carbonTotal = 0;
    while (recipeTable === recipeName) {
      if (recipeTable.uom === "lbs") {
        carbonTotal += recipeTable.quantity * 0.45359237 * recipeTable.carbon;
      } else if (recipeTable.uom === "g") {
        carbonTotal += (recipeTable.quantity / 1000) * recipeTable.carbon;
      } else if (recipeTable.uom === "oz") {
        carbonTotal += recipeTable.quantity * 0.02835 * recipeTable.carbon;
      } else if (recipeTable.uom === "cups") {
        carbonTotal +=
          ((recipeTable.quantity * recipeTable.density) / 4.226753) *
          recipeTable.carbon;
      } else if (recipeTable.uom === "tbsp") {
        carbonTotal +=
          ((recipeTable.quantity * recipeTable.density) / 67.628045) *
          recipeTable.carbon;
      } else if (recipeTable.uom === "tsp") {
        carbonTotal +=
          ((recipeTable.quantity * recipeTable.density) / 202.884136) *
          recipeTable.carbon;
      } else {
        carbonTotal += recipeTable.quantity * recipeTable.carbon;
      }
      recipeTable = recipe[++index].recipe;
    }
    // add to array here (array of recipe name and CO2 val)
    return index; // final index returned (to know starting index of next loop)
  }

  function carbonCategory(carbon) {
    if (carbon >= 0 && carbon <= 1.16) {
      return <FontAwesomeIcon icon={faEarthAmericas} className="green" />;
    } else if (carbon > 1.16 && carbon <= 2.37) {
      return <FontAwesomeIcon icon={faEarthAmericas} className="yellow" />;
    } else {
      return <FontAwesomeIcon icon={faEarthAmericas} className="red" />;
    }
  }

  return (
    <div className="search">
      <div className="searchField">
        <form method="get">
          <div className="searchBar">
            {/* {startingList()} */}
            <input
              className="searchInput"
              type="text"
              placeholder={placeholder}
              //   onChange={handleFilter}
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            ></input>
            <button className="searchIcon">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </form>
      </div>
      <table class="table mt-3 text-center">
        <thead>
          <tr>
            <th>Name</th>
            <th>CO2/kg</th>
            <th>Footprint</th>
          </tr>
        </thead>
        <tbody>
          {recipe // will be changed to new array of recipe names and carbon vals
            .filter((value) => {
              if (searchTerm == "") {
                return value;
              } else if (
                value.recipe.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return value;
              }
            })
            .map(
              (
                value // changed to filteredData
              ) => (
                <tr key={value.id}>
                  <td>{value.recipe}</td>
                  {console.log(value.recipe)}
                  <td>{value.carbon}</td>
                  <td>{carbonCategory(value.carbon)}</td>
                </tr>
              )
            )}
        </tbody>
      </table>
    </div>
  );
}
export default SearchBarRecipe;
