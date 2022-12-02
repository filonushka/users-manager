import express from "express";
import mongoose from "mongoose";

import { loginValidation, registerValidation } from "./validation.js";
import checkAuth from "./utils/checkAuth.js";
import * as UserController from "./controllers/UserController.js";

mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.zubpkej.mongodb.net/user-manager?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("DB is OK");
  })
  .catch((err) => console.log("DB error", err));

const app = express();
app.use(express.json());

app.get("/auth/me", checkAuth, UserController.getMe); //Get the data abot yourself
app.get("/auth/all", checkAuth, UserController.getAllUsers); //Get the data about all users

app.post("/auth/register", registerValidation, UserController.register); // Registration
app.post("/auth/login", loginValidation, UserController.login); //Login

app.delete("/auth/:id", checkAuth, UserController.remove); //Delete user

app.listen(process.env.PORT || 3001, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log(`Server is OK, port ${process.env.PORT || 3001}`);
});

app.get("/api", (req, res) => {
  res.json({
    message: "Hello from backend",
  });
});
