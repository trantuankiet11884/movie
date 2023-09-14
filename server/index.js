import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import http from "http";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import path from "path";
import routes from "./src/routes/index.js";

const __dirname = path.resolve();

const app = express();

app.use(express.static(path.join(__dirname, "client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("api/v1", routes);

const port = process.env.PORT || 8080;

const server = http.createServer(app);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB connect");
    server.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log({ err });
    process.exit(1);
  });
