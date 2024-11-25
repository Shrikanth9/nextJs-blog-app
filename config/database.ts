import mongoose from "mongoose";

let connected = false;

const ConnectDB = async() => {
    try {
        if(!connected) {
            await mongoose.connect(process.env.MONGODB_URI as string);
            console.log("Connected to MongoDB");
            connected = true;
        }
        else {
            console.log("Already connected to MongoDB");
        }
    } catch (error) {
        console.log(error);
    }
}

export default ConnectDB;