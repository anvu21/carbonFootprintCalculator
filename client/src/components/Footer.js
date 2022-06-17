import classes from "./Footer.css";

function Footer() {
  return (
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
  );
}

export default Footer;
