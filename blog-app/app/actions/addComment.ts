'use server'

import ConnectDB from "@/config/database";
import { getSessionUser } from "@/utils/getSessionUser";
import { Comment } from "@/models/Comment";
import { revalidatePath } from "next/cache";
import { Blog } from "@/models/Blog";

const addComment = async (blogId: string, userId: string, formData: FormData) => {
    const session = await getSessionUser();

    if(!session?.user) {
        throw new Error("You must be logged in ");
    }

    await ConnectDB();

    await Comment.create({
        blogId,
        userId,
        comment: formData.get("comment")
    });

    await Blog.updateOne({ _id: blogId }, { $inc: { totalComments: 1 } });
    revalidatePath(`/blogs/${blogId}`, "page");   
}

export default addComment