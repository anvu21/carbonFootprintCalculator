import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import ViewRecipe from "../pages/ViewRecipe";
import ViewFood from "../pages/ViewFood";
import InputFood from "../pages/InputFood";
import InputRecipe from "../pages/InputRecipe";

function AnimatedRoutes() {
  // const location = useLocation();
  return (
    <Routes
    //location={location} key={location.pathname}
    >
      {/* <Route exact path="/" element={<Home />} /> */}
      <Route path="/" element={<ViewRecipe />} />
      <Route path="/addrecipes" element={<InputRecipe />} />
      <Route path="/viewingredients" element={<ViewFood />} />
      <Route path="/addingredients" element={<InputFood />} />{" "}
    </Routes>
  );
}

export default AnimatedRoutes;
