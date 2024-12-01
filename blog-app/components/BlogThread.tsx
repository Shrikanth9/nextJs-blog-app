import LikeButton from "./LikeButton";
import { getSessionUser } from "@/utils/getSessionUser";
import ConnectDB from "@/config/database";
import { User } from "@/models/User";
import { convertToPlainObj } from "@/utils/Utils";
import { Like } from "@/models/Like";
import CommentSection from "./CommentSection";

const BlogThread = async({ blogId, totalLikes, totalComments }: { blogId: string, totalLikes: number, totalComments: number}) => {
    const session = await getSessionUser();

    if(!session?.user) {
        throw new Error("You must be logged in ");
    }
    await ConnectDB();
    const userId = await User.findOne({ email: session?.user?.email }).lean().then((user) => convertToPlainObj(user)._id);
    const liked = await Like.findOne({ blogId, userId }).countDocuments().lean().then((count) => count > 0);            
    return ( 
        <div className="flex justify-center items-center gap-5 text-3xl mt-5">
            <LikeButton 
                blogId={blogId}
                userId={userId}
                liked={liked}
                totalLikes={totalLikes}
            />
           <CommentSection 
                blogId={blogId} 
                userId={userId} 
                totalComments={totalComments}
            />
        </div>
     );
}
 
export default BlogThread;