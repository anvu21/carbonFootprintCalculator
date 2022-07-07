import React, { Fragment, useState, useEffect } from "react";
import "./InputFood.css";
import ListFood from "../components/ListFood";
import "./InputRecipe.css";

const InputRecipe = () => {
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
  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      { recipe: "", food: "", quantity: "", uom: "" },
    ]);
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  // start of food backend

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

  // end of food backend

  // testing for ingredient look up

  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <h1 className="title">Add Recipes</h1>

      <form onSubmit={handleSubmit}>
        <>
          <div>
            <input
              type="text"
              name="recipe"
              value={inputFields.recipe}
              placeholder="Recipe name"
              className="recipeinput"
              onChange={(event) => handleChangeInput(0, event)}
            />
          </div>
          <div className="space"></div>
          <form className="ingredientinput">
            {inputFields.map((inputFields, index) => (
              <div key={index}>
                <div className="inputfield">
                  {/* <input
                    type="text"
                    name="food"
                    //value={food}
                    placeholder="Ingredient name"
                    //onChange={(e) => onChange(e)}
                    value={inputFields.food}
                    className="foodinput"
                    onChange={(event) => handleChangeInput(index, event)}
                  /> */}
                  <div className="dropdown">
                    <div
                      className="control"
                      onClick={() => setOpen((prev) => !prev)}
                    >
                      <div className="selected-value">Ingredient name</div>
                      <div className={`arrow ${open ? "open" : null} `}></div>
                    </div>
                    <div className={`options ${open ? "open" : null} `}>
                      {food.map((value) => (
                        <div
                          className="option"
                          value={inputFields.quantity}
                          onClick={(event) => {
                            handleChangeInput(index, event);
                            setOpen(false);
                          }}
                        >
                          {value.food}
                        </div>
                      ))}
                    </div>
                  </div>
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
