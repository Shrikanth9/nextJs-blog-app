'use server'

import ConnectDB from "@/config/database";
import { Blog } from "@/models/Blog";
import { Like } from "@/models/Like";

const likeBlog = async (blogId: string, userId: string, isLiked: boolean) => {
    await ConnectDB();

    if(isLiked) {
        await Like.deleteOne({ blogId, userId });
        await Blog.updateOne({ _id: blogId }, { $inc: { totalLikes: -1 } });   
    }
    
    else {
        const newLike = new Like({ blogId, userId });
        await newLike.save();
        await Blog.updateOne({ _id: blogId }, { $inc: { totalLikes: 1 } });   
    }

    return { isLiked: !isLiked }

}

export default likeBlog;