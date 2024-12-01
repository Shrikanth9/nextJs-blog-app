'use server'

import ConnectDB from "@/config/database";
import { Blog } from "@/models/Blog";
import { Comment } from "@/models/Comment";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";

const deleteComment = async (commentId: string, blogId: string) => {
    const session = await getSessionUser();

    if(!session?.user) {
        throw new Error("You must be logged in ");
    }
    await ConnectDB();

    await Comment.deleteOne({ _id: commentId });
    await Blog.updateOne({ _id: blogId }, { $inc: { totalComments: -1 } });

    revalidatePath("/", "layout");

}

export default deleteComment