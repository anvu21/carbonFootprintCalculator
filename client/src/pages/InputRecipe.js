import React, { Fragment, useState } from "react";
import "./InputFood.css";
import ListRecipe from "../components/ListRecipe";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
const InputRecipe = () => {
  const [inputFields, setInputFields] = useState([
    {
      recipe: "",
      location: "Rathbone Dinning Hall",
      food: "",
      serving: "",
      quantity: "",
      uom: "kg",
    },
  ]);
  const { recipe, location, food, serving, quantity, uom } = inputFields;
  const options =[];
  const [options2, setOptions2] = React.useState('');

  //const options2 =[];
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState('');
  

  //on load to load the list of food from food table
  window.onload = async function() {
      //console.log("jsonData");
      
        try {
          const response = await fetch("/todos");
          const jsonData = await response.json();
          //console.log("jsonData");
          //console.log(jsonData);
          //console.log(jsonData[0].food);
          for (let i = 0; i < jsonData.length; i++){
            console.log(jsonData[i].food);
            options.push(jsonData[i].food)
          }
          
          
          console.log(options)
          setOptions2(options)
          //setTodos(options);
        } catch (err) {
          console.error(err.message);
        }
      
  }
  

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const test = {};
    test.b = [];
    for (let i = 0; i < inputFields.length; i++) {
      inputFields[i].recipe = inputFields[0].recipe;
      //console.log(inputFields[i].recipe);
      //console.log(inputFields[0].recipe);
      inputFields[i].serving = inputFields[0].serving;
      //console.log(inputFields[i].serving);
      //console.log(inputFields[0].serving);
    }
    for (let i = 0; i < inputFields.length; i++) {
      test.b.push(inputFields[0].recipe);
    }
    const body = { recipe, food, location, serving, quantity, uom };

    //console.log("test",JSON.stringify(test));
    //console.log("InputFields", inputFields);
    //console.log("InputFields", JSON.stringify(inputFields));

    try {
      //const body = { recipe, food,quantity,uom };
      //console.log(inputFields)
      const response = await fetch("/recipe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputFields),
      });
      //const parseRespond = await response.json();
      //console.log(parseRespond)
      window.location = "/addingredients";

      //window.location = "/addrecipes";
    } catch (err) {
      console.error(err.message);
    }
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
    //options=options2
    console.log("Add"+options)
    setInputFields([
      ...inputFields,
      {
        recipe: "",
        location: "Rathbone Dining Hall",
        food: "",
        serving: "",
        quantity: "",
        uom: "kg",
      },
    ]);
    console.log("Add"+options)
  };

  const handleRemoveFields = (index) => {
    // event.preventDefault();
    //options=options2
    console.log("Remove"+options)
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
            <input
              type="number"
              name="serving"
              value={inputFields.serving}
              placeholder="Servings"
              //onChange={(e) => onChange(e)}
              className="servinginput"
              onChange={(event) => handleChangeInput(0, event)}
            />
            <select
              value={location}
              name="location"
              onChange={(event) => handleChangeInput(0, event)}
              className="locationinput"
            >
              <option value="Rathbone Dining Hall">Rathbone Dining Hall</option>
              <option value="Lower Court UC">Lower Court UC</option>
              <option value="Broadhead Dining Hall">
                Broadhead Dining Hall
              </option>
              <option value="Upper UC Food Market">Upper UC Food Market</option>
              <option value="Baker's Junction">Baker's Junction</option>
              <option value="Clutch & Go">Clutch & Go</option>
              <option value="The Grind @ FML">The Grind @ FML</option>
              <option value="Hawk's Nest">Hawk's Nest</option>
              <option value="Common Grounds">Common Grounds</option>
              <option value="Hillside Cafe">Hillside Cafe</option>
              <option value="Iacocca Cafe">Iacocca Cafe</option>
            </select>
          </div>
          <div className="space"></div>
          <form className="ingredientinput">
            {inputFields.map((inputFields, index) => (
              <div key={index}>
                <div className="inputfield">
                <Autocomplete
      disablePortal
      id="combo-box-demo"
      name="food"
      value={inputFields.food}
      options={options2}
      onChange={(event) => handleChangeInput(index, event)}

      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Ingredients" />}
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
      <ListRecipe />
    </Fragment>
  );
};

export default InputRecipe;
