import mongoose from "mongoose";
import envData from "../../config";

const MONGO_URI = envData.mongoURI;

try {
  mongoose
    .connect(MONGO_URI)
    .then(() => console.log("Succesfuly connect to database"));
} catch (error) {
  console.log(error);
}
