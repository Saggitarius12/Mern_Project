const express = require("express");
const app = express();
const port = 8000;
const mongoDB = require("./db");

app.get('/',(req,res)=>{
    res.send("Hello World!")
})


app.use(express.json())
app.use('/api',require("./Routers/CreateUser"))

app.listen(port,()=>{
    console.log(`App listening on ${port}`)
})