import express from "express";
import cors from "cors";
import envData from "./config";
import "./persistences/mongoDB/config";
import unitRouter from "./routes/unitsConverter_router";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//Routes
app.use("/units", unitRouter);

app.get("/", (_req, res) => {
  res.json("Hello, world. Now I'm listening the changes.");
});

const PORT = envData.port;

app.listen(PORT, () => {
  console.log(`Listen to PORT ${PORT}`);
});
