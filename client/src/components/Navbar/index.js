import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import "./NavBarElement.css";
import Footer from "../Footer";
const Navbar = () => {
  return (
    <>
      <Nav className="backgroundhead">
        <NavMenu>
          <div className="fcfheader">FOOD CARBON FOOTPRINT CALCULATOR</div>
          <div>
            <div className="logo"></div>
          </div>
          <NavLink to="/" className="links" activeStyle>
            View Recipes
          </NavLink>
          <NavLink to="/addrecipes" className="links" activeStyle>
            Add Recipes
          </NavLink>
          <NavLink to="/viewingredients" className="links" activeStyle>
            View Ingredients
          </NavLink>
          <NavLink to="/addingredients" className="links" activeStyle>
            Add Ingredients
          </NavLink>
        </NavMenu>
      </Nav>
      <Footer />
    </>
  );
};

export default Navbar;
