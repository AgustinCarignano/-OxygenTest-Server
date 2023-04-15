import unitConverterModel, {
  UnitConverter,
} from "../mongoDB/models/unitConverter_model";

class UnitConverterMongo {
  async getAll() {
    try {
      const data = await unitConverterModel.find();
      return data;
    } catch (error) {
      return error;
    }
  }
  async saveOne(data: UnitConverter) {
    try {
      const newData = await unitConverterModel.create(data);
      return newData;
    } catch (error) {
      return error;
    }
  }
  async deleteOne(id: string) {
    try {
      await unitConverterModel.findByIdAndDelete(id);
      return { message: "Convertion delete succesfuly" };
    } catch (error) {
      return error;
    }
  }
}

export default new UnitConverterMongo();
