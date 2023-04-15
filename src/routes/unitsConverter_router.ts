import { Router } from "express";
import unitConverterMongo from "../persistences/DAOs/unitConverter_mongo";

const router = Router();

router.get("/", async (_req, res) => {
  const convertions = await unitConverterMongo.getAll();
  if (convertions instanceof Error) {
    return res
      .status(500)
      .json({ Message: "there has been an error", error: convertions.message });
  }
  res.status(200).json({ Message: "History recovery succesfuly", convertions });
});

router.post("/", async (req, res) => {
  const convertion = req.body;
  const response = await unitConverterMongo.saveOne(convertion);
  if (response instanceof Error) {
    return res.status(500).json({
      Message: "there has been an error",
      error: response.message,
    });
  }
  res
    .status(200)
    .json({ Message: "Convertion saved succesfuly", convertion: response });
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const response = await unitConverterMongo.deleteOne(id);
  if (response instanceof Error) {
    return res.status(500).json({
      Message: "there has been an error",
      error: response.message,
    });
  }
  res.status(200).json({ Message: "Convertion delete succesfuly" });
});

export default router;
