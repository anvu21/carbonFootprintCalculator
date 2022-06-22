import ViewListFood from "../components/ViewListFood";
// import HeaderFooter from "../components/HeaderFooter";

const ViewRecipe = () => {
  return (
    <div>
      {/* <HeaderFooter /> */}
      <h1 className="title">View Recipes</h1>
      <ViewListFood /> {/* will have to change this to list of recipes*/}
    </div>
  );
};

export default ViewRecipe;
