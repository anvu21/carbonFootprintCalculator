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



//get all
app.get("/food", async (req, res) => {
    try {
      const allTodos = await pool.query("SELECT * FROM food");
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

 app.get("*",(req,res)=>{
   res.sendFile(path.join(__dirname, "client/build/index.html"));

 })



app.listen(PORT,()=>{
    console.log(`server start on port ${PORT}`)


})
