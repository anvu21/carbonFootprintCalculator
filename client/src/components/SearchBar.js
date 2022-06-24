import React, { useState, Fragment, useEffect } from "react";
import "./SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import "../pages/InputFood.css";
import "./ListFood.css";
//import SearchIcon from "@mui/icons-material/Search";
//import DisplayClick from "./DisplayClick";

function SearchBar({ placeholder, data }) {
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

  const [filteredData, setFilteredData] = useState([]);
  //   const startingList = () => {
  //     setFilteredData(food);
  //   };

  const handleClick = (event) => {
    console.log("Hello");
  };

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = data.filter((value) => {
      // have to change for recipe (won't be ingredient name)
      return value.food.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord != "" || searchWord) {
      setFilteredData(newFilter);
    } else {
      setFilteredData(food);
    }
  };

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
              onChange={handleFilter}
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
          {filteredData.map(
            (
              value // changed to filteredData
            ) => (
              <tr key={value.id}>
                <td>{value.food}</td>
                <td>{value.carbon}</td>
                <td>{carbonCategory(value.carbon)}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
      {/* {filteredData.length !== 0 && (
        <div>
          {filteredData.map((value, key) => {
            return (
              <table class="table mt-3 text-center">
                <tbody>
                  {filteredData.map(
                    (
                      value // changed to filteredData
                    ) => (
                      <tr key={value.id}>
                        <td>{value.food}</td>
                        <td>{value.carbon}</td>
                        <td>{carbonCategory(value.carbon)}</td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            );
          })}
        </div>
      )} */}
    </div>
  );
}
export default SearchBar;
