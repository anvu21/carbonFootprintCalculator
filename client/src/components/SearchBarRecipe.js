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

  var recipeCarbonList = [{ recipeName: "hi", recipeCarbon: 0 }];

  // takes in backend data as list and index of the start
  function recipeCalc() {
    var index = 0;
    var recipeName = recipe[index].recipe;
    var carbonTotal = 0;
    while (index < recipe.length) {
      while (recipeName === recipe[index].recipe) {
        if (recipe[index].uom === "lbs") {
          carbonTotal +=
            recipe[index].quantity * 0.45359237 * recipe[index].carbon;
        } else if (recipe[index].uom === "g") {
          carbonTotal += (recipe[index].quantity / 1000) * recipe[index].carbon;
        } else if (recipe[index].uom === "oz") {
          carbonTotal +=
            recipe[index].quantity * 0.02835 * recipe[index].carbon;
        } else if (recipe[index].uom === "cups") {
          carbonTotal +=
            ((recipe[index].quantity * recipe[index].density) / 4.226753) *
            recipe[index].carbon;
        } else if (recipe[index].uom === "tbsp") {
          carbonTotal +=
            ((recipe[index].quantity * recipe[index].density) / 67.628045) *
            recipe[index].carbon;
        } else if (recipe[index].uom === "tsp") {
          carbonTotal +=
            ((recipe[index].quantity * recipe[index].density) / 202.884136) *
            recipe[index].carbon;
        } else {
          // for kg
          carbonTotal += recipe[index].quantity * recipe[index].carbon;
        }
        index += 1;
        recipeName = recipe[index].recipe;
      }
      // add to array here
      // make carbonTotal = 0
      recipeCarbonList.push(
        recipe[--index].recipe,
        carbonTotal / recipe[--index].serving
      );
      carbonTotal = 0;
    }
    // add to array here (array of recipe name and CO2 val)
  }

  recipeCalc();

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
          {/* {recipeCalc()} */}
          {recipeCarbonList // will be changed to new array of recipe names and carbon vals
            .filter((value) => {
              if (searchTerm == "") {
                return value;
              } else if (
                value.recipeCarbonList
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              ) {
                return value;
              }
            })
            .map(
              (
                value // changed to filteredData
              ) => (
                <tr key={value.id}>
                  <td>{value.recipeName}</td>
                  <td>{value.recipeCarbon}</td>
                  <td>{carbonCategory(value.recipeCarbon)}</td>
                </tr>
              )
            )}
        </tbody>
      </table>
    </div>
  );
}
export default SearchBarRecipe;
