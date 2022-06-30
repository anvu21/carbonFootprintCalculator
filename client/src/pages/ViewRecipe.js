import ViewListFood from "../components/ViewListFood";
import { motion } from "framer-motion";
// import HeaderFooter from "../components/HeaderFooter";

const ViewRecipe = () => {
  return (
    // <motion.div
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    //   exit={{ opacity: 0 }}
    // >
    <div>
      {/* <HeaderFooter /> */}
      <h1 className="title">View Recipes</h1>
      <ViewListFood /> {/* will have to change this to list of recipes*/}
      {/* // </motion.div> */}
    </div>
  );
};

export default ViewRecipe;
