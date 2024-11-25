import { FaCommentAlt, FaHeart } from "react-icons/fa";

const BlogThread = () => {
    return ( 
        <div className="text-center text-3xl mt-5">
            <div className="inline-block mx-8">
                <FaHeart className="text-red-600"/> 25
            </div>
            <div className="inline-block mx-8">
                <FaCommentAlt className="mx-8"/> {" "} 10
            </div>
        </div>
     );
}
 
export default BlogThread;