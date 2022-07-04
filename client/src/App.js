import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
//import Home from "./pages";

// import ViewRecipe from "./pages/ViewRecipe";
// import ViewFood from "./pages/ViewFood";
// import InputFood from "./pages/InputFood";
// import InputRecipe from "./pages/InputRecipe";

function App() {
  return (
    <div className="App">
      {/* <AnimatePresence> */}
      <Router>
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </Router>
      {/* </AnimatePresence> */}
    </div>
  );
}

export default App;
