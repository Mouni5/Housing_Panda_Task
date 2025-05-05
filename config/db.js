/*import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://mounikanelluri28:Mounika@cluster0.siej5em.mongodb.net/?')(Housing-Panda').then(()=>console.log("DB connected"));
} */
    import mongoose from 'mongoose';

    const connectDB = async () => {
      try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected');
      } catch (error) {
        console.error(error);
        process.exit(1);
      }
    };
    
    export default connectDB;
    
    