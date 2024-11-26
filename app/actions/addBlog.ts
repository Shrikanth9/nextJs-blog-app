'use server'

import cloudinary from "@/config/cloudinary";
import ConnectDB from "@/config/database"
import { Blog } from "@/models/Blog";
import { convertImageToBase64URL } from "@/utils/Utils";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const addBlog = async (formData: FormData) => {
    await ConnectDB();

    let image = formData.get("image");
    
    const imageBase64 = await convertImageToBase64URL(image as File).then((url) => url);
    
    const uploadedImage = await cloudinary.uploader.upload(`data:image/jpeg;base64,${imageBase64}`, { folder: 'blog-app'})
    .catch((error) => {
        console.log(error);
        throw new Error(error);
    });

    const imageUrl = uploadedImage.secure_url


    const newBlog = {
        title: formData.get("title"),
        content: formData.get("content"),
        image: imageUrl
    }

    const blog = new Blog(newBlog);
    await blog.save();

    revalidatePath("/", "layout");

    redirect(`/blogs/${blog._id}`);
}

export default addBlog