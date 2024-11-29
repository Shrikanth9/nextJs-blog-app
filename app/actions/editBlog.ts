'use server'

import ConnectDB from "@/config/database";
import { Blog } from "@/models/Blog";
import { User } from "@/models/User";
import { getSessionUser } from "@/utils/getSessionUser";
import { convertToPlainObj } from "@/utils/Utils";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const editBlog = async (blogId: string, formData: FormData) => {
    const session = await getSessionUser();

    if(!session?.user) {
        throw new Error("You must be logged in ");
    }
    await ConnectDB();

    const owner = await User.findOne({ email: session?.user?.email }).lean().then((user) => convertToPlainObj(user)._id);
    const blogOwner = await Blog.findOne({ _id: blogId }).lean().then((blog) => convertToPlainObj(blog).owner);

    if(blogOwner !== owner) {
        throw new Error("You can't edit this blog");
    }

    await Blog.updateOne({ _id: blogId }, {
        $set: {
            title: formData.get("title"),
            content: formData.get("content")
        }
    });

    revalidatePath("/", "layout");
    redirect(`/blogs/${blogId}`);
}

export default editBlog