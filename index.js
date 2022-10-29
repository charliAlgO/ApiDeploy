const express = require("express");
const app = express();

const importData = require("./data.json");


let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hi guys, here's a little thing about Me!!");
});

app.get("/aboutme", (req, res) => {
    res.send(importData);
  });

app.listen(port, () => {
  console.log(`example app is listening on port http://localhost:${port}`);
});
