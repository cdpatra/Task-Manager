import User from "../models/User.js";
import { generateJWTToken } from "../services/auth.js";

export const handleUserRegistration = async (req,res) => {
   const { name, email, password } = req.body;

   try {
      const userExists = await User.findOne({ email });
      if (userExists) {
         return res.status(400).json({ message: "User already exists" });
      }

      const newUser = await User.create({ name, email, password });
      return res.status(200).json({ message: "User Registered Successfully" });
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
};

export const handleUserLogin = async (req,res) => {
   const { email, password } = req.body;
   try {
      const user = await User.findOne({ email });
      if (user && (await user.matchPassword(password))) {
         return res.status(200).json({
            id: user._id,
            email: user.email,
            name: user.name,
            token: generateJWTToken(user),
         });
      } else {
         return res.status(401).json({ message: "Invalid Email or Password" });
      }
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
};
