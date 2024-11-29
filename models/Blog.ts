import { models, model, Schema } from "mongoose";

const BlogSchema = new Schema({
    title: String,
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    content: String,
    image: {
        type: String,
        required: true
    },
    totalLikes: {
        type: Number,
        default: 0,
        required: true
    },
    totalComments: {
        type: Number,
        default: 0,
        required: true
    }
}, { timestamps: true });

export const Blog = models?.Blog || model("Blog", BlogSchema);