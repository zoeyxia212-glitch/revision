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


const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
