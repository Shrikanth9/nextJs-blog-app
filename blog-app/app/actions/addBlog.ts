'use server'

import cloudinary from "@/config/cloudinary";
import ConnectDB from "@/config/database"
import { Blog } from "@/models/Blog";
import { User } from "@/models/User";
import { getSessionUser } from "@/utils/getSessionUser";
import { convertImageToBase64URL, convertToPlainObj } from "@/utils/Utils";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const addBlog = async (formData: FormData) => {
    const session = await getSessionUser();

    if(!session?.user) {
        throw new Error("You must be logged in ");
    }
    await ConnectDB();

    const owner: string = await User.findOne({ email: session?.user?.email }).lean().then((user) => convertToPlainObj(user)._id);

    let image = formData.get("image");
    
    const imageBase64 = await convertImageToBase64URL(image as File).then((url) => url).catch((error) => {
        console.log(error);
        throw new Error(error);
    });
    
    const uploadedImage = await cloudinary.uploader.upload(`data:image/jpeg;base64,${imageBase64}`, { folder: 'blog-app'})
    .catch((error) => {
        console.log(error);
        throw new Error(error);
    });

    const imageUrl = uploadedImage.secure_url


    const newBlog = {
        title: formData.get("title"),
        owner,
        content: formData.get("content"),
        image: imageUrl,
    }

    const blog = new Blog(newBlog);
    await blog.save();

    revalidatePath("/", "layout");

    redirect(`/blogs/${blog._id}`);
}

export default addBlog