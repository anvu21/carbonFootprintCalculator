import React, { Fragment } from "react";
import "./App.css";
//components
import HeaderFooter from "./components/HeaderFooter";
import InputFood from "./components/InputFood";
import ListFood from "./components/ListFood";
import InputRecipe from "./components/InputRecipe";
import ViewFood from "./components/ViewFood";
import ViewRecipe from "./components/ViewRecipe";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

function App() {
  return (
    // <Fragment>
    //   <div className="container">
    //     <HeaderFooter />
    //     <InputFood />
    //     <ListFood />
    //   </div>
    // </Fragment>
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<ViewRecipe />} />
          <Route path="/addrecipes" element={<InputRecipe />} />
          <Route path="/viewingredients" element={<ViewFood />} />
          <Route path="/addingredients" element={<InputFood />} />
        </Routes>
      </Router>
    </div>
  );
}
