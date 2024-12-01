import mongoose from "mongoose";


let connected = false;

const connectDB = async () => {
    mongoose.set("strictQuery", true);

    if(connected) {
        console.log("Already connected to mongodb");
        return;    
    }

    try {
      await mongoose.connect(process.env.MONGODB_URI as string);
      connected = true;
    }
    catch(error) {

    }
}


export default connectDB