import { IoChatboxOutline } from "react-icons/io5";
import LikeButton from "./LikeButton";
import { getSessionUser } from "@/utils/getSessionUser";
import ConnectDB from "@/config/database";
import { User } from "@/models/User";
import { convertToPlainObj } from "@/utils/Utils";
import { Like } from "@/models/Like";

const BlogThread = async({ blogId }: { blogId: string}) => {
    const session = await getSessionUser();

    if(!session?.user) {
        throw new Error("You must be logged in ");
    }
    await ConnectDB();
    const userId = await User.findOne({ email: session?.user?.email }).lean().then((user) => convertToPlainObj(user)._id);
    const liked = await Like.find({ blogId, userId }).countDocuments();
    const totalLikes = await Like.find({ blogId }).countDocuments(); 
    return ( 
        <div className="text-center text-3xl mt-5">
            <LikeButton 
                blogId={blogId}
                userId={userId}
                liked={liked > 0}
                totalLikes={totalLikes}
            />
            <div className="inline-block mx-8">
                <IoChatboxOutline className="mx-8" fill=""/> {" "} 0
            </div>
        </div>
     );
}
 
export default BlogThread;