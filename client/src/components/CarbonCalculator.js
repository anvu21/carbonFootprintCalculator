import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
const CarbonCalculator = ({ value }) => {
    const [descrition, setDescription] =  useState([]);
    const [recipe_id, setValue] =  useState(value.recipe_id);

  //edit description function

  const updateDescription = async (id) => {
    console.log(`/recipe/${id}`)
    //console.log(fetch(`/recipe/${id}`))
    try {
        const response = await fetch( `/recipe/${id}`,
        {
          method: "GET"
        });
        const jsonData = await response.json();

        setDescription(jsonData)
      //window.location = "/";
      console.log(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };
  function carbonCategory(carbon) {
    if (carbon >= 0 && carbon <= 1.16) {
      return <FontAwesomeIcon icon={faEarthAmericas} className="green" />;
    } else if (carbon > 1.16 && carbon <= 2.37) {
      return <FontAwesomeIcon icon={faEarthAmericas} className="yellow" />;
    } else {
      return <FontAwesomeIcon icon={faEarthAmericas} className="red" />;
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
      <div
        class="modal"
        id={`id${value.recipe_id}`}
        
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Carbon Value</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                
              >
                &times;
              </button>
            </div>

            <div class="modal-body">
            <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>Food</th>
            <th>Quantity</th>
            <th>uom</th>
            <th>density</th>
            <th>carbon</th>
            <th>Footprint</th>
          </tr>
        </thead>
        <tbody>
          
          {descrition.map(descrition => (
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

            <div class="modal-footer">
            </div>
            </div>
          </div>
        </div>
      </div>



    </Fragment>
  );
};

export default CarbonCalculator;