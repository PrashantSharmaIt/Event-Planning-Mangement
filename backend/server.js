import app from "./app.js";
import dotenv from "dotenv"

app.listen(process.env.PORT, ()=>{
  console.log(`server is listening on port ${process.env.PORT}`);
})