import { models, model, Schema } from "mongoose";

const BlogSchema = new Schema({
    owner: String,
    title: String,
    content: String,
    image: String,
}, { timestamps: true });

export const Blog = models.Blog || model("Blog", BlogSchema);