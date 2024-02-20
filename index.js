const express = require("express");
require('dotenv').config()
const app = express();


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter",(req,res)=>{
    res.send("Hey Gaurav")
})

app.get("/youtube", (req, res) => {
  res.send("<h2>gaurav/youtube</h2>");
});

app.get("/login", (req, res) => {
  res.send('<h1>Hey Gaurav I am from Taikun</h1>');
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
