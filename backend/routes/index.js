import express from "express";
const router = express.Router();

import customerOTPVerificationController from "../controller/customer/otpVerification.js"
import updateCusomerProfileController from "../controller/customer/updateCustomerProfile.js";
import authToken from "../middleware/authToken.js";
import createCafeController from "../controller/cafe/createCafe.js";
import getAllCafeController from "../controller/cafe/getAllCafe.js";


//customer
router.post("/otp-verification", customerOTPVerificationController);
router.patch("/updateProfile",authToken, updateCusomerProfileController);
router.post("/createCafe",authToken, createCafeController);
router.post("/getAllCafe",authToken, getAllCafeController);


//Cafe
router.get("/createCafe",)


export default router;