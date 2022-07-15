import React, { Fragment, useEffect, useState } from "react";
import "./ListFood.css";
import CarbonCalculator from "./CarbonCalculator";

const ListRecipe = () => {
  const [recipe, setrecipe] = useState([]);

  //delete food function

  const deleteRecipe = async (id) => {
    try {
      console.log(id)
      const deleteRecipe = await fetch(`/recipe/${id}`, {
        method: "DELETE",
      });

      setrecipe(recipe.filter((recipe) => recipe.recipe_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getrecipe = async () => {
    try {
      const response = await fetch("/recipe");
      const jsonData = await response.json();
      console.log("test");
      console.log(jsonData);
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
      {" "}
      <table class="table mt-3 text-center">
        {" "}
        {/* change to 4 not 3 */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Serving</th>
            <th>Location</th>
            <th>Carbon</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {recipe.map((value) => (
            <tr key={value.recipe_id}>
              <td>{value.name}</td>
              <td>{value.serving}</td>
              <td>{value.location}</td>
              <td>
                  <CarbonCalculator value={value} />
                  </td>
              <td>
                
                <button
                  className="btn btn-danger"
                  onClick={() => deleteRecipe(value.recipe_id)}
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
export default ListRecipe;
