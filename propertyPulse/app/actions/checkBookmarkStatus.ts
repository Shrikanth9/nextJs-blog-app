'use server'

import connectDB from "@/config/database";
import User from "@/models/User";
import { getSessionUser } from "@/utils/getSessionUser";

const checkBookmarkStatus = async (propertyId: string) => {
    await connectDB();

    const sessionUser = await getSessionUser();

    if(!sessionUser || !sessionUser.id) {
        throw new Error('You must be logged in to bookmark a property');
    }
    
    const user = await User.findById(sessionUser.id);

    let isBookmarked = user?.bookmarks.includes(propertyId);

    return {isBookmarked};
}

export default checkBookmarkStatus