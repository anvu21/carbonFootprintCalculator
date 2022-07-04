import React from "react";
import { Nav, NavLink, NavMenu, NavTitle } from "./NavbarElements";
import "./NavBarElement.css";
// import Footer from "../Footer";
// import { useLocation } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";

const Navbar = () => {
  //   const location = useLocation();
  return (
    // <>
    <Nav className="backgroundhead">
      <NavMenu>
        <div className="fcfheader">FOOD CARBON FOOTPRINT CALCULATOR</div>
        {/* <NavTitle>
        FOOD CARBON FOOTPRINT CALCULATOR
        </NavTitle> */}
        <div>
          <img className="logo" alt="" src="/FCFLOGO.png" />
        </div>
        <NavLink
          to="/"
          className="links"
          activeStyle
          style={{ textDecoration: "none" }}
        >
          View Recipes
        </NavLink>
        <NavLink
          to="/addrecipes"
          className="links"
          activeStyle
          style={{ textDecoration: "none" }}
        >
          Add Recipes
        </NavLink>
        <NavLink
          to="/viewingredients"
          className="links"
          activeStyle
          style={{ textDecoration: "none" }}
        >
          View Ingredients
        </NavLink>
        <NavLink
          to="/addingredients"
          className="links"
          activeStyle
          style={{ textDecoration: "none" }}
        >
          Add Ingredients
        </NavLink>
      </NavMenu>
    </Nav>
    // </>
  );
};

export default Navbar;
