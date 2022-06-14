// import { Link } from "react-router-dom";
import "./HeaderFooter.css";

function HeaderFooter() {
  return (
    <div>
      <header className="header">
        <div className="name">FOOD CARBON FOOTPRINT CALCULATOR</div>
        <div className="image"></div>
        <nav>
          <ul>
            <li>
              {/* <Link to="/">View Recipes</Link> */}
              View Recipes
            </li>
            <li>
              {/* <Link to="/addrecipes">Add Recipes</Link> */}Add Recipes
            </li>
            <li>
              {/* <Link to="/viewingredients">View Ingredients</Link> */} View
              Ingredients
            </li>
            <li>
              {/* <Link to="/addingredients">Add Ingredients</Link> */}Add
              Ingredients
            </li>
          </ul>
        </nav>
      </header>
      <div className="footer">
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
      </div>
    </div>
  );
}

export default HeaderFooter;
