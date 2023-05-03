import mongoose from "mongoose";

export async function connectDB() {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(process.env.DB_URI);
  console.log("Connected db");
}
