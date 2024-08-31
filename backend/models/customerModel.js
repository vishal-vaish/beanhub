import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  emailaddress: String,
  phoneNumber: {
    type: String,
    unique: true,
    required: true,
  },
  gender: String,
  birthday: String,
}, { timestamps: true});

const customerModel = mongoose.model("customer", customerSchema);

export default customerModel;