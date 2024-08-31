import jwt from 'jsonwebtoken';
import customerModel from "../../models/CustomerModel.js";

const otpVerification = async(req, res) => {
  try {
      const {phoneNumber, otp} = req.body;
      if(!otp) {
          throw new Error("Please provide OTP");
      }

      if(otp !== "1234") {
          return res.status(400).json({ message: 'Invalid OTP' });
      }

      let customer = await customerModel.findOne({phoneNumber});

      let firstTimeSignin = false;
      if(!customer) {
          customer = new customerModel({phoneNumber});
          await customer.save();
          firstTimeSignin = true;
      }

      const accessToken = jwt.sign(
          { customerId: customer._id, phoneNumber: customer.phoneNumber },
          process.env.JWT_SECRET,
          { expiresIn: '24h' }
        );

        return res.status(200).json({
          accessToken,
          firstTimeSignin
        });

  } catch (error) {
      return res.status(500).json({ message: error.message });
  }
}

export default otpVerification;

