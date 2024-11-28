'use server'

import ConnectDB from "@/config/database";
import { Like } from "@/models/Like";

const likeBlog = async (blogId: string, userId: string, isLiked: boolean) => {
    await ConnectDB();

    if(isLiked) {
        await Like.deleteOne({ blogId, userId });
    }
    
    else {
        const newLike = new Like({ blogId, userId });
        await newLike.save();
    }

    return { isLiked: !isLiked }

}

export default likeBlog;