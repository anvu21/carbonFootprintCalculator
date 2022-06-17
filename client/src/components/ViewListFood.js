import React, { Fragment, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import "../pages/InputFood.css";

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

  function carbonCategory(carbon) {
    if (carbon >= 0 && carbon <= 1.16) {
      return <FontAwesomeIcon icon={faEarthAmericas} className="green" />;
    } else if (carbon > 1.16 && carbon <= 2.37) {
      return <FontAwesomeIcon icon={faEarthAmericas} className="yellow" />;
    } else {
      return <FontAwesomeIcon icon={faEarthAmericas} className="red" />;
    }
  }

  useEffect(() => {
    getfood();
  }, []);

  console.log(food);

  return (
    <Fragment>
      {" "}
      <table class="table mt-3 text-center">
        <thead>
          <tr>
            <th>Name</th>
            <th>CO2/kg</th>
            <th>Footprint</th>
          </tr>
        </thead>
        <tbody>
          {food.map((food) => (
            <tr key={food.id}>
              <td>{food.food}</td>
              <td>{food.carbon}</td>
              <td>{carbonCategory(food.carbon)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ViewListFood;
