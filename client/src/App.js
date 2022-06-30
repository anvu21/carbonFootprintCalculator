import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Home from "./pages";

// import ViewRecipe from "./pages/ViewRecipe";
// import ViewFood from "./pages/ViewFood";
// import InputFood from "./pages/InputFood";
// import InputRecipe from "./pages/InputRecipe";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
