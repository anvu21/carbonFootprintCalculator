import React, { Fragment, useState } from "react";

const CarbonCalculator = ({ value }) => {

    /*
  const [description, setDescription] = (todo.recipe_id);

  //edit description function

  const updateDescription = async e => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(
        `/recipe/${todo.todo_id}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };
 */
  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${value.recipe_id}`}
      >
        Value
      </button>
    </Fragment>
  );
};

export default CarbonCalculator;