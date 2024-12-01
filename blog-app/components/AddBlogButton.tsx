'use client'

import { useFormStatus } from "react-dom";

const AddBlogButton = () => {
    const formStatus = useFormStatus();
    return ( 
        <>
            {!formStatus.pending ? (<button
                className="btn btn-outline btn-success font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
            >
                Add Blog
            </button>) : (
                <button
                    className="btn btn-outline btn-disabled font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                >
                    Please wait....
                </button>
            )}
        </>
     );
}
 
export default AddBlogButton;