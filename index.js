const express = require("express")
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const pool = require("./db");
const path=require("path")
const PORT=process.env.PORT ||5000;



//middleware
app.use(cors());
app.use(express.json())
//app.use(express.static("./client/build"))

if (process.env.NODE_ENV === 'production'){
  //server static conetent
  app.use(express.static(path.join(__dirname, "client/build")))
}
//routes
app.get('/register', function(req, res) {
    res.send("It works!");
});
//create
app.post("/food", async(req,res)=> {
    try{
        //console.log(req.body) test see req.body returns
        //const {food} =req.body
        //cost 
        //const {food} =req.body
        var name= req.body.food
        var density= req.body.density
        var carbon = req.body.carbon
        console.log(name, density,carbon)
        console.log(req.body)
        //INSERT INTO food (Food, density, Carbon) VALUES (rice,g,50)
        const Food = await pool.query(
            "INSERT INTO food (food, density, carbon) VALUES ($1,$2 ,$3) ON CONFLICT (food) DO NOTHING Returning *",
            [name,density,carbon]
          );
      
          res.json(Food.rows[0]);
        } catch (err) {
            console.error("error")
          console.error(err.message);
        }
  


})
//recipe post recipe
app.post("/recipe", async(req,res)=> {
  try{
      
      console.log(req.body)
      var count = Object.keys(req.body).length
      //console.log(count)
      var recipe = req.body[0].recipe;
      console.log("Recipe:"+recipe);
      var serving = req.body[0].serving;
      console.log("Serving:"+serving);
      var location = req.body[0].location;
      console.log("location:"+location);
      const result = await pool.query(
        "INSERT INTO recipe_index(name,serving,location) VALUES ($1,$2,$3) RETURNING recipe_id",
        [recipe,serving,location]
      );
      const recipe_id =result.rows[0]
      console.log(recipe_id.recipe_id)

      for (let  i=0; i<count;i++){
        var recipe = req.body[i].recipe;
        console.log("Recipe:"+recipe);
        
        var food = req.body[i].food;
        console.log("Food:"+food);
        
        var quantity = req.body[i].quantity;
        console.log("Quantity:"+quantity);
        var uom = req.body[i].uom;
        console.log("Uom:"+uom);
        
        
        const Recipe = await pool.query(
          "INSERT INTO recipe(recipe_id,food,quantity,uom) VALUES ($1,$2,$3,$4)",
          [recipe_id.recipe_id,food,quantity,uom]
        );
      }
      //res.json(Recipe.rows[i]);
    
      } catch (err) {
          console.error("error")
        console.error(err.message);
      }



})



//get all
app.get("/recipe", async (req, res) => {
  try {
    //const allTodos = await pool.query("Select Re.name, Re.serving, r.food, r.quantity, r.uom, f.density, f.carbon FROM recipe_index AS Re JOIN recipe AS r On Re.recipe_id = r.recipe_id Join food as f On f.food = r.food");
    const allTodos = await pool.query("Select * from recipe_index");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});
//get a recipe
app.get("/recipe/:id", async(req,res)=> {
  try {

    const {id}=req.params;
    const getFood =await pool.query("Select Re.serving,r.food, r.quantity, r.uom, f.density, f.carbon FROM recipe_index AS Re JOIN recipe AS r On Re.recipe_id = r.recipe_id Join food as f On f.food = r.food Where Re.recipe_id=$1",[id])
    //console.log(req.params)
    console.log(getFood.rows)
    res.json(getFood.rows)
  } catch (err){
    console.error(err.message)
  }


})


app.get("/food", async (req, res) => {
    try {
      const allTodos = await pool.query("SELECT * FROM food");
      res.json(allTodos.rows);
    } catch (err) {
      console.error(err.message);
    }
  });

  app.get("/todos", async (req, res) => {
    try {
      const allTodos = await pool.query("SELECT food.food FROM food");
      res.json(allTodos.rows);
    } catch (err) {
      console.error(err.message);
    }
  });

//get a 
app.get("/food/:id", async(req,res)=> {
  try {
    const {id}=req.params;
    const getFood =await pool.query("SELECT * FROM food WHERE id = $1",[id])
    //console.log(req.params)
    //console.log(getFood.rows[0])
    res.json(getFood.rows[0])
  } catch (err){
    console.error(err.message)
  }


})

//update
app.put("/food/:id",async (req,res)=>{
  try{
    const {id}=req.params
    
    const name = req.body.food
    const unit= req.body.unit
    const carbon = req.body.carbon
    //console.log(name, unit,carbon)
    //console.log(req.body)
    const updateFood =await pool.query("UPDATE food SET food = $1, unit = $2, carbon = $3 WHERE id=$4",
    [name,unit,carbon,id])
    res.json("Food updated")
  }catch (err){
    console.error(err.message)
  }


})

//Delete
app.delete("/food/:id",async(req,res)=>{
  try{
    const {id}=req.params
    const deleteFood=await pool.query("DELETE FROM food WHERE id=$1",
    [id])
    res.json("Deleted")
  }catch(err){
    console.log(err.message)
  }


})
//Delete recipe
app.delete("/recipe/:id",async(req,res)=>{
  try{
    console.log(req.params)
    const {id}=req.params
    const deleteRecipe=await pool.query("DELETE FROM recipe WHERE recipe_id=$1",
    [id])
    const deleteRecipe2=await pool.query("DELETE FROM recipe_index WHERE recipe_id=$1",
    [id])
    res.json("Deleted")
  }catch(err){
    console.log(err.message)
  }
})

 app.get("*",(req,res)=>{
   res.sendFile(path.join(__dirname, "client/build/index.html"));

 })



app.listen(PORT,()=>{
    console.log(`server start on port ${PORT}`)


})
