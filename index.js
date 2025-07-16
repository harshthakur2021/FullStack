import express from "express";
import dotenv from "dotenv"

dotenv.config()
const app = express();
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