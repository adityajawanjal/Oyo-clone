import mongoose from "mongoose";

const URI = "mongodb+srv://aditya:aditya54321@project.pko3x5w.mongodb.net/OYO";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("DB Connected...");
};

export default connectDB;
