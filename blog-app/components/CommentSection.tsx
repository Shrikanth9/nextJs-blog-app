import { IoChatboxOutline } from "react-icons/io5";
import addComment from "@/app/actions/addComment";
import PostButton from "./PostButton";
import ConnectDB from "@/config/database";
import { convertToPlainObj } from "@/utils/Utils";
import {Comment} from "@/models/Comment";
import CommentCard from "./CommentCard";

const CommentSection = async({ blogId, userId, totalComments }: { blogId: string, userId: string, totalComments: number }) => {
    await ConnectDB();
    const comments: IComment[] = await Comment.find({ blogId })
        .sort({ createdAt: -1 })
        .populate("userId")
        .lean()
        .then((comments) => comments.map((comment) => convertToPlainObj(comment)));
    const addCommentWithParams: any = addComment.bind(null, blogId, userId);
    return ( 
        <div className="inline-block ml-10">
        <div className="drawer drawer-end">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer" className="drawer-button cursor-pointer">
                    <IoChatboxOutline className="text-3xl"/> {" "} {totalComments}
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="menu p-4 w-80 bg-base-100 mb-auto gap-5 flex flex-col min-h-screen z-100">
                    <label aria-label="close drawer" htmlFor="my-drawer" className="btn btn-sm btn-circle absolute right-2 top-2">X</label>
                    <h2 className="text-2xl p-2">Comments ({totalComments})</h2>
                    <div className="flex flex-col gap-5 h-[calc(100vh-10rem)] overflow-y-scroll">
                        { comments.map((comment) => (
                            <CommentCard key={comment._id} comment={comment}/>
                        ))}
                    </div>
                    <div className="fixed chat chat-start pt-5 bottom-2 left-0 bg-base-100">
                        <div className="chat-header">
                          <form action={addCommentWithParams} className="flex">
                            <input type="text" className="input w-full max-w-xs" name="comment" placeholder="Add a comment" required/>
                            <PostButton />
                          </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default CommentSection;