'use server';

import connectDB from "@/config/database";
import Message from "@/models/Message";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";

const markMessage = async (messageId: string) => {
    await connectDB();
    
    const sessionUser = await getSessionUser();

    if(!sessionUser || !sessionUser.id) {
        throw new Error('You must be logged in to add a property');
    }

    const message = await Message.findById(messageId);

    if(!message) {
        throw new Error('Message not found');
    }

    if(message.recipient.toString() !== sessionUser.id) {
        throw new Error('You do not have permission to mark this message as read');
    }

    message.read = !message.read;
    await message.save();

    revalidatePath('/messages', 'page');

    return message.read;
    
}

export default markMessage