import { IoChatboxOutline, IoHeartOutline, IoHeart, IoChatbox } from "react-icons/io5";

const BlogThread = () => {
    return ( 
        <div className="text-center text-3xl mt-5">
            <div className="inline-block mx-8">
                <IoHeartOutline /> 0
            </div>
            <div className="inline-block mx-8">
                <IoChatboxOutline className="mx-8" fill=""/> {" "} 0
            </div>
        </div>
     );
}
 
export default BlogThread;