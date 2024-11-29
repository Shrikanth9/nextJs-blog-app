'use client'

import { useFormStatus } from "react-dom";

const PostButton = () => {
    const formStatus = useFormStatus();
    return ( 
        <>
            {!formStatus.pending ? (<button type="submit" className="btn btn-primary ml-2">Post</button>) : (
                <button
                    className="btn btn-disabled ml-2"
                >
                    Posting...
                </button>
            )}
        </>
     );
}
 
export default PostButton;