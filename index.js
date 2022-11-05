const express = require("express");
const { handlePost } = require("./controller");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const importData = require("./data.json");

let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hi guys, here's a little thing about Me!!");
});

app.get("/aboutme", (req, res) => {
  res.send(importData);
});
app.post("/stage2", handlePost);

app.listen(port, () => {
  console.log(`example app is listening on port http://localhost:${port}`);
});
