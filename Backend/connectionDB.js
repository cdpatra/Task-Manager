import mongoose from "mongoose"

export const connectMongoDB = async (url)=>{
  return mongoose.connect(url);
}