import jwt from "jsonwebtoken";

const SECRET_KEY = "$Secret@Key@123$";

export const generateJWTToken = ({ _id, name, email }) => {
   return jwt.sign({ _id, name, email }, SECRET_KEY, { expiresIn: "1d" });
};

export const verifyJWTToken = (token) => {
   return jwt.verify(token, SECRET_KEY);
};
