import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/');
    console.log("✅ MongoDB connected successfully");
  } catch (e) {
    console.error("❌ MongoDB connection problem:", e.message);
    process.exit(1); // Exit the process with failure
  }
};
