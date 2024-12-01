'use client'

import bookmarkProperty from "@/app/actions/bookmarkProperty";
import checkBookmarkStatus from "@/app/actions/checkBookmarkStatus";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { FaBookmark } from "react-icons/fa";
import { toast } from "react-toastify";

const BookmarkButton = ( { property}: { property: any }) => {
    useEffect(() => {
        checkBookmarkStatus(property._id).then((res: any) => {
            if(res.error) {
                toast.error(res.error);
            }
            else {
                setIsBookmarked(res.isBookmarked);
            }
        })
    }, [])

    const { data: session } = useSession();
    const [ isBookmarked, setIsBookmarked ] = useState(false);

    if(!session || !session.user) {
        return null;
    }

    const userId = (session.user as any).id;


    const handleClick = async () => {
        if(!userId) {
            toast.error('You must be logged in to bookmark a property');
            return;
        }
        else {
            bookmarkProperty(property._id).then((res: any) => {
                if(res.error) {
                    toast.error(res.error);
                    return;
                }
                setIsBookmarked(res.isBookmarked);
                toast.success(res.message);
            })
        }
    }

    return ( 
        <>
            {!isBookmarked ?
                (<button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center"
                    onClick={() => handleClick()}
                >
                    <FaBookmark className="mr-2" /> Bookmark Property
                </button>) : (
                    <button
                        className="bg-red-500 hover:bg-red-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center"
                        onClick={() => handleClick()}
                    >
                        <FaBookmark className="mr-2" /> Remove Bookmark
                    </button>)
            }
        </>
     );
}
 
export default BookmarkButton;