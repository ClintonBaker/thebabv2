import express from "express";
const app = express();

app.get("*", (req, res) => {
  res.end("Hello Express");
});

app.listen(3000, (req, res) => {
  console.log("Server spinning up!");
});
