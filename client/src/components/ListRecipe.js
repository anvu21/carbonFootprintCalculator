import React, { Fragment, useEffect, useState } from "react";
import "./ListFood.css";
const ListRecipe = () => {
  const [recipe, setrecipe] = useState([]);

  //delete food function

  const deleteRecipe = async (id) => {
    try {
      //console.log(id)
      const deleteRecipe = await fetch(`/recipe/${id}`, {
        method: "DELETE",
      });

      setrecipe(recipe.filter((recipe) => recipe.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

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
      {" "}
      <table class="table mt-3 text-center">
        {" "}
        {/* change to 4 not 3 */}
        <thead>
          <tr>
            <th>Name</th>
            <th>CO2/kg</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {recipe.map((recipe) => (
            <tr key={recipe.id}>
              <td>{recipe.recipe}</td>
              <td>{recipe.carbon}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteRecipe(recipe.id)}
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
