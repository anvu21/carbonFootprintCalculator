import React, { Fragment, useState } from "react";

const InputFood = () => {
  const [inputs, setInputs] = useState({
    food: "",
    unit: "",
    carbon: ""
  });
const {food,unit,carbon} =inputs;
const onChange = e =>
setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { food, unit, carbon };
      const response = await fetch("/food", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
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
          placeholder="food"
          onChange={e => onChange(e)}
          className="form-control my-3"
        />
        <input
          type="text"
          name="unit"
          value={unit}
          placeholder="unit"
          onChange={e => onChange(e)}
          className="form-control my-3"
        />
        <input
          type="number"
          name="carbon"
          value={carbon}
          placeholder="carbon"
          onChange={e => onChange(e)}
          className="form-control my-3"
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputFood;


/*<input
          type="text"
          name="unit"
          value={unit}
          placeholder="unit"
          onChange={e => onChange(e)}
          className="form-control my-3"
        />

*/
