import { Schema, models, model } from "mongoose";

const CommentSchema = new Schema({
    blogId: {
        type: Schema.Types.ObjectId,
        ref: "Blog",
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    comment: String
}, { timestamps: true });

export const Comment = models?.Comment || model("Comment", CommentSchema);