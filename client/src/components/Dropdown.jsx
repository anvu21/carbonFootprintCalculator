import React, { useState, useEffect } from "react";

export default function Dropdown({ options, value, onChange }) {
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

  const [open, setOpen] = useState(false);

  return (
    <div className="dropdown">
      <div className="control" onClick={() => setOpen((prev) => !prev)}>
        <div className="selected-value">{value ? value.name : prompt}</div>
        <div
          className="arrow"
          className={`arrow ${open ? "open" : null}`}
        ></div>
      </div>
      <div className={`options ${open ? "open" : null}`}>
        {/* {options.map((option) => (
          <div
            className={`option ${value === option ? "selected" : null}`}
            onClick={() => {
              onChange(option);
              setOpen(false);
            }}
          >
            {option.name}
          </div>
        ))} */}
        {food.map((value) => (
          <div
            className={`value ${value === value ? "selected" : null}`}
            onClick={() => {
              onChange(value);
              setOpen(false);
            }}
          >
            {value.food}
          </div>
        ))}
      </div>
    </div>
  );
}

// <div className="dropdown">
//   <div className="control" onClick={() => setOpen((prev) => !prev)}>
//     <div className="selected-value">Ingredient name</div>
//     <div className={`arrow ${open ? "open" : null} `}></div>
//   </div>
//   <div className={`options ${open ? "open" : null} `}>
//     {food.map((value) => (
//       <div
//         className="option"
//         onClick={(event) => handleChangeInput(index, event)}
//         onChange={() => setOpen(false)}
//       >
//         {value.food}
//       </div>
//     ))}
//   </div>
// </div>;
