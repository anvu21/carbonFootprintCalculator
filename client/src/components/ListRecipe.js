import React, { Fragment, useEffect, useState } from "react";
import "./ListFood.css";
const ListFood = () => {
  const [food, setfood] = useState([]);

  //delete food function

  const deleteFood = async (id) => {
    try {
      //console.log(id)
      const deleteFood = await fetch(`/food/${id}`, {
        method: "DELETE",
      });

      setfood(food.filter((food) => food.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

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
      {" "}
      <table class="table mt-3 text-center">
        {" "}
        {/* change to 4 not 3 */}
        <thead>
          <tr>
            <th>Name</th>
            <th>CO2/serving</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {food.map((food) => (
            <tr key={food.id}>
              <td>{food.food}</td>
              <td>{food.carbon}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteFood(food.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};
export default ListFood;
