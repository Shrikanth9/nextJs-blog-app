import { Schema, models, model } from "mongoose";

const LikeSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    blogId: {
        type: Schema.Types.ObjectId,
        ref: "Blog",
        required: true
    }
}, { timestamps: true });

export const Like = models?.Like || model("Like", LikeSchema);