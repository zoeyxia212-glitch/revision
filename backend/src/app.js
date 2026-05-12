import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import morgan from "morgan";


const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:5173"],
    credentials: true
  })
);
app.use(morgan("combined"));


/*
 * You should see this message if you send a GET request to
 * http://localhost:3000
 */
app.get("/", (req, res) => {
  return res.json({ "message": "Hello world!" })
});


// TODO: Task 1

import { retrieveUsers, retrieveUserById, addFriend } from "./data/users-dao.js";


app.get("/users", (req, res) => {
  const users = retrieveUsers();
  return res.json(users);
})


app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = retrieveUserById(id);
  if (!user) { // same as user === undefined
    return res.sendStatus(404);
  }
  return res.json(user);
});


app.post("/users/:id/friends", (req, res) => {
  const id_1 = req.params.id;
  const id_2 = req.body.id;
  const friendsList = addFriend(id_1, id_2);
  if (friendsList) {
    return res.json(friendsList);
  } else {
    return res.sendStatus(404);
  }
})


const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
