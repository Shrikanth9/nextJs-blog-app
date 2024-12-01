'use client'

import deleteMessage from "@/app/actions/deleteMessage";
import markMessage from "@/app/actions/markMessage";
import { useGlobalContext } from "@/contexts/GlobalContext";
import { useState } from "react";
import { toast } from "react-toastify";

const MessageCard = ( { message }: { message: any} ) => {
    const [isRead, setIsRead] = useState(message.read);
    const [isDeleted, setIsDeleted] = useState(false);
    const { setUnreadCount }: any = useGlobalContext();
    let received = new Date(message.createdAt).toLocaleString();
    const handleReadClick = async() => {
        const isRead = await markMessage(message._id);
        setIsRead(isRead);
        setUnreadCount((prevCount: number) => isRead ? prevCount - 1 : prevCount + 1);
        toast.success(!isRead ? "Message marked as new" : "Message marked as read");
    }

    const handleDeleteClick = async() => {
        const isDeleted = await deleteMessage(message._id);
        toast.success("Message is deleted");
        setIsDeleted(isDeleted);
    }

    if(isDeleted) {
        return <p> Message is deleted </p>
    }
    return (  
        <div className="relative bg-white p-4 rounded-md shadow-md border border-gray-200">
            { !isRead && 
                <div className="absolute top-2 right-2 bg-yellow-500 text-white py-1 px-3 rounded-md"> New </div>
            }
            <h2 className="text-xl mb-4">
                <span className="text-xl font-bold mb-4"> Property enquiry:</span>{' '}
                { message.property.name }
            </h2>
            <p className="text-gray-600"> {message.body} </p>
            <ul className="mt-4">

                <li>
                   <strong> Reply Email:</strong>{' '}
                   <a href={`mailto:${message.email}`} className="text-blue-500">{message.email}</a> 
                </li>

                <li>
                   <strong> Reply Phone:</strong>{' '}
                   <a href={`tel:${message.phone}`} className="text-blue-500">{message.phone}</a> 
                </li>

                <li suppressHydrationWarning>
                   <strong> Received:</strong>{' '}
                    { received }
                </li>
            </ul>
            <button onClick={handleReadClick} className="mt-4 mr-3 bg-blue-500 text-white py-1 px-3 rounded-md"> {isRead ? "Mark as new" : "Mark as read"} </button>
            <button onClick={handleDeleteClick} className="mt-4 bg-red-500 text-white py-1 px-3 rounded-md"> Delete </button>
        </div>
    );
}
 
export default MessageCard
