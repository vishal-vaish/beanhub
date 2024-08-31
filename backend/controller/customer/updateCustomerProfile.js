import customerModel from "../../models/CustomerModel.js";

const updateCusomerProfile = async(req, res) => {
    try {
        const {firstname, lastname, email, gender, birthday, phoneNumber } = req.body;

        if(!firstname || !lastname || !birthday || !phoneNumber) {
            return res.status(400).json({ message: "Fields cannot be empty" });
        }

        let customer = await customerModel.findOne({phoneNumber});

        if(!customer) {
            return res.status(404).json({ message: "Customer not found" });
        }

        customer.firstname = firstname;
        customer.lastname = lastname;
        customer.emailaddress = email;
        customer.gender = gender;
        customer.birthday = birthday;

        await customer.save();

        return res.status(200).json({
            message: "Profile updated successfully",
        })

    } catch (error) {
        
    }

}

export default updateCusomerProfile;