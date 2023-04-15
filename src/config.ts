import dotenv from "dotenv";

dotenv.config();

interface EnvData {
  port: string;
  mongoURI: string;
}

const envData: EnvData = {
  port: process.env.PORT || "3000",
  mongoURI: process.env.MONGO_URI || "",
};

export default envData;
