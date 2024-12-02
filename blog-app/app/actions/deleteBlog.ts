'use server'

import ConnectDB from "@/config/database";
import { Blog } from "@/models/Blog";
import { Like } from "@/models/Like";
import { Comment } from "@/models/Comment";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";

const deleteBlog = async (blogId: string) => {
    const session = await getSessionUser();

    if(!session?.user) {
        throw new Error("You must be logged in ");
    }
    await ConnectDB();

    await Blog.deleteOne({ _id: blogId });
    await Like.deleteMany({ blogId });
    await Comment.deleteMany({ blogId });

    revalidatePath("/", "layout");

}

export default deleteBlog