'use client'

import { FormateTimeStamp } from "@/utils/Utils";
import { useSession } from "next-auth/react";
import Image from "next/image";
import deleteComment from "@/app/actions/deleteComment";

const CommentCard = ({ comment }: { comment?: any}) => {

    const handleDeleteComment = async () => {
        if(window.confirm("Are you sure you want to delete this comment?")){
            await deleteComment(comment._id, comment.blogId).catch((err) => {throw err});
        }
    }
    const {data: session} = useSession();
    const { userId: { username: author, image: profileImage, email }, comment: commentText, createdAt } = comment;
    const time = new Date(createdAt);
    const timeString = FormateTimeStamp(time);
    return ( 
        <>
            <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <Image
                            alt="Tailwind CSS chat bubble component"
                            src={profileImage} 
                            width={20}
                            height={20}
                            />
                    </div>
                </div>
                <div className="chat-header">
                    {author}{" "}
                    <time className="text-xs opacity-50">{timeString}</time>
                </div>
                <div className="chat-bubble">{commentText}</div>
                {session?.user?.email === email && <button onClick={handleDeleteComment}className="chat-footer opacity-50 underline">Delete</button>}
            </div>
        </>
     );
}
 
export default CommentCard;