'use client'

import likeBlog from "@/app/actions/likeBlog";
import { useState } from "react";
import { IoHeart, IoHeartOutline } from "react-icons/io5";

const LikeButton = ({ blogId, userId, liked, totalLikes }: { blogId: string, userId: string, liked: boolean, totalLikes: number }) => {
    const [isLiked, setIsLiked] = useState<boolean>(liked);
    const [likes, setLikes] = useState(totalLikes);

    const handleLike = async() => {
        await likeBlog(blogId, userId, isLiked);
        setLikes(isLiked ? likes - 1 : likes + 1);
        setIsLiked(!isLiked);
    }

    return ( 
            <button onClick={handleLike} className="inline-block">
                {isLiked ? <IoHeart fill="red"/> : <IoHeartOutline />} {" "} {likes}
            </button>
     );
}
 
export default LikeButton;