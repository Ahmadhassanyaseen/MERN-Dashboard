const mongoose = require("mongoose");
const Mongo_URL =
  process.env.DB;


const startDB = async()=>{
    try{
await mongoose
  .connect("mongodb+srv://admin:admin@cluster0.rzivqe2.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB Online :(");
    
  });
    }
    catch(err){
        console.log('====================================');
        console.log("DataBase Connection Error");
        console.log('====================================');
    }
}

module.exports = startDB;
