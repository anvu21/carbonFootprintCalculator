import React, { Fragment, useState } from "react";
import "./InputFood.css";
import ListFood from "../components/ListFood";

const InputRecipe = () => {
  // start of backend for food
  //   const [inputs, setInputs] = useState({
  //     food: "",
  //     unit: "",
  //     carbon: "",
  //   });
  //   const { food, unit, carbon } = inputs;
  //   const onChange = (e) =>
  //     setInputs({ ...inputs, [e.target.name]: e.target.value });

  //   const onSubmitForm = async (e) => {
  //     e.preventDefault();
  //     try {
  //       const body = { food, unit, carbon };
  //       const response = await fetch("/food", {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify(body),
  //       });
  //       //const parseRespond = await response.json();
  //       //console.log(parseRespond)
  //       window.location = "/addingredients";
  //     } catch (err) {
  //       console.error(err.message);
  //     }
  //   };
  // const handleAddFields = () => {
  //   setInputFieldss([...inputFields, { food: "", quantity: "" }]);
  // };
  // end of backend for food
  return (
    <Fragment>
      <h1 className="title">Add Recipes</h1>
      <form>
        {/* onSubmit={onSubmitForm}   */}
        <div>
          <input
            type="text"
            name="recipe"
            //value={recipe}
            placeholder="Recipe name"
            //onChange={(e) => onChange(e)}
            className="recipeinput"
          />
        </div>

        <form className="ingredientinput">
          <div className="inputfield">
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
            <button
              className="addbutton"
              // onClick={handleAddFields}
            >
              +
            </button>
          </div>
        </form>
        <div>
          <button className="addrecipebutton">Add</button>
        </div>
      </form>
      <ListFood />
    </Fragment>
  );
};

export default InputRecipe;
