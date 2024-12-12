import { verifyJWTToken } from "../services/auth.js";
import User from "../models/User.js";

export const auth = async (req, res, next) => {
   if (req.headers.authorization?.startsWith(`Bearer `)) {
      try {
         const token = req.headers.authorization.split(" ")[1];
         const result = verifyJWTToken(token);
         const user = await User.findById(result._id).select("-password");
         req.user = user;
         req.token=token;
         next();
      } catch (error) {
         res.status(401).json({ message: "unauthorized access" });
      }
   } else {
      res.status(401).json({ message: "unauthorized access" });
   }
};
