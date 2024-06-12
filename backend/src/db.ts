import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  try {
    const dbUri =
      process.env.MONGO_URI || "mongodb://localhost:27017/yourdbname";
    await mongoose.connect(dbUri);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    process.exit(1);
  }
};

export default connectDB;
