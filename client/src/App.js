import React, { Fragment } from "react";
import "./App.css";

//components

import InputFood from "./components/InputFood";
import ListFood from "./components/ListFood";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputFood />
        <ListFood />
      </div>
    </Fragment>
  );
}
//<ListFood />
export default App;
