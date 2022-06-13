import React, { Fragment, useEffect, useState } from "react";


const ListFood = () => {
  const [food, setfood] = useState([]);

  //delete food function

  const deleteFood = async id => {
    try {
      //console.log(id)
      const deleteFood = await fetch(`/food/${id}`, {
        method: "DELETE"
      });

      setfood(food.filter(food => food.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

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

  console.log(food);

  return (
    <Fragment>
      {" "}
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>Name</th> 
            <th>Unit</th> 
            <th>Carbon</th> 
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
          {food.map(food => (
            <tr key={food.id}>
              <td>{food.food}</td>
              <td>{food.unit}</td>
              <td>{food.carbon}</td>
              <td>
             
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteFood(food.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};
//<EditFood todo={todo} />
export default ListFood;
