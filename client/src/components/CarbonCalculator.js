import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import testing from "./testing.json";
const CarbonCalculator = ({ value }) => {
  const [descrition, setDescription] = useState([]);
  const [recipe_id, setValue] = useState(value.recipe_id);

  //edit description function

  const updateDescription = async (id) => {
    console.log(`/recipe/${id}`);
    //console.log(fetch(`/recipe/${id}`))
    try {
      const response = await fetch(`/recipe/${id}`, {
        method: "GET",
      });
      const jsonData = await response.json();

      setDescription(jsonData);
      //window.location = "/";
      console.log(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  // let targetRecipe = testing.map((testing) => testing.recipe);
  // let targetServing = testing.map((testing) => testing.serving);
  // let targetQuantity = testing.map((testing) => testing.quantity);
  // let targetUom = testing.map((testing) => testing.uom);
  // let targetDensity = testing.map((testing) => testing.density);
  // let targetCarbon = testing.map((testing) => testing.carbon);

  // function recipeCalc() {
  //   var index = 0;
  //   var carbonTotal = 0;
  //   while (index < testing.length) {
  //     if (targetUom[index] === "lbs") {
  //       carbonTotal += targetQuantity[index] * 0.453592 * targetCarbon[index];
  //     } else if (targetUom[index] === "g") {
  //       carbonTotal += (targetQuantity[index] / 1000) * targetCarbon[index];
  //     } else if (targetUom[index] === "oz") {
  //       carbonTotal += targetQuantity[index] * 0.02835 * targetCarbon[index];
  //     } else if (targetUom[index] === "cups") {
  //       carbonTotal +=
  //         ((targetQuantity[index] * targetDensity[index]) / 4.226753) *
  //         targetCarbon[index];
  //     } else if (targetUom[index] === "tbsp") {
  //       carbonTotal +=
  //         ((targetQuantity[index] * targetDensity[index]) / 67.628045) *
  //         targetCarbon[index];
  //     } else if (targetUom[index] === "tsp") {
  //       carbonTotal +=
  //         ((targetQuantity[index] * targetDensity[index]) / 202.884136) *
  //         targetCarbon[index];
  //     } else {
  //       // for kg
  //       carbonTotal += targetQuantity[index] * targetCarbon[index];
  //     }
  //     index += 1;
  //   }
  //   return carbonTotal / targetServing[0];
  // }

  function carbonCategory(carbon) {
    if (carbon >= 0 && carbon <= 1.16) {
      return (
        <div>
          Low
          <FontAwesomeIcon icon={faEarthAmericas} className="green" />
        </div>
      );
    } else if (carbon > 1.16 && carbon <= 2.37) {
      return (
        <div>
          Medium
          <FontAwesomeIcon icon={faEarthAmericas} className="yellow" />
        </div>
      );
    } else {
      return (
        <div>
          High
          <FontAwesomeIcon icon={faEarthAmericas} className="red" />
        </div>
      );
    }
  }

  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${value.recipe_id}`}
        onClick={() => updateDescription(value.recipe_id)}
      >
        Carbon
      </button>
      <div class="modal" id={`id${value.recipe_id}`}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Carbon Info</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            {/* <h5>
              <div>{testing[0].recipe}</div>
              <div>{recipeCalc()}</div>
              <div>{carbonCategory(recipeCalc())}</div>
            </h5> */}

            <div class="modal-body">
              <table class="table mt-5 text-center">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>UOM</th>
                    <th>Density</th>
                    <th>CO2/kg</th>
                    <th>Footprint</th>
                  </tr>
                </thead>
                <tbody>
                  {/* testing.map */}
                  {descrition.map((descrition) => (
                    <tr key={descrition.id}>
                      <td>{descrition.food}</td>
                      <td>{descrition.quantity}</td>
                      <td>{descrition.uom}</td>
                      <td>{descrition.density}</td>
                      <td>{descrition.carbon}</td>
                      <td>{carbonCategory(descrition.carbon)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div class="modal-footer"></div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CarbonCalculator;
