import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Home from "./pages";
// import About from './pages/about';
// import Blogs from './pages/blogs';
// import SignUp from './pages/signup';
// import Showfood from './pages/showfood';

import ViewRecipe from "./pages/ViewRecipe";
import ViewFood from "./pages/ViewFood";
import InputFood from "./pages/InputFood";
import InputRecipe from "./pages/InputRecipe";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route exact path="/" element={<Home />} /> */}
        <Route path="/" element={<ViewRecipe />} />
        <Route path="/addrecipes" element={<InputRecipe />} />
        <Route path="/viewingredients" element={<ViewFood />} />
        <Route path="/addingredients" element={<InputFood />} />{" "}
      </Routes>
    </Router>
  );
}

export default App;
