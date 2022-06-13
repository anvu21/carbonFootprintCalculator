import React, { Fragment, useState } from "react";
import "./InputFood.css";

const InputFood = () => {
  const [inputs, setInputs] = useState({
    food: "",
    unit: "",
    carbon: "",
  });
  const { food, unit, carbon } = inputs;
  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { food, unit, carbon };
      const response = await fetch("/food", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      //const parseRespond = await response.json();
      //console.log(parseRespond)
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Food</h1>

      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          name="food"
          value={food}
          placeholder="Ingredient name"
          onChange={(e) => onChange(e)}
          className="foodinput"
        />
        <input
          type="text"
          name="unit"
          value={unit}
          placeholder="unit"
          onChange={(e) => onChange(e)}
          className="form-control my-3"
        />
        <input
          type="number"
          name="carbon"
          value={carbon}
          placeholder="carbon"
          onChange={(e) => onChange(e)}
          className="form-control my-3"
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputFood;

<div>
  <form>
    {formFields.map((form, index) => {
      return (
        <div key={index} className="addcontent">
          {/*<SearchBar
          placeholder="Ingredient name"
          data={MOCKDATA}
          onChange={(event) => handleFormChange(event, index)}
          value={form.ingredient_name}
        /> */}
          <input
            name="ingredient_name"
            placeholder="Ingredient name"
            onChange={(event) => handleFormChange(event, index)}
            value={form.ingredient_name}
            className="ingredientinput"
          ></input>
          <input
            name="c_footprint"
            placeholder="Carbon footprint/kg"
            onChange={(event) => handleFormChange(event, index)}
            value={form.c_footprint}
            className="footprintinput"
          ></input>
          <button className="trashicon">
            <FontAwesomeIcon icon={faTrash} />
          </button>
          <button className="submitbuttoning">Submit</button>
        </div>
      );
    })}
  </form>
</div>;

/*<input
          type="text"
          name="unit"
          value={unit}
          placeholder="unit"
          onChange={e => onChange(e)}
          className="form-control my-3"
        />

*/
