import React, { Fragment, useState } from "react";
import "./InputFood.css";
import ListFood from "../components/ListFood";

const InputRecipe = () => {
  return (
    <Fragment>
      <h1 className="title">Add Recipes</h1>
      <form>
        {/* onSubmit={onSubmitForm}   */}
        <input
          type="text"
          name="recipe"
          //value={recipe}
          placeholder="Recipe name"
          // onChange={(e) => onChange(e)}
          className="recipeinput"
        />

        <form>
          <div>
            <input
              type="text"
              name="food"
              //value={food}
              placeholder="Ingredient name"
              //onChange={(e) => onChange(e)}
              className="foodinput"
            />
            <input
              type="number"
              name="quantity"
              //value={quantity}
              placeholder="Quantity"
              //onChange={(e) => onChange(e)}
              className="quantityinput"
            />
            <select className="dropdown">
              <option>g</option>
              <option>oz</option>
              <option>lbs</option>
              <option>kg</option>
            </select>
            <button className="addbutton">+</button>
          </div>
        </form>
        <button className="addrecipebutton">Add</button>
      </form>
      <ListFood />
    </Fragment>
  );
};

export default InputRecipe;
