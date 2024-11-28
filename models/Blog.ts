import { models, model, Schema } from "mongoose";

const BlogSchema = new Schema({
    title: String,
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    content: String,
    image: String,
}, { timestamps: true });

export const Blog = models?.Blog || model("Blog", BlogSchema);