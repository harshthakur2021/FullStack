import express from "express";
import dotenv from "dotenv"
import cors from "cors"

// cors- It’s a security feature in browsers that controls which websites can talk to each other.
// const cors = require('cors');
// app.use(cors());


dotenv.config()
const app = express();

app.use(cors({
   origin: "http://localhost:3000",
   methods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
   allowedHeaders: ['Content-Type' , 'Authorization']
})
);




const port =  process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Cohort!')
})
app.get('/hitesh', (req, res) => {
  res.send("Hitesh")
})

app.get('/piyush', ( req,res)=> {
  res.send ("Piyush !")
})

console.log();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})