import React, { Fragment, useState } from "react";
import "./InputFood.css";
import ListFood from "../components/ListFood";
import SearchableDropdown from "../components/SearchableDropdown";
//import SearchableDropdown from "../components/SearchableDropdown";

const InputRecipe = () => {
  // start of: things im testing for + form
  // const [formFields, setFormFields] = useState([
  //   { food: "", quantity: "", uom: "" },
  // ]);

  // const addFields = () => {
  //   let object = {
  //     food: "",
  //     quantity: "",
  //     uom: "",
  //   };
  //   setFormFields([...formFields, object]);
  // };
  // const [recipeField, setRecipeFields] = useState([{ recipe: "" }]);

  const [inputFields, setInputFields] = useState([
    { recipe: "", food: "", quantity: "", uom: "" },
  ]);
  const { recipe, foood, quantity, uom } = inputFields;

  const handleSubmit = (e) => {
    e.preventDefault();
    for (let i = 0; i < inputFields.length; i++) {
      inputFields[i].recipe = inputFields[0].recipe;
    }
    console.log("InputFields", inputFields);
  };

  const handleChangeInput = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
  };

  // const handleRecipeChangeInput = (event) => {
  //   const recipe = event.target.value;
  //   setRecipeFields(recipe);
  //   console.log(event.target.value);
  // };

  // end of: things im testing for + form
  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      { recipe: "", food: "", quantity: "", uom: "" },
    ]);
  };

  const handleRemoveFields = (index) => {
    // event.preventDefault();
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  return (
    <Fragment>
      <h1 className="title">Add Recipes</h1>

      <form onSubmit={handleSubmit}>
        {/* {recipeField.map((recipeField, index) => ( */}
        <>
          <div>
            <input
              type="text"
              name="recipe"
              value={inputFields.recipe}
              placeholder="Recipe name"
              //onChange={(e) => onChange(e)}
              className="recipeinput"
              onChange={(event) => handleChangeInput(0, event)}
            />
          </div>
          <div className="space"></div>
          <form className="ingredientinput">
            {inputFields.map((inputFields, index) => (
              <div key={index}>
                <div className="inputfield">
                  <input
                    type="text"
                    name="food"
                    //value={food}
                    placeholder="Ingredient name"
                    //onChange={(e) => onChange(e)}
                    value={inputFields.food}
                    className="foodinput"
                    onChange={(event) => handleChangeInput(index, event)}
                  />
                  <SearchableDropdown
                    placeholder="Ingredient name"
                    // onClick={(event) => handleChangeInput(index, event)}
                  />
                  <input
                    type="number"
                    name="quantity"
                    //value={quantity}
                    placeholder="Quantity"
                    //onChange={(e) => onChange(e)}
                    value={inputFields.quantity}
                    className="quantityinput"
                    onChange={(event) => handleChangeInput(index, event)}
                  />
                  {/* <select className="dropdown">
              <option>g</option>
              <option>oz</option>
              <option>lbs</option>
              <option>kg</option>
              <option>tsp</option>
              <option>tbsp</option>
              <option>cups</option>
            </select> */}

                  <select
                    value={uom}
                    name="uom"
                    onChange={(event) => handleChangeInput(index, event)}
                    className="uominput"
                  >
                    <option value="kg">kg</option>
                    <option value="lbs">lbs</option>
                    <option value="oz">oz</option>
                    <option value="g">g</option>
                    <option value="tsp">tsp</option>
                    <option value="tbsp">tbsp</option>
                    <option value="cups">cups</option>
                  </select>

                  <div
                    className="removebutton"
                    onClick={() => handleRemoveFields(index)}
                  >
                    -
                  </div>
                  <div className="addbutton" onClick={() => handleAddFields()}>
                    +
                  </div>
                </div>
                <div className="space"></div>
              </div>
            ))}
            {/* 
            <select className="dropdown">
              <option>g</option>
              <option>oz</option>
              <option>lbs</option>
              <option>kg</option>
              <option>tsp</option>
              <option>tbsp</option>
              <option>cups</option>
            </select> 
*/}
          </form>

          <div>
            <button
              className="addrecipebutton"
              type="submit"
              onClick={handleSubmit}
            >
              Add
            </button>
          </div>
          {/* </> */}
        </>
        {/* ))} */}
      </form>
      <ListFood />
    </Fragment>
  );
};

export default InputRecipe;
