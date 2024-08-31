import jwt from 'jsonwebtoken';
import User from '../../models/UserModel.js';
import bcrypt from 'bcrypt';

const SignIn = async(req, res) => {
  try {
    const {username, password} = req.body;
    
    if(!username || !password) {
      return res.status(400).json({ message: "Username and password are required" });
    }

    const user = await User.findOne({ username });

    if(!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password); 
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isAdmin = username === "admin" ? "true" : "false";

    const accessToken = jwt.sign(
      { userId: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    return res.status(200).json({
      accessToken,
      isAdmin
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export default SignIn;

