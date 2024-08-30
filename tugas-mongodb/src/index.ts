import express from "express";
import db from "./utils/database";
import routes from "./routes/api";
import bodyParser from "body-parser";
const PORT = 3000;

async function init(){
try{
  console.log("X");
  await db();
  console.log("X");
  const app=express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}));
  app.use("/api",routes);
  app.listen(PORT,()=>{
    console.log('Server is running at http://localhost:${PORT}');
  })
}
catch(error){}
}

init();