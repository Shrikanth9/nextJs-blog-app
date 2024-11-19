'use client'

import markMessage from "@/app/actions/markMessage";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const MessageCard = ( { message }: { message: any} ) => {
    const [isRead, setIsRead] = useState(message.read);
    let received: string = '';
    useEffect(() => {
        received = new Date(message.createdAt).toLocaleString();
    }, [])
    const handleReadClick = async() => {
        const isRead = await markMessage(message._id);
        setIsRead(isRead);
        toast.success(!isRead ? "Message marked as new" : "Message marked as read");
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

                <li>
                   <strong> Received:</strong>{' '}
                    { received }
                </li>
            </ul>
            <button onClick={handleReadClick} className="mt-4 mr-3 bg-blue-500 text-white py-1 px-3 rounded-md"> {isRead ? "Mark as new" : "Mark as read"} </button>
            <button className="mt-4 bg-red-500 text-white py-1 px-3 rounded-md"> Delete </button>
        </div>
    );
}
 
export default MessageCard
