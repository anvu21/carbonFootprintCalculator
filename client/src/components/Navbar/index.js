import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import "./NavBarElements.css";
import Footer from "../Footer";
const Navbar = () => {
  return (
    <>
      <Nav className="backgroundhead">
        <NavMenu>
          <div className="fcfheader">FOOD CARBON FOOTPRINT CALCULATOR</div>
          <NavLink to="/" activeStyle>
            View Recipes
          </NavLink>
          <NavLink to="/addrecipes" activeStyle>
            Add Recipes
          </NavLink>
          <NavLink to="/viewingredients" activeStyle>
            View Ingredients
          </NavLink>
          <NavLink to="/addingredients" activeStyle>
            Add Ingredients
          </NavLink>
        </NavMenu>
      </Nav>
      <Footer />
    </>
  );
};

export default Navbar;
