//https://mongoosejs.com/docs/typescript.html
import mongoose from "mongoose";

type Params = {
  option: Number;
  unitInput: String;
  unitOutput: String;
  factor: Number;
};

export interface UnitConverter {
  input: number;
  output: number;
  params: Params;
}

const unitConverterSchema = new mongoose.Schema<UnitConverter>({
  input: {
    type: Number,
    required: true,
  },
  output: {
    type: Number,
    required: true,
  },
  params: {
    type: {
      option: Number,
      unitInput: String,
      unitOutput: String,
      factor: Number,
    },
    required: true,
  },
});

const unitConverterModel = mongoose.model<UnitConverter>(
  "UnitConverter",
  unitConverterSchema
);

export default unitConverterModel;
