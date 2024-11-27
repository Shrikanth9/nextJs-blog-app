import { model, models, Schema } from "mongoose";

const UserSchema = new Schema({
    provider: String,
    username: {
        type: String,
        required:[true, "Username is required"]
    },
    email: {
        type: String,
        required:[true, "Email is required"]
    },
    image: {
        type: String
    }
}, { timestamps: true });

export const User = models.User || model("User", UserSchema);