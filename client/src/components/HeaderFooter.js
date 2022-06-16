import { BrowserRouter as Router, NavLink } from "react-router-dom";
// const Link = require("react-router-dom").Link;
// const BrowserRouter = require("react-router-dom").BrowserRouter;

// const Route = require("react-router-dom").Route;

// const Link = require("react-router-dom").Link;
import "./HeaderFooter.css";

function HeaderFooter() {
  return (
    <div>
      <header className="header">
        <div className="name">FOOD CARBON FOOTPRINT CALCULATOR</div>
        <img src="../../public/logo192.png" className="image" />
        <Router>
          <nav>
            <ul>
              <li>
                <NavLink exact to="/">
                  View Recipes
                </NavLink>
                View Recipes
              </li>
              <li>
                <NavLink exact to="/addrecipes">
                  Add Recipes
                </NavLink>
                Add Recipes
              </li>
              <li>
                <NavLink exact to="/viewingredients">
                  View Ingredients
                </NavLink>
                View Ingredients
              </li>
              <li>
                <NavLink exact to="/addingredients">
                  Add Ingredients
                </NavLink>
                Add Ingredients
              </li>
            </ul>
          </nav>
        </Router>
      </header>
      {/* <div className="footer">
        <div>
          <img
            src="https://collegeaim.org/wp-content/uploads/2021/08/Lehigh-University-logo.png"
            className="lehighlogo"
          ></img>
        </div>
        <a
          href="https://creativeinquiry.lehigh.edu/mountaintop-programs/campus-sustainable-impact-fellowship"
          className="csiflink"
        >
          Campus Sustainable Impact Fellowship
        </a>
      </div> */}
    </div>
  );
}

export default HeaderFooter;
