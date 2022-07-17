import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import testing from "./testing.json";
const CarbonCalculator = ({ value }) => {
  const [descrition, setDescription] = useState([]);
  const [recipe_id, setValue] = useState(value.recipe_id);
  //var totalCarbon = new Array();
  var totalCarbon= 0
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
      console.log("Carbon viewer")
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
  //descrition.carbon,descrition.uom,descrition.density,descrition.quantity
  function Total() {
    return totalCarbon
  }
   function recipeCalc(serving,carbon,uom,density,quantity) {
     var index = 0;
     var carbonTotal = 0.0;
     
       if (uom === "lbs") {
         carbonTotal += quantity * 0.453592 * carbon;
       } else if (uom === "g") {
         carbonTotal += (quantity / 1000) * carbon;
       } else if (uom === "oz") {
         carbonTotal += quantity * 0.02835 * carbon;
       } else if (uom === "cups") {
         carbonTotal +=
           ((quantity * density) / 4.226753) *
           carbon;
       } else if (uom === "tbsp") {
         carbonTotal +=
           ((quantity * density) / 67.628045) *
           carbon;
       } else if (uom === "tsp") {
         carbonTotal +=
           ((quantity * density) / 202.884136) *
           carbon;
       } else {
         // for kg
         carbonTotal += quantity * carbon;
       }
       
       carbonTotal= carbonTotal/serving
       carbonTotal=Math.round(carbonTotal * 100) / 100  
        totalCarbon += carbonTotal
     return carbonTotal;
   }

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
              <table class="table mt-1 text-center">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>UOM</th>
                    <th>Density</th>
                    <th>CO2/kg</th>
                    <th>Carbon</th>
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
                      <td>{recipeCalc(descrition.serving,descrition.carbon,descrition.uom,descrition.density,descrition.quantity)}</td>
                      <td>{carbonCategory(descrition.carbon)}</td>
                    </tr>

                  ))}
                  <tr></tr>
          <tr>
            <td>Totals:</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              {totalCarbon}
            </td>
          </tr>
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
