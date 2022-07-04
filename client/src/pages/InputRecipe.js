import React, { Fragment, useState } from "react";
import "./InputFood.css";
import ListFood from "../components/ListFood";

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

  const [inputFields, setInputFields] = useState([
    { food: "", quantity: "", uom: "" },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields", inputFields);
  };

  const handleChangeInput = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
  };
  // end of: things im testing for + form

  const handleAddFields = () => {
    // event.preventDefault();
    setInputFields([...inputFields, { food: "", quantity: "", uom: "" }]);
  };

  const handleRemoveFields = (index) => {
    // event.preventDefault();
    // setInputFields([...inputFields, { food: "", quantity: "", uom: "" }]);
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  return (
    <Fragment>
      <h1 className="title">Add Recipes</h1>

      <form onSubmit={handleSubmit}>
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
                <input
                  type="text"
                  name="uom"
                  //value={uom}
                  placeholder="UOM"
                  //onChange={(e) => onChange(e)}
                  value={inputFields.uom}
                  className="uominput"
                  onChange={(event) => handleChangeInput(index, event)}
                />
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
          {/* <div className="inputfield">
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
              <option>tsp</option>
              <option>tbsp</option>
              <option>cups</option>
            </select> 
            <input
              type="number"
              name="uom"
              //value={quantity}
              placeholder="UOM"
              //onChange={(e) => onChange(e)}
              className="uominput"
            />
            <button className="removebutton">-</button>
            <button className="addbutton">+</button>
          </div> */}
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
      </form>
      <ListFood />
    </Fragment>
  );
};

export default InputRecipe;
