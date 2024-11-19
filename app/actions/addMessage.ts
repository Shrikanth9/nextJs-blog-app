'use server';

import connectDB from "@/config/database";
import { getSessionUser } from "@/utils/getSessionUser";
import Message from "@/models/Message";

const addMessage = async (prev: any, formData: any) => {
    await connectDB();
    
    const sessionUser = await getSessionUser();

    if(!sessionUser || !sessionUser.id) {
        throw new Error('You must be logged in to add a property');
    }

    const recipient = formData.get('recipient');

    if(sessionUser.id === recipient) {
        throw new Error('You cannot send a message to yourself');
    }

    const newMessage = new Message({
        sender: sessionUser.id,
        recipient,
        body: formData.get('body'),
        property: formData.get('property'),
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
    });

    await newMessage.save();

    return { submitted: true };
    
}

export default addMessage