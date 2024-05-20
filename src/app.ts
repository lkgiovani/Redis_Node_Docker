import express from "express";
import UserController from "./controller/UserContoller";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  UserController.find(req, res);
});

console.log("Listening on port 5555");

app.listen(5555);
